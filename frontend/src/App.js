
import './App.css';
import Todo from './components/todo';
import store from './components/redux/store'
import { Provider } from 'react-redux';
import Display from './components/dispaly';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Todo/>
     
      <Display/>
    </div>
    </Provider>
   
  );
}

export default App;
