import React from 'react'
import styled from 'styled-components'
import { colors } from '../styles/global'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

const ModalBox = styled.div`
  background: ${colors.secondary};
  border-radius: 8px;
  display: flex;
  min-width: 700px;
  max-width: 90vw;
  min-height: 350px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.25);
  position: relative;
`

const Image = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  border-radius: 8px 0 0 8px;
  background: #fff;
`

const Content = styled.div`
  flex: 1;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Name = styled.h2`
  color: ${colors.primary};
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`

const Description = styled.p`
  color: ${colors.primary};
  font-size: 16px;
  margin-bottom: 16px;
`

const Portion = styled.p`
  color: ${colors.primary};
  font-size: 14px;
  margin-bottom: 24px;
`

const Price = styled.p`
  color: ${colors.primary};
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 24px;
`

const AddButton = styled.button`
  background: ${colors.primary};
  color: ${colors.secondary};
  border: none;
  border-radius: 4px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
  align-self: flex-start;
  &:hover {
    background: #c94d4d;
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  color: ${colors.primary};
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
  z-index: 2;
`

type Props = {
  isOpen: boolean
  onClose: () => void
  product: {
    foto: string
    nome: string
    descricao: string
    porcao: string
    preco: number
  }
}

const ProductModal: React.FC<Props> = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null
  return (
    <Overlay>
      <ModalBox>
        <Image src={product.foto} alt={product.nome} />
        <Content>
          <Name>{product.nome}</Name>
          <Description>{product.descricao}</Description>
          <Portion>Serve: {product.porcao}</Portion>
          <Price>R$ {product.preco.toFixed(2)}</Price>
          <AddButton>Adicionar ao carrinho</AddButton>
        </Content>
        <CloseButton onClick={onClose} aria-label="Fechar">×</CloseButton>
      </ModalBox>
    </Overlay>
  )
}

export default ProductModal 