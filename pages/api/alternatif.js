const fs = require("fs");
const alternatif = require("../../data/alternatif.json");

export default function handler(req, res) {
  if (req.method === "POST") {
    // console.log(req.body);

    alternatif.push(req.body);
    fs.writeFileSync(
      "data/alternatif.json",
      JSON.stringify(alternatif, null, 2)
    );

    res.status(200);
  } else {
    fs.readFile("data/alternatif.json", "utf-8", (err, jsonString) => {
      if (err) {
        console.log(err);
      } else {
        const data = JSON.parse(jsonString);
        // console.log(data);
        res.status(200).json({ data });
      }
    });
  }
}
