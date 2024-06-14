// pages/_app.js

import KofiButton from './kofiButton';

const Header = () => {
  return (
    <header className="bg-white text-zinc-900 border-b-2 border-gray-300">
  <div className="max-w-screen-xl mx-auto px-4 flex items-center h-16">
    <a
      className="bg-cover bg-center px-20 py-20 cursor-pointer flex items-center justify-center"
      href="/"
      style={{
        backgroundImage: "url('/logo.png')",
      }}
    ></a>
    <ul className="hidden md:flex flex-1 min-w-0 justify-start items-center gap-4 marginLeft: 20px">
      <li>
        <a className="text-gray-500" href="/">
          Home
        </a>
      </li>
      <li>
        <a className="text-gray-500" href="/introduction">
          Introduction
        </a>
      </li>
    </ul>
    <div className="grow md:hidden"></div>
    {/* 假设这是你的 KofiButton 组件 */}
    <KofiButton />
  </div>
</header>

  );
};

export default Header;
