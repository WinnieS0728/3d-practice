import Image from "next/image";
import * as imgs from "@assets/images";

export default function AboutMe() {
  return (
    <section>
      <h1 className='uppercase text-3xl text-center'>about me</h1>
      <article className='flex justify-center items-center px-16 py-8 gap-24'>
        <Image
          src={imgs.logo}
          alt='my pic'
          className='rounded-tl-[60%] rounded-tr-[40%] rounded-bl-[40%] rounded-br-[55%]'
        />
        <div className='grid'>
          <h2 className='w-full text-2xl py-4 capitalize'>{"frontend developer"}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            dicta laudantium mollitia velit cupiditate architecto ex iste
            soluta, placeat vel iusto nostrum nobis incidunt? Corporis maxime
            omnis ex magni dicta.
          </p>
        </div>
      </article>
    </section>
  );
}
