import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { render } from '@testing-library/react';

// const Sample=()=>{
//   return(
//     <>
//     <h1>Hello World</h1>
//     </>
//   )
// }

// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<Sample/>)


// class Sample extends React.Component
// {
//   constructor()
//   {
//     super();
//     this.state={empname:'Raja',empid:1234,empsalary:20000}
//   }
//   render()
//   {return(
//     <>
//     <h1>empname::{this.state.empname}</h1>
//     <h2>empid::{this.state.empid}</h2>
//     <h3>empsalary::{this.state.empsalary}</h3>
//     </>
//   )}
// }
// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<Sample/>)

//import and export....

// import Sample from './app';
// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<Sample/>)

// function Sample(){
//   return(
//     <>
//     <h1>i am sample</h1>;
//     </>
//   )
// }
// function Azar(){
//   return(
//     <>
//     <h2>Who lives in my azar</h2>
//     <Sample/>
//     </>
//   )
// }
// const r3=ReactDOM.createRoot(document.getElementById('root'))
// r3.render(<Azar/>)


//props function


// function Sample(props){
//   return(
//     <div>
//       <h1>welcome</h1>
//       <p>{props.name}</p>
//       <p>{props.age}</p>
//     </div>
//   )
// }
// const r2=ReactDOM.createRoot(document.getElementById('root'))
// r2.render(<Sample name={"azar"} age={34}/>)


// class Sample extends React.Component
// {
// constructor(props)
// {
//     super(props);
//     this.state={f1:'blue',f2:'red'}
// }
// render()
// {
//     return(
//         <div>
//             <h3 style={{color:this.state.f1}}>{this.props.text}</h3>
//             <h3 style={{background:this.state.f2}}>{this.props.text}</h3>
//         </div>
//     )
// }
// }
// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<Sample text='Hello World'/>)



//changing the state object

// class Sample extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             emp: {
//                 id: 3465,
//                 name: "raja",
//                 city: "jjk"
//             },
//             showData: false
//         };
//         this.showData = this.showData.bind(this);
//         this.hideData = this.hideData.bind(this);
//     }

//     showData() {
//         this.setState({ showData: true });
//     }

//     hideData() {
//         this.setState({ showData: false });
//     }

//     render() {
//         let Data;
//         if (this.state.showData === true) {
//             Data = (
//                 <div>
//                     <b>City:</b> {this.state.emp.city} <b>ID:</b> {this.state.emp.id}<br />
//                     <button onClick={this.hideData}>Hide Data</button>
//                 </div>
//             );
//         } else {
//             Data = <button onClick={this.showData}>Show Data</button>;
//         }
//         return (
//             <div className='app'>
//                 <h1>Employee Details</h1>
//                 {Data}
//             </div>
//         );
//     }
// }

// const r1 = ReactDOM.createRoot(document.getElementById('root'));
// r1.render(<Sample />)


//Adding event

// function Football()
// {
//     const shoot=()=>{
//         alert("goal");
//     }
//     return(
//         <>
//           <button onClick={shoot}>clickHere</button>
//         </>
//     )
// }
// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<Football/>)


//react event 

/*import LoginForm from'./app';
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<LoginForm/>)*/

/*function Mytextarea()
{
    const [value,setvalue]=React.useState("hello World")
    return(
        <>
           <textarea value={value} onChange={(e)=>setvalue(e.target.value)}></textarea>
           <p>{value}</p>
        </>
    )
} 
const r1=ReactDOM.createRoot(document.getElementById('root'));
r1.render(<Mytextarea/>)*/



//use state
/*function Counter()
{
    const [count,setcount]=useState(0)
    const [productname,setproductname]=useState("");
    const [weight,setweight]=useState("");
    const [price,setprice]=useState("");
    return(
        <>
        <center>
            <p>count::{count}</p>
            <button onClick={()=>setcount(count)}>Increment</button>
            <p>Product Name::{productname}</p>
            <input type='text' value={productname} onChange={(e)=>setproductname(e.target.value)}/>
            <p>Weight::{weight}</p>
            <input type='text' value={weight} onChange={(e)=>setweight(e.target.value)}/>
            <p>Price::{price}</p>
            <input type='text' value={price} onChange={(e)=>setprice(e.target.value)}/>

            <table border="2">
                <th>Productname</th>
                <th>Weight</th>
                <th>Price</th>
                <tr>
                    <td>{productname}</td>
                    <td>{weight}</td>
                    <td>{price}</td>
                </tr>
            </table>
        </center>
        </>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'));
r1.render(<Counter/>)*/

/*class Header extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={favcolor:'red'};
    }
    static getDerivedStateFromProps(props,state)
    {
        return{favcolor:props.favcolor}
    }
    render()
    {
        return(
            <h1>this is render page {this.state.favcolor}</h1>
        )
    }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Header favcolor="pink"/>)*/



/*class Header extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={favcolor:'red'};
    }
   componentDidMount()
   {
    setTimeout(()=>{
        this.setState({favcolor:"yellow"})
    },2000)
   }
    render()
    {
        return(
            <h1>this is render page {this.state.favcolor}</h1>
        )
    }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Header/>)*/



/*function Counter() {
  const [count, setCount] = useState(0);
  const [productName, setProductName] = useState("");
  const [weight, setWeight] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const handleSubmit = () => {
    const newProduct = { productName, weight, price };
    setProducts([...products, newProduct]);
    // Clear input fields after submitting
    setProductName("");
    setWeight("");
    setPrice("");
  };

  return (
    <>
      <center>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <p>Product Name: {productName}</p>
        <input
          type='text'
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <p>Weight: {weight}</p>
        <input
          type='text'
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <p>Price: {price}</p>
        <input
          type='text'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>Submit</button><br></br>
        
        <table border="1" cellPadding={10} cellSpacing={10}>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Weight</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.productName}</td>
                <td>{product.weight}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />);*/


/*function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login sucessfully");
  };

  return (
    <center>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </center>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Login />);*/

//Updating  



/*class Header extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={favcolor:"red"};
  }
  static getDerivedStateFromProps(props,state)
  {
    return{favcolor:props.favcolor}
  }
   Changecolor=()=>{
    this.setState({favcolor:"yellow"})
  }
  render()
  {
    return(
      <div>
        <h1>This is reader page {this.state.favcolor}</h1>
        <button type='button' onChange={this.Changecolor}>Changecolor</button>
      </div>
    )
  }
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Header/>)*/


/*class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favcolor: "red" };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.favcolor !== state.favcolor) {
      return { favcolor: props.favcolor };
    }
    return null;
  }

  Changecolor = () => {
    this.setState({ favcolor: "yellow" });
  }

  render() {
    return (
      <div>
        <h1>This is the header page {this.state.favcolor}</h1>
        <button type="button" onClick={this.Changecolor}>Change color</button>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header favcolor="blue" />);*/


class Header extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={favcolor:"red"};
  }
   
  should component update()
  {
    return true;
  }
   Changecolor=()=>{
    this.setState({favcolor:"yellow"})
  }
  render()
  {
    return(
      <div>
        <h1>This is reader page {this.state.favcolor}</h1>
        <button type='button' onChange={this.Changecolor}>Changecolor</button>
      </div>
    )
  }
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Header/>)


