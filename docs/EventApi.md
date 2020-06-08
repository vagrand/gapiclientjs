# GenericApi.EventApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventsQueueSettings**](EventApi.md#eventsQueueSettings) | **PUT** /api/events/queue/settings.json | Настройка доступа к RabbitMQ



## eventsQueueSettings

> InlineResponse2002 eventsQueueSettings(body)

Настройка доступа к RabbitMQ

### Example

```javascript
import GenericApi from 'GenericApi';

let apiInstance = new GenericApi.EventApi();
let body = new GenericApi.QueueSettings(); // QueueSettings | Настройки доступа к RabbitMQ
apiInstance.eventsQueueSettings(body, (error, data, response) => {
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
 **body** | [**QueueSettings**](QueueSettings.md)| Настройки доступа к RabbitMQ | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

