import Card from './Card';
import crossIcon from '../assets/cross.svg';

const CreateModal = ({ createModalToggler }) => {
  return (
    <div
      id="authentication-modal"
      tabIndex="-1"
      className="overflow-y-auto overflow-x-hidden  fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex"
      aria-modal="true"
      role="dialog"
      style={{
        zIndex: '5',
        backgroundColor: '#000000c2',
      }}
    >
      <div className="relative p-4 w-full  max-w-md h-full md:h-auto">
        <div class="card m-2 cursor-pointer  bg-white border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
          <div class="m-3">
            <div className="flex justify-end w-2/2">
              <button
                className="text-sm text-teal-800 inline w-12 font-mono bg-teal-100 rounded-full px-2 align-top p-2 "
                onClick={createModalToggler}
              >
                <img src={crossIcon} alt="Cross Icon" />
              </button>
            </div>
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
      </div>
    </div>
  );
};

export default CreateModal;
