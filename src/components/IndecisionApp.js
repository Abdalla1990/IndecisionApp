import React from 'react';
import AddOption from './AddOption.js';
import Options from './Options.js';
import Action from './Action.js';
import Header from './Header.js'
import ModalOption from './ModalOption.js';
class IndecisionApp extends React.Component {
  state = {
    options : [],
    selectedOption : undefined
  };
      
    
    
      componentDidMount = () => {
       try{ let options =JSON.parse(localStorage.getItem('options'));
       if(options){
           this.setState(()=>({options}));
         }}catch(e){
    
         }
      };
      componentDidUpdate = (prevProps,prevState) => {
        
        if(prevState.options.length !== this.state.options.length){
         const json = JSON.stringify(this.state.options);
         localStorage.setItem('options',json);
        }
      };
      componentWillUnmount = () => {
        console.log('component delete')
      };
    
      handleDeleteOptions = () => {
        this.setState(()=> ({options:[]}));
      };
      handelAddOption = (option) => {
        if(!option){
          return 'Enter a valid option';
        }else if (this.state.options.indexOf(option) > -1){
          return 'this option already exists';
        }
        this.setState((prevState) => ({options: prevState.options.concat(option)}));
       
      };
      handleRandom = () => {
        
        let randomNum = Math.floor(Math.random() * this.state.options.length);
        this.setState(()=>{
          return {
          selectedOption:this.state.options[randomNum]} 
        });
      };

      handleClearSelectedOption = ()=>{
        this.setState(()=>({selectedOption : undefined}))
     };
      
      

      handleDeleteOption = (theOption) => {
        console.log(theOption);
        this.setState((prevState)=> (
          {options:prevState.options.filter((option)=>{
            return theOption!==option
        })}
      ));
     };
      getOption = (option) => {
         this.state.options.indexOf(option);
    
      };
      
      render(){
        console.log(this.state);
        return (
          <div>
          
               
                    <Header  title = 'Indecision App'sub_title='Put your life in the hands of a computer'/>
                      <div className = "container">
                        <Action hasOptions = {this.state.options.length} handleRandom = {this.handleRandom}/>
                          <div className="widget">
                            <Options 
                              handleDeleteOptions = {this.handleDeleteOptions} 
                              options={this.state.options}
                              handleDeleteOption = {this.handleDeleteOption}/>
                            <AddOption getOption = {this.getOption}handelAddOption = {this.handelAddOption}/>
                        </div>
                    </div>
                  
                  <ModalOption  handleClearSelectedOption = {this.handleClearSelectedOption} selectedOption={this.state.selectedOption}/>
             
          
          
          
          
          </div>
         
        );
      }
    }

    export default IndecisionApp;