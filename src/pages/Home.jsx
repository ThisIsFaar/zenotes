import { useEffect, useState } from 'react';
import Card from '../components/Card';
import CreateModal from '../components/CreateModal';
import { data } from '../data';
import NoteDataServices from '../services/note.services';
const Home = () => {
  const [toggleCreateModal, settoggleCreateModal] = useState(false);
  const [notes, setNotes] = useState([]);
  const createModalToggler = () => {
    settoggleCreateModal(toggleCreateModal ? false : true);
  };

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    const notes = await NoteDataServices.fetchAllNotes();
    setNotes(notes.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  console.log(notes);
  return (
    <div className="h-auto">
      {toggleCreateModal && (
        <CreateModal
          createModalToggler={createModalToggler}
          getNotes={getNotes}
        />
      )}

      {/* Create Note Button */}
      <div className="p-8">
        <button
          className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-sky-300 group-hover:from-cyan-500 group-hover:to-sky-300 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
          onClick={createModalToggler}
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Create New Note
          </span>
        </button>
      </div>
      <div
        className="flex flex-wrap justify-center items-center"
        style={{
          height: notes.length < 1 && '70vh',
        }}
      >
        {notes.length < 1 &&
          'No notes found add some or wait while fetching from server...'}
        {notes
          .filter((note) => note.pinned === true)
          .map((note, id) => {
            return <Card key={id} note={note} getNotes={getNotes} />;
          })}
        {notes
          .filter((note) => note.pinned !== true)
          .map((note, id) => {
            return <Card key={id} note={note} getNotes={getNotes} />;
          })}
      </div>
    </div>
  );
};

export default Home;
