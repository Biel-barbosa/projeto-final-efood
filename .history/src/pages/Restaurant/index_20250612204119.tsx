import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../styles/global'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ProductModal from '../../components/ProductModal'

const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 24px;
`

const Hero = styled.div`
  width: 100%;
  height: 280px;
  position: relative;
  background: ${colors.secondary};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  overflow: hidden;
`

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
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
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
`

const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  padding: 24px 24px 24px 170px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
`

const RestaurantType = styled.span`
  color: ${colors.secondary};
  font-size: 32px;
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
`

const RestaurantName = styled.h1`
  color: ${colors.secondary};
  font-size: 32px;
  font-weight: 900;
  margin: 0;
  text-shadow: 0 2px 16px rgba(0,0,0,0.7);
`

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 56px;
  margin-bottom: 80px;
`

const ProductCard = styled.div`
  background: #E66767;
  border: 1px solid #E66767;
  padding: 8px;
  width: 320px;
  height: 338px;
`

const ProductImage = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
  margin-bottom: 8px;
`

const ProductName = styled.h2`
  color: #FFEBD9;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`

const ProductDescription = styled.p`
  color: #FFEBD9;
  font-size: 14px;
  margin-bottom: 8px;
  line-height: 1.5;
`

const AddButton = styled.button`
  background: #FFEBD9;
  color: #E66767;
  border: none;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
  width: 100%;
  &:hover {
    background: #FFEBD9;
    opacity: 0.9;
  }
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
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => setRestaurant(data))
  }, [id])

  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product)
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
    setSelectedProduct(null)
  }

  if (!restaurant) return <div>Carregando...</div>

  return (
    <>
      <Header />
      <Hero>
        <HeroImage src={restaurant.capa} alt={restaurant.titulo} />
        <HeroOverlay />
        <HeroContent>
          <RestaurantType>{restaurant.tipo}</RestaurantType>
          <RestaurantName>{restaurant.titulo}</RestaurantName>
        </HeroContent>
      </Hero>
      <Container>
        <ProductGrid>
          {restaurant.cardapio.map((product) => (
            <ProductCard key={product.id}>
              <ProductImage src={product.foto} alt={product.nome} />
              <ProductName>{product.nome}</ProductName>
              <ProductDescription>{product.descricao}</ProductDescription>
              <AddButton onClick={() => handleOpenModal(product)}>
                Adicionar ao carrinho
              </AddButton>
            </ProductCard>
          ))}
        </ProductGrid>
      </Container>
      <ProductModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        product={selectedProduct || { foto: '', nome: '', descricao: '', porcao: '', preco: 0 }}
      />
      <Footer />
    </>
  )
}

export default RestaurantDetail