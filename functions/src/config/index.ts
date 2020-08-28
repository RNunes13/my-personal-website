
import { config as FirebaseConfig } from 'firebase-functions';
import { existsSync } from 'fs';

let config = FirebaseConfig().env;

if (process.env.NODE_ENV !== 'production') {
  if (existsSync('./env.json')) {
    const env = require('../../env.json');
    
    config = env
  }
}

export default config;
