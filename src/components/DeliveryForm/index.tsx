import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { closeDeliveryForm, setDeliveryInfo, confirmOrder } from '../../store/deliverySlice'
import { DeliveryState } from '../../store/deliverySlice'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  z-index: 999;
`

const Sidebar = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  width: 360px;
  height: 100vh;
  background: #EB5757;
  padding: 32px 24px;
  z-index: 1000;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media (max-width: 400px) {
    width: 100vw;
    padding: 24px 8px;
  }
`

const Title = styled.h2`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 24px;
`

const Label = styled.label`
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
`

const Input = styled.input`
  background: #FFEBD9;
  border: none;
  border-radius: 0;
  padding: 10px 8px;
  font-size: 14px;
  color: #4B4B4B;
  margin-bottom: 16px;
  width: 100%;
  &::placeholder {
    color: #bdbdbd;
  }
`

const Row = styled.div`
  display: flex;
  gap: 16px;
  > div {
    flex: 1;
  }
`

const Button = styled.button`
  width: 100%;
  background: #FFEBD9;
  color: #EB5757;
  border: none;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 0;
  margin-top: 8px;
  margin-bottom: 8px;
  border-radius: 0;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.9;
  }
`

const SecondaryButton = styled(Button)`
  background: transparent;
  color: #fff;
  border: 2px solid #fff;
  margin-top: 0;
  margin-bottom: 8px;
`

const PaymentTitle = styled(Title)`
  font-size: 18px;
  margin-bottom: 16px;
  span {
    font-size: 16px;
    font-weight: 400;
    color: #fff;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0;
`

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;
`

const initialForm = {
  receiver: '',
  address: {
    description: '',
    city: '',
    zipCode: '',
    number: '',
    complement: ''
  },
  payment: {
    card: {
      name: '',
      number: '',
      code: '',
      expires: {
        month: '',
        year: ''
      }
    }
  }
}

type Step = 'address' | 'payment'

const DeliveryForm: React.FC = () => {
  const dispatch = useDispatch()
  const { isDeliveryFormOpen } = useSelector((state: RootState) => state.delivery)
  const { items } = useSelector((state: RootState) => state.cart)
  const [step, setStep] = useState<Step>('address')
  const [formData, setFormData] = useState<any>(initialForm)
  const total = items.reduce((acc, item) => acc + item.preco * item.quantidade, 0)

  if (!isDeliveryFormOpen) return null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name.startsWith('address.')) {
      const key = name.replace('address.', '')
      setFormData((prev: any) => ({
        ...prev,
        address: {
          ...prev.address,
          [key]: value
        }
      }))
    } else if (name.startsWith('payment.card.expires.')) {
      const key = name.replace('payment.card.expires.', '')
      setFormData((prev: any) => ({
        ...prev,
        payment: {
          ...prev.payment,
          card: {
            ...prev.payment.card,
            expires: {
              ...prev.payment.card.expires,
              [key]: value
            }
          }
        }
      }))
    } else if (name.startsWith('payment.card.')) {
      const key = name.replace('payment.card.', '')
      setFormData((prev: any) => ({
        ...prev,
        payment: {
          ...prev.payment,
          card: {
            ...prev.payment.card,
            [key]: value
          }
        }
      }))
    } else {
      setFormData((prev: any) => ({ ...prev, [name]: value }))
    }
  }

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep('payment')
  }

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(setDeliveryInfo(formData))
    try {
      const response = await fetch('https://fake-api-tau.vercel.app/api/efood/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          products: items.map(item => ({ id: item.id, price: item.preco })),
          delivery: {
            receiver: formData.receiver,
            address: formData.address
          },
          payment: formData.payment
        })
      })
      if (response.ok) {
        const data = await response.json()
        alert('Pedido finalizado!')
        dispatch(confirmOrder(data.orderId || 'Pedido'))
      } else {
        alert('Erro ao finalizar pedido!')
      }
    } catch {
      alert('Erro ao finalizar pedido!')
    }
  }

  return (
    <>
      <Overlay onClick={() => dispatch(closeDeliveryForm())} />
      <Sidebar>
        {step === 'address' && (
          <Form onSubmit={handleAddressSubmit}>
            <Title>Entrega</Title>
            <Label htmlFor="receiver">Quem irá receber</Label>
            <Input id="receiver" name="receiver" value={formData.receiver} onChange={handleChange} required />
            <Label htmlFor="address.description">Endereço</Label>
            <Input id="address.description" name="address.description" value={formData.address.description} onChange={handleChange} required />
            <Label htmlFor="address.city">Cidade</Label>
            <Input id="address.city" name="address.city" value={formData.address.city} onChange={handleChange} required />
            <Row>
              <div>
                <Label htmlFor="address.zipCode">CEP</Label>
                <Input id="address.zipCode" name="address.zipCode" value={formData.address.zipCode} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="address.number">Número</Label>
                <Input id="address.number" name="address.number" value={formData.address.number} onChange={handleChange} required />
              </div>
            </Row>
            <Label htmlFor="address.complement">Complemento (opcional)</Label>
            <Input id="address.complement" name="address.complement" value={formData.address.complement} onChange={handleChange} />
            <Button type="submit">Continuar com o pagamento</Button>
            <SecondaryButton type="button" onClick={() => dispatch(closeDeliveryForm())}>Voltar para o carrinho</SecondaryButton>
          </Form>
        )}
        {step === 'payment' && (
          <Form onSubmit={handlePaymentSubmit}>
            <PaymentTitle>
              Pagamento - Valor a pagar <span>R$ {total.toFixed(2)}</span>
            </PaymentTitle>
            <Label htmlFor="payment.card.name">Nome no cartão</Label>
            <Input id="payment.card.name" name="payment.card.name" value={formData.payment.card.name} onChange={handleChange} required />
            <Row>
              <div style={{ flex: 2 }}>
                <Label htmlFor="payment.card.number">Número do cartão</Label>
                <Input id="payment.card.number" name="payment.card.number" value={formData.payment.card.number} onChange={handleChange} required />
              </div>
              <div style={{ flex: 1 }}>
                <Label htmlFor="payment.card.code">CVV</Label>
                <Input id="payment.card.code" name="payment.card.code" value={formData.payment.card.code} onChange={handleChange} required />
              </div>
            </Row>
            <Row>
              <div>
                <Label htmlFor="payment.card.expires.month">Mês de vencimento</Label>
                <Input id="payment.card.expires.month" name="payment.card.expires.month" value={formData.payment.card.expires.month} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="payment.card.expires.year">Ano de vencimento</Label>
                <Input id="payment.card.expires.year" name="payment.card.expires.year" value={formData.payment.card.expires.year} onChange={handleChange} required />
              </div>
            </Row>
            <ButtonGroup>
              <Button type="submit">Finalizar pagamento</Button>
              <SecondaryButton type="button" onClick={() => setStep('address')}>Voltar para a edição de endereço</SecondaryButton>
            </ButtonGroup>
          </Form>
        )}
      </Sidebar>
    </>
  )
}

export default DeliveryForm 