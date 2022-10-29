import { useEffect,useState } from "react";
import './To.css'
function App() {
  const [output,setOutput]= useState("")
  const [inputValue,setInputValue] = useState("")
  const [inputMetValue,setInputMetValue] = useState("")
  const [outputMeetValue,setOutputMeetValue] = useState("")
  const [inputValue2,setInputValue2] = useState("")
  let resultInput
  useEffect(()=>{
    setOutput(0)
},[inputValue]) 
  
  const meet=()=>{
    switch (inputMetValue){
      case 'km':
        return  +inputValue * 1000;
      case 'ha':
        return  +inputValue *100;
      case 'dam':
        return  +inputValue *10;
      case 'm':
        return  +inputValue;
      case 'dm':        
        return  +inputValue *0.1;
      case 'cm':        
        return  +inputValue *0.01;
      case 'mm':        
        return  +inputValue *0.001;
    }

  }
  const out=()=>{
    switch (outputMeetValue){
      case 'km':
        return  resultInput * 0.001;
      case 'ha':
        return  resultInput * 0.0100;
      case 'dam':
        return  resultInput * 0.1;
      case 'm':
        return  resultInput;
      case 'dm':        
        return  resultInput * 10;
      case 'cm':        
        return  resultInput * 100;
      case 'mm':        
        return  resultInput * 1000;
    }
  }

  const handleConvert = (e) =>{
    if(inputValue !== ""){
      if (inputMetValue===''){
        alert("chọn giá trị đổi")
      }else if(outputMeetValue ===''){
        alert("chọn giá trị đổi")
      }
      resultInput = meet()
      setOutput(String(out()))
      // console.log(output);
      // inputRef.current.focus();
      
    }else{
      alert("Nhập giá trị")
    }
  }
  const handleMetValue = (e)=>{
    setInputMetValue(e.target.value)
  }
  const handleMetValueOutput = (e)=>{
    setOutputMeetValue(e.target.value)
  }
  const handleOnChange = (e)=>{
      setInputValue(e.target.value)
  }
  const handleOnChange2 = (e)=>{
    setInputValue2(e.target.value)
  }
  return (
    <>
      <div id = "body" className="w-full h-screen flex flex-row justify-center items-center gap-10">
       
        <div class="wed">

          <div className="search flex flex-col">
            <input type="text" id="search-one" className="border-2 border-lime-600 px-6 py-2 rounded-md outline-none " placeholder="Enter value..."
            onChange={(e)=>handleOnChange(e)}
            ></input>
            <select
            id="search-two"
            onChange={(e)=>handleMetValue(e)}>
              <option value="km">chọn giá trị</option>
              <option value="km">km</option>
              <option value="ha">ha</option>
              <option value="dam">dam</option>
              <option value="m">m</option>
              <option value="dm">dm</option>
              <option value="cm">cm</option>
              <option value="mm">mm</option>
            </select>
          </div>
          <div className="flex flex-col">
            <button id="but" type="" className="px-6 py-2 bg-lime-600 rounded-md text-white"
            onClick={handleConvert}
            >Convert
            </button>
          </div>
          <div className="ouput flex flex-col">
            <input type="text" id="ouput-one" className="border-2 border-lime-600 px-6 py-2 rounded-md outline-none"  value={output}
             onChange={(e)=>handleOnChange2(e)}
            ></input>
            <select
            id="ouput-two"
            onChange={(e)=>handleMetValueOutput(e)}>
              <option value="km">chọn giá trị</option>
              <option value="km">km</option>
              <option value="ha">ha</option>
              <option value="dam">dam</option>
              <option value="m">m</option>
              <option value="dm">dm</option>
              <option value="cm">cm</option>
              <option value="mm">mm</option>
            </select>
          </div>
        </div>
      
      
      </div>
    </>
  );
}

export default App;