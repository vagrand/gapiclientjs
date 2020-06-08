/**
 * Generic API
 * Стандартизованное API коннектора, предназначенного для интеграции с внешним источником данных. Общая спецификация [тут](https://co-ms.atlassian.net/wiki/spaces/NC/pages/85852315/Generic+API)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/GenericApi/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/GenericApi/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.GenericApi);
  }
}(this, function(expect, GenericApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new GenericApi.LastValue();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('LastValue', function() {
    it('should create an instance of LastValue', function() {
      // uncomment below and update the code to test LastValue
      //var instane = new GenericApi.LastValue();
      //expect(instance).to.be.a(GenericApi.LastValue);
    });

    it('should have the property metricId (base name: "metric_id")', function() {
      // uncomment below and update the code to test the property metricId
      //var instane = new GenericApi.LastValue();
      //expect(instance).to.be();
    });

    it('should have the property valueString (base name: "value_string")', function() {
      // uncomment below and update the code to test the property valueString
      //var instane = new GenericApi.LastValue();
      //expect(instance).to.be();
    });

    it('should have the property valueNumber (base name: "value_number")', function() {
      // uncomment below and update the code to test the property valueNumber
      //var instane = new GenericApi.LastValue();
      //expect(instance).to.be();
    });

    it('should have the property lastUpdatedTs (base name: "last_updated_ts")', function() {
      // uncomment below and update the code to test the property lastUpdatedTs
      //var instane = new GenericApi.LastValue();
      //expect(instance).to.be();
    });

  });

}));
