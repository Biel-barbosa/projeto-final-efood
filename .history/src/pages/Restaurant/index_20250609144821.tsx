import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../styles/global'

const Container = styled.div`
  max-width: 1024px;
  margin: 40px auto;
  padding: 0 24px;
`

const Title = styled.h1`
  color: ${colors.primary};
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 16px;
`

const Description = styled.p`
  color: ${colors.gray};
  font-size: 18px;
  margin-bottom: 24px;
`

const RestaurantDetail: React.FC = () => {
  const { id } = useParams()

  // Aqui você pode buscar os dados do restaurante pelo id

  return (
    <Container>
      <Title>Detalhes do Restaurante {id}</Title>
      <Description>Em breve, detalhes completos do restaurante conforme o Figma.</Description>
    </Container>
  )
}

export default RestaurantDetail 