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


import ApiClient from "../ApiClient";
import ApiErrorResponse from '../Model/ApiErrorResponse';
import ApiSucessResponseWithId from '../Model/ApiSucessResponseWithId';
import InlineObject12 from '../Model/InlineObject12';
import InlineObject13 from '../Model/InlineObject13';
import InlineObject14 from '../Model/InlineObject14';
import InlineResponse20012 from '../Model/InlineResponse20012';
import InlineResponse20013 from '../Model/InlineResponse20013';
import InlineResponse2002 from '../Model/InlineResponse2002';
import Trigger from '../Model/Trigger';

/**
* Trigger service.
* @module GenericApi/Api/TriggerApi
* @version 1.0.0
*/
export default class TriggerApi {

    /**
    * Constructs a new TriggerApi. 
    * @alias module:GenericApi/Api/TriggerApi
    * @class
    * @param {module:GenericApi/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:GenericApi/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addTrigger operation.
     * @callback module:GenericApi/Api/TriggerApi~addTriggerCallback
     * @param {String} error Error message, if any.
     * @param {module:GenericApi/Model/ApiSucessResponseWithId} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Добавление нового триггера
     * @param {module:GenericApi/Model/Trigger} body Объект с настройками нового триггера
     * @param {module:GenericApi/Api/TriggerApi~addTriggerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:GenericApi/Model/ApiSucessResponseWithId}
     */
    addTrigger(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addTrigger");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ApiSucessResponseWithId;
      return this.apiClient.callApi(
        '/api/trigger.json', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteTrigger operation.
     * @callback module:GenericApi/Api/TriggerApi~deleteTriggerCallback
     * @param {String} error Error message, if any.
     * @param {module:GenericApi/Model/InlineResponse2002} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Удаление триггера
     * @param {module:GenericApi/Model/InlineObject13} body 
     * @param {module:GenericApi/Api/TriggerApi~deleteTriggerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:GenericApi/Model/InlineResponse2002}
     */
    deleteTrigger(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling deleteTrigger");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2002;
      return this.apiClient.callApi(
        '/api/trigger.json', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the editTrigger operation.
     * @callback module:GenericApi/Api/TriggerApi~editTriggerCallback
     * @param {String} error Error message, if any.
     * @param {module:GenericApi/Model/ApiSucessResponseWithId} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Редактирование триггера
     * @param {module:GenericApi/Model/Trigger} body Объект с настройками редактируемого триггера
     * @param {module:GenericApi/Api/TriggerApi~editTriggerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:GenericApi/Model/ApiSucessResponseWithId}
     */
    editTrigger(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling editTrigger");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ApiSucessResponseWithId;
      return this.apiClient.callApi(
        '/api/trigger.json', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTrigger operation.
     * @callback module:GenericApi/Api/TriggerApi~getTriggerCallback
     * @param {String} error Error message, if any.
     * @param {module:GenericApi/Model/InlineResponse20012} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Получение данных триггера
     * @param {module:GenericApi/Model/InlineObject12} body 
     * @param {module:GenericApi/Api/TriggerApi~getTriggerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:GenericApi/Model/InlineResponse20012}
     */
    getTrigger(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling getTrigger");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse20012;
      return this.apiClient.callApi(
        '/api/trigger.json', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the searchTriggers operation.
     * @callback module:GenericApi/Api/TriggerApi~searchTriggersCallback
     * @param {String} error Error message, if any.
     * @param {module:GenericApi/Model/InlineResponse20013} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Поиск триггеров
     * Запрос позвояет осуществлять поиск триггеров
     * @param {module:GenericApi/Model/InlineObject14} body 
     * @param {module:GenericApi/Api/TriggerApi~searchTriggersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:GenericApi/Model/InlineResponse20013}
     */
    searchTriggers(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling searchTriggers");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse20013;
      return this.apiClient.callApi(
        '/api/triggers.json', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}