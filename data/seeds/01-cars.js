exports.seed = function(knex) {
  return knex("cars")
    .truncate()
    .then(function() {
      return knex("cars").insert([
        {
          VIN: "WH4T15TH15TH1N6Y0",
          make: "Honda",
          model: "Accord",
          mileage: "5000",
          "transmission status": "",
          "title status": "salvage"
        },
        {
          VIN: "LM40G3TWRKDK1DL0L",
          make: "Audi",
          model: "R8",
          mileage: "170",
          "transmission status": "",
          "title status": "clean"
        }
      ]);
    });
};
