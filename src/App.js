import logo from './logo.svg';
import Body from './Body';
import Body2 from './Body2';
import Body3 from './Body3';
import Header from './header'
import Footer from './Footer'
import SuperBody from './SuperBody';
import './App.css';

function App() {
  return (
   <div>
    <main>
    <Header></Header>
    {/* <SuperBody></SuperBody> */}
    <Body></Body>
    <Body2></Body2>
    <Body3></Body3>
    <Footer></Footer>
    </main>
   </div>
  );
}

export default App;
