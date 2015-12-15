"use strict";
var JSONAPISerializer = require("jsonapi-serializer");

function EquipmentSerializer(equipment) {

  this.serialize = function () {
    return new JSONAPISerializer("equipment", equipment, {
      topLevelLinks: { self: "http://localhost:3000/api/equipment" },
      dataLinks: {
        self: function (equipment) {
          return 'http://localhost:3000/api/equipment/' + equipment.id
        }
      },
      attributes: ["name", "serial"]
    });
  };
}

module.exports = EquipmentSerializer;
