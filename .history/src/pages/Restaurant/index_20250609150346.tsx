import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../styles/global'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

const restaurantData = {
  1: {
    name: 'La Dolce Vita Trattoria',
    category: 'Italiana',
    highlight: 'Destaque da semana',
    image: '/macarrao.png',
    products: [
      {
        id: 1,
        name: 'Pizza Margherita',
        description: 'A clássica Margherita: molho de tomate suculento, mussarela derretida, manjericão fresco e toque de azeite. Sabor e simplicidade!',
        image: '/macarrao.png'
      },
      {
        id: 2,
        name: 'Pizza Margherita',
        description: 'A clássica Margherita: molho de tomate suculento, mussarela derretida, manjericão fresco e toque de azeite. Sabor e simplicidade!',
        image: '/macarrao.png'
      },
      {
        id: 3,
        name: 'Pizza Margherita',
        description: 'A clássica Margherita: molho de tomate suculento, mussarela derretida, manjericão fresco e toque de azeite. Sabor e simplicidade!',
        image: '/macarrao.png'
      },
      {
        id: 4,
        name: 'Pizza Margherita',
        description: 'A clássica Margherita: molho de tomate suculento, mussarela derretida, manjericão fresco e toque de azeite. Sabor e simplicidade!',
        image: '/macarrao.png'
      },
      {
        id: 5,
        name: 'Pizza Margherita',
        description: 'A clássica Margherita: molho de tomate suculento, mussarela derretida, manjericão fresco e toque de azeite. Sabor e simplicidade!',
        image: '/macarrao.png'
      },
      {
        id: 6,
        name: 'Pizza Margherita',
        description: 'A clássica Margherita: molho de tomate suculento, mussarela derretida, manjericão fresco e toque de azeite. Sabor e simplicidade!',
        image: '/macarrao.png'
      }
    ]
  }
}

const FaixaBege = styled.div`
  width: 100vw;
  min-width: 100vw;
  height: 88px;
  background: #FFEBD9;
  display: flex;
  align-items: center;
  justify-content: center;
`

const TopBar = styled.div`
  width: 100vw;
  background: #ffe9d6;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 0;
  font-size: 18px;
  color: ${colors.primary};
  font-weight: bold;
  letter-spacing: 2px;
`

const Container = styled.div`
  max-width: 1024px;
  margin: 40px auto 0 auto;
  padding: 0 24px;
`

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 40px;
  margin-bottom: 80px;
`

const ProductCard = styled.div`
  background: ${colors.secondary};
  border: 1px solid ${colors.primary};
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const ProductImage = styled.img`
  width: 100%;
  max-width: 200px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 16px;
`

const ProductName = styled.h2`
  color: ${colors.primary};
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`

const ProductDescription = styled.p`
  color: ${colors.primary};
  font-size: 14px;
  margin-bottom: 16px;
`

const AddButton = styled.button`
  background: ${colors.primary};
  color: ${colors.secondary};
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #c94d4d;
  }
`

const Hero = styled.div`
  width: 100vw;
  min-width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  position: relative;
  background: ${colors.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 280px;
  overflow: hidden;
  margin-top: 40px;
`

const HeroImage = styled.img`
  width: 100vw;
  height: 280px;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 280px;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2;
`

const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  text-align: center;
  width: 100vw;
  padding: 32px 0 16px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const Category = styled.span`
  background: ${colors.primary};
  color: ${colors.secondary};
  font-size: 14px;
  font-weight: bold;
  border-radius: 4px;
  padding: 4px 12px;
  margin-right: 8px;
`

const Highlight = styled.span`
  background: ${colors.secondary};
  color: ${colors.primary};
  font-size: 14px;
  font-weight: bold;
  border-radius: 4px;
  padding: 4px 12px;
`

const RestaurantName = styled.h1`
  color: ${colors.white};
  font-size: 32px;
  font-weight: 900;
  margin: 16px 0 0 0;
  text-shadow: 0 2px 8px rgba(0,0,0,0.4);
`

const RestaurantDetail: React.FC = () => {
  const { id } = useParams()
  const data = restaurantData[Number(id) as 1] || restaurantData[1]

  return (
    <>
      <Header />
      <FaixaBege />
      <TopBar>sc-VILhF fRTEwk</TopBar>
      <Container>
        <ProductGrid>
          {data.products.map((product) => (
            <ProductCard key={product.id}>
              <ProductImage src={product.image} alt={product.name} />
              <ProductName>{product.name}</ProductName>
              <ProductDescription>{product.description}</ProductDescription>
              <AddButton>Adicionar ao carrinho</AddButton>
            </ProductCard>
          ))}
        </ProductGrid>
      </Container>
      <Hero>
        <HeroImage src={data.image} alt={data.name} />
        <HeroOverlay />
        <HeroContent>
          <Category>{data.category}</Category>
          <Highlight>{data.highlight}</Highlight>
          <RestaurantName>{data.name}</RestaurantName>
        </HeroContent>
      </Hero>
      <Footer />
    </>
  )
}

export default RestaurantDetail 