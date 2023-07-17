import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SeatSelect from './Template/SeatSelect/SeatSelect';
import { Provider } from 'react-redux';
import store from './Components/SeatSelection/SeatStore';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<SeatSelect />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}


export default App;
