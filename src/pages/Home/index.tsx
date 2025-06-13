import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/global'
import RestaurantCard from '../../components/RestaurantCard'
import Footer from '../../components/Footer'

const Hero = styled.section`
  width: 100%;
  height: 380px;
  margin-bottom: 80px;
  background-color: #FFEBD9;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;

  @media (max-width: 767px) {
    height: 300px;
    margin-bottom: 40px;
  }
`

const Vector = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`

const Logo = styled.img`
  height: 57px;
  position: relative;
  z-index: 1;
  margin-bottom: 32px;

  @media (max-width: 767px) {
    height: 40px;
    margin-bottom: 24px;
  }
`

const HeroText = styled.p`
  color: #E66767;
  font-size: 36px;
  font-weight: 900;
  text-align: center;
  max-width: 800px;
  position: relative;
  z-index: 1;
  padding: 0 24px;

  @media (max-width: 767px) {
    font-size: 24px;
  }
`

const HomeContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: 767px) {
    padding: 0 16px;
  }
`

const RestaurantList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin-bottom: 80px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-bottom: 40px;
  }
`

type Restaurant = {
  id: number
  titulo: string
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}

const Home: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data) => setRestaurants(data))
  }, [])

  return (
    <>
      <Hero>
        <Vector 
          src="/Vector.svg" 
          alt="Vector background"
          onError={(e) => {
            console.error('Error loading SVG:', e);
            e.currentTarget.src = '/Vector.png';
          }}
        />
        <Logo src="/logo.png" alt="eFood" />
        <HeroText>Viva experiências gastronômicas no conforto da sua casa</HeroText>
      </Hero>
      <HomeContainer>
        <RestaurantList>
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              image={restaurant.capa}
              title={restaurant.titulo}
              rating={restaurant.avaliacao}
              description={restaurant.descricao}
              infos={[restaurant.tipo]}
              id={restaurant.id}
            />
          ))}
        </RestaurantList>
      </HomeContainer>
      <Footer />
    </>
  )
}

export default Home 