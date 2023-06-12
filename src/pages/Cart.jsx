import { useState } from 'react'

import qrCodeImg from '../assets/qr-code.svg'
import pixLogoImg from '../assets/pix-logo.svg'
import creditIconImg from '../assets/credit-card-icon.svg'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { OrderItem } from '../components/OrderItem'

export function Cart() {
  const [isPix, setIsPix] = useState(true)

  return (
    <>
      <Header />

      <main className="max-w-[1120px] h-screen mt-8 mx-auto flex justify-between">
        <div className="flex flex-col items-start">
          <h3 className="font-heading font-bold text-3xl text-gray-100">
            Meu pedido
          </h3>
          <div className="mt-8 flex flex-col justify-start gap-4">
            <OrderItem quantity="1" title="Salada Raddish" price="R$ 25,97" />
            <OrderItem quantity="1" title="Salada Raddish" price="R$ 25,97" />
            <OrderItem quantity="1" title="Salada Raddish" price="R$ 25,97" />
            <OrderItem quantity="1" title="Salada Raddish" price="R$ 25,97" />
          </div>
          <div className="mt-8">
            <p className="font-heading font-bold text-gray-100 text-[1.25rem]">
              Total: R$ <span>103,88</span>
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-heading font-bold text-3xl text-gray-100">
            Pagamento
          </h3>
          <div className="min-w-[33.125rem] min-h-[24.25rem] mt-8 border-[1px] border-blue-400">
            <div className="w-full flex items-center">
              <button className="flex items-center justify-center gap-2 py-[1.75rem] border-b-[1px] border-r-[1px] border-blue-400 flex-1">
                <img src={pixLogoImg} alt="PIX Logo as a button icon" />
                PIX
              </button>
              <button className="flex items-center justify-center gap-2 py-[1.75rem] flex-1 border-b-[1px] border-blue-400">
              <img src={creditIconImg} alt="credit card as a button icon" />
                Crédito
              </button>
            </div>

            <div className="flex items-center justify-center my-[3.75rem]">
              { 
                isPix ? (
                  <img src={qrCodeImg} alt="exemplo de um QR Code" />
                ) : (
                  <div>
                    <Input 
                      label="Número do cartão"
                      type='text'
                      id="card-number"
                      placeholder="0000 0000 0000 0000"
                    />
                    <div>
                      <Input 
                        label="Validade"
                        type='text'
                        id="expire-date"
                        placeholder="04/25"
                      />
                      <Input 
                        label="CVC"
                        type='text'
                        id="code"
                        placeholder="076"
                      />
                    </div>

                    <Button 
                      type='submit'
                      title="Finalizar pagamento"
                    />
                  </div>
                ) 
              }
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}