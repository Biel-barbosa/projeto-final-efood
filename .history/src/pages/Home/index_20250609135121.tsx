import styled from 'styled-components'
import { colors } from '../../styles/global'

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
`

const Home = () => {
  return (
    <HomeContainer>
      <Banner>
        <BannerTitle>Viva experiências gastronômicas no conforto da sua casa</BannerTitle>
        <BannerText>
          Descubra os melhores restaurantes da sua região e peça online com apenas alguns cliques.
        </BannerText>
      </Banner>
      <RestaurantList>
        {/* Aqui serão renderizados os cards dos restaurantes */}
      </RestaurantList>
    </HomeContainer>
  )
}

export default Home 