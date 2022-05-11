const alternatif = require("../../../../data/alternatif.json");

export default function handler(req, res) {
  const data = alternatif.find((x) => x.id.toString() === req.query.id);

  res.status(200).json({ data });
}
