import Link from "next/link";

export default function NotFound() {
  return(
    <div>
        <h1>Hmmm, como você chegou aqui?</h1>
        <p>Essa página não existe.</p>

        <Link href="/">
            Voltar para a página inicial
        </Link>
    </div>
  ) 
}