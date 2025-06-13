import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../styles/global'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { openCart } from '../../store/cartSlice'

const HeaderContainer = styled.header`
  background-image: url('/Vector.svg');
  background-size: cover;
  background-position: center;
  padding: 40px 0;
  position: relative;
  background-color: ${colors.secondary};

  @media (max-width: 767px) {
    padding: 32px 0;
  }
`

const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 1023px) {
    justify-content: center;
    gap: 32px;
  }
`

const Logo = styled.img`
  height: 57px;
`

const RestaurantLink = styled(Link)`
  color: ${colors.primary};
  font-size: 18px;
  font-weight: 900;
  text-decoration: none;

  @media (max-width: 1023px) {
    display: none;
  }
`

const CartButton = styled.button`
  color: ${colors.primary};
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  cursor: pointer;
`

const Header: React.FC = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootState) => state.cart)

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantidade, 0)
  }

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.preco * item.quantidade, 0)
  }

  return (
    <HeaderContainer>
      <Container>
        <RestaurantLink to="/">Restaurantes</RestaurantLink>
        <Link to="/">
          <Logo src="/logo.png" alt="EFOOD" />
        </Link>
        <CartButton onClick={() => dispatch(openCart())}>
          <span>{getTotalItems()} - produto(s)</span>
          <span>R$ {getTotalPrice().toFixed(2)}</span>
        </CartButton>
      </Container>
    </HeaderContainer>
  )
}

export default Header 