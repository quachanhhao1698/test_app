import './App.css';
import FunctionComponent from './Components/FunctionComponent';
import ClassComponent from './Components/ClassComponent';
import LoadAPI from './Components/LoadAPI';



function App() {
  return (
    <div >
        <FunctionComponent name={"Hào"} a={8} b={"25"}/>
        {/* <ClassComponent name={"A"} /> */}
        <LoadAPI />
        
    </div>
  );
}

export default App;
