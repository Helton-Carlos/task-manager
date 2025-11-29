import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import Routes from './routes/index';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', Routes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
