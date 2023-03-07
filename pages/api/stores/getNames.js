import clientPromise from '../../../lib/mongodb';

export default async (req, res) => {
  try {
    console.log('getNames.js');
    const client = await clientPromise;
    const db = client.db('res');

    const names = await db
      .collection('stores')
      //   .find({})
      .find({}, { projection: { name: 1, _id: 0 } })
      .toArray();

    res.json(names);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};
