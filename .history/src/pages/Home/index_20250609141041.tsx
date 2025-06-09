import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/global'
import RestaurantCard from '../../components/RestaurantCard'
import Footer from '../../components/Footer'

const HomeContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 24px;
`

const Banner = styled.div`
  background-color: ${colors.secondary};
  padding: 32px;
  margin-bottom: 56px;
  border-radius: 8px;
`

const BannerTitle = styled.h2`
  color: ${colors.primary};
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 16px;
`

const BannerText = styled.p`
  color: ${colors.primary};
  font-size: 18px;
  line-height: 1.5;
  max-width: 600px;
`

const RestaurantList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-bottom: 80px;
`

const restaurants = [
  {
    id: 1,
    image: '/restaurant1.jpg',
    title: 'Hioki Sushi',
    rating: 4.9,
    description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis, sashimis, rolls e temakis.',
    infos: ['Destaque da semana', 'Japonesa']
  },
  {
    id: 2,
    image: '/restaurant2.jpg',
    title: 'La Dolce Vita Trattoria',
    rating: 4.8,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!',
    infos: ['Italiana']
  },
  {
    id: 3,
    image: '/restaurant3.jpg',
    title: 'The Crown',
    rating: 4.7,
    description: 'The Crown oferece hambúrgueres artesanais e batatas fritas crocantes.',
    infos: ['Hambúrguer']
  }
]

const Home: React.FC = () => {
  return (
    <>
      <HomeContainer>
        <Banner>
          <BannerTitle>Viva experiências gastronômicas no conforto da sua casa</BannerTitle>
          <BannerText>
            Descubra os melhores restaurantes da sua região e peça online com apenas alguns cliques.
          </BannerText>
        </Banner>
        <RestaurantList>
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              image={restaurant.image}
              title={restaurant.title}
              rating={restaurant.rating}
              description={restaurant.description}
              infos={restaurant.infos}
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