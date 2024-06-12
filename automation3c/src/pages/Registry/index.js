// tentar mudar color input 

// utf enconding??

import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Registry() {
  const [codigo, setCodigo] = useState('');
  const [marca, setMarca] = useState('');
  const [tipo, setTipo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [preco, setPreco] = useState('');
  const [custo, setCusto] = useState('');
  const [observacoes, setObservacoes] = useState('');
  const notify = async () => { codigo === '' ? toast(`Por favor digite um produto.`) : toast(`${marca}/${tipo} cadastrado com sucesso. :)`) };

  const handleRegistry = async () => {
    await notify();

    resetAllInputs();
  }

  const resetAllInputs = () => {
    setCodigo('');
    setMarca('');
    setTipo('');
  }

  const handleCodigoChange = (event) => {
    setCodigo(event.target.value);
  }

  const handleMarcaChange = (event) => {
    setMarca(event.target.value);
  }

  const handleTipoChange = (event) => {
    setTipo(event.target.value);
  }

  const handleCategoriaChange = (event) => {
    setCategoria(event.target.value);
  }

  const handlePrecoChange = (event) => {
    setPreco(event.target.value);
  }

  const handleCustoChange = (event) => {
    setCusto(event.target.value);
  }

  const handleOBSChange = (event) => {
    setObservacoes(event.target.value);
  }

  return (
    <>
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <img class="mx-auto h-24 w-auto" src="https://logospng.org/download/3-coracoes/logo-3-coracoes-1024.png" alt="3 corações" />
          <h2 class="mt-5 text-center text-3xl font-bold leading-9 tracking-tight text-amber">Cadastre seu produto</h2>
        </div>

        <div class="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form class="space-y-6" action="#">
            <div>
              <label for="codigo" class="block text-sm font-medium leading-6 text-gray-900">Código do Produto</label>
              <div class="mt-1">
                <input id="codigo" name="codigo" type="codigo"
                  value={codigo} onChange={handleCodigoChange}
                  class="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-amber placeholder:text-red-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-inherit sm:text-sm sm:leading-6 p-2.5" />
              </div>
            </div>

            <div>
              <label for="marca" class="block text-sm font-medium leading-6 text-gray-900">Marca</label>
              <div class="mt-1">
                <input id="marca" name="marca" type="marca"
                  value={marca} onChange={handleMarcaChange}
                  class="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-amber placeholder:text-red-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-inherit sm:text-sm sm:leading-6 p-2.5" />
              </div>
            </div>

            <div>
              <label for="tipo" class="block text-sm font-medium leading-6 text-gray-900">Tipo do Produto</label>
              <div class="mt-1">
                <input id="tipo" name="tipo" type="tipo"
                  value={tipo} onChange={handleTipoChange}
                  class="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-amber placeholder:text-red-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-inherit sm:text-sm sm:leading-6 p-2.5" />
              </div>
            </div>

            <div>
              <label for="categoria" class="block text-sm font-medium leading-6 text-gray-900">Categoria do Produto</label>
              <div class="mt-1">
                <input id="categoria" name="categoria" type="categoria"
                  value={categoria} onChange={handleCategoriaChange}
                  class="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-amber placeholder:text-red-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-inherit sm:text-sm sm:leading-6 p-2.5" />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label for="preco" class="block text-sm font-medium leading-6 text-gray-900">Preço Unitário do produto</label>
              </div>
              <div class="mt-1">
                <input id="preco" name="preco" type="preco"
                  value={preco} onChange={handlePrecoChange}
                  class="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-amber placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2.5" />
              </div>
            </div>

            <div>
              <label for="custo" class="block text-sm font-medium leading-6 text-gray-900">Custo do Produto</label>
              <div class="mt-1">
                <input id="custo" name="custo" type="custo"
                  value={custo} onChange={handleCustoChange}
                  class="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-amber placeholder:text-red-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-inherit sm:text-sm sm:leading-6 p-2.5" />
              </div>
            </div>

            <div>
              <label for="obs" class="block text-sm font-medium leading-6 text-gray-900">Observações Gerais</label>
              <div class="mt-1">
                <input id="obs" name="obs" type="obs"
                  value={observacoes} onChange={handleOBSChange}
                  class="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-amber placeholder:text-red-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-inherit sm:text-sm sm:leading-6 p-2.5" />
              </div>
            </div>

            <div>
              <button type="submit"
                onClick={handleRegistry}
                class="flex w-full justify-center rounded-md bg-amber px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Cadastrar produto
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer 
        limit={5}
        autoClose={1500}
      />

    </>
  )
}
