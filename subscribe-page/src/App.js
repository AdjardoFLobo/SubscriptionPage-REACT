import './App.css';
import SubscForm from './components/SubscForm/subscForm';

function App() {
  return (
    <section>
      <SubscForm submit ={submit} error={error}/>
    </section>
  );
}

function submit(clientData){
  console.log(clientData);
}

function error(firstName ,familyName, email,zipCode){
  if(firstName == "" || familyName=="" || email=="" || zipCode==""){
  alert("there cannot be empty fields")
  }
}


export default App;
