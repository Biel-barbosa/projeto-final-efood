import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../styles/global'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

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
  height: 400px;
  overflow: hidden;
`

const HeroImage = styled.img`
  width: 100vw;
  height: 400px;
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
  height: 400px;
  background: rgba(0, 0, 0, 0.7);
  z-index: 2;
`

const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  text-align: center;
  width: 100vw;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  gap: 16px;
  margin-bottom: 2vw;
`

const HeroTags = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 120px;
  margin-bottom: 8px;
`

const Category = styled.span`
  background: ${colors.primary};
  color: ${colors.secondary};
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  padding: 6px 18px;
  letter-spacing: 1px;
`

const Highlight = styled.span`
  background: ${colors.secondary};
  color: ${colors.primary};
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  padding: 6px 18px;
  letter-spacing: 1px;
`

const RestaurantName = styled.h1`
  color: #fff;
  font-size: 40px;
  font-weight: 900;
  margin: 0;
  text-shadow: 0 2px 16px rgba(0,0,0,0.7);
  letter-spacing: 1px;
`

type Product = {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: number
  porcao: string
}

type Restaurant = {
  id: number
  titulo: string
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Product[]
}

const RestaurantDetail: React.FC = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => setRestaurant(data))
  }, [id])

  if (!restaurant) return <div>Carregando...</div>

  return (
    <>
      <Header />
      <FaixaBege />
      <TopBar>sc-VILhF fRTEwk</TopBar>
      <Container>
        <ProductGrid>
          {restaurant.cardapio.map((product) => (
            <ProductCard key={product.id}>
              <ProductImage src={product.foto} alt={product.nome} />
              <ProductName>{product.nome}</ProductName>
              <ProductDescription>{product.descricao}</ProductDescription>
              <AddButton>Adicionar ao carrinho</AddButton>
            </ProductCard>
          ))}
        </ProductGrid>
      </Container>
      <Hero>
        <HeroImage src={restaurant.capa} alt={restaurant.titulo} />
        <HeroOverlay />
        <HeroContent>
          <HeroTags>
            <Category>{restaurant.tipo}</Category>
            <Highlight>{restaurant.avaliacao} ★</Highlight>
          </HeroTags>
          <RestaurantName>{restaurant.titulo}</RestaurantName>
        </HeroContent>
      </Hero>
      <Footer />
    </>
  )
}

export default RestaurantDetail 