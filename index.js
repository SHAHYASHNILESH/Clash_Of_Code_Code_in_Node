const express=require('express');
const cors=require('cors');
const dotenv=require('dotenv');
const paymentRoutes=require('./routes/payment');


const app=express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.use("/api/payment/", paymentRoutes);

const port =3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));