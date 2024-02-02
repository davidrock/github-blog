import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col h-screen w-screen bg-slate-200">
        <div className="m-auto">
          <div className="flex border p-2">{count}</div>
          <button className="bg-emerald-800 text-white p-2 w-fit rounded-lg active:bg-indigo-500 transition-colors" onClick={() => setCount((state) => state + 1)}>
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
