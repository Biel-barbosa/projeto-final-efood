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

const FooterLogo = styled.div`
  color: ${colors.primary};
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &::before {
    content: '';
    display: inline-block;
    width: 125px;
    height: 57px;
    background-color: ${colors.primary};
    mask-image: url('/logo.png');
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;
  }
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

const SocialLink = styled.a`
  color: ${colors.primary};
  font-size: 24px;
  text-decoration: none;
  font-weight: bold;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid ${colors.primary};
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
        <FooterLogo>efood</FooterLogo>
        <FooterLinks>
          <FooterLink href="#">Sobre</FooterLink>
          <FooterLink href="#">Categorias</FooterLink>
          <FooterLink href="#">Entrega</FooterLink>
          <FooterLink href="#">Contato</FooterLink>
        </FooterLinks>
        <FooterSocial>
          <SocialLink href="#" aria-label="Instagram">i</SocialLink>
          <SocialLink href="#" aria-label="Facebook">f</SocialLink>
          <SocialLink href="#" aria-label="Twitter">t</SocialLink>
        </FooterSocial>
        <FooterText>
          A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.
        </FooterText>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer 