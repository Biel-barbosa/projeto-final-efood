import React, { useEffect } from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/global'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { removeFromCart, closeCart, clearCart } from '../../store/cartSlice'
import { openDeliveryForm, resetOrder } from '../../store/deliverySlice'
import DeliveryForm from '../DeliveryForm'
import OrderConfirmation from '../OrderConfirmation'

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`

const CartContainer = styled.aside<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-360px')};
  width: 360px;
  height: 100vh;
  background-color: #E66767;
  padding: 32px 8px;
  transition: right 0.3s ease-in-out;
  z-index: 1000;
  overflow-y: auto;
`

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const CartItem = styled.div`
  display: flex;
  background-color: #FFEBD9;
  padding: 8px;
  gap: 8px;
`

const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  color: #E66767;
`

const ItemName = styled.h3`
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 8px;
`

const ItemPrice = styled.p`
  font-size: 14px;
  font-weight: 400;
`

const ItemQuantity = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-top: 4px;
`

const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-top: 8px;
  margin-left: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const TrashIcon = styled.img`
  width: 22px;
  height: 22px;
`

const CartTotal = styled.div`
  margin-top: 24px;
  color: #FFEBD9;
  font-size: 14px;
  font-weight: 900;
  display: flex;
  justify-content: space-between;
`

const CheckoutButton = styled.button`
  width: 100%;
  background-color: #FFEBD9;
  color: #E66767;
  border: none;
  padding: 4px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 16px;

  &:hover {
    opacity: 0.9;
  }
`

const EmptyCart = styled.p`
  color: #FFEBD9;
  font-size: 14px;
  text-align: center;
  margin-top: 16px;
`

const Cart: React.FC = () => {
    const dispatch = useDispatch()
    const { items, isOpen } = useSelector((state: RootState) => state.cart)
    const { isDeliveryFormOpen, isOrderConfirmed } = useSelector((state: RootState) => state.delivery)

    const getTotalPrice = () => {
        return items.reduce((total, item) => total + item.preco * item.quantidade, 0)
    }

    const handleCheckout = () => {
        dispatch(closeCart())
        dispatch(openDeliveryForm())
    }

    return (
        <>
            <Overlay isOpen={isOpen} onClick={() => dispatch(closeCart())} />
            <CartContainer isOpen={isOpen}>
                <CartItems>
                    {items.length > 0 ? (
                        items.map((item) => (
                            <CartItem key={item.id}>
                                <ItemImage src={item.foto} alt={item.nome} />
                                <ItemInfo>
                                    <ItemName>{item.nome}</ItemName>
                                    <ItemPrice>R$ {item.preco.toFixed(2)}</ItemPrice>
                                    <ItemQuantity>Quantidade: {item.quantidade}</ItemQuantity>
                                    <RemoveButton onClick={() => dispatch(removeFromCart(item.id))}>
                                        <TrashIcon src="/lixeira.png" alt="Remover item" />
                                    </RemoveButton>
                                </ItemInfo>
                            </CartItem>
                        ))
                    ) : (
                        <EmptyCart>O carrinho está vazio</EmptyCart>
                    )}
                </CartItems>
                
                {items.length > 0 && (
                    <>
                        <CartTotal>
                            <span>Valor total</span>
                            <span>R$ {getTotalPrice().toFixed(2)}</span>
                        </CartTotal>
                        <CheckoutButton onClick={handleCheckout}>
                            Continuar com a entrega
                        </CheckoutButton>
                    </>
                )}
            </CartContainer>
            <DeliveryForm />
            <OrderConfirmation />
        </>
    )
}

export default Cart 