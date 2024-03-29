import React from 'react'
import profile from '../../assets/demo_profile.png'
import logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Nav from '../../Components/Nav'
import jsPDF from "jspdf";
import "jspdf-autotable";

class Report extends React.Component {

  constructor() {
    super();
    this.state = {
      people: [
        { name: "SANJAY S",roll:"21ADR044",Catagory:["Paper_pesentation"],Sub_Catagory:["Prize"],Sub_Catagory2:["Premier"],SAP:50},
        { name: "SANJAY S",roll:"21ADR044",Catagory:["Paper_pesentation"],Sub_Catagory:["Prize"],Sub_Catagory2:["Premier"],SAP:50},
        { name: "SANJAY S",roll:"21ADR044",Catagory:["Paper_pesentation"],Sub_Catagory:["Prize"],Sub_Catagory2:["Premier"],SAP:50},
        { name: "SANJAY S",roll:"21ADR044",Catagory:["Paper_pesentation"],Sub_Catagory:["Prize"],Sub_Catagory2:["Premier"],SAP:50},
        { name: "SANJAY S",roll:"21ADR044",Catagory:["Paper_pesentation"],Sub_Catagory:["Prize"],Sub_Catagory2:["Premier"],SAP:50},
        { name: "SANJAY S",roll:"21ADR044",Catagory:["Paper_pesentation"],Sub_Catagory:["Prize"],Sub_Catagory2:["Premier"],SAP:50},        
      ]
    }
  }

  exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape  
    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);
    doc.setFontSize(15);

    const title = "Students Report";
    const headers = [["NAME", "Roll","Catagory","Sub Catagory","Sub Catagory","SAP"]];

    const data = this.state.people.map(elt=> [elt.name, elt.roll,elt.Catagory[0],elt.Sub_Catagory[0],elt.Sub_Catagory2[0],elt.SAP]);

    let content = {
      startY: 50,
      head: headers,
      body: data
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("report.pdf")
  }
  render() {
    return (
      <div className="flex h-screen w-full">
      <Nav/>
      <div className="h-full w-full  p-5 pl-20 lg:p-10 lg:pl-32">
          <div className="h-2/4 flex justify-center">
              <div className="h-60 w-full rounded-xl p-12 px-20 relative flex flex-col justify-between " style={{boxShadow:"12px 11px 28px 1px rgba(0, 0, 0, 0.25)"}}>
              <div className="flex flex-col">
              <div className="flex  justify-between">
              <div className="flex flex-col mb-3">
                  <div className="text-4xl text-blue font-bold">AIDS CLASS A</div>
                  <div className="text-ld text-gray font-light ">Get your class report</div>
              </div>
              <div className="text-white bg-secondarygreen text-xl font-bold h-3/5 w-40 flex justify-center items-center rounded-md " onClick={() => this.exportPDF()}>Get Report</div>
              </div>
              <div className="flex justify-between">
              <form action="" className="flex    justify-between">
        <div class="relative">
<select class="block appearance-none h-2/12 w-60 text-lg bg-lightgray border-none text-gray hover:border-gray-300 p-3 rounded-md  leading-tight focus:outline-none focus:shadow-outline " placeholder='Department'>
  <option>Category</option>
  <option>A</option>
  <option>B</option>
  <option>C</option>
  <option>D</option>
</select>
<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293,12.95l.707.707L15.657,8l-1.414-1.414L10,10.828 5.757,6.586 4.343,8z"/></svg>
</div>
        </div>
              </form>
              <form action="" className="flex justify-between">
        <div class="relative">
<select class="block appearance-none h-2/12 w-60 text-lg bg-lightgray border-none text-gray hover:border-gray-300 p-3 rounded-md  leading-tight focus:outline-none focus:shadow-outline " placeholder='Department'>
  <option>Category</option>
  <option>A</option>
  <option>B</option>
  <option>C</option>
  <option>D</option>
</select>
<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293,12.95l.707.707L15.657,8l-1.414-1.414L10,10.828 5.757,6.586 4.343,8z"/></svg>
</div>
        </div>
              </form>
              <form action="" className="flex justify-between">
        <div class="relative">
<select class="block appearance-none h-2/12 w-60 text-lg bg-lightgray border-none text-gray hover:border-gray-300 p-3 rounded-md  leading-tight focus:outline-none focus:shadow-outline " placeholder='Department'>
  <option>Category</option>
  <option>A</option>
  <option>B</option>
  <option>C</option>
  <option>D</option>
</select>
<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293,12.95l.707.707L15.657,8l-1.414-1.414L10,10.828 5.757,6.586 4.343,8z"/></svg>
</div>
        </div>
              </form>
              </div>
              </div>
              </div>
          </div>
      </div>
  </div>
    );
  }
}

export default Report
// function Report() {
//   return (
   
//   )
// }

// export default Report

