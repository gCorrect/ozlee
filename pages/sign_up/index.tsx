import React, { useState, PureComponent, Fragment } from 'react';
// import SVGBtn from '../components/layout/buttons/svgSubmitBtn';
import Link from 'next/link';

// =======AddUser=========
// export default function AddUser() {
//   return <div className="sign-up">geia</div>;
// }
export default function AddUser() {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('New Mexico');
  const [address, setAddress] = useState('');
  const [zip, setZIP] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (
      first_name &&
      last_name &&
      password &&
      city &&
      state &&
      address &&
      zip
    ) {
      try {
        let response = await fetch('http://localhost:3000/api/addUser', {
          method: 'POST',
          body: JSON.stringify({
            first_name,
            last_name,
            password,
            city,
            state,
            address,
            zip,
          }),
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
          },
        });
        response = await response.json();
        setFirstName('');
        setLastName('');
        setPassword('');
        setCity('');
        setState('');
        setAddress('');
        setZIP('');
        // setError('');
        setMessage('Congrats! You have successfully registered!');
      } catch (errorMessage: any) {
        setError(errorMessage);
      }
    } else {
      return setError('All fields are required');
    }
  };

  return (
    <div className="sign-up">
      {error ? <div className="alert-error">{error}</div> : null}

      {message ? (
        <div className="alert-message">
          {message} <br />
          <Link href="/" className="back-link">
            {/* <a> */}
            <u> Go back </u>
            {/* </a> */}
          </Link>
        </div>
      ) : (
        <form
          className="max-w-lg mx-auto my-10 p-4 border border-gray-700 rounded-lg"
          onSubmit={handleSubmit}
        >
          {/* header */}
          <h1 className="text-4xl mb-4 text-center">
            <u className="underline decoration-sky-300"> Sign Up Form</u>
          </h1>
          {/* first name and last name - flex container */}
          <div className="first-last-name flex flex-wrap -mx-3 mb-6">
            {/* first name */}
            <div className="first-name w-full md:w-1/2 px-3 mb-6 md:mb-0">
              {/* first name label */}
              <label
                className="block uppercase tracking-wide text-xs font-bold mb-2" // tracking-wide -> letter-spacing: 0.025em;
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              {/* first name input */}
              <input
                type="text"
                className="appearance-none block w-full bg-gray-200  italic border rounded py-3 px-4 mb-3 leading-tight
                          focus:outline-none focus:bg-white ease-in-out duration-300" // appearance-none -> removes default browser styles | leading-tight -> line-height: 1.25rem; | border -> border: 1px solid #e2e8f0; |
                id="grid-first-name"
                placeholder="Type your first name here"
                onChange={(e) => setFirstName(e.target.value)}
                value={first_name}
              />
            </div>
            {/* last name */}
            <div className="last-name w-full md:w-1/2 px-3">
              {/* md:w-1/2 -> width: 50%; */}
              <label
                className="block uppercase tracking-wide text-xs font-bold mb-2" // tracking-wide -> letter-spacing: 0.025em;
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                type="text"
                className="appearance-none block w-full bg-gray-200 italic border border-gray-200 rounded py-3 px-4 leading-tight
                          focus:outline-none focus:bg-white focus:border-gray-500 ease-in-out duration-300"
                id="grid-last-name"
                placeholder="Type your last name here"
                onChange={(e) => setLastName(e.target.value)}
                value={last_name}
              />
            </div>
          </div>
          {/* password */}
          <div className="password flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Password
              </label>
              <input
                type="password"
                className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                placeholder="******************"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
          </div>
          {/* city, state, address, zip */}
          <div className="residence-info flex flex-wrap -mx-3 mb-2">
            {/* city */}
            <div className="city w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide  text-xs font-bold mb-2"
                htmlFor="grid-city"
              >
                city
              </label>
              <input
                type="text"
                className="city appearance-none block w-full bg-gray-200  italic border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                placeholder="π.χ. Περιστέρι"
                onChange={(e) => setCity(e.target.value)}
                value={city}
              />
            </div>
            {/* state */}
            <div className=" state w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide  text-xs font-bold mb-2"
                htmlFor="grid-state"
              >
                State
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 py-3 px-4 pr-8 rounded leading-tight
                            focus:outline-none focus:bg-white focus:border-gray-500 hover:cursor-pointer"
                  id="grid-state"
                  onChange={(e) => setState(e.target.value)}
                  value={state}
                >
                  <option value={'New Mexico'}>New Mexico</option>
                  <option value={'Missouri'}>Missouri</option>
                  <option value={'Texas'}>Texas</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            {/* address, zip */}
            <div className=" address-zip w-full md:w-1/3 px-3 mb-6 md:mb-0">
              {/* address */}
              <label
                className="block uppercase tracking-wide  text-xs font-bold mb-2"
                htmlFor="grid-city"
              >
                Address
              </label>
              <input
                type="text"
                className="city appearance-none block w-full bg-gray-200  italic border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-address"
                placeholder="π.χ. Περιστέρι"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              />
              {/* zip */}
              <label
                className="block uppercase tracking-wide  text-xs font-bold mb-2"
                htmlFor="grid-zip"
              >
                zip
              </label>
              <input
                type="text"
                className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                placeholder="90210"
                onChange={(e) => setZIP(e.target.value)}
                value={zip}
              />
            </div>
          </div>
          {/* <Select /> */}
          <button type="submit" className="submit_btn">
            {/* <SVGBtn /> */}
            Add Post
          </button>
        </form>
      )}
      <style jsx>
        {`
          .alert-error {
            width: 100%;
            color: red;
            margin: 2em auto;
          }
          .alert-message {
            font-size: 2.5em;
            width: 100%;
            color: green;
            margin-top: 2em;
          }
        `}
      </style>
    </div>
  );
}
