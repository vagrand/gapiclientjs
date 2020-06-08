# GenericApi.TriggerApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addTrigger**](TriggerApi.md#addTrigger) | **POST** /api/trigger.json | Добавление нового триггера
[**deleteTrigger**](TriggerApi.md#deleteTrigger) | **DELETE** /api/trigger.json | Удаление триггера
[**editTrigger**](TriggerApi.md#editTrigger) | **PUT** /api/trigger.json | Редактирование триггера
[**getTrigger**](TriggerApi.md#getTrigger) | **GET** /api/trigger.json | Получение данных триггера
[**searchTriggers**](TriggerApi.md#searchTriggers) | **GET** /api/triggers.json | Поиск триггеров



## addTrigger

> ApiSucessResponseWithId addTrigger(body)

Добавление нового триггера

### Example

```javascript
import GenericApi from 'GenericApi';

let apiInstance = new GenericApi.TriggerApi();
let body = new GenericApi.Trigger(); // Trigger | Объект с настройками нового триггера
apiInstance.addTrigger(body, (error, data, response) => {
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
 **body** | [**Trigger**](Trigger.md)| Объект с настройками нового триггера | 

### Return type

[**ApiSucessResponseWithId**](ApiSucessResponseWithId.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTrigger

> InlineResponse2002 deleteTrigger(body)

Удаление триггера

### Example

```javascript
import GenericApi from 'GenericApi';

let apiInstance = new GenericApi.TriggerApi();
let body = new GenericApi.InlineObject13(); // InlineObject13 | 
apiInstance.deleteTrigger(body, (error, data, response) => {
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
 **body** | [**InlineObject13**](InlineObject13.md)|  | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## editTrigger

> ApiSucessResponseWithId editTrigger(body)

Редактирование триггера

### Example

```javascript
import GenericApi from 'GenericApi';

let apiInstance = new GenericApi.TriggerApi();
let body = new GenericApi.Trigger(); // Trigger | Объект с настройками редактируемого триггера
apiInstance.editTrigger(body, (error, data, response) => {
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
 **body** | [**Trigger**](Trigger.md)| Объект с настройками редактируемого триггера | 

### Return type

[**ApiSucessResponseWithId**](ApiSucessResponseWithId.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getTrigger

> InlineResponse20012 getTrigger(body)

Получение данных триггера

### Example

```javascript
import GenericApi from 'GenericApi';

let apiInstance = new GenericApi.TriggerApi();
let body = new GenericApi.InlineObject12(); // InlineObject12 | 
apiInstance.getTrigger(body, (error, data, response) => {
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
 **body** | [**InlineObject12**](InlineObject12.md)|  | 

### Return type

[**InlineResponse20012**](InlineResponse20012.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## searchTriggers

> InlineResponse20013 searchTriggers(body)

Поиск триггеров

Запрос позвояет осуществлять поиск триггеров

### Example

```javascript
import GenericApi from 'GenericApi';

let apiInstance = new GenericApi.TriggerApi();
let body = new GenericApi.InlineObject14(); // InlineObject14 | 
apiInstance.searchTriggers(body, (error, data, response) => {
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
 **body** | [**InlineObject14**](InlineObject14.md)|  | 

### Return type

[**InlineResponse20013**](InlineResponse20013.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

