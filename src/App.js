//https://randomuser.me/api/?results=5

import Header from './components/Header';
import UserList from './components/Content';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <UserList />
      <Footer />
    </div>
  );
}

export default App;
