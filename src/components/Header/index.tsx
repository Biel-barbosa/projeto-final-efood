import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/global'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.header`
  background-color: ${colors.secondary};
  padding: 40px 0;
  text-align: center;
`

const Content = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const NavLink = styled(Link)`
  color: ${colors.primary};
  font-size: 18px;
  font-weight: 900;
  text-decoration: none;
`

const Logo = styled.img`
  height: 57px;
`

const CartButton = styled(Link)`
  color: ${colors.primary};
  font-size: 18px;
  font-weight: 900;
  text-decoration: none;
`

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Content>
        <NavLink to="/">Restaurantes</NavLink>
        <Logo src="/logo.png" alt="efood" />
        <CartButton to="/carrinho">0 produto(s) no carrinho</CartButton>
      </Content>
    </HeaderContainer>
  )
}

export default Header 