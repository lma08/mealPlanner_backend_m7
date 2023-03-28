const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./MealRoutes');
const cors = require('cors');

require('dotenv').config();

mongoose.set("strictQuery", false);

const PORT = 7000 || process.env.port;

app.use(express.json());
app.use(cors());

mongoose
    .connect(process.env.MONGODB_LINK)
    .then(() => console.log('we were connected to mongo'))
    .catch((err) => console.log(err))

app.use(routes);


app.listen(PORT, () => {
    console.log(`I'm listenning on port ${PORT}`)
})

// mongodb+srv://lma08:lma080149@cluster0.jeuabap.mongodb.net/MealPlanner?retryWrites=true&w=majority