import React,{createContext} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CompA from './CompA'

const FirstName = createContext();
const LastName = createContext();

const App = () => {
  return (
    <>
      <FirstName.Provider value={'Madaan'}>
        <LastName.Provider value={'Sahaab'}>
          <CompA />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  )
}

export default App;
export {FirstName,LastName} 