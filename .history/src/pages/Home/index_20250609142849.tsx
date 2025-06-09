import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/global'
import RestaurantCard from '../../components/RestaurantCard'
import Footer from '../../components/Footer'

const Hero = styled.div`
  background-image: url('/hero.png');
  background-size: cover;
  background-position: center;
  height: 384px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  color: ${colors.white};
  max-width: 1024px;
  padding: 0 24px;
`

const HeroTitle = styled.h2`
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 16px;
`

const HeroText = styled.p`
  font-size: 18px;
  font-weight: 900;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.5;
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

const restaurants = [
  {
    id: 1,
    image: '/sushi.png',
    title: 'Hioki Sushi',
    rating: 4.9,
    description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis, sashimis, rolls e temakis.',
    infos: ['Destaque da semana', 'Japonesa']
  },
  {
    id: 2,
    image: '/macarrao.png',
    title: 'La Dolce Vita Trattoria',
    rating: 4.8,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!',
    infos: ['Italiana']
  },
  {
    id: 3,
    image: '/sushi.png',
    title: 'The Crown',
    rating: 4.7,
    description: 'The Crown oferece hambúrgueres artesanais e batatas fritas crocantes.',
    infos: ['Hambúrguer']
  },
  {
    id: 4,
    image: '/macarrao.png',
    title: 'Sakura Sushi',
    rating: 4.9,
    description: 'Sakura Sushi: autêntica culinária japonesa com os melhores ingredientes.',
    infos: ['Japonesa', 'Destaque']
  },
  {
    id: 5,
    image: '/sushi.png',
    title: 'Pasta & Pizza',
    rating: 4.6,
    description: 'As melhores massas e pizzas da cidade, feitas com ingredientes frescos.',
    infos: ['Italiana', 'Massas']
  },
  {
    id: 6,
    image: '/macarrao.png',
    title: 'Sushi Master',
    rating: 4.8,
    description: 'Sushi Master: tradição e inovação na culinária japonesa.',
    infos: ['Japonesa', 'Premium']
  }
]

const Home: React.FC = () => {
  return (
    <>
      <Hero>
        <HeroContent>
          <HeroTitle>Viva experiências gastronômicas no conforto da sua casa</HeroTitle>
          <HeroText>
            Descubra os melhores restaurantes da sua região e peça online com apenas alguns cliques.
          </HeroText>
        </HeroContent>
      </Hero>
      <HomeContainer>
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