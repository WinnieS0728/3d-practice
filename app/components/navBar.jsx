export default function NavBar() {
  return (
    <>
      <header className='flex justify-between items-center p-4 z-10 backdrop-blur-md'>
        <a href='/'>
          <p className='text-3xl'>W</p>
        </a>
        <nav>
          <ul className='flex justify-center items-center gap-4 text-xl'>
            <li>
              <a href='/about'>about</a>
            </li>
            <li>
              <a href='/projects'>projects</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
