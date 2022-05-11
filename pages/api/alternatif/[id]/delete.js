const fs = require("fs");
const alternatif = require("../../../../data/alternatif.json");

export default function handler(req, res) {
  const { id } = req.query;

  console.log(req.query);
  const newAlternatif = alternatif.filter(
    (x) => x.id.toString() !== id.toString()
  );

  fs.writeFileSync(
    "data/alternatif.json",
    JSON.stringify(newAlternatif, null, 2)
  );

  res.status(200);
}
