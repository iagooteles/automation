// tentar mudar color input 

import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-24 w-auto" src="https://logospng.org/download/3-coracoes/logo-3-coracoes-1024.png" alt="3 corações" />
        <h2 class="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-amber">Login</h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
            <div class="mt-2">
              <input id="email" name="email" type="email" required class="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-amber placeholder:text-red-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-inherit sm:text-sm sm:leading-6 p-2.5" />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Senha</label>
              <div class="text-sm">
                <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Esqueceu a senha?</a>
              </div>
            </div>
            <div class="mt-2">
              <input id="password" name="password" type="password" required class="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-amber placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2.5" />
            </div>
          </div>
          <div>
            <Link to='registry'>
              <button type="submit" class="flex w-full justify-center rounded-md bg-amber px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"> Entrar </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
