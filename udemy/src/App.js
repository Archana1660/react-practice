import React from 'react';
import './App.css';
//import {Template} from './Template/template'
//import {VariablesDiff} from './components/varletconst/varletconst'
//import {FormInput} from './components/FormInput/formInput';
//import {Count} from './components/countState/countState';
//import {ToggleVisibility} from './components/Toggle/toggle';
//import {isAdult, canDrink} from './components/import-export/first';
//import AppHooks from './components/Hooks/hooks';
import NoteApp from './components/ComplexUseState';

function App() {
  return (
    <>
      {/*console.log(isAdult(18))*/}
      {/*console.log(canDrink(11))*/}
      {/*<AppHooks count={0}/>*/}
      <NoteApp />
    </>
  );
}

export default App;
