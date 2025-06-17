import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
`

const Container = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  width: 360px;
  height: 100vh;
  background-color: #E66767;
  padding: 32px 8px;
  z-index: 1000;
  overflow-y: auto;
`

const Title = styled.h2`
  color: #FFEBD9;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
`

const InfoGroup = styled.div`
  margin-bottom: 24px;
`

const InfoLabel = styled.p`
  color: #FFEBD9;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
`

const InfoValue = styled.p`
  color: #FFEBD9;
  font-size: 14px;
  margin-bottom: 4px;
`

const Button = styled.button`
  background-color: #FFEBD9;
  color: #E66767;
  border: none;
  padding: 4px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  margin-top: 16px;

  &:hover {
    opacity: 0.9;
  }
`

const OrderConfirmation: React.FC = () => {
  const { receiver, address, payment, isOrderConfirmed, orderId } = useSelector((state: RootState) => state.delivery)

  if (!isOrderConfirmed) return null

  return (
    <>
      <Overlay />
      <Container>
        <Title>Pedido realizado - {orderId}</Title>

        <InfoGroup>
          <InfoLabel>Entrega</InfoLabel>
          <InfoValue>{receiver}</InfoValue>
          <InfoValue>{address.description}</InfoValue>
          <InfoValue>{address.number}</InfoValue>
          {address.complement && <InfoValue>{address.complement}</InfoValue>}
          <InfoValue>{address.city} - {address.zipCode}</InfoValue>
        </InfoGroup>

        <InfoGroup>
          <InfoLabel>Pagamento</InfoLabel>
          <InfoValue>Cartão de crédito</InfoValue>
          <InfoValue>{payment.card.name}</InfoValue>
          <InfoValue>**** **** **** {payment.card.number.slice(-4)}</InfoValue>
        </InfoGroup>

        <Button onClick={() => window.location.href = '/'}>
          Concluir
        </Button>
      </Container>
    </>
  )
}

export default OrderConfirmation 