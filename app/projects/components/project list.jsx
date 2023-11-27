"use client";
import Image from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { useInView } from "react-intersection-observer";

import { projects } from "../contents/project";

export default function ProjectList() {
  return (
    <div className="my-4">
      <VerticalTimeline lineColor=''>
        {projects.map((project) => (
          <TimeLineElement
            key={project.id}
            project={project}
          />
        ))}
      </VerticalTimeline>
    </div>
  );
}

function TimeLineElement({ project }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className='vertical-timeline-element'
    >
      <VerticalTimelineElement
        visible={inView}
        icon={
          <Image
            src={project.icon}
            alt='project icon'
            className='rounded-full'
          />
        }
        date={project.date}
      >
        <div className='flex flex-col sm:flex-row gap-4 items-center'>
          <div>
            <Image
              src={project.img}
              alt='project image'
              className='aspect-square'
              width={16 * 10}
              height={16 * 10}
              priority
            />
          </div>
          <article className='grid'>
            <h3 className='text-3xl mb-2'>{project.title}</h3>
            <h4 className='mb-4'>{project.sub_title}</h4>
            <ul className='list-disc list-inside mb-4'>
              {project.desc.map((text, index) => (
                <li key={index}>{text}</li>
              ))}
            </ul>
            {project.url && (
              <button
                type='button'
                className='btn'
              >
                <a
                  href={project.url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  demo site
                </a>
              </button>
            )}
          </article>
        </div>
      </VerticalTimelineElement>
    </div>
  );
}
