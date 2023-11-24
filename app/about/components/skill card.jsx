import { cn } from "@/src/utils/cn";
import Image from "next/image";
export function SkillCard({ src, title, decorate_class, border_class }) {
  return (
    <>
      <div
        className={cn(
          "rounded-md shadow-xl border border-black/5 relative overflow-hidden",
          border_class
        )}
      >
        <div className='flex items-center gap-2 px-4 py-2'>
          <Image
            src={src}
            alt={`${title} skill`}
            height={16 * 5}
            width={16 * 5}
            className='aspect-square m-4'
          />
          <article>
            <h3 className='text-xl'>{title}</h3>
          </article>
        </div>
        <div
          className={cn("absolute w-full h-2 bottom-0", decorate_class)}
        ></div>
      </div>
    </>
  );
}
