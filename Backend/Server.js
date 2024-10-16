const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/StudentZila', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});






// Define the item schema
const itemchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  phone: String,
  email: String,
  Address: String,
  password: String,
  confirm_password: String,
});


// creacting a new folder in mongo db

const productSchema = new mongoose.Schema({
  product_name: { type: String, required: true },
  price: { type: String, required: true },
  offer: { type: String, required: true },
  rating: { type: Number },
  product_type: { type: String, required: true }, 
  url: { type: String, required: true },
});
// Create the item model
const item = mongoose.model('item', itemchema);
const Product = mongoose.model('Product', productSchema)

app.post('/products', async (req, res) => {
  try {
    const products = req.body; // Assuming req.body is an array of products
    const savedProducts = await Product.insertMany(products);
    res.status(201).json(savedProducts);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products)
  } catch (err) {
    res.status(500).send(err);
  }
});



app.post('/', async (req, res) => {
  const { first_name, last_name, phone, email, Address, password } = req.body;

  const newItem = new item({ first_name, last_name, phone, email, Address, password });

  try {
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});




app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
