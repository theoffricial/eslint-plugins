import { MongoClient } from 'mongodb';

console.log('Hello World!');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'myProject';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('documents');

    collection.insertOne({
        bla: '2',
        updatedAt: '2',
        _updated_at: 'x',
        kjkjkkj: 1,
    });

    collection.insertMany([{ updatedAt: 2 }, { kjkjkkj: 1 }], {});
    collection.updateOne({}, { $set: {} });
    collection.updateOne({}, { $unset: {} });
    collection.updateMany({}, {});
    collection.bulkWrite([
        {
            insertOne: { document: {} },
        },
        { insertOne: { document: {} } },
        { replaceOne: { filter: {}, replacement: {} } },
        { deleteOne: { filter: {} } },
        { updateOne: { filter: {}, update: {} } },
        { updateMany: { filter: {}, update: {} } },
        { deleteMany: { filter: {} } },
    ]);
    collection.findOneAndReplace({}, {});
    collection.findOneAndUpdate({}, {});
    // const stats = await collection.stats({});
    // collection.mapReduce
    // the following code examples can be pasted here...

    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    // eslint-disable-next-line @typescript-eslint/no-misused-promises, @typescript-eslint/require-await
    .finally(async () => {
        client.close();
    });
