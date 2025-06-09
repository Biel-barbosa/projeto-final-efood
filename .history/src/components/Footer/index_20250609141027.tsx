import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/global'

const FooterContainer = styled.footer`
  background-color: ${colors.secondary};
  padding: 40px 0;
  text-align: center;
`

const FooterContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 24px;
`

const FooterLogo = styled.img`
  margin-bottom: 32px;
`

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 32px;
`

const FooterLink = styled.a`
  color: ${colors.primary};
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
`

const FooterSocial = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 32px;
`

const SocialIcon = styled.img`
  width: 24px;
  height: 24px;
`

const FooterText = styled.p`
  color: ${colors.primary};
  font-size: 10px;
  max-width: 480px;
  margin: 0 auto;
  line-height: 1.5;
`

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLogo src="/logo.png" alt="eFood" />
        <FooterLinks>
          <FooterLink href="#">Sobre</FooterLink>
          <FooterLink href="#">Categorias</FooterLink>
          <FooterLink href="#">Entrega</FooterLink>
          <FooterLink href="#">Contato</FooterLink>
        </FooterLinks>
        <FooterSocial>
          <SocialIcon src="/instagram.png" alt="Instagram" />
          <SocialIcon src="/facebook.png" alt="Facebook" />
          <SocialIcon src="/twitter.png" alt="Twitter" />
        </FooterSocial>
        <FooterText>
          A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.
        </FooterText>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer 