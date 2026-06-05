import Image from "next/image";


export default function Login() {
  return (
 <div className="flex max-h-screen min-h-screen items-center justify-center bg-gray-100 p-10">

  <div id="login-card" className="flex flex-col md:flex-row md:h-150 w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden h-auto">
    
    <div id="left-side" className="flex flex-col w-full md:w-1/2 p-6 sm:p-10 justify-center">
      <div id="login-title" className="text-center">
        <h3 className="text-2xl font-bold mb-4">LOGIN</h3>
       
        <form className="flex flex-col justify-center items-center w-full  p-10 space-y-2">
           <p className="text-gray-600 mb-8">Acesse sua conta</p>
          <div id="user" className="flex items-center bg-gray-100 rounded-lg px-4 py-3 w-full max-w-sm border border-transparent focus-within:border-blue-500 transition-all ">
            <span className="text-gray-400 mr-3">👤</span>
            <input type="text" placeholder="Usuário" className="bg-transparent w-full outline-none text-sm text-gray-700"/>
          </div>
          <div id="password" className="flex items-center bg-gray-100 rounded-lg px-4 py-3 w-full max-w-sm border border-transparent focus-within:border-blue-500 transition-all ">
            <span className="text-gray-400 mr-3">🔒</span>
            <input type="password" placeholder="Senha" className="bg-transparent w-full outline-none text-sm text-gray-700"/>
          </div>
          <button id="login-button" className="w-full max-w-sm mt-6 bg-linear-to-r from-sulfibra-100 to-sulfibra-200 hover:from-sky-600 hover:to-sky-800 text-white font-medium py-3 rounded-xl shadow-md transition-colors text-sm">
            Entrar
          </button>
        </form>
    </div>
    </div>

    <div className="hidden md:block md:w-1/2 bg-sulfibra-200">
      <Image 
        src="/logo.png"       
        alt="Logo Sulfibra" 
        width={300}          
        height={100}         
        className="object-contain"
      />
    </div>

  </div>
</div>
  )
}