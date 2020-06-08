# GenericApi.MetricValue

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metricId** | **Number** |  | [optional] 
**valueString** | **String** | Значение метрики такое, каким оно было получено из источника | [optional] 
**valueNumber** | **Number** | Значение, полученное из источника и приведенное к типу float. Будет равен value_avg, если в запросе указан параметр group_div | [optional] 
**valueMin** | **Number** | Будет равен value_number, если в запросе не указан параметр group_div | [optional] 
**valueMax** | **Number** | Будет равен value_number, если в запросе не указан параметр group_div | [optional] 
**valueAvg** | **Number** | Будет равен value_number, если в запросе не указан параметр group_div | [optional] 
**valueSum** | **Number** | Будет равен value_number, если в запросе не указан параметр group_div | [optional] 
**createdTs** | **Number** |  | [optional] 


