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
  const [addressErrors, setAddressErrors] = useState<any>({})
  const [paymentErrors, setPaymentErrors] = useState<any>({})

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

  const validateAddress = (data: any) => {
    const errors: any = {}
    if (!data.receiver || data.receiver.length < 3) errors.receiver = 'Informe o nome completo.'
    if (!data.address.description || data.address.description.length < 3) errors.description = 'Endereço inválido.'
    if (!data.address.city || data.address.city.length < 2) errors.city = 'Cidade inválida.'
    if (!/^\d{8}$/.test(data.address.zipCode)) errors.zipCode = 'CEP deve ter 8 números.'
    if (!/^\d+$/.test(data.address.number) || data.address.number.length < 1) errors.number = 'Número inválido.'
    return errors
  }

  const validatePayment = (data: any) => {
    const errors: any = {}
    if (!data.payment.card.name || data.payment.card.name.length < 3) errors.name = 'Nome no cartão inválido.'
    if (!/^\d{16}$/.test(data.payment.card.number)) errors.number = 'Número do cartão deve ter 16 dígitos.'
    if (!/^\d{3}$/.test(data.payment.card.code)) errors.code = 'CVV deve ter 3 dígitos.'
    if (!/^\d{1,2}$/.test(data.payment.card.expires.month) || +data.payment.card.expires.month < 1 || +data.payment.card.expires.month > 12) errors.month = 'Mês inválido.'
    if (!/^\d{4}$/.test(data.payment.card.expires.year) || +data.payment.card.expires.year < 2024) errors.year = 'Ano inválido.'
    return errors
  }

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errors = validateAddress(formData)
    setAddressErrors(errors)
    if (Object.keys(errors).length === 0) setStep('payment')
  }

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errors = validatePayment(formData)
    setPaymentErrors(errors)
    if (Object.keys(errors).length > 0) return
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
        dispatch(confirmOrder(data.orderId || 'Pedido'))
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
            {addressErrors.receiver && <span style={{color:'#fff',fontSize:12}}>{addressErrors.receiver}</span>}
            <Label htmlFor="address.description">Endereço</Label>
            <Input id="address.description" name="address.description" value={formData.address.description} onChange={handleChange} required />
            {addressErrors.description && <span style={{color:'#fff',fontSize:12}}>{addressErrors.description}</span>}
            <Label htmlFor="address.city">Cidade</Label>
            <Input id="address.city" name="address.city" value={formData.address.city} onChange={handleChange} required />
            {addressErrors.city && <span style={{color:'#fff',fontSize:12}}>{addressErrors.city}</span>}
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
            {addressErrors.zipCode && <span style={{color:'#fff',fontSize:12}}>{addressErrors.zipCode}</span>}
            {addressErrors.number && <span style={{color:'#fff',fontSize:12}}>{addressErrors.number}</span>}
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
            {paymentErrors.name && <span style={{color:'#fff',fontSize:12}}>{paymentErrors.name}</span>}
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
            {paymentErrors.number && <span style={{color:'#fff',fontSize:12}}>{paymentErrors.number}</span>}
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
            {paymentErrors.month && <span style={{color:'#fff',fontSize:12}}>{paymentErrors.month}</span>}
            {paymentErrors.year && <span style={{color:'#fff',fontSize:12}}>{paymentErrors.year}</span>}
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