import { Form, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import './styles/global_styles.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<MainPage/>} />
      </Routes>
    </div>
  );
}

export default App;
