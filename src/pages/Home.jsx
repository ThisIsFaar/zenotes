import { useState } from 'react';
import Card from '../components/Card';
import CreateModal from '../components/CreateModal';
import UpdateModal from '../components/UpdateModal';

const Home = () => {
  const [toggleUpdateModal, settoggleUpdateModal] = useState(false);
  const [toggleCreateModal, settoggleCreateModal] = useState(false);

  const createModalToggler = () => {
    settoggleCreateModal(toggleCreateModal ? false : true);
  };

  const updateModalToggler = () => {
    settoggleCreateModal(toggleCreateModal ? false : true);
  };

  return (
    <div className="h-screen">
      {toggleCreateModal && (
        <CreateModal createModalToggler={createModalToggler} />
      )}
      {toggleUpdateModal && (
        <UpdateModal updateModalToggler={updateModalToggler} />
      )}

      {/* Create Note Button */}
      <div className="p-8">
        <button
          class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-sky-300 group-hover:from-cyan-500 group-hover:to-sky-300 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
          onClick={createModalToggler}
        >
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Create New Note
          </span>
        </button>
      </div>

      <Card updateModalToggler={updateModalToggler} />
    </div>
  );
};

export default Home;
