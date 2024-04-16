const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());

app.get("/tshirt", (req, res) => {
  res.status(200).send({
    tshirt: "white",
    size: "large",
  });
});

app.get("/items", (req, res) => {
  res.status(200).send({
    items: [
      {
        id: 1,
        checked: false,
        item: "Almonds, Unsalted, in the blue bag",
      },
      {
        id: 2,
        checked: false,
        item: "Pizza",
      },
      {
        id: 3,
        checked: false,
        item: "Bread",
      },
    ],
  });
});

app.post("/tshirt/:id", (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    res.status(418).send({ message: "We need a logo" });
  }

  res.send({
    tshirt: `tshirt with your ${logo} and id of ${id}`,
  });
});

app.listen(PORT, () => console.log(`its alive on http://localhost:${PORT}`));
