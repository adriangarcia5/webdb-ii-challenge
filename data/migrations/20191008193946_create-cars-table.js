exports.up = function(knex) {
    return knex.schema.createTable("cars", tbl => {
      tbl.increments();
      tbl
        .text("VIN", 17)
        .unique()
        .notNullable();
      tbl.text("make").notNullable();
      tbl.text("model").notNullable();
      tbl.integer("mileage").notNullable();
      tbl.text("transmission status", 128);
      tbl.text("title status", 128);
    });
  };
  
  exports.down = function(knex) {};