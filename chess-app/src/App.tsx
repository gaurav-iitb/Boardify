import './App.css';
import Referee from './components/Referee/Referee';
import {useEffect} from "react";



function App() {
    useEffect(() => {
        const preventRootDivDrag = (event: any) => {
            event.preventDefault();
        };

        const rootDiv = document.getElementById('root');

        if(rootDiv) rootDiv.addEventListener('touchmove', preventRootDivDrag, { passive: false });

        return () => {
            if(rootDiv) rootDiv.removeEventListener('touchmove', preventRootDivDrag);
        };
    }, []);
  return (
    <div id="app" >
      <Referee/>
    </div>
  );
}

export default App;
