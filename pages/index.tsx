import Head from 'next/head';
import clientPromise from '../lib/mongodb';
import { InferGetServerSidePropsType } from 'next';

// components
// import StoresSearch from './components/storesSearch/storesSearch.js';

export default function Home({ names }: any) {
  function log(names: any) {
    console.log(names);
  }

  return (
    <div className="container">
      <Head>
        <title>Creα Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to{' '}
          <a
            className="px-1 -py-2 rounded-lg transition"
            href="https://ozlee.vercel.app"
          >
            <span className=" text-green-500 ">OZ</span>
            {/* <span className=" text-yellow-500 "></span> */}
            lEE
          </a>
          {/* Welcome to <a href="https://ozlee.vercel.com">OZlEE</a> */}
        </h1>

        <p className="description bg-zinc-300 ">
          Here you will find EVERYTHING about your favorite restaurants,
          fast-food, etc.
        </p>

        <p className="description bg-amber-300">
          Choose a restaurant and get the best deals.
        </p>
        <div className="grid">
          <div id="storesSearch">
            <h1>
              <u> Our fantastic stores : </u>
            </h1>
            <ul>
              {names.map((store: any) => (
                <li key={store.name}>
                  <p>{store.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      <footer>
        <div className=" bg-red-300 p-4 border border-gray-700 rounded-lg ">
          ozlee.vercel.app
          <br />
          Get it or lose it
        </div>
      </footer>

      <style jsx>{``}</style>

      <style jsx global>{``}</style>
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

// export async function getServerSideProps(context: any) {
//   try {
//     await clientPromise;
//     // `await clientPromise` will use the default database passed in the MONGODB_URI
//     // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
//     //
//     // `const client = await clientPromise`
//     // `const db = client.db("myDatabase")`
//     //
//     // Then you can execute queries against your database like so:
//     // db.find({}) or any of the MongoDB Node Driver commands

//     return {
//       props: { isConnected: true },
//     };
//   } catch (e) {
//     console.error(e);
//     return {
//       props: { isConnected: false },
//     };
//   }
// }

// export default function Home({
//   isConnected,
// }: InferGetServerSidePropsType<typeof getServerSideProps>) {
//   return (
//     <div className="container">
//       <Head>
//         <title>Creα Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main>
//         <h1 className="title">
//           Welcome to{' '}
//           <a
//             className="px-1 -py-2 rounded-lg transition"
//             href="https://ozlee.vercel.app"
//           >
//             <span className=" text-green-500 ">OZ</span>
//             {/* <span className=" text-yellow-500 "></span> */}
//             lEE
//           </a>
//           {/* Welcome to <a href="https://ozlee.vercel.com">OZlEE</a> */}
//         </h1>

//         <p className="description bg-zinc-300 ">
//           Here you will find EVERYTHING about your favorite restaurants,
//           fast-food, etc.
//         </p>

//         <p className="description bg-amber-300">
//           Choose a restaurant and get the best deals.
//         </p>
//         <div className="grid">
//           <StoresSearch />
//         </div>
//       </main>

//       <footer>
//         <div className=" bg-red-300 p-4 border border-gray-700 rounded-lg ">
//           ozlee.vercel.app
//           <br />
//           Get it or lose it
//         </div>
//       </footer>

//       <style jsx>{``}</style>

//       <style jsx global>{``}</style>
//     </div>
//   );
// }
