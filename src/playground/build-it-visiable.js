class Toggle extends React.Component {

    constructor(props){
        super(props);
        this.buttonClicked = this.buttonClicked.bind(this);
        this.state = {
          
            visibilityStatus :true
        }
    }

    buttonClicked(){
        
        this.setState((prevState)=>{
            if(prevState.visibilityStatus){
                console.log('inside 1 ')
                return{
                    visibilityStatus :false
            }}
            else {
                console.log('inside 2 ')
                return{
                    visibilityStatus :true
                }
            }
        });

    }
    render(){


        return (
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.buttonClicked}>{this.state.visibilityStatus? 'show details' : 'hide details'  }</button>
            <p hidden={this.state.visibilityStatus}>this is a text shown now</p>
            </div>
        );
    }
}
ReactDOM.render(< Toggle/>, document.getElementById('app'));












// console.log('App.js is ruuuuuuunning ');

// const sentence = 'show something here'
// let selection = 0 ;
// let buttonName = ['show details' , 'hide details']
// let show = 0 ;
// let display = ()=> { 

// if(selection == 0 ) {
//     show = 1
//     selection = 1}
//     else {
//         show = 0
//     selection = 0 ;}
// reRender();
// }


// const reRender = () => {
//     const template = (
//         <div>
        
//         <h1>Visiability Toggle</h1>
    
//         <button onClick = {display}>{buttonName[selection]}</button>
//         <p hidden={show===0}>{sentence}</p>
//         </div>
//     )
    
//     const rootApp = document.getElementById('rootApp')
//     ReactDOM.render(template,rootApp)
// }
// reRender();

