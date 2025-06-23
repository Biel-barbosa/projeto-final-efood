import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { resetOrder } from '../../store/deliverySlice'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  z-index: 999;
`

const Container = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  max-width: 100vw;
  height: 100vh;
  background: #EB5757;
  padding: 48px 32px;
  z-index: 1000;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 500px) {
    width: 100vw;
    padding: 32px 8px;
  }
`

const Title = styled.h2`
  color: #FFEBD9;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 32px;
  text-align: left;
`

const Message = styled.div`
  color: #FFEBD9;
  font-size: 1rem;
  margin-bottom: 40px;
  text-align: left;
  line-height: 1.7;
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const Button = styled.button`
  background-color: #FFEBD9;
  color: #EB5757;
  border: none;
  padding: 16px 0;
  font-size: 1.15rem;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  border-radius: 0;
  margin-top: 8px;
  margin-bottom: 8px;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.9;
  }
`

const OrderConfirmation: React.FC = () => {
  const dispatch = useDispatch()
  const { isOrderConfirmed, orderId } = useSelector((state: RootState) => state.delivery)
  if (!isOrderConfirmed) return null
  return (
    <>
      <Overlay />
      <Container>
        <Title>Pedido realizado - {orderId}</Title>
        <Message>
          <span>Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.</span>
          <span>Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.</span>
          <span>Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.</span>
          <span>Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</span>
        </Message>
        <Button onClick={() => { alert('Pedido feito! Obrigado por comprar no efood'); dispatch(resetOrder()); window.location.href = '/' }}>Concluir</Button>
      </Container>
    </>
  )
}

export default OrderConfirmation 