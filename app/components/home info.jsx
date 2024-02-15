import { Arrow } from "@assets/icons";

function InfoBox({ text, link, btnText }) {
  return (
    <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>{text}</p>
      <a
        href={link}
        className='neo-brutalism-white neo-btn'
      >
        {btnText}
        <Arrow />
      </a>
    </div>
  );
}

export default function HomeInfo({ currentState }) {
  switch (currentState) {
    case 2:
      return (
        <InfoBox
          text={"this is my practicing project using three.js"}
          link={"/about"}
          btnText={"learn more"}
        />
      );
    case 3:
      return (
        <InfoBox
          text={"here is my other 3d projects"}
          link={"/projects"}
          btnText={"view other 3D things"}
        />
      );
    case 4:
      return (
        <InfoBox
          text={"this is my project page this is my project page"}
          link={"/contact"}
          btnText={"contact me"}
        />
      );

    default:
      return null;
  }
}
