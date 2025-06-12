import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/global'

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1001;
`

const ModalContent = styled.div`
  background: #E66767;
  width: 1024px;
  height: 344px;
  position: relative;
  z-index: 1002;
  display: flex;
  padding: 32px;
  gap: 24px;
`

const ModalImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
`

const ModalInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: #FFEBD9;
  flex: 1;
`

const ModalTitle = styled.h2`
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 16px;
`

const ModalDescription = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`

const ModalPortion = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
`

const ModalPrice = styled.p`
  font-size: 14px;
  margin-bottom: 24px;
`

const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  color: #FFEBD9;
  font-size: 16px;
  cursor: pointer;
  padding: 8px;
`

const AddToCartButton = styled.button`
  background: #FFEBD9;
  color: #E66767;
  border: none;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  width: fit-content;
  &:hover {
    opacity: 0.9;
  }
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
    <Modal>
      <Overlay onClick={onClose} />
      <ModalContent>
        <ModalImage src={product.foto} alt={product.nome} />
        <ModalInfo>
          <ModalTitle>{product.nome}</ModalTitle>
          <ModalDescription>{product.descricao}</ModalDescription>
          <ModalPortion>Serve: {product.porcao}</ModalPortion>
          <ModalPrice>R$ {product.preco.toFixed(2)}</ModalPrice>
          <AddToCartButton onClick={onClose}>
            Adicionar ao carrinho - R$ {product.preco.toFixed(2)}
          </AddToCartButton>
        </ModalInfo>
        <CloseButton onClick={onClose}>X</CloseButton>
      </ModalContent>
    </Modal>
  )
}

export default ProductModal 