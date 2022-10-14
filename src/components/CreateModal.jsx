import { useState } from 'react';
import crossIcon from '../assets/cross.svg';
import NoteDataServices from '../services/note.services';
import { toast } from 'react-toastify';
const CreateModal = ({ createModalToggler, getNotes }) => {
  const [values, setValues] = useState({
    title: '',
    tagline: '',
    description: '',
  });
  const { title, tagline, description } = values;

  const createNote = async (e) => {
    e.preventDefault();

    if (title === '' || tagline === '' || description === '') {
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
      return;
    }
    const newNote = {
      ...values,
      pinned: false,
    };
    try {
      await NoteDataServices.addNote(newNote);
      createModalToggler();
      toast.success('Note Successfully added!', {
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
    } catch (err) {
      console.log(err.message);
    }
    setValues({ title: '', tagline: '', description: '' });
  };

  return (
    <div
      id="modal"
      tabIndex="-1"
      className="overflow-y-auto h-screen overflow-x-hidden  fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex"
      aria-modal="true"
      role="dialog"
      style={{
        zIndex: '5',
        backgroundColor: '#000000c2',
      }}
    >
      <div className="relative p-4 w-full  max-w-md h-full md:h-auto">
        <div className="card m-2 cursor-pointer  bg-white border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
          <div className="m-3">
            <div className="flex justify-end w-2/2">
              <button
                className="text-sm text-teal-800 inline w-12 font-mono bg-teal-100 rounded-full px-2 align-top p-2 "
                onClick={createModalToggler}
              >
                <img src={crossIcon} alt="Cross Icon" />
              </button>
            </div>

            <div className="flex flex-col">
              <input
                type="text"
                name="title"
                className="bg-gray-50 my-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Add title"
                value={title}
                onChange={(event) => {
                  setValues({ ...values, title: event.target.value });
                }}
              />
              <input
                type="text"
                name="tagline"
                placeholder="Add Tagline"
                className="bg-gray-50 my-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white "
                value={tagline}
                onChange={(event) => {
                  setValues({ ...values, tagline: event.target.value });
                }}
              />
              <input
                type="text"
                className="bg-gray-50 my-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Add Description"
                name="description"
                value={description}
                onChange={(event) => {
                  setValues({ ...values, description: event.target.value });
                }}
              />
            </div>
            <div className="flex justify-center">
              <button
                onClick={createNote}
                className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Create
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateModal;
