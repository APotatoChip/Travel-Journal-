import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "../data";


export default function App() {
    let cardTemplate = data.map(function(el){
        return <Card key={el.id} {...el}/>
    });
    return ( 
        <div className="app-container">
             <Header/>
             {cardTemplate}
        </div>
       
    )
}