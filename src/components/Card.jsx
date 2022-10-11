import { useState } from 'react';
import pinIcon from '../assets/pin.svg';

const Card = ({ updateModalToggler }) => {
  const [pinClass, setPinClass] = useState('notDisplayPinButton');
  return (
    <>
      <div
        class="card  w-screen m-2 cursor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200 md:w-1/3"
        onMouseEnter={(e) => {
          e.preventDefault();
          setPinClass('displayPinButton');
        }}
        onMouseLeave={(e) => {
          e.preventDefault();
          setPinClass('notDisplayPinButton');
        }}
      >
        <div className="flex justify-end w-2/2">
          <button
            className={`text-sm text-teal-800 font-mono bg-teal-100 rounded-full px-2 align-top float-right p-2 ${pinClass}`}
          >
            <img src={pinIcon} alt="Cross Icon" />
          </button>
        </div>
        <div class="m-3" onClick={updateModalToggler}>
          <h2 class="text-lg font-bold uppercase mb-2">
            Complete BeZen assignment
          </h2>
          <p className="text-sky-300 capitalize">
            internship assignment via internshala
          </p>
          <p class="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">
            Space, the final frontier. These are the voyages of the Starship
            Enterprise. Its five-year mission: to explore strange new worlds.
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
