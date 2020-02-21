//Building an server using express
const express = require("express");
const cors = require("cors");
const path = require("path"); 

//process.env to access the secret stripe key in .env:
if(process.env.NODE_END != "production") require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();

const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors());

//in production now
if(process.env.NODE_ENV === "production") {
     app.use(express.static(path.join(__dirname, "client/build"))); 

     app.get("*", function(req, res) {   
          res.sendFile(path.join(__dirname, "client/build", "index.html"))
     });
};
app.listen(port, error => {
     if(error) throw error;
     console.log("Server running on port" + port);
});

//209.1 Building the actual route (/payment): 

app.post("/payment", (req, res) => {
     const body = {
          source: req.body.token.id,
          amount: req.body.amount,
          currency: "usd"
     };
stripe.charges.create(body, (stripeErr, stripeRes) => {
     if(stripeErr) {
          res.status(500).send({ error: stripeErr });
     }
     else{
          res.status(200).send({ success: stripeRes});
     }
})
});