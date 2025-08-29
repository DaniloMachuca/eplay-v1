import { useState } from 'react'
import Button from '../../components/Button'
import Card from '../../components/Card'

import * as S from './styles'
import ticket from '../../assets/images/boleto.png'
import creditCard from '../../assets/images/cartao.png'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)

  return (
    <div className="container">
      <Card title="Dados de cobrança">
        <>
          <S.Row>
            <S.InputGroup>
              <label htmlFor="fullName">Nome completo</label>
              <input id="fullName" type="text" />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="cpf">CPF</label>
              <input id="cpf" type="text" />
            </S.InputGroup>
          </S.Row>
          <h3 className="margin-top">Dados de entrega - conteúdo digital</h3>
          <S.Row>
            <S.InputGroup>
              <label htmlFor="deliveryEmail">Email</label>
              <input type="email" id="deliveryEmail" />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="ConfirmDeliveryEmail">Confirme o email</label>
              <input type="email" id="ConfirmDeliveryEmail" />
            </S.InputGroup>
          </S.Row>
        </>
      </Card>
      <Card title="Pagamento">
        <>
          <div>
            <S.TabButton
              onClick={() => setPayWithCard(false)}
              IsActive={!payWithCard}
            >
              <img src={ticket} alt="boleto" />
              boleto bancário
            </S.TabButton>
            <S.TabButton
              onClick={() => setPayWithCard(true)}
              IsActive={payWithCard}
            >
              <img src={creditCard} alt="cartão de crédito" />
              Cartão de crédito
            </S.TabButton>
            <div className="margin-top">
              {payWithCard ? (
                <>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="cardOwner">
                        Nome do titular do cartão
                      </label>
                      <input type="text" id="cardOwner" />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="cpfCardOwner">
                        CPF do titular do cartão
                      </label>
                      <input type="text" id="cpfCardOwner" />
                    </S.InputGroup>
                  </S.Row>
                  <S.Row marginTop="24px">
                    <S.InputGroup>
                      <label htmlFor="cardDisplayName">Nome no cartão</label>
                      <input type="text" id="cardDisplayName" />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="cardNumber">Número do cartão</label>
                      <input type="text" id="cardNumber" />
                    </S.InputGroup>
                    <S.InputGroup maxWidth="123px">
                      <label htmlFor="expiresMonth">Mês de vencimento</label>
                      <input type="text" id="expiresMonth" />
                    </S.InputGroup>
                    <S.InputGroup maxWidth="123px">
                      <label htmlFor="expiresYear">Ano de vencimento</label>
                      <input type="text" id="expiresYear" />
                    </S.InputGroup>
                    <S.InputGroup maxWidth="48px">
                      <label htmlFor="cardCode">CVV</label>
                      <input type="text" id="cardCode" />
                    </S.InputGroup>
                  </S.Row>
                  <S.Row marginTop="24px">
                    <S.InputGroup maxWidth="150px">
                      <label htmlFor="installments">Parcelamento</label>
                      <select name="" id="">
                        <option value="">1x de R$ 200,00</option>
                        <option value="">2x de R$ 200,00</option>
                        <option value="">3x de R$ 200,00</option>
                      </select>
                    </S.InputGroup>
                  </S.Row>
                </>
              ) : (
                <p>
                  Ao optar por essa forma de pagamento, é importante lembrar que
                  a confirmação pode levar até 3 dias úteis, devido aos prazos
                  estabelecidos pelas instituições financeiras. Portanto, a
                  liberação do código de ativação do jogo adquirido ocorrerá
                  somente após a aprovação do pagamento do boleto.
                </p>
              )}
            </div>
          </div>
        </>
      </Card>
      <Button type="button" title="Clique aqui para finalizar a compra">
        Finalizar compra
      </Button>
    </div>
  )
}

export default Checkout
