import React, { useState } from 'react';
import './Register.modules.css';
import { Barra } from '../Barra';
import Form1 from '../Form/Form1';
import Form2 from '../Form/Form2';
import Form3 from '../Form/Form3';

export default function Register() {
  const [steps, setSteps] = useState(1);

  return (
    <div className="card bg-gray mx-auto grid grid-cols-10">
      
      <div className="col-span-1 flex justify-start sm:justify-evenly">
        <Barra />
      </div>

      <div className="col-span-8">
      <h2 className="font-Marcellus text-gold text-2xl text-center mt-10">
        REGISTER
      </h2>

        {
          steps === 1 && <Form1 setSteps={setSteps} />
        }

        {
          steps === 2 && <Form2 setSteps={setSteps} />
        }

        {
          steps === 3 && <Form3 setSteps={setSteps} />
        
        }
      </div>

      <div className="col-span-1 flex justify-end sm:justify-center">
        <Barra />
      </div>
    </div>
  );
}
