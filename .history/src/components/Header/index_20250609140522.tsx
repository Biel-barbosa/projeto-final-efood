import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../styles/global'

const HeaderContainer = styled.header`
  background-color: ${colors.primary};
  padding: 24px 0;
`

const HeaderContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
`

const Logo = styled(Link)`
  color: ${colors.secondary};
  font-size: 18px;
  font-weight: bold;
`

const CartButton = styled(Link)`
  color: ${colors.secondary};
  font-size: 18px;
  font-weight: bold;
`

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo to="/">eFood</Logo>
        <CartButton to="/cart">0 - produto(s) no carrinho</CartButton>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header 