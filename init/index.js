const mongoose = require("mongoose")
const Listing = require("../models/listings.js")
const initData = require("./data.js");

main()
  .then((res) => {
    console.log("connection maintained");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wonderlust");
}

const initDB = async () => {
    await Listing.deleteMany();
    initData.data = initData.data.map((obj)=>({ ...obj, owner: "6877e389fb5c6b4ba9f8f47e"}))
    await Listing.insertMany(initData.data);
    console.log("data initialised");

}

initDB();