import clientPromise from '../../lib/mongodb';

export default async (req, res) => {
  try {
    console.log('addUser.js');
    const client = await clientPromise;
    const db = client.db('ozlee');
    const { first_name, last_name, password, city, state, address, zip } =
      req.body;

    const user = await db.collection('users').insertOne({
      first_name,
      last_name,
      password,
      city,
      state,
      address,
      zip,
    });

    res.json(user);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};
