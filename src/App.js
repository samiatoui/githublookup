import './App.css';
import Repolist from "./components/repolist/Repolist"
import UserInfo from './components/userinfo/UserInfo';
function App() {
  return (
    <div className="App">
      <UserInfo/>
      <Repolist/>
    </div>
  );
}

export default App;
