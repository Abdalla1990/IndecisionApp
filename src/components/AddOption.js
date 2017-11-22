import React from 'react';

export default class AddOption extends React.Component {
  state = {
    Error : undefined
  }
    
    handleformSubmittion = (e) =>{
     
        e.preventDefault();
       
        const newOption = e.target.elements.option.value.trim();
        
           const error = this.props.handelAddOption(newOption);
          if(error){
            this.setState(()=>({Error : error }))
          }else{
            this.setState(()=>({Error : undefined }));
            e.target.elements.option.value='';
          }
        
    }
    render(){
      console.log(this.state);
      return (
        <div>
          {this.state.Error && <p className="add-option-error">{this.state.Error}</p>}
         
         <div>
         <form className="add-option" onSubmit={this.handleformSubmittion}>
                <input className="add-option__input" name="option"type="text"></input>
                <button className="button">Add Option</button>
          </form>
         </div>
         
        </div>
       
      );
    }
  }
  
  