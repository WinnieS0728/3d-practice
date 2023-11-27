import { Arrow } from "@assets/icons";

const renderContent = {
  1: null,
  2: (
    <InfoBox
      text={"this is my practicing project using three.js"}
      link={"/about"}
      btnText={"learn more"}
    />
  ),
  3: (
    <InfoBox
      text={"here is my other 3d projects"}
      link={"/projects"}
      btnText={"view other d3 things"}
    />
  ),
  4: (
    <InfoBox
      text={"this is my project page this is my project page"}
      link={"/contact"}
      btnText={"contact me"}
    />
  ),
};

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
  return renderContent[currentState] || null;
}