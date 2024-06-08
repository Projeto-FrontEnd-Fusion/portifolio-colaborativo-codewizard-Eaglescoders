import React from "react";
import ReactDOM from "react-dom/client";
import { AboutProject } from "./components/about-project";
import { Comments } from "/src/components/comments/Comments";
import { HeroSection } from "./components/hero";
import "./index.css";
import { Commentar } from "./components/commentar/Commentar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main className="flex flex-col  bg-blueBg-0"> {/* Não mexer aqui por favor! */}
       <HeroSection/>
      <span>[Coloque aqui a sessão de benefits]</span>
      <span>[Coloque aqui a sesão de tech-and-lang]</span>
      <span>[Coloque aqui a sesão de team]</span>
      <AboutProject />
      <section className=" bg-[#0F0920]">
        
      <h2 className="text-[#B5B3BC] p-20 text-center text-[25px] ">Comentários e avaliações</h2>

      <section className="flex flex-row justify-around"> 
      
  <Comments />
  <Comments />
  <Comments />
  </section>
  <Commentar/>
</section>
      <span>[Coloque aqui o cabecalho]</span> 
    </main>
  </React.StrictMode>
);
