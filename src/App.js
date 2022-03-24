
import './App.css';
import Countries from './Components/Countries/Countries';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}

export default App;


// function Loadcountries() {
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch('https://restcountries.com/v2/all')
//       .then(res => res.json())
//       .then(data => setCountries(data))
//   }, [])
//   return (
//     <div>
//       <h1>Visiting Every Country of the World!!!</h1>
//       <h3>Available Country : {countries.length}</h3>
//       {
//         countries.map(country=><Country name={country.name} subregion={country.subregion}></Country>)
//       }
//     </div>
//   )
// }
// function Country(props){
//   return(
//     <div>
//       <h3>{props.name}</h3>
//       <p>{props.subregion}</p>
//     </div>
//   )
// }
