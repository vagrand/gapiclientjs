# GenericApi.InstanceApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addInstance**](InstanceApi.md#addInstance) | **POST** /api/instance.json | Регистрация нового инстанса
[**deleteInstance**](InstanceApi.md#deleteInstance) | **DELETE** /api/instance.json | Удаление инстанса
[**editInstance**](InstanceApi.md#editInstance) | **PUT** /api/instance.json | Редактирование инстанса
[**getInstance**](InstanceApi.md#getInstance) | **GET** /api/instance.json | Получение данных инстанса
[**searchInstances**](InstanceApi.md#searchInstances) | **GET** /api/instances.json | Поиск инстансов



## addInstance

> InlineResponse2001 addInstance(body)

Регистрация нового инстанса

Данный запрос устанавливает связь с instance-ом и в случае успеха, создает запись о нем в локальном хранилище

### Example

```javascript
import GenericApi from 'GenericApi';

let apiInstance = new GenericApi.InstanceApi();
let body = new GenericApi.Instance(); // Instance | Объект с настройками нового инстанса
apiInstance.addInstance(body, (error, data, response) => {
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
 **body** | [**Instance**](Instance.md)| Объект с настройками нового инстанса | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteInstance

> InlineResponse2002 deleteInstance(body)

Удаление инстанса

Удаление instance-а из локального хранилища коннектора приводит к удалению всех накопленных о нем данных из локального хранилища коннектора. Поскольку процесс удаления может занимать существенное время, то запрос на удаление только маркирует instance как удаленный, а само удаление происходит в фоновом режиме.

### Example

```javascript
import GenericApi from 'GenericApi';

let apiInstance = new GenericApi.InstanceApi();
let body = new GenericApi.InlineObject1(); // InlineObject1 | 
apiInstance.deleteInstance(body, (error, data, response) => {
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
 **body** | [**InlineObject1**](InlineObject1.md)|  | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## editInstance

> InlineResponse2001 editInstance(body)

Редактирование инстанса

Данный запрос позволяет изменить параметры ранее созданного instance-а. Если в процессе редактирования будут изменены параметры подключения к instance-у, то производится повторная попытка подключения

### Example

```javascript
import GenericApi from 'GenericApi';

let apiInstance = new GenericApi.InstanceApi();
let body = new GenericApi.Instance(); // Instance | Объект с настройками редактируемого инстанса
apiInstance.editInstance(body, (error, data, response) => {
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
 **body** | [**Instance**](Instance.md)| Объект с настройками редактируемого инстанса | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getInstance

> InlineResponse200 getInstance(body)

Получение данных инстанса

### Example

```javascript
import GenericApi from 'GenericApi';

let apiInstance = new GenericApi.InstanceApi();
let body = new GenericApi.InlineObject(); // InlineObject | 
apiInstance.getInstance(body, (error, data, response) => {
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
 **body** | [**InlineObject**](InlineObject.md)|  | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## searchInstances

> InlineResponse2003 searchInstances(body)

Поиск инстансов

Запрос позвояет осуществлят поиск инстансов по списку их кодов и имени

### Example

```javascript
import GenericApi from 'GenericApi';

let apiInstance = new GenericApi.InstanceApi();
let body = new GenericApi.InlineObject2(); // InlineObject2 | 
apiInstance.searchInstances(body, (error, data, response) => {
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
 **body** | [**InlineObject2**](InlineObject2.md)|  | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

