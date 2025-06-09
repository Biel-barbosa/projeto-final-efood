import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 0 24px 0;
  background: #ffebd9;
`

const Logo = styled.img`
  height: 40px;
`

const LogoHeader: React.FC = () => (
  <Header>
    <Logo src="/logo.png" alt="eFood" />
  </Header>
)

export default LogoHeader 