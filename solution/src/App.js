import logo from './logo.svg';
import './App.css';
import { Content } from './Invitation/Content';

function App() {
 let obj = {
   name:"Shailja",
   Subject:"Birthday party invitation",
   Event : "birthday party",
   Friends:["Ritu      ","Saurabh    ","Kartik    "],
   landmark:"Green field Avanue",
   email:"jaGdish@gmail.com",
   to : "Harshit"
 }

  return (
    <div className="App">
     <Content
    varient = "text"
    name = {obj.name}
    Subject = {obj.Subject}
    email = {obj.email}
    event = {obj.Event}
    friends = {obj.Friends}
    landmark = {obj.landmark}
    to = {obj.to}
     />
    
    </div>
  );
}

export default App;
