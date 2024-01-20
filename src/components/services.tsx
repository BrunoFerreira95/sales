/**
 * v0 by Vercel.
 * @see https://v0.dev/t/MSgpXdDjdf1
 */
export default function Services() {
  return (
    <main className="py-6 sm:py-12 md:py-24 lg:py-32">
      <div className="container px-2 sm:px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-2 sm:space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter">
              Nossos serviços
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl dark:text-gray-400">
              Explore a ampla gama de serviços que oferecemos aos nossos clientes.
            </p>
          </div>
        </div>
      </div>
      <section className="container px-2 sm:px-4 md:px-6 py-6 sm:py-12 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card shadow-lg">
            <div className="card-header p-4">
              <h2 className="text-xl font-bold">Desenvolvimento Aplicativo PWA</h2>
            </div>
            <div className="card-content p-4">
              <p className="text-gray-500">Autenticação</p>
              <p className="text-gray-500">Painel de Controle</p>
              <p className="text-gray-500">Operações CRUDS</p>
              <p className="text-gray-500">WebHOOK</p>
              <p className="text-gray-500">Performace</p>
              <p className="text-gray-500">Mac/Windows/Linux | Android/IOS | WEB</p>
            </div>
          </div>
          <div className="card shadow-lg">
            <div className="card-header p-4">
              <h2 className="text-xl font-bold">SEO</h2>
            </div>
            <div className="card-content p-4">
              <p className="text-gray-500">Configuração Analitys | Search Console</p>
              <p className="text-gray-500">Check list de vida</p>
            </div>
          </div>
          <div className="card shadow-lg">
            <div className="card-header p-4">
              <h2 className="text-xl font-bold">Construção de Serviço de Streaming</h2>
            </div>
            <div className="card-content p-4">
              <p className="text-gray-500">Conversão de protocolo RTSP para M3U8</p>
              <p className="text-gray-500">Configuração de SSL/TL</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

