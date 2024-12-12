import { useCallback, useEffect, useRef, useState } from "react";

function App() {
    const [length, setLength] = useState(8);
    const [numAllowed, setnumAllowed] = useState(true);
    const [charAllowed, setcharAllowed] = useState(true);
    const [password, setPassword] = useState("");
    const passref = useRef(null);

    const copyToClipboard = () => {
        window.navigator.clipboard.writeText(password)
        passref.current?.select()
        passref.current?.setSelectionRange(0,101)
    }

    const passwordGenerator = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if(numAllowed) str += "0123456789";
        if(charAllowed) str += "~`!@#$%^&*()_-+{}[]<>?/|";

        for (let i = 0; i < length; i++) {
            pass += str.charAt(Math.floor(Math.random() * str.length + 1));
        }
        setPassword(pass)
    }, [length, numAllowed, charAllowed, setPassword])

    useEffect(() => {
      passwordGenerator()
    }, [length, numAllowed, charAllowed, passwordGenerator])
    
    return (
        <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white min-w-full h-screen flex justify-center items-center flex-col gap-6 text-xl">
            <div className="text-center text-5xl">Password Generator</div>
            <div className="flex justify-center items-center flex-col gap-6">
                <div className="flex justify-center items-center min-w-full">
                    <input
                        className="min-w-full p-2 rounded-xl text-orange-700 outline-none font-semibold"
                        type="text"
                        placeholder="Password"
                        value={password}
                        min={8}
                        max={100}
                        ref={passref}
                        readOnly
                    />

                    <button 
                    className="bg-indigo-800 p-2 rounded-xl"
                    onClick={copyToClipboard}
                    >
                        Copy
                    </button>
                </div>
                <div>
                    <div className="flex justify-center items-center gap-3">
                        <input
                            type="range"
                            name="passlength"
                            id="passlength"
                            onChange={(e) => setLength(e.target.value)}
                        />
                        <label htmlFor="passlength">Length : {length}</label>

                        <input
                            type="checkbox"
                            name="numAllowed"
                            defaultChecked={numAllowed}
                            id="numberscheckbox"
                            onChange={() => setnumAllowed(prev => !prev)}
                            />
                        <label htmlFor="numberscheckbox">numbers</label>

                        <input
                            type="checkbox"
                            defaultChecked={charAllowed}
                            name="charactersAllowed"
                            id="charscheckbox"
                            onChange={() => setcharAllowed(prev => !prev)}
                        />
                        <label htmlFor="charscheckbox">characters</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
