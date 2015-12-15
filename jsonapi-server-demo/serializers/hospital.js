"use strict";
var JSONAPISerializer = require("jsonapi-serializer");

function HospitalSerializer(hospital) {

  this.serialize = function () {
    return new JSONAPISerializer("hospitals", hospital, {
      topLevelLinks: { self: "http://localhost:3000/api/hospitals" },
      dataLinks: {
        self: function (hospital) {
          return 'http://localhost:3000/api/hospital/' + hospital.id
        }
      },
      attributes: ["name", "address", "phone", 'equipment'],
      equipment: {
        ref: "id",
        attributes: ["name", "serial"],
        relationshipLinks: {
          "related": "http://localhost:3000/api/equipment"
        },
        relationshipMeta: {
          count: function(hospital, equipment) {
            return hospital.equipment.length;
          },
        },
        includedLinks: {
          self: function (dataSet, equipment) {
            return 'http://localhost:3000/api/equipment/' + equipment.id;
          }
        }
      }
    });
  };

}

module.exports = HospitalSerializer;
