import * as express from 'express';
import { apollo } from './apollo';

const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.static('./client/build'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(apollo);

app.get('/ip-services', async (req: express.Request, res: express.Response): Promise<void> => {
  await apollo(req, res);
});

app.listen(port, () => console.log(`App listening on port ${port}`) )


