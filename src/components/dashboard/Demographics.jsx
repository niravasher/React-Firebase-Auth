import React from 'react';
import { VscLocation } from 'react-icons/vsc';
import { FaMale,FaFemale} from 'react-icons/fa';
import '../css/Toggle.css'
import axios from 'axios'

const Demographics = () => {
  
  let c1,c2,c3,left,right,counter;
  
  const aa = async ()  =>{
    const bb = await axios('https://my-json-server.typicode.com/harsh-singhal7385/json-data-practice/db')
    console.log(bb)
    let cc = (bb.data)
    // console.log(cc.comments[0])
    // console.log(cc.posts[0])
  
  }

  const handleChange = () => {
    
    counter = "";
    c1 = document.getElementById('checkbox1');
    c2 = document.getElementById('checkbox2');
    c3 = document.getElementById('checkbox3');
   
    if(c1.checked){
      counter="1";
    }
     
    if(c2.checked){
      counter+="2";
    }
    if(c3.checked){
      counter+="3";
    }

    switch(counter){
      
      case "1":
        aa();
        
        break;

      case "2":
        break;

      case "3":
        break;

      case "12":
        break;

      case "13":
        break;
      
      case "23":
        break;
      
      case "123":
        break;

      default:

        break;

    }
    

    

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
              <div className="my-toggle-btn-wrapper form-group">
                  <div className="my-toggle-btn">
                    <input type="checkbox" id="checkbox1" value="1-4" onChange={handleChange} />
                    <label htmlFor="checkbox1" className="labelToggle">
                      <span className="on unselectable-text">1-4</span>
                      <span className="off unselectable-text">1-4</span>
                    </label>
                  </div>
              </div>
              <div className="my-toggle-btn-wrapper form-group">
                  <div className="my-toggle-btn">
                    <input type="checkbox" id="checkbox2" value="5-7" onChange={handleChange} />
                    <label htmlFor="checkbox2">
                      <span className="on unselectable-text">5-7</span>
                      <span className="off unselectable-text">5-7</span>
                    </label>
                  </div>
              </div>
              <div className="my-toggle-btn-wrapper form-group">
                  <div className="my-toggle-btn">
                    <input type="checkbox" id="checkbox3" value="8-10" onChange={handleChange} />
                    <label htmlFor="checkbox3">
                      <span className="on unselectable-text">8-10</span>
                      <span className="off unselectable-text">8-10</span>
                    </label>
                  </div>
               </div>
            </div>
            <div className="col-lg-8 text-center"> 
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
                    <div onClick={handleChange} className="demographics1 "><FaMale size="80px" className="demographics"/></div>
                  </div>
                  <div className="col">
                    <div onClick={handleChange} className="demographics1 "><FaFemale size="80px" className="demographics" /></div> 
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
                </div>
              </div>
            </div>
          </div>
        </div>  
      </div>
    </>
  );
}

export default Demographics;
