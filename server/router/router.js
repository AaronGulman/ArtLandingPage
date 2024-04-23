import express from "express";
import db from "../db/connection.js";
import { ObjectId } from "mongodb";

const router = express.Router();

//---------------------Shows all orders
router.get("/", async (req, res) => {
  try {
    const collection = await db.collection("orders");
    const results = await collection.find({}).toArray();

    res.status(200).send(results);
  } catch (err) {
    console.error(err);
    res.send("Not found").status(500);
  }
});

//---------------------Shows one order

router.get("/", async (req, res) => {
  try {
    const collection = db.collection("orders");
    const query = { _id: new ObjectId(req.params.id) };
    const result = collection.findOne(query);

    if (!result) {
      return res.send("Not found", error);
    }

    res.status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
});

//---------------------Adds an order

router.post("/", async (req, res) => {
  try {
    let newOrder = {
      name: req.body.name,
      order: req.body.order,
    };
    let collection = await db.collection("orders");
    let result = await collection.insertOne(newOrder);

    res.status(200).send(result);
  } catch (err) {
    console.error(err);
  }
});

export default router;
