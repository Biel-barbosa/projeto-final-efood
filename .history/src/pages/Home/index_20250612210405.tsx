import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/global'
import RestaurantCard from '../../components/RestaurantCard'
import Footer from '../../components/Footer'

const Hero = styled.div`
  background-image: url('/fundo.png');
  background-size: cover;
  background-position: center;
  height: 384px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  position: relative;
  margin-bottom: 80px;
`

const HomeContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 24px;
`

const RestaurantList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin-bottom: 80px;
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
      <Hero />
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