// import React, { useState, useEffect } from 'react';

// // --------- Store ---------
// function Store(props) {
//   return (
//     <>
//       <a
//         className="trasition hover:text-teal-600"
//         href={`/${props.store.name}`}
//       >
//         {' '}
//         - {props.store.name}{' '}
//       </a>{' '}
//       <br />
//     </>
//   );
// }

// // --------- StoresNames ---------
// export default function StoresSearch() {
//   const [stores, setStores] = useState([]);

//   useEffect(() => {
//     async function getStoresNames() {
//       const response = await fetch(`http://localhost:3000/api/stores/getNames`);
//       // error check
//       if (!response.ok) {
//         const message = `An error occurred: ${response.statusText}`;
//         window.alert(message);
//         return;
//       }
//       // Get response and update the state
//       const names = await response.json();
//       setStores(names);
//     } //getStores() End

//     getStoresNames();
//     return;
//   }, [stores.length]); //useEffect() End

//   function storeList() {
//     return stores.map((store) => {
//       return <Store key={store.name} store={store}></Store>;
//     }); //map() End
//   }

//   return (
//     <div className=" bg-green-300 p-4 border border-gray-700 rounded-lg transition hover:border-teal-500">
//       <h3 className="underline underline-offset-4">Stores List</h3>
//       <p>
//         {storeList()} <br />{' '}
//       </p>
//     </div>
//   );
// }

import clientPromise from '../lib/mongodb';

export default function StoresSearch({ names }) {
  function log(names) {
    console.log(names);
  }

  return (
    <div>
      <h1>Top 20 names of All Time</h1>
      <p>
        <small>(According to Metacritic)</small>
      </p>
      {/* {names}
      {log} */}
      <ul>
        {names.map((store) => (
          <li key={store.name}>
            <p>{store.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db('res');

    const names = await db
      .collection('stores')
      .find({}, { projection: { name: 1, _id: 0 } })
      .toArray();

    return {
      props: { names: JSON.parse(JSON.stringify(names)) },
    };
  } catch (e) {
    console.error(e);
  }
}
