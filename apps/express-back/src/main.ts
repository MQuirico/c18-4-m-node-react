import { ExpressService, MongoDBService } from './services';
import { AppRoutes } from './modules/app.routes';
import { envs } from './config';

(() => {
  main()
})();

async function main() {
  //Database connection
  await new MongoDBService({
    host: envs.DB_HOST,
    username: envs.DB_USER,
    password: envs.DB_PASSWORD,
    databaseName: envs.DB_NAME
  }).connect()
  //api service
  new ExpressService({
    port: envs.API_PORT,
    routes: AppRoutes.routes
  }).start()

}
