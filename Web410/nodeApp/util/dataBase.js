const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;
let db;



exports.mongoConnect = (callback) => {
    mongoClient.connect("mongodb+srv://avinoamru:a1b2c3d4@ar-db-vlo9f.mongodb.net/test?retryWrites=true&w=majority")
        .then(client => {
            
            db = client.db('CICCC-nodeDB');

            callback();
        }
            
        )
        .catch(err =>{
            console.log(err);
            
        });
};


exports.getDB = () => {
    if (db) {
        return db;
    }


}



