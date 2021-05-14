import logo from './logo.svg';
import './App.css';
import Welcome from './pages/Welcome';
import PlanLayout from './Layouts/PlanLayout';
import { BrowserRouter, Route } from 'react-router-dom';
import PhoneConfirmation from './pages/PhoneConfirmation';

function App() {
  return (
    <BrowserRouter>
      <PlanLayout>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/invite" component={PhoneConfirmation} />
      </PlanLayout>
    </BrowserRouter>
  );
}

export default App;
