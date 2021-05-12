import React, { Component } from "react";
import APIC from "./APIC";
import IIB from "./IIB";
import "./Userpage.css"
import Tabs from "./Tabs";
export default class Userpage extends Component {
  render() {
    return (
      <div>
     <Tabs> 
     <div label="IBM Information Bus" className="form-group">
       <IIB></IIB>
          </div>
       <div label="API Connect"> 
      <APIC></APIC>
       </div> 
     </Tabs> 
    </div>  
    );
  }
}