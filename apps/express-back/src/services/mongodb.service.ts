import mongoose from 'mongoose'

interface MongoDBOptionsInterface{
  host: string
  username: string
  password: string
  databaseName: string
}

export class MongoDBService{
  private readonly host:string
  private readonly user:string
  private readonly password:string
  private readonly databaseName:string

  constructor(options: MongoDBOptionsInterface){
    this.host = options.host
    this.user = options.username
    this.password = options.password
    this.databaseName = options.databaseName
  }

  public async connect(){
    await mongoose.connect(`${this.host}`, {
      authSource: 'admin',
      retryWrites: true,
      user: this.user,
      pass: this.password,
      dbName: this.databaseName,
      appName:'c18-04-m-node-react'
    }).then(() => {
        console.log('✅ MongoDB connected 🔌📡🚀...');
    }).catch((error) => {
        console.group('❌ MongoDB connection error');
        console.log(error);
        console.groupEnd();
    })
  }
}
