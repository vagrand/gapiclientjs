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
import InlineObject from '../Model/InlineObject';
import InlineObject1 from '../Model/InlineObject1';
import InlineObject2 from '../Model/InlineObject2';
import InlineResponse200 from '../Model/InlineResponse200';
import InlineResponse2001 from '../Model/InlineResponse2001';
import InlineResponse2002 from '../Model/InlineResponse2002';
import InlineResponse2003 from '../Model/InlineResponse2003';
import Instance from '../Model/Instance';

/**
* Instance service.
* @module GenericApi/Api/InstanceApi
* @version 1.0.0
*/
export default class InstanceApi {

    /**
    * Constructs a new InstanceApi. 
    * @alias module:GenericApi/Api/InstanceApi
    * @class
    * @param {module:GenericApi/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:GenericApi/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addInstance operation.
     * @callback module:GenericApi/Api/InstanceApi~addInstanceCallback
     * @param {String} error Error message, if any.
     * @param {module:GenericApi/Model/InlineResponse2001} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Регистрация нового инстанса
     * Данный запрос устанавливает связь с instance-ом и в случае успеха, создает запись о нем в локальном хранилище
     * @param {module:GenericApi/Model/Instance} body Объект с настройками нового инстанса
     * @param {module:GenericApi/Api/InstanceApi~addInstanceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:GenericApi/Model/InlineResponse2001}
     */
    addInstance(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addInstance");
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
      let returnType = InlineResponse2001;
      return this.apiClient.callApi(
        '/api/instance.json', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteInstance operation.
     * @callback module:GenericApi/Api/InstanceApi~deleteInstanceCallback
     * @param {String} error Error message, if any.
     * @param {module:GenericApi/Model/InlineResponse2002} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Удаление инстанса
     * Удаление instance-а из локального хранилища коннектора приводит к удалению всех накопленных о нем данных из локального хранилища коннектора. Поскольку процесс удаления может занимать существенное время, то запрос на удаление только маркирует instance как удаленный, а само удаление происходит в фоновом режиме.
     * @param {module:GenericApi/Model/InlineObject1} body 
     * @param {module:GenericApi/Api/InstanceApi~deleteInstanceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:GenericApi/Model/InlineResponse2002}
     */
    deleteInstance(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling deleteInstance");
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
        '/api/instance.json', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the editInstance operation.
     * @callback module:GenericApi/Api/InstanceApi~editInstanceCallback
     * @param {String} error Error message, if any.
     * @param {module:GenericApi/Model/InlineResponse2001} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Редактирование инстанса
     * Данный запрос позволяет изменить параметры ранее созданного instance-а. Если в процессе редактирования будут изменены параметры подключения к instance-у, то производится повторная попытка подключения
     * @param {module:GenericApi/Model/Instance} body Объект с настройками редактируемого инстанса
     * @param {module:GenericApi/Api/InstanceApi~editInstanceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:GenericApi/Model/InlineResponse2001}
     */
    editInstance(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling editInstance");
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
      let returnType = InlineResponse2001;
      return this.apiClient.callApi(
        '/api/instance.json', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getInstance operation.
     * @callback module:GenericApi/Api/InstanceApi~getInstanceCallback
     * @param {String} error Error message, if any.
     * @param {module:GenericApi/Model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Получение данных инстанса
     * @param {module:GenericApi/Model/InlineObject} body 
     * @param {module:GenericApi/Api/InstanceApi~getInstanceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:GenericApi/Model/InlineResponse200}
     */
    getInstance(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling getInstance");
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
      let returnType = InlineResponse200;
      return this.apiClient.callApi(
        '/api/instance.json', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the searchInstances operation.
     * @callback module:GenericApi/Api/InstanceApi~searchInstancesCallback
     * @param {String} error Error message, if any.
     * @param {module:GenericApi/Model/InlineResponse2003} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Поиск инстансов
     * Запрос позвояет осуществлят поиск инстансов по списку их кодов и имени
     * @param {module:GenericApi/Model/InlineObject2} body 
     * @param {module:GenericApi/Api/InstanceApi~searchInstancesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:GenericApi/Model/InlineResponse2003}
     */
    searchInstances(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling searchInstances");
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
      let returnType = InlineResponse2003;
      return this.apiClient.callApi(
        '/api/instances.json', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
