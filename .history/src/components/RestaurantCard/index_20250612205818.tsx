import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/global'
import { Link } from 'react-router-dom'

type Props = {
  image: string
  title: string
  rating: number
  description: string
  infos: string[]
  id: number
}

const Card = styled.div`
  background: ${colors.secondary};
  border: 1px solid ${colors.primary};
  padding: 8px;
  display: flex;
  flex-direction: column;
  position: relative;
`

const Image = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
  margin-bottom: 8px;
`

const Title = styled.h2`
  color: ${colors.primary};
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`

const Description = styled.p`
  color: ${colors.primary};
  font-size: 14px;
  margin-bottom: 8px;
  line-height: 1.5;
  flex: 1;
`

const Button = styled(Link)`
  background: ${colors.primary};
  color: ${colors.secondary};
  text-decoration: none;
  border: none;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
  width: fit-content;
  margin-top: auto;
  &:hover {
    background: #c94d4d;
  }
`

const RestaurantCard: React.FC<Props> = ({
  image,
  title,
  rating,
  description,
  infos,
  id
}) => {
  return (
    <Card>
      <Image src={image} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Button to={`/restaurante/${id}`}>Saiba mais</Button>
    </Card>
  )
}

export default RestaurantCard 