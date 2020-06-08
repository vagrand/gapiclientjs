# GenericApi.MetricApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMetric**](MetricApi.md#getMetric) | **GET** /api/metric.json | Получение данных метрики
[**metricsHistory**](MetricApi.md#metricsHistory) | **GET** /api/metrics/history.json | Получение истории измерений метрик
[**metricsLastValues**](MetricApi.md#metricsLastValues) | **GET** /api/metrics/last_values.json | Получение последних измерений
[**searchMetrics**](MetricApi.md#searchMetrics) | **GET** /api/metrics.json | Поиск метрик объектов



## getMetric

> InlineResponse2008 getMetric(body)

Получение данных метрики

### Example

```javascript
import GenericApi from 'GenericApi';

let apiInstance = new GenericApi.MetricApi();
let body = new GenericApi.InlineObject8(); // InlineObject8 | 
apiInstance.getMetric(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**InlineObject8**](InlineObject8.md)|  | 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## metricsHistory

> InlineResponse20011 metricsHistory(body)

Получение истории измерений метрик

Запрос позвояет получать историю измерений для списка метрик за нужный период

### Example

```javascript
import GenericApi from 'GenericApi';

let apiInstance = new GenericApi.MetricApi();
let body = new GenericApi.InlineObject11(); // InlineObject11 | 
apiInstance.metricsHistory(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**InlineObject11**](InlineObject11.md)|  | 

### Return type

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## metricsLastValues

> InlineResponse20010 metricsLastValues(body)

Получение последних измерений

Запрос позвояет получать последние измерения для списка метрик

### Example

```javascript
import GenericApi from 'GenericApi';

let apiInstance = new GenericApi.MetricApi();
let body = new GenericApi.InlineObject10(); // InlineObject10 | 
apiInstance.metricsLastValues(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**InlineObject10**](InlineObject10.md)|  | 

### Return type

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## searchMetrics

> InlineResponse2009 searchMetrics(body)

Поиск метрик объектов

Запрос позвояет осуществлять поиск метрик объектов

### Example

```javascript
import GenericApi from 'GenericApi';

let apiInstance = new GenericApi.MetricApi();
let body = new GenericApi.InlineObject9(); // InlineObject9 | 
apiInstance.searchMetrics(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**InlineObject9**](InlineObject9.md)|  | 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

