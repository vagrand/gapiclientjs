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
    instance = new GenericApi.Instance();
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

  describe('Instance', function() {
    it('should create an instance of Instance', function() {
      // uncomment below and update the code to test Instance
      //var instane = new GenericApi.Instance();
      //expect(instance).to.be.a(GenericApi.Instance);
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instane = new GenericApi.Instance();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new GenericApi.Instance();
      //expect(instance).to.be();
    });

    it('should have the property config (base name: "config")', function() {
      // uncomment below and update the code to test the property config
      //var instane = new GenericApi.Instance();
      //expect(instance).to.be();
    });

  });

}));
