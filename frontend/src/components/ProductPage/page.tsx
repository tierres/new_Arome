import { Header } from "../../components/shared/Header/Header.tsx";
import { Navigation } from "../../components/shared/Navigation/Navigation.tsx"
import { ProductCard } from "../../components/ProductCard/ProductCard.tsx";
import { Prepare } from "../../components/Prepare/Prepare.tsx";
import { IsntThis } from "../../components/IsntThis/IsntThis.tsx";
import { Footer } from "../../components/shared/Footer/Footer.tsx"

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { IGenericProduct } from '@/types/generic_product'

import classes from './ProductPage.module.css'

// async function getProduct(slug: string, productType: string){
//   let response = await fetch(`https://arome.onrender.com/api/products/${productType}/${slug}`, {method: "get"}) 
//   console.log(response)
//   if(response.ok) {
//     let data = await response.json() 
//     return data
//   }
//   return null
// }

async function getProduct(slug: string, productType: string) {
  const baseUrl = import.meta.env.VITE_API_URL; // Captura a URL do ambiente
  if (!baseUrl) {
    throw new Error("A variável de ambiente VITE_API_URL não está configurada!");
  }

  // Requisição à API ou ao arquivo estático
  const response = await fetch(
    baseUrl.includes("products.json") // Verifica se está acessando o arquivo local
      ? baseUrl
      : `${baseUrl}/${productType}/${slug}`, // Caso seja a API no Render
    { method: "GET" }
  );

  if (response.ok) {
    const data = await response.json();

    // Se for local (products.json), filtra no frontend
    if (baseUrl.includes("products.json")) {
      return data.find(
        (p: any) => p.slug === slug && p.type === productType
      ) || null;
    }

    // Se for o backend, o dado já vem filtrado
    return data;
  }

  return null;
}

interface IProductPageProps {
  productType: string
  typeLabel: string
  typeLink: string
}

export const ProductPage = ({productType, typeLabel, typeLink}:IProductPageProps) => {
  const { slug } = useParams()
  const [product, setProduct] = useState<IGenericProduct>()

  console.log(product)

  useEffect(() => {
    if (slug && productType)
    getProduct(slug, productType).then(data => {
        setProduct(data)
    })
}, [slug, productType])

  return (
    <div className={classes.productDetailsScreen}>
        <Header />
        <Navigation product={product} typeLabel={typeLabel} typeLink={typeLink} />
        <ProductCard product={product} />
        {productType === 'teas' ? <Prepare /> : null}
        <IsntThis productType={productType} />
        <Footer />
    </div>
  );
}