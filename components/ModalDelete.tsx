import React, { useRef } from 'react';

const ModalDelete = () => {
  return (
    <div
      style={{ backgroundColor: 'rgba(0,0,0,0.15)' }}
      className="fixed font-HKGrotesk w-full h-full inset-0 bg-transparent z-100 "
    >
      <div
        style={{ transform: 'translate(-50%, -50%)' }}
        className="absolute top-2/4 left-2/4 bg-white rounded-2xl w-50 h-20"
      >
        <div className="p-4">
          <p>Do you want to delete this contact?</p>
          <div className="flex items-center justify-center">
            <button className="mr-2 bg-lavanaRed rounded-2xl  text-white px-4 py-1">
              Delete
            </button>
            <button>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
