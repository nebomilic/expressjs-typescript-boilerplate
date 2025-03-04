import express, { Express } from 'express';
import dotenv from 'dotenv';
import helloRouter from './routes/hello.routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(helloRouter);

app.listen(port, () => {
	console.log(`[server]: Server is running at http://localhost:${port}`);
});
