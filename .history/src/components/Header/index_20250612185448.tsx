import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/global'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.header`
  width: 100%;
  background: ${colors.secondary};
  padding: 40px 0;
`

const Content = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
`

const LogoImage = styled.img`
  height: 57px;
`

const CartButton = styled(Link)`
  text-decoration: none;
  color: ${colors.primary};
  font-size: 18px;
  font-weight: 900;
  display: flex;
  align-items: center;
  gap: 8px;
`

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Content>
        <Logo to="/">
          <LogoImage src="/logo.png" alt="efood" />
        </Logo>
        <CartButton to="/carrinho">
          <span>0 - produto(s)</span>
        </CartButton>
      </Content>
    </HeaderContainer>
  )
}

export default Header 