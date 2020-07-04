import mongoose from 'mongoose';

export default function mongoConnection() {
  mongoose.set('useCreateIndex', true);
  mongoose.connect(
    // 'mongodb://admin:19vilka76@cluster0-shard-00-00-4mcts.mongodb.net:27017,cluster0-shard-00-01-4mcts.mongodb.net:27017,cluster0-shard-00-02-4mcts.mongodb.net:27017/todo?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PWD}@${process.env.MONGO_HOST}/${process.env.MONGO_DB_NAME}`,
    { useNewUrlParser: true },
  );

  mongoose.connection.on('error', () => {
    throw new Error('Unable to connect to database');
  });

  // When the connection is disconnected
  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection disconnected');
  });
}
