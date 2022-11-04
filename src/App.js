import './App.css';
import Requests from './apis/requests';
import Row from './components/Row';
import NavBar from './components/NavBar';
import Banner from './components/Banner'

function App() {
  return (
    <div className="App" style={{backgroundColor:'black',color:'white'}}>
       <NavBar style={{display:'static'}}/>
       <Banner request={Requests.fetchTrending}/>
       <Row  title="NETFLIX TRENDING"      request={Requests.fetchTrending} />
       <Row title="NETFLIX ORIGINALS"      request={Requests.fetchNetflixOriginals}/>
       <Row title="NETFLIX  ACTIONS"       request={Requests.fetchActionMovies}/>
       <Row title="NETFLIX COMEDY MOVIES"  request={Requests.fetchComedyMovies}/>
       
    </div>
  );
}        

export default App;
