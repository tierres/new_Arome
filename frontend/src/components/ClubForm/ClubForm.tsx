import classes from './ClubForm.module.css'
import { SectionContainer } from '../shared/SectionContainer/SectionContainer';
import { FormState, UseFormRegister, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { HTMLInputTypeAttribute} from 'react';

const clubMemberSchema = z.object({
  name: z.string().min(3, "*O nome deve ter pelo menos 3 letras")
    .regex(/^[A-Za-z\s]+$/i, "*Apenas letras são permitidas"),
  email: z.string().email("*O e-mail deve ser válido"),
  phone: z.string(),
  address: z.string().min(3, "*Um endereço deve ser indicado"),
  password: z.string().min(8, "*Crie uma senha de no mínimo 8 caracteres, sendo: 1 letra maiúscula, 1 letra minúscula, 1 número e 1 caractere especial")
    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/, "*A senha deve conter no mínimo 8 caracteres, sendo: 1 letra maiúscula, 1 letra minúscula, 1 número e 1 caractere especial")
})

type ClubMembersSchema = z.infer<typeof clubMemberSchema>

interface ICustomDivForm {
  children: string
  type: keyof ClubMembersSchema
  formState: FormState<ClubMembersSchema>
  register: UseFormRegister<ClubMembersSchema>
  HTMLtype?: HTMLInputTypeAttribute
}

const CustomDivForm = (params: ICustomDivForm) => {
      const error = params.formState.errors[params.type]

      return (
        <div className={classes.formDiv}>
          <label className={classes.formLabel} htmlFor={params.type}>{params.children}</label>
          <input type={params.HTMLtype} className={classes.formInput + ' ' + (error ? classes.formInputErrors : "")} {...params.register(params.type)} />

          {error && (
            <div>
              <p className={classes.errorsMessage}>{error.message}</p>
            </div>  
          )}

        </div>
      )
    }


export const ClubForm = () => {
    const { register, handleSubmit , formState } = useForm<ClubMembersSchema>({
      resolver: zodResolver(clubMemberSchema),
    })

    console.log(formState.errors.name)

    function handleClubMember(data: ClubMembersSchema) {
      console.log(data)
    }

  return(
    <div className={classes.clubFormContainer}>
      <SectionContainer className={classes.sectionContainer}>
        <div>
          <h1 className={classes.tittle}>
            Faça parte
          </h1>
        </div>
        <div>
          <form className={classes.form} onSubmit={handleSubmit(handleClubMember)}>
            <CustomDivForm register={register} formState={formState} type='name'>*Nome: </CustomDivForm>
            <CustomDivForm register={register} formState={formState} type='email'>*E-mail: </CustomDivForm>
            <CustomDivForm register={register} formState={formState} type='phone'>Telefone: </CustomDivForm>
            <CustomDivForm register={register} formState={formState} type='address'>*Endereço: </CustomDivForm>
            <CustomDivForm register={register} formState={formState} type='password' HTMLtype='password'>*Senha: </CustomDivForm>
            <br />
            <br />
            <p>Os campos marcados com um <strong>*asterisco</strong> são obrigatórios</p>
            <br />
            <br />
            <button className={classes.submitButton} type='submit'>
              Comece
            </button>
          </form>
        </div>
      </SectionContainer>
    </div>
  );
};

// Macbook - 16/05/24 17h14