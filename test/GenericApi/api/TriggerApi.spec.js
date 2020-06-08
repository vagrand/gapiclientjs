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
    instance = new GenericApi.TriggerApi();
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

  describe('TriggerApi', function() {
    describe('addTrigger', function() {
      it('should call addTrigger successfully', function(done) {
        //uncomment below and update the code to test addTrigger
        //instance.addTrigger(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteTrigger', function() {
      it('should call deleteTrigger successfully', function(done) {
        //uncomment below and update the code to test deleteTrigger
        //instance.deleteTrigger(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editTrigger', function() {
      it('should call editTrigger successfully', function(done) {
        //uncomment below and update the code to test editTrigger
        //instance.editTrigger(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTrigger', function() {
      it('should call getTrigger successfully', function(done) {
        //uncomment below and update the code to test getTrigger
        //instance.getTrigger(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchTriggers', function() {
      it('should call searchTriggers successfully', function(done) {
        //uncomment below and update the code to test searchTriggers
        //instance.searchTriggers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));