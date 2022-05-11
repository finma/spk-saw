const fs = require("fs");
const alternatif = require("../../../../data/alternatif.json");

export default function handler(req, res) {
  // console.log(req.query);
  // console.log(req.body);

  const { id } = req.query;

  const newAlternatif = alternatif.find(
    (x) => x.id.toString() === id.toString()
  );

  Object.assign(newAlternatif, req.body);

  fs.writeFileSync("data/alternatif.json", JSON.stringify(alternatif, null, 2));
}
