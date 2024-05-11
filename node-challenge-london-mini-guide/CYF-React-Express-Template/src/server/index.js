import express from "express";
import heathrow from "./data/Heathrow.json" assert {type: 'json'};
import harrow from "./data/Harrow.json" assert {type: 'json'};
import stratford from "./data/Stratford.json" assert {type: 'json'};

const app = express();

app.listen(4173, () => {
  console.log("Listening on http://localhost:4173.");
});

app.get("/", (req, res) => {
  res.send("/pharmacies : returns an array of pharmacies in a specific area");
});

//level-200
app.get("/pharmacies", (req, res) => {
  res.send(stratford.pharmacies);
});

app.get("/collages", (req, res) => {
  res.send(stratford.colleges);
});

app.get("/doctors", (req, res) => {
  res.send(stratford.doctors);
});
app.get("/hospitals", (req, res) => {
  res.send(stratford.hospitals);
});


//level 300

// app.get("/:city/:category", (req, res) => {

//   const city = req.params.city.toLocaleLowerCase();
//   const category = req.params.category.toLocaleLowerCase();

//   if (city === "harrow") {

//     if (category === "pharmacies") {
//       res.send(harrow.pharmacies);
//     } else if (category === "doctors") {
//       res.send(harrow.doctors);
//     } else if (category === "hospitals") {
//       res.send(harrow.doctors);
//     } else if (category === "colleges") {
//       res.send(harrow.colleges);
//     } else {
//       res.send(harrow);
//     }
//   }

//   if (city === "heathrow") {

//     if (category === "pharmacies") {
//       res.send(heathrow.pharmacies);
//     } else if (category === "doctors") {
//       res.send(heathrow.doctors);
//     } else if (category === "hospitals") {
//       res.send(heathrow.doctors);
//     } else if (category === "colleges") {
//       res.send(heathrow.colleges);
//     } else {
//       res.send(heathrow);
//     }
//   }

//   if (city === "stradford") {

//     if (category === "pharmacies") {
//       res.send(stradford.pharmacies);
//     } else if (category === "doctors") {
//       res.send(stradford.doctors);
//     } else if (category === "hospitals") {
//       res.send(stradford.doctors);
//     } else if (category === "colleges") {
//       res.send(stradford.colleges);
//     } else {
//       res.send(stradford);
//     }
//   }
// });

//level 500 

const citiesData = {
  harrow: {
    pharmacies: harrow.pharmacies,
    doctors: harrow.doctors,
    hospitals: harrow.hospital,
    colleges: harrow.colleges
  },
  heathrow: {
    pharmacies: heathrow.pharmacies,
    doctors: heathrow.doctors,
    hospitals: heathrow.doctors,
    colleges: heathrow.colleges
  },
  stradford: {
    pharmacies: stratford.pharmacies,
    doctors: stratford.doctors,
    hospitals: stratford.doctors,
    colleges: stratford.colleges
  }
};

app.get("/:city/:category", (req, res) => {
  const city = req.params.city.toLowerCase();
  const category = req.params.category.toLowerCase();

  if (citiesData[city]) {
    const cityData = citiesData[city];
    if (category in cityData) {
      res.send(cityData[category]);
    } else {
      res.send(cityData);
    }
  } else {
    res.status(404).send("City not found");
  }
});
