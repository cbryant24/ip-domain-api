import * as express from 'express';
import { apollo } from './apollo';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.use(express.json());
app.use(apollo);

app.listen(port, () => console.log(`App listening on port ${port}`) )


