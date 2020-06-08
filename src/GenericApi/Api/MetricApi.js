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
import InlineObject10 from '../Model/InlineObject10';
import InlineObject11 from '../Model/InlineObject11';
import InlineObject8 from '../Model/InlineObject8';
import InlineObject9 from '../Model/InlineObject9';
import InlineResponse20010 from '../Model/InlineResponse20010';
import InlineResponse20011 from '../Model/InlineResponse20011';
import InlineResponse2008 from '../Model/InlineResponse2008';
import InlineResponse2009 from '../Model/InlineResponse2009';

/**
* Metric service.
* @module GenericApi/Api/MetricApi
* @version 1.0.0
*/
export default class MetricApi {

    /**
    * Constructs a new MetricApi. 
    * @alias module:GenericApi/Api/MetricApi
    * @class
    * @param {module:GenericApi/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:GenericApi/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getMetric operation.
     * @callback module:GenericApi/Api/MetricApi~getMetricCallback
     * @param {String} error Error message, if any.
     * @param {module:GenericApi/Model/InlineResponse2008} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Получение данных метрики
     * @param {module:GenericApi/Model/InlineObject8} body 
     * @param {module:GenericApi/Api/MetricApi~getMetricCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:GenericApi/Model/InlineResponse2008}
     */
    getMetric(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling getMetric");
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
      let returnType = InlineResponse2008;
      return this.apiClient.callApi(
        '/api/metric.json', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the metricsHistory operation.
     * @callback module:GenericApi/Api/MetricApi~metricsHistoryCallback
     * @param {String} error Error message, if any.
     * @param {module:GenericApi/Model/InlineResponse20011} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Получение истории измерений метрик
     * Запрос позвояет получать историю измерений для списка метрик за нужный период
     * @param {module:GenericApi/Model/InlineObject11} body 
     * @param {module:GenericApi/Api/MetricApi~metricsHistoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:GenericApi/Model/InlineResponse20011}
     */
    metricsHistory(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling metricsHistory");
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
      let returnType = InlineResponse20011;
      return this.apiClient.callApi(
        '/api/metrics/history.json', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the metricsLastValues operation.
     * @callback module:GenericApi/Api/MetricApi~metricsLastValuesCallback
     * @param {String} error Error message, if any.
     * @param {module:GenericApi/Model/InlineResponse20010} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Получение последних измерений
     * Запрос позвояет получать последние измерения для списка метрик
     * @param {module:GenericApi/Model/InlineObject10} body 
     * @param {module:GenericApi/Api/MetricApi~metricsLastValuesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:GenericApi/Model/InlineResponse20010}
     */
    metricsLastValues(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling metricsLastValues");
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
      let returnType = InlineResponse20010;
      return this.apiClient.callApi(
        '/api/metrics/last_values.json', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the searchMetrics operation.
     * @callback module:GenericApi/Api/MetricApi~searchMetricsCallback
     * @param {String} error Error message, if any.
     * @param {module:GenericApi/Model/InlineResponse2009} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Поиск метрик объектов
     * Запрос позвояет осуществлять поиск метрик объектов
     * @param {module:GenericApi/Model/InlineObject9} body 
     * @param {module:GenericApi/Api/MetricApi~searchMetricsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:GenericApi/Model/InlineResponse2009}
     */
    searchMetrics(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling searchMetrics");
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
      let returnType = InlineResponse2009;
      return this.apiClient.callApi(
        '/api/metrics.json', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}