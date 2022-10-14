import { useState } from 'react';
import pinIcon from '../assets/pin.svg';
import UpdateModal from '../components/UpdateModal';
import NoteDataServices from '../services/note.services';
import { toast } from 'react-toastify';

const Card = ({ note, getNotes }) => {
  const [toggleUpdateModal, settoggleUpdateModal] = useState(false);
  const [pinClass, setPinClass] = useState('notDisplayPinButton');
  useState(() => {
    if (note.pinned) {
      setPinClass('displayPinButton');
    }
  }, []);
  const updateModalToggler = () => {
    settoggleUpdateModal(toggleUpdateModal ? false : true);
  };

  const togglePin = async () => {
    console.log('check');
    const updateNotePin = { ...note, pinned: note.pinned ? false : true };
    try {
      await NoteDataServices.togglePinNote(updateNotePin.id, updateNotePin);
      toast.success(` Successfully ${note.pinned ? 'UnPinned' : 'Pinned'} !`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      getNotes();
    } catch (error) {
      toast.error('Please Provide All Fields!', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
  };

  return (
    <>
      {toggleUpdateModal && (
        <UpdateModal
          note={note}
          updateModalToggler={updateModalToggler}
          getNotes={getNotes}
        />
      )}
      <div
        className="card m-2 cursor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200"
        onMouseEnter={(e) => {
          if (!note.pinned) {
            e.preventDefault();
            setPinClass('displayPinButton');
          }
        }}
        onMouseLeave={(e) => {
          if (!note.pinned) {
            e.preventDefault();
            setPinClass('notDisplayPinButton');
          }
        }}
      >
        <div className="flex justify-end w-2/2">
          <button
            className={`text-sm text-teal-800 font-mono bg-teal-100 rounded-full px-2 align-top float-right p-2 ${pinClass}`}
            onClick={togglePin}
          >
            <img src={pinIcon} alt="Cross Icon" />
          </button>
        </div>
        <div className="m-3" onClick={updateModalToggler}>
          <h2 className="text-lg font-bold uppercase mb-2">{note.title}</h2>
          <p className="text-sky-300 capitalize">{note.tagline}</p>
          <p className="font-light h-40 overflow-auto font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">
            {note.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
