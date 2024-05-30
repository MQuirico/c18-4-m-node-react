import React, {useContext} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Context} from '../context/Context'
import Login from '../components/login/Login';
import Register from '../components/Register/Register';

const App: React.FC = () => {

  const {menuApp} = useContext(Context);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-darkPurple text-yellow-400 font-marcellus">
      <Header />
      <main className="flex flex-col items-center text-center flex-grow w-full h-[80vh] justify-center">
        {menuApp === 0 && <div className="w-full h-full flex justify-center items-center flex-col gap-6">
          <div className="mb-8">
            <img src="/src/images_Home/logo_legal_builder.svg" alt="Legal Builder Logo" className="h-24 w-24" />
          </div>
          <h2 className="text-4xl mb-2">Legal Builder</h2>
          <p className="text-sm text-gray-400">Descripción general de la aplicación en pocas palabras</p>
        </div>}
        {menuApp === 1 && <Login></Login>}
        {menuApp === 2 && <Register></Register>}
      </main>
      <Footer />
    </div>
  );
}

export default App;
