import Server from './server/server.js';
import colors from 'colors';
import dotenv from 'dotenv';
dotenv.conf();

const server = new server();
server.listen();