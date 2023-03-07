import React, { useState, useEffect } from 'react';

// --------- Store ---------
function Store(props) {
  return (
    <>
      <a
        className="trasition hover:text-teal-600"
        href={`/${props.store.name}`}
      >
        {' '}
        - {props.store.name}{' '}
      </a>{' '}
      <br />
    </>
  );
}

// --------- StoresNames ---------
export default function StoresSearch() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    async function getStoresNames() {
      const response = await fetch(`http://localhost:3000/api/stores/getNames`);
      // error check
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      // Get response and update the state
      const names = await response.json();
      setStores(names);
    } //getStores() End

    getStoresNames();
    return;
  }, [stores.length]); //useEffect() End

  function storeList() {
    return stores.map((store) => {
      return <Store key={store.name} store={store}></Store>;
    }); //map() End
  }

  return (
    <div className=" bg-green-300 p-4 border border-gray-700 rounded-lg transition hover:border-teal-500">
      <h3 className="underline underline-offset-4">Stores List</h3>
      <p>
        {storeList()} <br />{' '}
      </p>
    </div>
  );
}
