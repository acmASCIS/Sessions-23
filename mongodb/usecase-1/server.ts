import express from 'express';
import mongoose from 'mongoose';
import { User } from './user';

const app = express();
app.use(express.json());

app.post('/users', async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
  });

  await user.save();

  res.status(201).json(user);
});

app.get('/users', async (req, res) => {
  const users = await User.find().lean();

  res.json(users);
});

app.get('/users/:id', async (req, res) => {
  const user = await User.findById(req.params.id);

  res.json(user);
});

app.get('/users', async (req, res) => {
  const user = await User.findOne({
    name: req.query.name,
  });

  res.json(user);
});


mongoose.connect('mongodb://localhost/usecase-1')
  .then(() => {
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(err => {
    console.error('failed to connect to mongodb', err);
    process.exit(1);
  });
