

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center  justify-center z-50 bg-black bg-opacity-50">
      <dialog
        open
        className="relative p-0 border-2 h-[550px] border-gray-300 w-11/12 md:w-1/2 mx-auto"
      >
        {/* Header with blue background */}
        <div className="bg-[#2F3573] text-white flex justify-between items-center px-8 py-2">
          <p className="text-md font-bold">Applications</p>
          <p className="text-md font-bold">Email</p>
          <p className="text-md font-bold">Download CV</p>
        </div>

        {/* Content area */}
        <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        
          <div className="flex flex-col gap-4">
            {children}
          </div>
        </div>

        {/* Close button at the bottom right corner */}
        <div className="absolute bottom-4 right-4">
          <button
            onClick={onClose}
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            Close
          </button>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
