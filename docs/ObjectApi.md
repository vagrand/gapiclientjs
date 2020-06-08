# GenericApi.ObjectApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addObject**](ObjectApi.md#addObject) | **POST** /api/object.json | Добавление нового объекта
[**deleteObject**](ObjectApi.md#deleteObject) | **DELETE** /api/object.json | Удаление объекта
[**editObject**](ObjectApi.md#editObject) | **PUT** /api/object.json | Редактирование объекта
[**getObject**](ObjectApi.md#getObject) | **GET** /api/object.json | Получение данных объекта
[**searchObjects**](ObjectApi.md#searchObjects) | **GET** /api/objects.json | Поиск объектов



## addObject

> ApiSucessResponseWithId addObject(body)

Добавление нового объекта

### Example

```javascript
import GenericApi from 'GenericApi';

let apiInstance = new GenericApi.ObjectApi();
let body = new GenericApi.ModelObject(); // ModelObject | Параметры нового объекта
apiInstance.addObject(body, (error, data, response) => {
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
 **body** | [**ModelObject**](ModelObject.md)| Параметры нового объекта | 

### Return type

[**ApiSucessResponseWithId**](ApiSucessResponseWithId.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteObject

> InlineResponse2002 deleteObject(body)

Удаление объекта

### Example

```javascript
import GenericApi from 'GenericApi';

let apiInstance = new GenericApi.ObjectApi();
let body = new GenericApi.InlineObject4(); // InlineObject4 | 
apiInstance.deleteObject(body, (error, data, response) => {
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
 **body** | [**InlineObject4**](InlineObject4.md)|  | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## editObject

> ApiSucessResponseWithId editObject(body)

Редактирование объекта

### Example

```javascript
import GenericApi from 'GenericApi';

let apiInstance = new GenericApi.ObjectApi();
let body = new GenericApi.ModelObject(); // ModelObject | Настройки редактируемого объекта
apiInstance.editObject(body, (error, data, response) => {
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
 **body** | [**ModelObject**](ModelObject.md)| Настройки редактируемого объекта | 

### Return type

[**ApiSucessResponseWithId**](ApiSucessResponseWithId.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getObject

> InlineResponse2004 getObject(body)

Получение данных объекта

### Example

```javascript
import GenericApi from 'GenericApi';

let apiInstance = new GenericApi.ObjectApi();
let body = new GenericApi.InlineObject3(); // InlineObject3 | 
apiInstance.getObject(body, (error, data, response) => {
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
 **body** | [**InlineObject3**](InlineObject3.md)|  | 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## searchObjects

> InlineResponse2005 searchObjects(body)

Поиск объектов

Запрос позвояет осуществлять поиск объектов

### Example

```javascript
import GenericApi from 'GenericApi';

let apiInstance = new GenericApi.ObjectApi();
let body = new GenericApi.InlineObject5(); // InlineObject5 | 
apiInstance.searchObjects(body, (error, data, response) => {
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
 **body** | [**InlineObject5**](InlineObject5.md)|  | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

