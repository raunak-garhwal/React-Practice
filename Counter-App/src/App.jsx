import { useState } from "react";
import './index.css'

function App() {

    let [count,setCount] = useState(10);

    const addCount = () => { if (count < 20) setCount(count + 1) }
    const subCount = () => { if (count > 1) setCount(count - 1) }

    return (
        <div className="flex w-full h-screen items-center justify-center flex-col bg-gradient-to-r from-indigo-800 to-orange-700 gap-4 font-bold">
            <div className="flex items-center justify-center flex-col gap-5 bg-gradient-to-r from-pink-700 to-blue-900 p-7 rounded-3xl shadow-2xl">
                <h1 className="text-4xl text-white text-center uppercase">
                    Basic Counter App
                </h1>
                <div className="text-4xl text-white bg-slate-900 p-3 rounded-2xl">
                    {count}
                </div>
                <div className="flex items-center justify-center gap-4">
                    <button onClick={addCount} className="uppercase bg-black text-white rounded-xl p-2">Increase</button>
                    <button onClick={subCount} className="uppercase bg-black text-white rounded-xl p-2">Decrease</button>
                </div>
            </div>
        </div>
    );
}

export default App;
