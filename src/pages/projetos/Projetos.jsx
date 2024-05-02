import React from 'react'
import Header from '../../components/Header/Header'
import * as S from "./styled"
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Navigation, EffectCards } from 'swiper/modules'
import selfcare from "../../assets/selfcare.png"
import macdonalds from "../../assets/macdonalds.png"
import primevideo from "../../assets/primevideo.png"

export default function Projetos() {
  return (
     <S.Main>
      <Header/>
      <Swiper
      modules={[EffectCards]}
      effect={'cards'}
      slidesPerView={1}
      navigation = {true}
      loop={true}
      grabCursor={true}
    >
      <SwiperSlide>cabou-se</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>

      <section>
        <h2>Projetos</h2>
      </section>
    </S.Main>
  )
}