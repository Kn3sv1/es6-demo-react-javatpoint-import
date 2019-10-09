import React, { Component } from 'react';
import StudentName from './studentname.jsx';
import List from './list.jsx';

class App extends React.Component {  
 constructor() {  
      super();  
      this.state = {  
         data:   
         [  
            {             
               "name":"Abhishek"             
            },  
            {            
               "name":"Saharsh"             
            },  
            {    
               "name":"Ajay"          
            }  
         ]  
      }  
   }  
   render() {  
      return (  
         <div>  
            <StudentName/>  
            <ul>            
                {this.state.data.map((item, i) => <List key={i} data = {item} />)}           
            </ul>  
         </div>  
      );  
   }  
}

export default App;