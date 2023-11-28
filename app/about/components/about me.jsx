import Image from "next/image";
import * as imgs from "@assets/images";
import { Arrow } from "@assets/icons";

export default function AboutMe() {
  return (
    <section>
      {/* <h1 className='uppercase text-3xl text-center'>about me</h1> */}
      <article className='flex justify-center md:justify-start items-center px-16 py-8 gap-24'>
        <Image
          src={imgs.logo}
          alt='my pic'
          className='rounded-tl-[60%] rounded-tr-[40%] rounded-bl-[40%] rounded-br-[55%] hidden md:block w-1/3'
          priority
        />
        <div className='grid'>
          <div className='flex justify-center items-center gap-4 py-4 '>
            <Image
              src={imgs.logo}
              alt='my pic'
              className='rounded-full aspect-square w-24 md:hidden'
              priority
            />
            <h2 className='text-5xl capitalize'>WinnieS</h2>
          </div>
          <ul className='border-l-4 px-4 py-2 mb-8 list-inside leading-normal'>
            <li className="list-['🧑🏻‍💻']"> junior frontend developer</li>
            <li className="list-['🎶']"> music lover</li>
          </ul>
          <a
            href='https://linktr.ee/WinnieS0728'
            target='_blank'
            rel='noopener noreferrer'
            className='btn flex justify-center items-center gap-2'
          >
            more about me <Arrow color='white' />
          </a>
        </div>
      </article>
    </section>
  );
}
