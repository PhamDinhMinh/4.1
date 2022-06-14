import "./App.css"
import Mario from "./Mario.js"
import Diamond from "./Diamond.js"
import { useState } from "react";
import Appear from "./Appears";
import Ngaivat from "./Ngaivat";
let x = 9
export default function App() {
  var name_array = [ [0,0,1,0,0,0,1,1,0,1], 
                     [1,0,1,0,1,0,0,0,0,0],
                     [0,0,0,1,1,0,1,0,1,0],
                     [0,1,1,0,0,0,1,0,0,1],
                     [0,0,0,0,1,1,0,1,0,0],
                     [1,0,1,1,0,0,0,1,1,0],
                     [0,1,0,0,1,1,0,0,0,0],
                     [0,0,1,0,0,0,1,1,0,1],
                     [0,1,0,0,1,0,1,0,0,0],
                     [0,0,0,1,1,0,0,0,1,0], ];
  var show = false
  const [m, setM] = useState(9)
  const [n, setN] = useState(9)
  const [state, setState] = useState('')
  const [states, setStates] = useState([])
  let arr
  // let n = 9
  // const handleOnChangeRow=(e) => {
  //   if(parseInt(e.target.value) < 0 || e.target.value===''){
  //     alert('vui lòng nhập số lớn hơn 0')
  //   }else{
  //     setM(parseInt(e.target.value))
  //   }
  // }

  // const handleOnChangeCol=(e) => {
  //   if(parseInt(e.target.value) < 0 || e.target.value===''){
  //     alert('vui lòng nhập số và số đó lớn hơn 0')
  //   }else{
  //     setN(parseInt(e.target.value))
  //   }
  // }
  // refresh = () => {
  //   window.location.reload();
  // }

  function handleCheck(index, sub_index){
    return (name_array[index][sub_index] === 1)
  }

  function appear(index, sub_index){
    if(index===m && sub_index===x){
      console.log(m,x)
      show = true;
    }else{
      show = false;
    }
    // console.log(show + " "+m+" " +index + " "+ sub_index)
    return show
  }

  function appears(index, sub_index){
    if(index===0 && sub_index===0){
      return true;
    }
    return false;
  }

  function checkNgaiVat(index,sub_index){
    if(name_array[index][sub_index] === 1){
      return true;
    }
    return false;
  }

  const handleLen=()=>{
    if(name_array[m-1][n]===1 || m===0){

    }else{
      setM(m-1)
      appear(m,n);
    }
  }

  const handleXuong=()=>{
    if(name_array[m+1][n]===1 || m===9){

    }else{
      setM(m+1)
      appear(m,n);
    }
  }

  const handleTrai=()=>{
    if(name_array[m][n-1]===1 || n===0){

    }else{
      setN(n-1)
      appear(m,n);
    }
  }

  const handlePhai=()=>{
    if(name_array[m][n+1]===1 || n===9){

    }else{
      if(m===0 && n===0){
        show=false
      }
      setN(n+1)
      appear(m,n);
    }
  }

  function Show(m,n){
    if(m===0 && n===0){
      return true;
    }
    return false;
  }

  const handRun=()=>{
    setStates(prev=>{
      const NewName = [...prev,state]
      return NewName;
    }) 
    console.log(state)
    arr = state.split(' ')
    console.log(arr)
   
    for(let i=0; i<arr.length; i++){
      switch(arr[i]){
        case 'left':
          if(name_array[m][x-1]===1 || x===0){
            appear(m,x);
          }else{
            x=x-1
            console.log(x)
            appear(m,x);
            console.log(arr[i])
          }
          break;

          
        // case 'right':
        //   if(name_array[m][n+1]===1 || n===9){

        //   }else{
        //     setN(n+1)
        //     appear(m,n);
        //   }
        //   break
      default:
        console.log("Hello")
        
      }

  }
  }


  return (
    <div className="App">                           
      <div className="Contenner">
        <div className="contenner_left"> 
          {[...Array(10)].map((item, index) => (
            <div key={index} style={{ display: "flex" }}>
              {[...Array(10)].map((sub_item, sub_index) => (
                <div key={sub_index} className="box" 
                  style={{
                    backgroundColor: handleCheck(index, sub_index) ? "black" : "white"
                  }}>
                    {appear(index, sub_index) && <Mario />}
                    {appears(index, sub_index) && <Diamond />}
                    {checkNgaiVat(index,sub_index) && <Ngaivat/>}
                </div>
                ))}
              </div>
              ))}
        </div>

        <div className="contenner_right">
          <div >
            <input placeholder="Nhập vào đây lệnh của bạn" className="input" onChange= {e=>setState(e.target.value)}/>
            <ul>
              <li>
                {states}
              </li>
            </ul>
          </div>
          <div className="contenner_button">
            <button className="button1" onClick={handleLen}>
              <img src="images/anh_len.jpg" alt="len" className="image"/>
            </button>
            <br/>
            <button className="button" onClick={handleTrai}>
              <img src="images/anh_trai.jpg" alt="trai" className="image"/>
            </button>

            <button className="button" onClick={handleXuong}>
            <img src="images/anh_xuong.jpg" alt="xuong" className="image"/>
            </button>

            <button className="button" onClick={handlePhai}>
              <img src="images/anh_phai.jpg" alt="phai" className="image"/>
            </button>
          </div>
          <div>
            <button className="run" onClick={handRun}>Run</button>
          </div>
        </div> 
      </div>

      <div className="Finish">
          {Show(m,n) && <Appear />}
      </div>
    </div>
  );
}
