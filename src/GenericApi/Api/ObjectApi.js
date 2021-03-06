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
import InlineObject3 from '../Model/InlineObject3';
import InlineObject4 from '../Model/InlineObject4';
import InlineObject5 from '../Model/InlineObject5';
import InlineResponse2002 from '../Model/InlineResponse2002';
import InlineResponse2004 from '../Model/InlineResponse2004';
import InlineResponse2005 from '../Model/InlineResponse2005';
import ModelObject from '../Model/ModelObject';

/**
* Object service.
* @module GenericApi/Api/ObjectApi
* @version 1.0.0
*/
export default class ObjectApi {

    /**
    * Constructs a new ObjectApi. 
    * @alias module:GenericApi/Api/ObjectApi
    * @class
    * @param {module:GenericApi/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:GenericApi/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addObject operation.
     * @callback module:GenericApi/Api/ObjectApi~addObjectCallback
     * @param {String} error Error message, if any.
     * @param {module:GenericApi/Model/ApiSucessResponseWithId} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Добавление нового объекта
     * @param {module:GenericApi/Model/ModelObject} body Параметры нового объекта
     * @param {module:GenericApi/Api/ObjectApi~addObjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:GenericApi/Model/ApiSucessResponseWithId}
     */
    addObject(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addObject");
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
        '/api/object.json', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteObject operation.
     * @callback module:GenericApi/Api/ObjectApi~deleteObjectCallback
     * @param {String} error Error message, if any.
     * @param {module:GenericApi/Model/InlineResponse2002} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Удаление объекта
     * @param {module:GenericApi/Model/InlineObject4} body 
     * @param {module:GenericApi/Api/ObjectApi~deleteObjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:GenericApi/Model/InlineResponse2002}
     */
    deleteObject(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling deleteObject");
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
        '/api/object.json', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the editObject operation.
     * @callback module:GenericApi/Api/ObjectApi~editObjectCallback
     * @param {String} error Error message, if any.
     * @param {module:GenericApi/Model/ApiSucessResponseWithId} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Редактирование объекта
     * @param {module:GenericApi/Model/ModelObject} body Настройки редактируемого объекта
     * @param {module:GenericApi/Api/ObjectApi~editObjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:GenericApi/Model/ApiSucessResponseWithId}
     */
    editObject(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling editObject");
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
        '/api/object.json', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getObject operation.
     * @callback module:GenericApi/Api/ObjectApi~getObjectCallback
     * @param {String} error Error message, if any.
     * @param {module:GenericApi/Model/InlineResponse2004} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Получение данных объекта
     * @param {module:GenericApi/Model/InlineObject3} body 
     * @param {module:GenericApi/Api/ObjectApi~getObjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:GenericApi/Model/InlineResponse2004}
     */
    getObject(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling getObject");
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
      let returnType = InlineResponse2004;
      return this.apiClient.callApi(
        '/api/object.json', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the searchObjects operation.
     * @callback module:GenericApi/Api/ObjectApi~searchObjectsCallback
     * @param {String} error Error message, if any.
     * @param {module:GenericApi/Model/InlineResponse2005} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Поиск объектов
     * Запрос позвояет осуществлять поиск объектов
     * @param {module:GenericApi/Model/InlineObject5} body 
     * @param {module:GenericApi/Api/ObjectApi~searchObjectsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:GenericApi/Model/InlineResponse2005}
     */
    searchObjects(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling searchObjects");
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
      let returnType = InlineResponse2005;
      return this.apiClient.callApi(
        '/api/objects.json', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
