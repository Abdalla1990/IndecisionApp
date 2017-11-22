  class Counter extends React.Component{
    
    constructor(props){
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minesOne = this.minesOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state ={
            count: 0
        }
    }
    componentDidMount(){
        try{ 
            let newCounst=localStorage.getItem('count');
            let newNum = parseInt(newCounst,10)
        if( newNum && !(isNaN(newNum))){ 
            
            console.log('new count',newNum)
            this.setState(()=>{
                return (
                    {count : newNum}
                )
            })}}catch(e){}
       
       
    }
    componentDidUpdate(prevProps,prevState){
        
        if((this.state.count !== prevState.count))
        {
            console.log('current count = : ', this.state.count);
            localStorage.setItem('count',this.state.count);
        }
        
    }
    
    addOne() {
        this.setState((prevState)=>{
            return{ // this only changes the variable passed to it, not all the object gets overritten or overrieded 
                count : prevState.count +1 
            }
        });
       
      }

      minesOne() {
        this.setState((prevState) => {
            return{
                count : prevState.count -1
            }
        });
      }
      reset() {
       this.setState((prevState)=>{
           return{
               count: 0
           }
       });
      }
    
    
    
    
    
    render (){
        
          return (
              <div>
              <h1>Counter  : {this.state.count}</h1>
              <button onClick={this.addOne}>+1</button>
              <button onClick={this.reset}>Reset</button>
              <button onClick={this.minesOne}>-1</button>
              </div>
          );
      }
  }


  ReactDOM.render(<Counter/>,document.getElementById('app'));













    //    let count = 0 
    //    const minesOne = () => {
    //         count--;
    //         console.log(`count : ${count}`)
    //         renderApp();
    //    }

    //    const addOne = () => {
    //    count++ ;
    //    console.log(`count : ${count}`);
    //    renderApp();
    //  }

    //  const reset = ()=>{
    //      count = 0 ;
    //      console.log(`count : ${count}`);
    //      renderApp();
    //  }


       

    //     const renderApp = ()=> {
    //         const templateTow = (<div>
                
    //             <h1>Count : {count}</h1>
    //             <button onClick ={addOne}   >+1</button>  
    //             <button onClick ={reset} > reset</button>  
    //             <button onClick ={minesOne} > -1</button>
               
    //             </div>);
    //             // reactDom has a cirtual machien that works efficiently to render only the changed parts of the page. 
    //             ReactDOM.render(templateTow, app);
    //     }

        

    //     renderApp();
       