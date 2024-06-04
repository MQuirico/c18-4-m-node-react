import React, {useContext} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Context} from '../context/Context'
import Login from '../components/login/Login';
import Register from '../components/Register/Register';
import UserPanel from '../components/userPanel/UserPanel';
import MainContent from '../components/MainContent';

const App: React.FC = () => {

  const {menuApp, onUser} = useContext(Context);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-darkPurple text-yellow-400 font-marcellus">
      <Header />
      {onUser === false && <main className="flex flex-col items-center text-center flex-grow w-full h-[80vh] justify-center">
        {menuApp === 0 && <div className="w-full h-full flex justify-center items-start">
          <MainContent></MainContent>
        </div>}
        {menuApp === 1 && <Login></Login>}
        {menuApp === 2 && <Register></Register>}
      </main>}
      {onUser === true && <UserPanel></UserPanel>}
      <Footer />
    </div>
  );
}

export default App;
