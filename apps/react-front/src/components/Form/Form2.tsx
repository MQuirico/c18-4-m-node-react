import { Link } from 'react-router-dom';
import './Form.modules.css';
import { useState } from 'react';

export default function Form2({
  setSteps,
}: {
  setSteps: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneType, setPhoneType] = useState(
    'movil' as 'movil' | 'telefono' | ''
  );
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');

  const handleSubmit = (e: any) => {
    const results = {
      firstname,
      lastname,
      phone,
      phoneType,
      street,
      city,
      zip,
    };
    console.log(results);
    e.preventDefault();
    setSteps(3);
  };

  return (
    <form
      action=""
      className="flex flex-col items-center md:items-end input mx-auto text-pastel font-Marcellus text-lg"
      onSubmit={handleSubmit}
    >
      {/* Este es el div de first name */}
      <div className="flex mt-6 md:mt-12 gap-8">
        <label htmlFor="firstname" className="mt-2">
          <img src="/svg/Vector-3.svg" alt="" />
        </label>

        <input
          placeholder="FIRST NAME"
          id="firstname"
          type="text"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          className="input bg-inherit border-b text-pastel border-pastel px-4 py-2"
          autoComplete="given-name"
        />
      </div>

      {/* Este es el div de lastname */}
      <div className="flex mt-6 md:mt-12 gap-8">
        <label htmlFor="lastname" className="mt-2">
          <img src="/svg/Vector-3.svg" alt="" />
        </label>

        <input
          placeholder="LAST NAME"
          type="text"
          id="lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          className="input bg-inherit border-b text-pastel border-pastel px-4 py-2"
          autoComplete="family-name"
        />
      </div>

      {/* Este es el div de phone */}
      <div className="flex mt-6 md:mt-12 gap-8 justify-between contenedor">
        <div className="flex gap-8">
          <label htmlFor="phone" className="mt-2">
            <img src="/public/svg/phone.svg" alt="" />
          </label>

          <input
            placeholder="PHONE"
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-5/6 md:w-full bg-inherit border-b text-pastel border-pastel px-4 py-2"
            autoComplete="tel"
          />
        </div>

        <select
          name="phone"
          id="typephone"
          className="bg-pastel text-blacke rounded-lg px-4 select text-xl select"
          value={phoneType}
          onChange={(e) => setPhoneType(e.target.value as 'movil' | 'telefono')}
        >
          <option className="mx-0" value="movil">
            MOVIL
          </option>
          <option className="mx-0" value="telefono">
            TELEFONO
          </option>
        </select>
      </div>

      {/* Este es el div de street */}
      <div className="flex mt-6 md:mt-12 justify-between contenedor flex-col sm:flex-row">
        <div className="flex gap-8">
          <label htmlFor="street">
            <img src="/public/svg/ubicacion.svg" alt="" />
          </label>

          <input
            type="text"
            placeholder="STREET"
            id="street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            className="input2 bg-inherit border-b text-pastel border-pastel px-4 py-2"
            autoComplete="street-address"
          />
        </div>

        <div className="inline-flex gap-8 mt-6 md:mt-0">
          <label htmlFor="city">
            <img src="/public/svg/ubicacion.svg" alt="" className="sm:hidden" />
          </label>
          <input
            type="text"
            placeholder="CITY"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="input3 bg-inherit border-b text-pastel border-pastel px-4 py-2"
            autoComplete="address-level2"
          />
        </div>

        <div className="inline-flex gap-8 mt-6 md:mt-0">
          <label htmlFor="zip">
            <img src="/public/svg/ubicacion.svg" alt="" className="sm:hidden" />
          </label>

          <input
            type="text"
            placeholder="ZIP CODE"
            id="zip"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            className="input3 bg-inherit border-b text-pastel border-pastel px-4 py-2"
            autoComplete="postal-code"
          />
        </div>
      </div>

      {/* Estos son los botones */}
      <div className="mt-16 inline-flex gap-4">
        <Link to="/login">
          <button className="button px-8 py-1 bg-pastel text-blacke mr-4 first-letter:text-xl">
            CANCEL
          </button>
        </Link>

        <Link to="/login">
          <button
            onClick={handleSubmit}
            className="button px-8 py-1 bg-pastel text-blacke first-letter:text-xl"
          >
            NEXT
          </button>
        </Link>
      </div>
    </form>
  );
}
