const express = require("express");
const albumsData = require("./albums.json");
const app = express();
app.use(express.json());

app.get("/albums", (req, res) => {
  res.send(albumsData);
});


app.get("/albums/:albumId", (req, res) => {
  const albumId = req.params.albumId;
  const result = albumsData.find((album) => album.albumId === albumId);
  res.status(200).send({ result });
});

app.post("/albums", function (req, res) {
  const newAlbum = req.body;
  albumsData.push(newAlbum);
  res.send({ newAlbum });
});


app.delete("/albums/:albumID", function (req, res) {
  const Id = req.params.albumId;
  albumsData.splice(Id, 1);
  res.status(200).send({ albumsData });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
