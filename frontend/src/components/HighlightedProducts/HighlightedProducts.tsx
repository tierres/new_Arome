import classes from './HighlightedProducts.module.css';
import { SectionContainer } from '../shared/SectionContainer/SectionContainer'
import { LittleProductCard } from '../shared/LittleProductCard/LittleProductCard';
import LeftArrow from './vectors/left-arrow.svg'
import RightArrow from './vectors/right-arrow.svg'

import { IGenericProduct } from '@/types/generic_product';

import { useEffect } from 'react';
import { useState } from 'react';

import Slider from "react-slick";

// async function getHighlightedProducts() {
//     let response = await fetch('https://arome.onrender.com/api/products', {method: "get"}) 
//     console.log(response)
//     if(response.ok) {
//       let data: IGenericProduct[] = await response.json() 
//       let highlightedProducts = data.filter(product => product.relevance > 1)
//       return highlightedProducts
//     }
//     return null
//   }

async function getHighlightedProducts() {
  const baseUrl = import.meta.env.VITE_API_URL; // Captura a URL do ambiente
  if (!baseUrl) {
    throw new Error("A variável de ambiente VITE_API_URL não está configurada!");
  }

  // Requisição à API ou ao arquivo estático
  const response = await fetch(baseUrl, { method: "GET" });

  if (response.ok) {
    const data: IGenericProduct[] = await response.json();

    // Se for local (products.json), processa os produtos diretamente
    const highlightedProducts = data.filter(product => product.relevance > 1);

    return highlightedProducts;
  }

  console.error("Erro ao buscar os produtos destacados:", response.statusText);
  return null;
}


export const HighlightedProducts = () => {
    const [products, setProducts] = useState<IGenericProduct[]>([])

    useEffect(() => {
        getHighlightedProducts().then(data => {
            setProducts(data ?? [])
        })
    }, [])

    var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            prevArrow: (
                    <img src={LeftArrow} alt="" />
            ),
            nextArrow: (
                    <img src={RightArrow} alt="" />
            ),
            dotsClass: 'slick-dots ' + classes.dots,
            responsive: [
                {
                  breakpoint: 768, // Para telas menores que 768px
                  settings: {
                    slidesToShow: 1, // Mostra apenas 1 produto no mobile
                    slidesToScroll: 1,
                  },
                },
              ],
      };

    return(
        <div className={classes.highlightedProductsContainer}>
            <SectionContainer className={classes.sectionContainer}>
                <div>
                    <h1 className={classes.tittle}>Produtos em destaque</h1>
                </div>
                <div className={classes.arrowsPlusCards}>
                        <Slider {...settings} className={classes.slider}>
                                {products.map(product => (
                                        <LittleProductCard
                                            product={product}
                                        />
                                ))}
                        </Slider>
                </div>
            </SectionContainer>         
        </div>
    )
}