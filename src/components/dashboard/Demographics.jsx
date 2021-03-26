import React , { useState } from 'react';
import { VscLocation } from 'react-icons/vsc';
import { FaMale,FaFemale} from 'react-icons/fa';
import '../css/Toggle.css'
import axios from 'axios'
// const fetch = require('fetch')

const Demographics = () => {
  
  const [state,setState]  =  useState(
    {

    }
  ) 
  
  let checkbox1 = []

  let c1,c2,c3,cc,left,right,counter,male,female,current,old,percentage;
  let a,b,c,d;
  c = []
  // const aa = async ()  =>{
  //    let x;
  //    const bb = await axios('https://my-json-server.typicode.com/harsh-singhal7385/json-data-practice/db')
  //   //  console.log(bb)
  //   //  console.log(typeof(bb))
  //   //  console.log(bb.data)
  //   //  console.log(typeof(bb.data))
  //    c = (bb.data)
  //   //  d = JSON.parse(bb)
  //   //  console.log()
  //   //  console.log("first elem ", c.age_gender_data[0].id); 
  //   //  console.log(cc)
  //   //  console.log(cc.age_gender_data)
  //   //  c = cc
  //   // for (let x in c) {
  //     // console.log(x)
  //     // console.log(x.age_gender_data[0])
  //     // console.log(x.age_gender_data[0].age)
    
  //   // }
  //   //  console.log(typeof(c))
  //    return c.age_gender_data
  // }
  
  const aa = () =>{
    
    axios('https://my-json-server.typicode.com/harsh-singhal7385/json-data-practice/db')
    .then((res)=>{
      // console.log(res)
      // console.log('\n',res.data)
      // console.log('\n',res.data.age_gender_data)
      d = res
      console.log(typeof(d))
      setState(d)
    })
    
    return d
  }
  
  

  const handleChange = () => {
    current = 0;
    old = 0;
    percentage = 0;
    counter = 0;
    c1 = document.getElementById('checkbox1');
    c2 = document.getElementById('checkbox2');
    c3 = document.getElementById('checkbox3');
    male = document.getElementById('checkbox4');
    female = document.getElementById('checkbox5');
    
    
    if(c1.checked){
      b = aa()
      console.log(state)   // state is accessed here
      // console.log(b)
      // console.log((b.age_gender_data))
      // old  = b.length
      a = c1.value
      left = Number(a[0])
      right = Number(a[2])
      let i = 0;
      console.log("start")
      // for(let arr of b){
      //   d = Number(arr[i++].age);
      //   if(d>=left && d<=right){
      //     counter++;
      //   }
      //   console.log(arr)
      // }
      
    //   for(let i=0; i < b.length; i++){
    //     // loopData += `<li>${b[i].name}</li>`
    //     console.log(b[i])
    // }
      

      
      console.log("end")
      current = counter;
      percentage = (current*100)/old;
      console.log(percentage)
    
    }
     
    if(c2.checked){
      counter+="2";
    }
    
    if(c3.checked){
      counter+="3";
    }
    
    if(male.checked){
      alert("hhh")
    }
    if(female.checked){
      alert("hhh")
    
    }
    
    // switch(counter){
      
    //   case "1":
    //     aa();
        
    //     break;

    //   case "2":
    //     break;

    //   case "3":
    //     break;

    //   case "12":
    //     break;

    //   case "13":
    //     break;
      
    //   case "23":
    //     break;
      
    //   case "123":
    //     break;

    //   default:

    //     break;

    // }
    

    

  }

  return (
    <>
      <div className="container">
        <div className="container">
          <div className="row">
            <div className="col text-center form-group">
              <h3><label className="form-check-label form-group unselectable-text">Demographics</label></h3>
            </div>
          </div>
          <div className="row form-group">
            <div className="col-lg-4 form-group">
              <div className="form-group text-center ">
                <h6><label className="form-label-check unselectable-text">Age Range</label></h6>
              </div>
              <div className="my-toggle-btn-wrapper form-group" >
                  <div className="my-toggle-btn" >
                    <input type="checkbox" id="checkbox1" value="1-4" onChange={handleChange} />
                    <label htmlFor="checkbox1" >
                      <span className="on unselectable-text">1-4</span>
                      <span className="off unselectable-text">1-4</span>
                    </label>
                  </div>
              </div>
              <div className="my-toggle-btn-wrapper form-group" >
                  <div className="my-toggle-btn" >
                    <input type="checkbox" id="checkbox2" value="5-7" onChange={handleChange} />
                    <label htmlFor="checkbox2" >
                      <span className="on unselectable-text">5-7</span>
                      <span className="off unselectable-text">5-7</span>
                    </label>
                  </div>
              </div>
              <div className="my-toggle-btn-wrapper form-group" >
                  <div className="my-toggle-btn" >
                    <input type="checkbox" id="checkbox3" value="8-10" onChange={handleChange} />
                    <label htmlFor="checkbox3" >
                      <span className="on unselectable-text">8-10</span>
                      <span className="off unselectable-text">8-10</span>
                    </label>
                  </div>
               </div>
            </div>
            <div className="col-lg-8 text-center "> 
              <div className="text-center">
                <h6><label className="form-label-check unselectable-text">Gender</label></h6>
              </div>
              <div className="row">
                <div className="col form-group">
                  <h6><label className="form-label-check unselectable-text">Male</label></h6>
                </div>
                <div className="col form-group">
                  <h6><label className="form-label-check unselectable-text">Female</label></h6>
                </div>
              </div>
              <div className="row form-group">
                  <div className="col">
                    <div onClick={handleChange} className="demographics1 ">
                        <FaMale size="80px" className="demographics"/>
                        <input type="checkbox" id="checkbox4" style={{"display":"none"}} onChange={handleChange}/>
                    </div>
                  </div>
                  <div className="col">
                    <div onClick={handleChange} className="demographics1 ">
                        <FaFemale size="80px" className="demographics" />
                        <input type="checkbox5" id="checkbox5"style={{"display":"none"}} onChange={handleChange}/>
                      </div> 
                  </div>
              </div>
              {/* <div className="row">
                <div className="col text-center">
                  <h6><label className="form-label-check">Location</label></h6>
                </div>
              </div> */}
              {/* <div className="row"> 
                <div className="col text-center">
                  <div onClick={handleChange} className="demographics1"><VscLocation size="80px" className="demographics" /></div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="row">
            <div className="container form-group">
              <div className="form-group">
                <div className="form-check-labl">
                  <label className="unselectable-text"> Age group</label>
                </div>
                 <div className="progress form-group progress-bar-css1" >
                  <div className="progress-bar progress-bar-css2" ></div>
                </div> 
                <div className="row">
                  <div className="col text-left unselectable-text">
                    {/*     */}age
                  </div>
                  <div className="col text-right unselectable-text">
                    {/*     */}50%
                  </div>
                  <div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {/* <div className="col"> */}
                { left }
                { right }
            {/* </div> */}
          </div>
        </div>  
      </div>
    </>
  );
}

export default Demographics;
