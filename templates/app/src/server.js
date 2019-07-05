// import path from 'path';
import helmet from 'helmet';
import dotEnv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import compression from 'compression';
import queryParser from 'express-query-parser';
import routes from './routes/index.routes';
import logger from '../utils/logger';
// import mongo from '../utils/mongo_connect';

dotEnv.config();

const server = express();

const { PORT } = process.env;

const port = PORT || 8080;

server.use(bodyParser.json({ limit: '2mb' }));
server.use(
  queryParser({
    parseNull: true,
    parseBoolean: true,
  }),
);
server.use(compression());
server.use(helmet());
server.use(cors());

// listen on the designated port found in the configuration
server.listen(port, err => {
  if (err) {
    logger.error(err);
    process.exit(1);
  }

  // // require the database library (which instantiates a connection to mongodb)
  //   require('./utils/db');

  // // loop through all routes and dynamically require them – passing api
  //   fs.readdirSync(path.join(__dirname, 'routes')).map(file => {
  //           require('./routes/' + file)(server);
  //   });

  // output the status of the api in the terminal
  logger.info(`API is now running on port ${port}`);
});

// mount the root routes
server.use('/api', routes);

export default server;
