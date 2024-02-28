
export default function Header({ setIsOpen }) {
    return (
      <header className="flex justify-between p-4">
        <button
          className=" text-white rounded "
          onClick={() => setIsOpen(true)}
        >
           <svg xmlns="http://www.w3.org/2000/svg" className="w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
  
        </button>
      </header>
    );
  }
  