import React from 'react';

const Option = (props) =>(
           <div>
         
              <div className="option"> 
              
                 
                     <p className="option__text">{props.count + '. '}{props.theoption}</p> 
                  
            
            
                <button 
                className="button button--link"
                onClick={()=>{props.handleDeleteOption(props.theoption)}}
                >Remove
                </button>
            
            </div>
          
            
           </div>
         )
       
     
     export default Option ;