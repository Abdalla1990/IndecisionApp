class IndecisionApp extends React.Component {

  constructor (props){
    super(props),
    this.state = {
      options : []
    }
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handelAddOption = this.handelAddOption.bind(this);
    this.handleRandom = this.handleRandom.bind(this);
    this.getOption = this.getOption.bind(this);
    this.handleDeleteOption= this.handleDeleteOption.bind(this);
  }


  componentDidMount(){
   try{ let options =JSON.parse(localStorage.getItem('options'));
   if(options){
       this.setState(()=>({options}));
     }}catch(e){

     }
   
 
 
  }
  componentDidUpdate(prevProps,prevState){
    
    if(prevState.options.length !== this.state.options.length){
     const json = JSON.stringify(this.state.options);
     localStorage.setItem('options',json);
    }
  }
  componentWillUnmount(){
    console.log('component delete')
  }

  handleDeleteOptions(){
    this.setState(()=> ({options:[]}));
  }
  handelAddOption(option){
    if(!option){
      return 'Enter a valid option';
    }else if (this.state.options.indexOf(option) > -1){
      return 'this option already exists';
    }
    this.setState((prevState) => ({options: prevState.options.concat(option)}));
   
  }
  handleRandom(){
    
    let randomNum = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randomNum]);
   
   
  }
  handleDeleteOption(theOption){
    console.log(theOption);
    this.setState((prevState)=> (
      {options:prevState.options.filter((option)=>{
        return theOption!==option
    })}
  ));
 }
  getOption(option){
     this.state.options.indexOf(option);

  }
  
  render(){
    console.log(this.state);
    return (
      <div>
      <Header subTitle='subtitle here '/>
      <Action hasOptions = {this.state.options.length} handleRandom = {this.handleRandom}/>
      <Options 
      handleDeleteOptions = {this.handleDeleteOptions} 
      options={this.state.options}
      handleDeleteOption = {this.handleDeleteOption}/>
      <AddOption getOption = {this.getOption}handelAddOption = {this.handelAddOption}/>
      </div>
    );
  }
}
IndecisionApp.defaultProps = {
  options : []
}
// components designed in class and state structure 
// class Header extends React.Component {
//       render(){
        
//          return (
//               <div>
//               <h1>{this.props.title}</h1>
//               <h2>{this.props.sub_title}</h2>
//               </div>
//          );
//       }
// }

// class Action extends React.Component {
 
//   render(){
//     return (<div>
//             <button disabled = {!this.props.hasOptions} onClick={this.props.handleRandom}>
//             what should I do ? 
//             </button>
//     </div>);
//   }
// }

// class Options extends React.Component {

//     render(){
//       let options = this.props.options;
//       let count = 1;
//       return (<div>
//         <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//         {options.map((op)=> <Option key = {op} option= {op} count = {count++}/>)}
//       </div>);
//     }
//   }



// components designed in stateless + functional structure 
const Header = (props) =>{
  return (
    <div>
    <h1>{props.title}</h1>
   {props.sub_title &&  <h2>{props.sub_title}</h2>}
    </div>);
}
Header.defaultProps = {
  title : 'Indecision',
 
}
const Action = (props) => {
  return (<div>
    <button disabled = {!props.hasOptions} onClick={props.handleRandom}>
    what should I do ? 
    </button>
</div>);
}


  const Options = (props)=>{
    let options = props.options;
    let count = 1;
    return (<div>
      {props.options.length === 0 && <p> please Add an option To get started! </p>}
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {options.map((op)=> (
        <Option 
        handleDeleteOption = {props.handleDeleteOption}
        key = {op} option= {op} 
        count = {count++} />
      ))}
    </div>);
  }
  
// class component with a state 
const Option = (props) =>{
 
 
      const option = props.option
      
      return (
        <div>
      
         {option}
         <button 
         onClick={(e)=>{
          props.handleDeleteOption(option)
         }}>x</button>
         
        </div>
      );
    
  }




class AddOption extends React.Component {
  constructor(props){
    super(props);
    this.handleformSubmittion=this.handleformSubmittion.bind(this);
    this.state = {
      Error : undefined
    }
  }
  
  
  handleformSubmittion(e){
   
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
      {this.state.Error && <p>{this.state.Error}</p>}
      <form onSubmit={this.handleformSubmittion}>
      <input name="option"type="text"></input>
      <button>Add Option</button>
      </form>
      </div>
     
    );
  }
}



ReactDOM.render(<IndecisionApp />,document.getElementById('app'));