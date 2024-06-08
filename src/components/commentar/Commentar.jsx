export function Commentar(){
    return(
        <section>
            <div className="flex flex-col items-center justify-center h-screen dark">
  <div className="w-full max-w-md rounded-lg shadow-md p-6">

    <form className="flex flex-wrap">
      <input
        type="text"
        className=" bg-[#0F0920] text-gray-200 border border-[#0368FF] rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
        placeholder=" Dinho Silva"
      />
      <input
  type="image"
  className="bg-black rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full md:w-[48%] ml-[2%] text-white opacity-50"
  placeholder="Upload"  />
    <input
        type="email"
        className=" bg-[#0F0920] text-gray-200 border border-[#0368FF] rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-[100%]"
        placeholder="Seuemail@example.com"
      />
    
      <textarea
        name="message"
        className="bg-[#0F0920] text-gray-200 border border-[#0368FF] rounded-md p-2 mb-auto md:mb-auto md:w-full md:h-auto md:min-h-[100px] md:max-h-[100px] md:flex-grow md:flex-shrink md:flex-auto focus:bg-gray-md:focus:outline-none:focus:ring-blue-md:focus:border-transparent transition ease-in-out duration-fastest"
        placeholder="Deixe o seu comentario"
      ></textarea>

    </form>
  </div>
</div>

        </section>
    )
}