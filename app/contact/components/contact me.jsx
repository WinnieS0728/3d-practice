import React from "react";

export default function ContactMe({ text }) {
  return (
    <section className='grid mx-auto gap-4 sm:grid-cols-2 place-items-center'>
      <h3 className='capitalize text-3xl font-semibold text-blue-500 leading-snug lg:text-4xl'>
        {text}
      </h3>
      <div className='text-center border-blue-300 sm:border-l-8 w-full'>
        <p className='text-xl mb-2'>send me an Email now !!</p>
        <button
          type='button'
          className='btn'
        >
          <a
            href='/contact'
            className='text-xl'
          >
            contact me
          </a>
        </button>
      </div>
    </section>
  );
}
