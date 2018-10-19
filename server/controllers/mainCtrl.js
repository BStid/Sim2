const getListings = (req, res) => {
  let db = req.app.get("db");
  db.getListings().then(response => {
    res.status(200).json(response);
  });
};

const removeListing = (req, res, next) => {
  req.app
    .get("db")
    .remove_listing(req.params.id)
    .then(response => res.status(200).send(response))
    .catch(err => res.status(500).send(err));
};

const addListing = (req, res, next) => {
  const { name, address, city, state, zipcode } = req.body;
  req.app
    .get("db")
    .add_listing([name, address, city, state, zipcode])
    .then(response =>
      res.status(200).send(`Successfully added ${name} to the DataBase!`)
    )
    .catch(err => res.status(500).send(err));
};

function getItem(req, res) {
  req.app
    .get("db")
    .get_item(req.params.id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => res.status(500).json(err));
}
module.exports = {
  getListings,
  removeListing,
  addListing,
  getItem
};
