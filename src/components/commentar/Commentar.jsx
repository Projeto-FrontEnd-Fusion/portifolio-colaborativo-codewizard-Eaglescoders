import foto from '/src/assets/image.png';

export function Commentar(){
    return(
      <section className='pt-24'> 
  <div className='flex justify-center   '>
  <h2 className="border-b-2 border-b-[#f0f0f0] md:inline text-[23px] font-mulish text-[#B5B3BC] p-3 px-[100px]">Deixe o seu comentário</h2>

  </div>
       
  <section className="flex flex-col md:flex-row justify-around px-1 md:px-24">  
  <div className="flex flex-col items-center h-98 custom:h-125 dark">
      <div className="rounded-lg shadow-md p-1">

        <form className="pt-24 w-full max-w-lg flex flex-wrap p-1">
          <input
            type="text"
            className="bg-[#0F0920] text-gray-200 border border-[#0368FF] rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 
            transition ease-in-out duration-150 h-14 w-full md:w-3/4 mr-2%"
            placeholder="Dinho Silva"
          />
      
          {/* Substitua o SVG inline por um componente, se necessário */}
          <div className="bg-black flex flex-row justify-center items-center gap-3 cursor-pointer text-[#f0f0f0] 
            h-14 p-2 w-full md:w-1/4 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          >
    <svg className="w-6 h-6" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18.5 20C18.5 18.4087 17.8679 16.8826 16.7426 15.7574C15.6174 14.6321 14.0913 14 12.5 14C10.9087 14 9.38258 14.6321 8.25736 15.7574C7.13214 16.8826 6.5 18.4087 6.5 20" stroke="#EBEBEB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M12.5 14C14.7091 14 16.5 12.2091 16.5 10C16.5 7.79086 14.7091 6 12.5 6C10.2909 6 8.5 7.79086 8.5 10C8.5 12.2091 10.2909 14 12.5 14Z" stroke="#EBEBEB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z" stroke="#EBEBEB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
</svg>


            <p>Upload</p>
          </div>

          <input
            type="email"
            className="bg-[#0F0920] text-gray-200 border border-[#0368FF] h-14 w-full
            rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500
            transition ease-in-out duration-150"
            placeholder="Seuemail@example.com"
          />
          <textarea
            name="message"
            className="bg-[#0F0920] text-gray-200 border border-[#0368FF] rounded-md p-2 mb-4 
            focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out
            duration-150 w-full h-36"
            placeholder="Deixe o seu comentário"
          ></textarea>
        </form>
      </div>
    </div>
    <div className='flex justify-center items-center pt-[65px] custom:pt-0 custom:pt-24 ml-15 custom:ml-0 lg-custom:flex-col'>


    <div className='h-72 rounded-lg p-7 m-0 bg-[#221C3E] w-full max-w-lg custom:items-center custom:justify-center flex flex-col'>


  <main className="text-white">
  <p className="text-base md:text-[12px] lg:text-[14px] w-full">
   Vejo um potencial incrível no Frontend Fusion. A colaboração é a essência do avanço tecnológico, e vocês capturaram isso de forma brilhante. Achei inspirador.
     Recomendo focar na escalabilidade do projeto para garantir que a estrutura possa crescer sem comprometer a qualidade.
    </p>
  </main>
  <footer className="p-2.5 text-white flex flex-row">
    <img className="w-12 h-auto rounded-xl" src={foto} alt="" />
    
    <span className='pl-2.5'>
      <h3>Guido van Rossum</h3>
      <p className='text-xs text-gray-200'>Criador do Python</p>
    </span>
  </footer>

  <div className='flex flex-row justify-end gap-x-2 pt-2'>
  <button className='border border-blue-500 rounded-md px-2 md:px-3 lg:px-2 bg-blue-600 text-white'>Confirmar</button>
  <button className='border border-blue-500 rounded-md px-4 md:px-5 lg:px-4 text-white bg-transparent hover:bg-blue-500
   hover:text-white'>Limpar</button>
</div>

</div>

</div>


        </section>
        </section>
    )
}
