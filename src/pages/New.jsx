import * as Select from '@radix-ui/react-select';
import { UploadSimple, CaretDown, CaretUp, Check } from "phosphor-react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { BackButton } from "../components/BackButton";
import { Input } from "../components/Input";

export function New() {
  return(
    <>
      <Header />

      <div className="max-w-[1120px] h-screen mx-auto">
        <BackButton />
        <h2 className="font-heading font-medium text-[32px] mt-6 mb-8">
          Criar prato
        </h2>

        
        <form className="">
          <div className="flex items-center gap-8">
            <label htmlFor="image">
              Imagem do prato
              <div className="flex items-center w-[250px] gap-2 mt-2 px-8 py-3 border-2 rounded-lg cursor-pointer hover:bg-blue-600">
                <UploadSimple size={24} weight="regular" />
                <span className="font-heading font-medium text-sm">
                  Selecione a imagem
                </span>
                <input
                  className="hidden"
                  id="image" 
                  type="file"
                />
              </div>
            </label>

            <Input label="Nome" type="text" id="name" placeholder="Ex: Salada Ceasar" />
            
            {/* <Select.Root>
              <Select.Trigger aria-label="category" className="flex items-center justify-center gap-2 border-2 rounded-md mt-9 p-2 relative">
                <Select.Value placeholder="Categoria" />
                <Select.Icon>
                  <CaretDown size={24} weight="regular" />
                </Select.Icon>
              </Select.Trigger>
              <Select.Portal>
                <Select.Content>
                  <Select.ScrollUpButton className="flex items-center justify-center text-gray-700" >
                    <CaretUp size={24} weight="regular" />
                  </Select.ScrollUpButton>
                  <Select.Viewport className="bg-white p-2">
                    <Select.Group>
                      <Select.Item className="text-white text-sm font-normal bg-red-500" value="main">Prato Principal</Select.Item>
                      <Select.Item className="text-white text-sm font-normal bg-red-500" value="dessert">Sobremesa</Select.Item>
                      <Select.Item className="text-white text-sm font-normal bg-red-500" value="drink">Bebida</Select.Item>
                    </Select.Group>
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root> */}
            <Select.Root>
              <Select.Trigger aria-label="category" className="flex items-center justify-center gap-2 border-2 rounded-md mt-8 p-2 relative">
                  <Select.Value placeholder="Categoria" />
                  <Select.Icon className="ml-2">
                    <CaretDown size={24} weight="regular" />
                  </Select.Icon>
              </Select.Trigger>
              <Select.Content>
                <Select.ScrollUpButton className="flex items-center justify-center text-gray-700 dark:text-gray-300">
                  <CaretUp />
                </Select.ScrollUpButton>
                <Select.Viewport className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg">
                  <Select.Group>
                    {["main", "dessert", "drink"].map(
                      (category, i) => (
                        <Select.Item
                          key={`${category}-${i}`}
                          value={category.toLowerCase()}
                          className="relative flex items-center px-8 py-2 rounded-md text-sm text-gray-700 dark:text-gray-300 font-medium focus:bg-gray-100 dark:focus:bg-gray-900"
                        >
                          <Select.ItemText>
                            {
                              category === "main" ? "Principal" : category === "dessert" ? "Sobremesa" : "Bebida"
                            }
                          </Select.ItemText>
                          <Select.ItemIndicator className="absolute left-2 inline-flex items-center">
                            <Check />
                          </Select.ItemIndicator>
                        </Select.Item>
                      )
                    )}
                  </Select.Group>
                </Select.Viewport>
                <Select.ScrollDownButton className="flex items-center justify-center text-gray-700 dark:text-gray-300">
                  <CaretDown />
                </Select.ScrollDownButton>
              </Select.Content>
            </Select.Root>
          </div>

          <div className="flex items-center gap-8 mt-8">
            <Input label="Ingredientes" type="text" id="ingredients" placeholder="Adicionar" />
            <Input label="Preço" type="text" id="price" placeholder="R$ 0,00" />
          </div>
        </form>
        
      </div>

      <Footer />
    </>
  )
}