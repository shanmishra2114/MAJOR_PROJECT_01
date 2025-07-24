const Listing = require("../models/listings");

module.exports.index = async (req, res) => {
  const allListing = await Listing.find({});
  res.render("listings/index.ejs", { allListing });
};

module.exports.renderNewform = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res, next) => {
  let { id } = req.params;
  const individualList = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");

  if (!individualList) {
    req.flash("error", "the listing you are tryling to access does not exist!");
    res.redirect("/listing");
  }
  console.log(individualList);
  res.render("listings/show.ejs", { individualList });
};

module.exports.createListing = async (req, res, next) => {
  // let {title, description, image, price, location, country} = req.body;
  let url = req.file.path;
  let filename = req.file.filename;

  const newlisting = new Listing(req.body.listing);

  newlisting.owner = req.user._id;
  newlisting.image = { url, filename };
  await newlisting.save();
  req.flash("success", "New listing created!");
  res.redirect("/listing");
};

module.exports.editListing = async (req, res) => {
  let { id } = req.params;
  const individualList = await Listing.findById(id);
  if (!individualList) {
    req.flash("error", "the listing you are tryling to access does not exist!");
    res.redirect("/listing");
  }
  let originalImageUrl = individualList.image.url;
  originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_350");
  res.render("listings/edit.ejs", { individualList, originalImageUrl });
};

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;

  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  if (req.body) {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }

  req.flash("success", "listing updated!");
  res.redirect("/listing");
};

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  req.flash("success", "listing deleted!");
  res.redirect("/listing");
};
