/**
 * v0 by Vercel.
 * @see https://v0.dev/t/yt8JxCUPXJA
 */
import Image from "next/image"
import Link from "next/link"

import Hero4 from '@/assets/hero_04.jpg'
import Hero2 from '@/assets/hero_02.jpg'
import { Fragment } from "react"

export default function Hero() {
  return (
    <section className=" py-6 sm:py-12 md:py-24 lg:py-32 flex justify-center flex-col items-center">
      <h1 className="text-5xl z-10">Seja Bem-Vindo à Matriz</h1>
      <p className="text-base mt-2">Descubra Soluções Exclusivas para suas ideias de app</p>
      <div className="flex flex-row justify-center items-center">
        <Image src={Hero4} className="w-1/4 mt-5 shadow-2xl" alt="uma sena empresarial onde envolve tecnologia, alegria, conhecimento, e vendas aumento de lucros"/>
        <Image src={Hero2} className="w-1/4 mt-5 shadow-2xl" alt="uma sena empresarial onde envolve tecnologia, alegria, conhecimento, e vendas aumento de lucros"/>
      </div>
      <p className="mt-20">Explore Agora Nossos Produtos/Serviços e Transforme Sua Experiência!</p>
    </section>
  )
}

