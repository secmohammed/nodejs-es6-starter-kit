/* eslint-disable no-console */

import express from 'express';

const app = express();

app.listen(3000, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`App listen to port: 3000`);
  }
});
