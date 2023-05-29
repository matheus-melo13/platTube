import Image from "next/image";
import Logo from "public/logo.svg";
import Banner from "public/banner.svg";

const Home = () => {
  return (
    <main className = 'bg-blur-background lg:bg-blur-bg-desktop lg:bg-cover lg:bg-center'>
      <div className="lg:flex lg:px-28 lg:justify-between lg:pt-20">
        <section className="flex flex-col gap-y-6 pt-10 justify-center items-center p-6 lg:items-start lg:max-w-[624px] lg:p-0">
          <Image src={Logo} alt='Logo' width={208} height={29}/>
          <p className="text-center text-3xl lg:text-start">
          Construa uma <span className="text-bluerr font-bold">aplicação completa</span>, do zero, com <span className="text-bluerr font-bold">React JS</span>
          </p>
          <p className="text-grayrr6 text-sm text-center lg:text-start lg:text-base">
          Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </section>

        <div className="bg-grayrr2 px-6 py-8 flex flex-col gap-6 lg:max-w-[391px] lg:w-full lg:rounded lg:border lg:border-solid lg:border-grayrr4">
          <h3 className="font-bold text-lg">Inscreva-se gratuitamente</h3>
          <div className="flex flex-col gap-2">
            <input className="bg-grayrr1 px-5 py-[19px] rounded-{5px}" type="text" placeholder="Seu nome completo"/>
            <input className="bg-grayrr1 px-5 py-[19px] rounded-{5px}" type="email" name="" id="" placeholder="Digite seu email"/>
          </div>
          <button className="bg-greenn py-4 text-whitee rounded">Garantir minha vaga</button>
        </div>
      </div>
      
      <div className="w-[362px] h-[235px] relative lg:w-[1216px] lg:h-[650px] lg:m-auto">
        <Image src={Banner} alt="Banner" fill/>
      </div>
      

      <footer className="text-grayrr6 text-sm bg-grayrr1 p-[25px] text-center">Política de Privacidade</footer>
    </main>
  )
}

export default Home;