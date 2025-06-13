import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../styles/global'

const Card = styled(Link)`
  background-color: ${colors.white};
  border: 1px solid ${colors.primary};
  overflow: hidden;
  width: 100%;
  max-width: 472px;
  margin: 0 auto;
  display: block;
  text-decoration: none;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  }
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 217px;
`

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const RestaurantType = styled.span`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: ${colors.primary};
  color: ${colors.secondary};
  font-size: 12px;
  font-weight: bold;
  padding: 4px 6px;
`

const CardContent = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  min-height: 200px;
`

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.primary};
`

const CardRating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: bold;
  color: ${colors.primary};
`

const StarIcon = styled.img`
  width: 20px;
  height: 20px;
`

const CardDescription = styled.p`
  font-size: 14px;
  color: ${colors.primary};
  margin-bottom: 16px;
  line-height: 1.5;
  flex: 1;
`

const CardFooter = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: auto;
`

const SaibaMais = styled.button`
  background-color: ${colors.primary};
  color: ${colors.secondary};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  border: none;
  cursor: pointer;
`

type Props = {
  id: number
  title: string
  description: string
  image: string
  infos: string[]
  rating: number
}

const RestaurantCard: React.FC<Props> = ({
  id,
  title,
  description,
  image,
  infos,
  rating
}) => {
  return (
    <Card to={`/restaurante/${id}`}>
      <ImageContainer>
        <CardImage src={image} alt={title} />
        <RestaurantType>{infos[0]}</RestaurantType>
      </ImageContainer>
      <CardContent>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardRating>
            {rating} <StarIcon src="/estrela.png" alt="Estrela" />
          </CardRating>
        </CardHeader>
        <CardDescription>{description}</CardDescription>
        <CardFooter>
          <SaibaMais>Saiba mais</SaibaMais>
        </CardFooter>
      </CardContent>
    </Card>
  )
}

export default RestaurantCard 