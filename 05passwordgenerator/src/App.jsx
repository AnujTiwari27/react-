import { useState , useCallback , useEffect , useRef} from 'react'

import './App.css'

function App() {
  const [length , setlength] = useState(8)
  const [numAllowed , setnumAllowed] = useState(false);
  const [charAllowed , setCharAllowed] = useState(false);
  const [password , setpassword] = useState("")

  //use Ref hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*_-+=[]{}~`"

    for(let i=1 ; i<=length; i++){
      let char = Math.floor(Math.random()*str.length + 1)

      pass += str.charAt(char)
    }

    setpassword(pass)

  },[length , numAllowed , charAllowed , setpassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    //passwordRef.current?.setSelectionRange(0 ,20)
    window.navigator.clipboard.writeText(password)

  },[password])
  
  useEffect(() => {
    passwordGenerator()
  },[length, numAllowed , charAllowed , passwordGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md
    rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center
       my-3 '>Password generator</h1>

    
    <div className="flex shadow rounded-lg overflow-
    didden mb-4">
      <input 
      type="text"
      value={password}
      className="outline-none w-full py-1 px-3"
      placeholder="Password"
      readOnly
      ref = {passwordRef}
       />
       <button
       onClick={copyPasswordToClipboard}
       className='outline-none bg-blue-700 text-white
       px-3 py-0.5 shrrink-0'>copy</button>
    </div>

    
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range"
        min={6}
        max={100}
        value={length} 
        className='cursor-pointer'
        onChange={(e) => {setlength(e.target.value)}}
        />
        <label> Lenght : {length}</label>
      </div>

    
      <div className="flex items-center gap-x-1">
        <input 
        type="checkbox"
        defaultChecked ={numAllowed}
        id="numberInput"
        onChange={() => {
          setnumAllowed((prev) => !prev)
        }}
        />
        <label htmlFor="numberInput"> Numbers</label>
      </div>

    
      <div className="Flex items-center gap-x-1">
        <input 
        type="checkbox" 
        defaultChecked ={charAllowed}
        id ="characterInput"
        onChange={ () =>{
          setCharAllowed((prev) => !prev)
        }}
        />
        <label htmlFor="characterInput">Characters</label>
        </div>

    </div>
  </div>
    </>
  )
}

export default App
