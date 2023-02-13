import { useState , useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Input } from "postcss";
import Background from "./assets/background.jpg"

function App() {
  const [plainText, setPlainText] = useState("");
  const [hash, setHash] = useState("");
  const [visibleStatus , setVisibleStatus] = useState(false);

  const handleOnClick = (plainText) => {
    setVisibleStatus(true)
    const hash = CryptoJS.MD5(plainText);

    setHash(hash.toString());
  };

  useEffect(() => {
    if(!plainText){
      setVisibleStatus(false);
    }
  }, [plainText])
  

  return (
    <div className=" flex h-screen w-full " style={{
      backgroundImage: `url(${Background})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}>

      <div className="flex justify-center items-center w-full">

        <div className="flex flex-col gap-3">
        <div className="flex gap-1 items-center ">
          <input
            type="text"
            className=" w-full px-3 py-2 text-base font-normal text-white bg-transparent bg-clip-padding border border-solid border-gray-300  rounded m-0 focus:text-white   focus:border-white focus:outline-none"
            value={plainText}
            onChange={(e) => setPlainText(e.target.value)}
          />

          <button
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 dark:border-gray-700"
            onClick={() => handleOnClick(plainText)}
          >
            Encrypt
          </button>
        </div>
        {/* <p className="text-purple-500"> {hash} </p> */}
        { visibleStatus &&
            <div className="flex flex-col gap-3">
            <input
                type="text"
                className=" w-full px-3 py-2 text-base font-normal h-16 text-white bg-transparent bg-clip-padding border border-solid border-gray-300  rounded m-0 focus:text-white   focus:border-white focus:outline-none"
                value={plainText ? hash : ""} 
                readOnly={true}
              />
              <button
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 dark:border-gray-700"
                onClick={() => {navigator.clipboard.writeText(hash)}}
              >
                Copy to Clipboard
              </button>
            </div>
        }    
        </div>
      </div>
    </div>
  );
}

export default App;
