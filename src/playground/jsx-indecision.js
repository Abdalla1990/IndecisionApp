console.log('App.js is ruuuuuuunning ');

const App = {
    name: 'Indecision App',
    description: 'put your life in the hands of a computer',
    subDescription: 'its my first react app',
    options: []
}

// the first option to evaluate a conditional jsx is by using the ternary
// operator (condition ? result : else possibility) there is an alternative way
// to render a conditional jsx by calling a function and avaluating the results
// on that function just like what we did with description. a third way of
// having a conditional jsx statement is by using the && logical operator which
// works as follows : (condition1 && codition2)  if condition1 is true , it will
// evaluate condition 2 and prints condition 2. if condition 1 is false , it
// will ignore condition 2 and prints false
// * note, false , true or null are primarily ignored by the jsx syntax

function getDescription(description) {
    if (description) {
        return <p>{description}</p>
    }
}
let count = 0;
function getOptions() {
    if (App.options.length > 0) {

        return App.options.map((op) => <li key={count++}>{op}</li>)
    }
}

const onFormSubmit = (e) => {
e.preventDefault();


const option =e.target.elements.option.value;
if(!option){alert('empty input')} else {App.options.push(option);
  e.target.option.value='';
  reRender();}

}
const removeAll = ()=>{
App.options = [];
reRender();
}
let randomNum
const random = (e)=>{
  console.log('clicked ');
  
  //create a random number between 0 and the number of options we have . math.floor rounds the numbers .
   randomNum = Math.floor(Math.random() * App.options.length);
  
 
  reRender();
}

const app_Root = document.getElementById('app');
const reRender = () => {
    const Root_Template = (

        <div>
            <h1>
                {App.name ? App.name : undefined}
            </h1>
            {getDescription(App.description)}
            {(App.subDescription && App.subDescription) && <p>  {App.subDescription}</p>}
         
            
            <button disabled={App.options.length === 0} onClick={random}>What should I do ?</button>
          <p>{App.options[randomNum]} </p>
            <button onClick = {removeAll}>Remove All!</button>
            <p>{App.options.length >0 ? 'Here are your options' : 'No options are available'}</p>
            <ol>{getOptions()}</ol>
            <form onSubmit = {onFormSubmit}>
                <input type = "text" name = "option"></input>
                <button>Add Options</button>
            </form>
            
        </div>

    );
    ReactDOM.render(Root_Template, app_Root);

}
reRender();




