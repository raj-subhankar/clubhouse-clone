import logo from './logo.svg';
import './App.css';
import Welcome from './pages/Welcome';
import PlanLayout from './Layouts/PlanLayout';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <PlanLayout>
            <Welcome />
      </PlanLayout>
    </BrowserRouter>
  );
}

export default App;
