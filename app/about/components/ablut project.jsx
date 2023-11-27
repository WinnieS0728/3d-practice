import { SkillCard } from "./skill card";
import * as icons from "@assets/icons";

export default function AboutProject() {
  return (
    <>
      <section>
        <h2 className='text-3xl py-2'>This project is make with...</h2>
        <hr className='my-2 bg-white border-0 h-1' />
        <article className='grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-4 justify-center items-center'>
          <SkillCard
            src={icons.nextjs}
            title='Next JS'
            decorate_class={"bg-[#192334]"}
            border_class={"border-b-[#192334]"}
          />
          <SkillCard
            src={icons.react}
            title='React'
            decorate_class={"bg-[#54C2DF]"}
            border_class={"border-b-[#54C2DF]"}
          />
          <SkillCard
            src={icons.threejs}
            title='Three.js'
            decorate_class={"bg-[#000000]"}
            border_class={"border-b-[#000000]"}
          />
          <SkillCard
            src={icons.tailwindcss}
            title='tailwind css'
            decorate_class={"bg-[#44A8B3]"}
            border_class={"border-b-[#44A8B3]"}
          />
          <SkillCard
            src={icons.javascript}
            title='javascript'
            decorate_class={"bg-[#F0DC4F]"}
            border_class={"border-b-[#F0DC4F]"}
          />
        </article>
      </section>
    </>
  );
}
