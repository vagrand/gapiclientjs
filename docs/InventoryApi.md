# GenericApi.InventoryApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getInventory**](InventoryApi.md#getInventory) | **GET** /api/inventory.json | Получение данных свойства
[**searchInventories**](InventoryApi.md#searchInventories) | **GET** /api/inventories.json | Поиск свойств объекта



## getInventory

> InlineResponse2006 getInventory(body)

Получение данных свойства

### Example

```javascript
import GenericApi from 'GenericApi';

let apiInstance = new GenericApi.InventoryApi();
let body = new GenericApi.InlineObject6(); // InlineObject6 | 
apiInstance.getInventory(body, (error, data, response) => {
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
 **body** | [**InlineObject6**](InlineObject6.md)|  | 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## searchInventories

> InlineResponse2007 searchInventories(body)

Поиск свойств объекта

Запрос позвояет осуществлять поиск свойств объекта

### Example

```javascript
import GenericApi from 'GenericApi';

let apiInstance = new GenericApi.InventoryApi();
let body = new GenericApi.InlineObject7(); // InlineObject7 | 
apiInstance.searchInventories(body, (error, data, response) => {
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
 **body** | [**InlineObject7**](InlineObject7.md)|  | 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

