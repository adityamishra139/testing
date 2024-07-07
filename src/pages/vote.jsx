import React from 'react';

function Vote() {
  const handleVoteFor = () => {
    alert('You voted for the motion');
  };

  const handleVoteAgainst = () => {
    alert('You voted against the motion');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white bg-opacity-50 p-8 rounded-lg shadow-md text-center w-80">
        <h2 className="text-2xl mb-4">Voting App</h2>
        <button
          onClick={handleVoteFor}
          className="bg-blue-500 text-white py-2 px-4 rounded-full mb-4 w-full hover:bg-blue-700 transition duration-300"
        >
          Vote for the Motion
        </button>
        <button
          onClick={handleVoteAgainst}
          className="bg-red-500 text-white py-2 px-4 rounded-full w-full hover:bg-red-700 transition duration-300"
        >
          Vote Against the Motion
        </button>
      </div>
    </div>
  );
}

export default Vote;
