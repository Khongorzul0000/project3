const Url = require("../model/urlModel");

const createUrl = async (req, res) => {
  try {
    const body = req.body;
    const result = await new Url(body).save();
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

const getUrls = async (_req, res) => {
  const urls = await Url.find({}).populate({ path: "user" });
  res.send(urls);
};

const shortUrl = async (req, res) => {
  const shortUrl = await Url.findOne({ short: req.params.shortUrl });
  if (shortUrl == null) return res.json({
    error:"short url is wrong, check again"
  });
  res.redirect(shortUrl.full);
};

const deleteUrl = async (req, res) =>{
    const id = req.params.id
    const result = await Url.findByIdAndDelete({_id:id})
    res.send( result)
}

module.exports = { createUrl, getUrls, shortUrl, deleteUrl };
