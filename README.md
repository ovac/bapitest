# Getting started

TODO: Add Description

## How to Build

The generated code uses a few Gradle dependencies e.g., Jackson, Volley,
and Apache HttpClient. The reference to these dependencies is already
added in the build.gradle file will be installed automatically. Therefore,
you will need internet access for a successful build.

* In order to open the client library in Android Studio click on ``` Open an Existing Android Project ```.

![Importing SDK into Android Studio - Step 1](https://apidocs.io/illustration/android?step=import1&workspaceFolder=BooConnecct&workspaceName=BooConnecct&projectName=BooConnecctLib&rootNamespace=run.booconnect)

* Browse to locate the folder containing the source code. Select the location of the BooConnecct gradle project and click ``` Ok ```.

![Importing SDK into Android Studio - Step 2](https://apidocs.io/illustration/android?step=import2&workspaceFolder=BooConnecct&workspaceName=BooConnecct&projectName=BooConnecctLib&rootNamespace=run.booconnect)

* Upon successful import, the project can be built by clicking on ``` Build > Make Project ``` or  pressing ``` Ctrl + F9 ```.

![Importing SDK into Android Studio - Step 3](https://apidocs.io/illustration/android?step=import3&workspaceFolder=BooConnecct&workspaceName=BooConnecct&projectName=BooConnecctLib&rootNamespace=run.booconnect)

## How to Use

The following section explains how to use the BooConnecct library in a new project.

### 1. Starting a new project 

For starting a new project, click on ``` Create New Android Studio Project ```.

![Add a new project in Android Studio - Step 1](https://apidocs.io/illustration/android?step=createNewProject0&workspaceFolder=BooConnecct&workspaceName=BooConnecct&projectName=BooConnecctLib&rootNamespace=run.booconnect)

Here, configure the new project by adding the name, domain and location of the sample application followed by clicking ``` Next ```.

![Create a new Android Studio Project - Step 2](https://apidocs.io/illustration/android?step=createNewProject1&workspaceFolder=BooConnecct&workspaceName=BooConnecct&projectName=BooConnecctLib&rootNamespace=run.booconnect)

Following this, select the `Phone and Tablet` option as shown in the illustration below and click `Next`.

![Create a new Android Studio Project - Step 3](https://apidocs.io/illustration/android?step=createNewProject2&workspaceFolder=BooConnecct&workspaceName=BooConnecct&projectName=BooConnecctLib&rootNamespace=run.booconnect)

In the following step, choose ``` Empty Activity ``` as the activity type and click ``` Next ```.

![Create a new Android Studio Project - Step 4](https://apidocs.io/illustration/android?step=createNewProject3&workspaceFolder=BooConnecct&workspaceName=BooConnecct&projectName=BooConnecctLib&rootNamespace=run.booconnect)

In this step, provide an ``` Activity Name ``` and ``` Layout Name ``` and click ``` Finish ```.  This would take you to the newly created project.

![Create a new Android Studio Project - Step 4](https://apidocs.io/illustration/android?step=createNewProject4&workspaceFolder=BooConnecct&workspaceName=BooConnecct&projectName=BooConnecctLib&rootNamespace=run.booconnect)

### 2. Add reference of the library project

In order to add a dependency to this sample application, click on the android button shown in the project explorer on the left side as shown in the picture. Click on ``` Project ``` in the drop down that emerges.  

![Adding dependency to the client library - Step 1](https://apidocs.io/illustration/android?step=testProject0&workspaceFolder=BooConnecct&workspaceName=BooConnecct&projectName=BooConnecctLib&rootNamespace=run.booconnect)

Right click the sample application in the project explorer and click on ``` New > Module ```  as shown in the picture.

![Adding dependency to the client library - Step 2](https://apidocs.io/illustration/android?step=testProject1&workspaceFolder=BooConnecct&workspaceName=BooConnecct&projectName=BooConnecctLib&rootNamespace=run.booconnect)

Choose ``` Import Gradle Project ``` and click ``` Next ```.

![Adding dependency to the client library - Step 3](https://apidocs.io/illustration/android?step=testProject2&workspaceFolder=BooConnecct&workspaceName=BooConnecct&projectName=BooConnecctLib&rootNamespace=run.booconnect)

Click on ``` Finish ``` which would take you back to the sample application with the refernced SDK. 

![Adding dependency to the client library - Step 4](https://apidocs.io/illustration/android?step=testProject3&workspaceFolder=BooConnecct&workspaceName=BooConnecct&projectName=BooConnecctLib&rootNamespace=run.booconnect)

In the following step naigate to the ``` SampleApplication >  app > build.gradle ``` file and add the following line ```compile project(path: ':BooConnecct')``` to the dependencies section as shown in the illustration below.

![Adding dependency to the client library - Step 5](https://apidocs.io/illustration/android?step=testProject4&workspaceFolder=BooConnecct&workspaceName=BooConnecct&projectName=BooConnecctLib&rootNamespace=run.booconnect)

Finally, press ``` Sync Now ``` in the warning visible as shown in the picture below.

![Adding dependency to the client library - Step 6](https://apidocs.io/illustration/android?step=testProject5&workspaceFolder=BooConnecct&workspaceName=BooConnecct&projectName=BooConnecctLib&rootNamespace=run.booconnect)

### 3. Write sample code

Once the ``` SampleApplication ``` is created, a file named ``` SampleApplication > app > src > main > java > MainActivity ``` will be visible in the *Project Explorer* with an ``` onCreate ``` method. This is the entry point for the execution of the created project.
Here, you can add code to initialize the client library and instantiate a *Controller* class. Sample code to initialize the client library and using controller methods is given in the subsequent sections.

## How to Test

The generated code and the server can be tested using automatically generated test cases. 
JUnit is used as the testing framework and test runner.

In Android Studio, for running the tests do the following:

1. Right click on *SampleApplication > BooConnecctLib > androidTest > java)* from the project explorer.
2. Select "Run All Tests" or use "Ctrl + Shift + F10" to run the Tests.

## Initialization

### 

API client can be initialized as following. The `appContext` being passed is the Android application [`Context`](https://developer.android.com/reference/android/content/Context.html).

```java

run.booconnect.Configuration.initialize(appContext);
BooConnecctClient client = new BooConnecctClient();
```


# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [VerifyPhoneVerificationEndpointsController](#verify_phone_verification_endpoints_controller)
* [ResturantListsResturantsRegisteredOnBooconnectController](#resturant_lists_resturants_registered_on_booconnect_controller)
* [OrdersOrdersResourceEndpointsController](#orders_orders_resource_endpoints_controller)
* [ItemsItemsSoldInResturantsRegisteredOnBooConnectController](#items_items_sold_in_resturants_registered_on_boo_connect_controller)
* [CheckoutCheckoutResourceEndpointsController](#checkout_checkout_resource_endpoints_controller)
* [CartShoppingCartEndpointsController](#cart_shopping_cart_endpoints_controller)
* [AccountAccountEndpointsController](#account_account_endpoints_controller)
* [WishlistItemWishlistResourceEndpointsController](#wishlist_item_wishlist_resource_endpoints_controller)

## <a name="verify_phone_verification_endpoints_controller"></a>![Class: ](https://apidocs.io/img/class.png "run.booconnect.controllers.VerifyPhoneVerificationEndpointsController") VerifyPhoneVerificationEndpointsController

### Get singleton instance

The singleton instance of the ``` VerifyPhoneVerificationEndpointsController ``` class can be accessed from the API Client.

```java
VerifyPhoneVerificationEndpointsController verifyPhoneVerificationEndpoints = client.getVerifyPhoneVerificationEndpoints();
```

### <a name="get_display_a_listing_of_the_resource_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.VerifyPhoneVerificationEndpointsController.getDisplayAListingOfTheResourceAsync") getDisplayAListingOfTheResourceAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void getDisplayAListingOfTheResourceAsync(final APICallBack<Object> callBack)
```

#### Example Usage

```java
// Invoking the API call with sample inputs
verifyPhoneVerificationEndpoints.getDisplayAListingOfTheResourceAsync(new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


### <a name="remove_the_specified_resource_from_storage_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.VerifyPhoneVerificationEndpointsController.removeTheSpecifiedResourceFromStorageAsync") removeTheSpecifiedResourceFromStorageAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void removeTheSpecifiedResourceFromStorageAsync(
        final String verify,
        final APICallBack<Object> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| verify |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```java
String verify = "verify";
// Invoking the API call with sample inputs
verifyPhoneVerificationEndpoints.removeTheSpecifiedResourceFromStorageAsync(verify, new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


### <a name="update_the_specified_resource_in_storage_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.VerifyPhoneVerificationEndpointsController.updateTheSpecifiedResourceInStorageAsync") updateTheSpecifiedResourceInStorageAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void updateTheSpecifiedResourceInStorageAsync(
        final String verify,
        final APICallBack<Object> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| verify |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```java
String verify = "verify";
// Invoking the API call with sample inputs
verifyPhoneVerificationEndpoints.updateTheSpecifiedResourceInStorageAsync(verify, new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


### <a name="get_show_the_form_for_editing_the_specified_resource_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.VerifyPhoneVerificationEndpointsController.getShowTheFormForEditingTheSpecifiedResourceAsync") getShowTheFormForEditingTheSpecifiedResourceAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void getShowTheFormForEditingTheSpecifiedResourceAsync(
        final String verify,
        final APICallBack<Object> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| verify |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```java
String verify = "verify";
// Invoking the API call with sample inputs
verifyPhoneVerificationEndpoints.getShowTheFormForEditingTheSpecifiedResourceAsync(verify, new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


### <a name="get_display_the_specified_resource_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.VerifyPhoneVerificationEndpointsController.getDisplayTheSpecifiedResourceAsync") getDisplayTheSpecifiedResourceAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void getDisplayTheSpecifiedResourceAsync(
        final String verify,
        final APICallBack<Object> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| verify |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```java
String verify = "verify";
// Invoking the API call with sample inputs
verifyPhoneVerificationEndpoints.getDisplayTheSpecifiedResourceAsync(verify, new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


### <a name="create_store_a_newly_created_resource_in_storage_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.VerifyPhoneVerificationEndpointsController.createStoreANewlyCreatedResourceInStorageAsync") createStoreANewlyCreatedResourceInStorageAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void createStoreANewlyCreatedResourceInStorageAsync(final APICallBack<Object> callBack)
```

#### Example Usage

```java
// Invoking the API call with sample inputs
verifyPhoneVerificationEndpoints.createStoreANewlyCreatedResourceInStorageAsync(new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


### <a name="get_show_the_form_for_creating_a_new_resource_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.VerifyPhoneVerificationEndpointsController.getShowTheFormForCreatingANewResourceAsync") getShowTheFormForCreatingANewResourceAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void getShowTheFormForCreatingANewResourceAsync(final APICallBack<Object> callBack)
```

#### Example Usage

```java
// Invoking the API call with sample inputs
verifyPhoneVerificationEndpoints.getShowTheFormForCreatingANewResourceAsync(new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


[Back to List of Controllers](#list_of_controllers)

## <a name="resturant_lists_resturants_registered_on_booconnect_controller"></a>![Class: ](https://apidocs.io/img/class.png "run.booconnect.controllers.ResturantListsResturantsRegisteredOnBooconnectController") ResturantListsResturantsRegisteredOnBooconnectController

### Get singleton instance

The singleton instance of the ``` ResturantListsResturantsRegisteredOnBooconnectController ``` class can be accessed from the API Client.

```java
ResturantListsResturantsRegisteredOnBooconnectController resturantListsResturantsRegisteredOnBooconnect = client.getResturantListsResturantsRegisteredOnBooconnect();
```

### <a name="create_store_a_newly_created_resource_in_storage_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.ResturantListsResturantsRegisteredOnBooconnectController.createStoreANewlyCreatedResourceInStorageAsync") createStoreANewlyCreatedResourceInStorageAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void createStoreANewlyCreatedResourceInStorageAsync(final APICallBack<Object> callBack)
```

#### Example Usage

```java
// Invoking the API call with sample inputs
resturantListsResturantsRegisteredOnBooconnect.createStoreANewlyCreatedResourceInStorageAsync(new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


### <a name="get_show_the_form_for_creating_a_new_resource_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.ResturantListsResturantsRegisteredOnBooconnectController.getShowTheFormForCreatingANewResourceAsync") getShowTheFormForCreatingANewResourceAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void getShowTheFormForCreatingANewResourceAsync(final APICallBack<Object> callBack)
```

#### Example Usage

```java
// Invoking the API call with sample inputs
resturantListsResturantsRegisteredOnBooconnect.getShowTheFormForCreatingANewResourceAsync(new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


### <a name="get_display_a_listing_of_the_resource_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.ResturantListsResturantsRegisteredOnBooconnectController.getDisplayAListingOfTheResourceAsync") getDisplayAListingOfTheResourceAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void getDisplayAListingOfTheResourceAsync(final APICallBack<Object> callBack)
```

#### Example Usage

```java
// Invoking the API call with sample inputs
resturantListsResturantsRegisteredOnBooconnect.getDisplayAListingOfTheResourceAsync(new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


### <a name="remove_the_specified_resource_from_storage_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.ResturantListsResturantsRegisteredOnBooconnectController.removeTheSpecifiedResourceFromStorageAsync") removeTheSpecifiedResourceFromStorageAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void removeTheSpecifiedResourceFromStorageAsync(
        final String resturant,
        final APICallBack<Object> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| resturant |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```java
String resturant = "resturant";
// Invoking the API call with sample inputs
resturantListsResturantsRegisteredOnBooconnect.removeTheSpecifiedResourceFromStorageAsync(resturant, new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


### <a name="update_the_specified_resource_in_storage_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.ResturantListsResturantsRegisteredOnBooconnectController.updateTheSpecifiedResourceInStorageAsync") updateTheSpecifiedResourceInStorageAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void updateTheSpecifiedResourceInStorageAsync(
        final String resturant,
        final APICallBack<Object> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| resturant |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```java
String resturant = "resturant";
// Invoking the API call with sample inputs
resturantListsResturantsRegisteredOnBooconnect.updateTheSpecifiedResourceInStorageAsync(resturant, new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


### <a name="get_show_the_form_for_editing_the_specified_resource_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.ResturantListsResturantsRegisteredOnBooconnectController.getShowTheFormForEditingTheSpecifiedResourceAsync") getShowTheFormForEditingTheSpecifiedResourceAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void getShowTheFormForEditingTheSpecifiedResourceAsync(
        final String resturant,
        final APICallBack<Object> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| resturant |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```java
String resturant = "resturant";
// Invoking the API call with sample inputs
resturantListsResturantsRegisteredOnBooconnect.getShowTheFormForEditingTheSpecifiedResourceAsync(resturant, new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


### <a name="get_display_the_specified_resource_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.ResturantListsResturantsRegisteredOnBooconnectController.getDisplayTheSpecifiedResourceAsync") getDisplayTheSpecifiedResourceAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void getDisplayTheSpecifiedResourceAsync(
        final String resturant,
        final APICallBack<Object> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| resturant |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```java
String resturant = "resturant";
// Invoking the API call with sample inputs
resturantListsResturantsRegisteredOnBooconnect.getDisplayTheSpecifiedResourceAsync(resturant, new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


[Back to List of Controllers](#list_of_controllers)

## <a name="orders_orders_resource_endpoints_controller"></a>![Class: ](https://apidocs.io/img/class.png "run.booconnect.controllers.OrdersOrdersResourceEndpointsController") OrdersOrdersResourceEndpointsController

### Get singleton instance

The singleton instance of the ``` OrdersOrdersResourceEndpointsController ``` class can be accessed from the API Client.

```java
OrdersOrdersResourceEndpointsController ordersOrdersResourceEndpoints = client.getOrdersOrdersResourceEndpoints();
```

### <a name="create_store_a_newly_created_resource_in_storage_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.OrdersOrdersResourceEndpointsController.createStoreANewlyCreatedResourceInStorageAsync") createStoreANewlyCreatedResourceInStorageAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void createStoreANewlyCreatedResourceInStorageAsync(final APICallBack<Object> callBack)
```

#### Example Usage

```java
// Invoking the API call with sample inputs
ordersOrdersResourceEndpoints.createStoreANewlyCreatedResourceInStorageAsync(new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


### <a name="get_show_the_form_for_creating_a_new_resource_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.OrdersOrdersResourceEndpointsController.getShowTheFormForCreatingANewResourceAsync") getShowTheFormForCreatingANewResourceAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void getShowTheFormForCreatingANewResourceAsync(final APICallBack<Object> callBack)
```

#### Example Usage

```java
// Invoking the API call with sample inputs
ordersOrdersResourceEndpoints.getShowTheFormForCreatingANewResourceAsync(new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


### <a name="list_all_orders_display_a_listing_of_the_resource_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.OrdersOrdersResourceEndpointsController.listAllOrdersDisplayAListingOfTheResourceAsync") listAllOrdersDisplayAListingOfTheResourceAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void listAllOrdersDisplayAListingOfTheResourceAsync(final APICallBack<Object> callBack)
```

#### Example Usage

```java
// Invoking the API call with sample inputs
ordersOrdersResourceEndpoints.listAllOrdersDisplayAListingOfTheResourceAsync(new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


### <a name="remove_the_specified_resource_from_storage_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.OrdersOrdersResourceEndpointsController.removeTheSpecifiedResourceFromStorageAsync") removeTheSpecifiedResourceFromStorageAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void removeTheSpecifiedResourceFromStorageAsync(
        final String order,
        final APICallBack<Object> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| order |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```java
String order = "order";
// Invoking the API call with sample inputs
ordersOrdersResourceEndpoints.removeTheSpecifiedResourceFromStorageAsync(order, new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


### <a name="update_the_specified_resource_in_storage_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.OrdersOrdersResourceEndpointsController.updateTheSpecifiedResourceInStorageAsync") updateTheSpecifiedResourceInStorageAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void updateTheSpecifiedResourceInStorageAsync(
        final String order,
        final APICallBack<Object> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| order |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```java
String order = "order";
// Invoking the API call with sample inputs
ordersOrdersResourceEndpoints.updateTheSpecifiedResourceInStorageAsync(order, new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


### <a name="get_show_the_form_for_editing_the_specified_resource_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.OrdersOrdersResourceEndpointsController.getShowTheFormForEditingTheSpecifiedResourceAsync") getShowTheFormForEditingTheSpecifiedResourceAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void getShowTheFormForEditingTheSpecifiedResourceAsync(
        final String order,
        final APICallBack<Object> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| order |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```java
String order = "order";
// Invoking the API call with sample inputs
ordersOrdersResourceEndpoints.getShowTheFormForEditingTheSpecifiedResourceAsync(order, new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


### <a name="get_display_the_specified_resource_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.OrdersOrdersResourceEndpointsController.getDisplayTheSpecifiedResourceAsync") getDisplayTheSpecifiedResourceAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void getDisplayTheSpecifiedResourceAsync(
        final String order,
        final APICallBack<Object> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| order |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```java
String order = "order";
// Invoking the API call with sample inputs
ordersOrdersResourceEndpoints.getDisplayTheSpecifiedResourceAsync(order, new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


[Back to List of Controllers](#list_of_controllers)

## <a name="items_items_sold_in_resturants_registered_on_boo_connect_controller"></a>![Class: ](https://apidocs.io/img/class.png "run.booconnect.controllers.ItemsItemsSoldInResturantsRegisteredOnBooConnectController") ItemsItemsSoldInResturantsRegisteredOnBooConnectController

### Get singleton instance

The singleton instance of the ``` ItemsItemsSoldInResturantsRegisteredOnBooConnectController ``` class can be accessed from the API Client.

```java
ItemsItemsSoldInResturantsRegisteredOnBooConnectController itemsItemsSoldInResturantsRegisteredOnBooConnect = client.getItemsItemsSoldInResturantsRegisteredOnBooConnect();
```

### <a name="create_store_a_newly_created_resource_in_storage_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.ItemsItemsSoldInResturantsRegisteredOnBooConnectController.createStoreANewlyCreatedResourceInStorageAsync") createStoreANewlyCreatedResourceInStorageAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void createStoreANewlyCreatedResourceInStorageAsync(final APICallBack<Object> callBack)
```

#### Example Usage

```java
// Invoking the API call with sample inputs
itemsItemsSoldInResturantsRegisteredOnBooConnect.createStoreANewlyCreatedResourceInStorageAsync(new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


### <a name="get_show_the_form_for_creating_a_new_resource_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.ItemsItemsSoldInResturantsRegisteredOnBooConnectController.getShowTheFormForCreatingANewResourceAsync") getShowTheFormForCreatingANewResourceAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void getShowTheFormForCreatingANewResourceAsync(final APICallBack<Object> callBack)
```

#### Example Usage

```java
// Invoking the API call with sample inputs
itemsItemsSoldInResturantsRegisteredOnBooConnect.getShowTheFormForCreatingANewResourceAsync(new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


### <a name="list_items_display_a_listing_of_the_resource_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.ItemsItemsSoldInResturantsRegisteredOnBooConnectController.listItemsDisplayAListingOfTheResourceAsync") listItemsDisplayAListingOfTheResourceAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void listItemsDisplayAListingOfTheResourceAsync(final APICallBack<Object> callBack)
```

#### Example Usage

```java
// Invoking the API call with sample inputs
itemsItemsSoldInResturantsRegisteredOnBooConnect.listItemsDisplayAListingOfTheResourceAsync(new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


### <a name="remove_the_specified_resource_from_storage_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.ItemsItemsSoldInResturantsRegisteredOnBooConnectController.removeTheSpecifiedResourceFromStorageAsync") removeTheSpecifiedResourceFromStorageAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void removeTheSpecifiedResourceFromStorageAsync(
        final String item,
        final APICallBack<Object> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| item |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```java
String item = "item";
// Invoking the API call with sample inputs
itemsItemsSoldInResturantsRegisteredOnBooConnect.removeTheSpecifiedResourceFromStorageAsync(item, new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


### <a name="update_the_specified_resource_in_storage_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.ItemsItemsSoldInResturantsRegisteredOnBooConnectController.updateTheSpecifiedResourceInStorageAsync") updateTheSpecifiedResourceInStorageAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void updateTheSpecifiedResourceInStorageAsync(
        final String item,
        final APICallBack<Object> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| item |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```java
String item = "item";
// Invoking the API call with sample inputs
itemsItemsSoldInResturantsRegisteredOnBooConnect.updateTheSpecifiedResourceInStorageAsync(item, new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


### <a name="get_show_the_form_for_editing_the_specified_resource_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.ItemsItemsSoldInResturantsRegisteredOnBooConnectController.getShowTheFormForEditingTheSpecifiedResourceAsync") getShowTheFormForEditingTheSpecifiedResourceAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void getShowTheFormForEditingTheSpecifiedResourceAsync(
        final String item,
        final APICallBack<Object> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| item |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```java
String item = "item";
// Invoking the API call with sample inputs
itemsItemsSoldInResturantsRegisteredOnBooConnect.getShowTheFormForEditingTheSpecifiedResourceAsync(item, new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


### <a name="get_show_item_display_the_specified_resource_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.ItemsItemsSoldInResturantsRegisteredOnBooConnectController.getShowItemDisplayTheSpecifiedResourceAsync") getShowItemDisplayTheSpecifiedResourceAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void getShowItemDisplayTheSpecifiedResourceAsync(
        final String item,
        final APICallBack<Object> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| item |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```java
String item = "item";
// Invoking the API call with sample inputs
itemsItemsSoldInResturantsRegisteredOnBooConnect.getShowItemDisplayTheSpecifiedResourceAsync(item, new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


[Back to List of Controllers](#list_of_controllers)

## <a name="checkout_checkout_resource_endpoints_controller"></a>![Class: ](https://apidocs.io/img/class.png "run.booconnect.controllers.CheckoutCheckoutResourceEndpointsController") CheckoutCheckoutResourceEndpointsController

### Get singleton instance

The singleton instance of the ``` CheckoutCheckoutResourceEndpointsController ``` class can be accessed from the API Client.

```java
CheckoutCheckoutResourceEndpointsController checkoutCheckoutResourceEndpoints = client.getCheckoutCheckoutResourceEndpoints();
```

### <a name="create_store_a_newly_created_resource_in_storage_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.CheckoutCheckoutResourceEndpointsController.createStoreANewlyCreatedResourceInStorageAsync") createStoreANewlyCreatedResourceInStorageAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void createStoreANewlyCreatedResourceInStorageAsync(final APICallBack<Object> callBack)
```

#### Example Usage

```java
// Invoking the API call with sample inputs
checkoutCheckoutResourceEndpoints.createStoreANewlyCreatedResourceInStorageAsync(new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


### <a name="get_show_the_form_for_creating_a_new_resource_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.CheckoutCheckoutResourceEndpointsController.getShowTheFormForCreatingANewResourceAsync") getShowTheFormForCreatingANewResourceAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void getShowTheFormForCreatingANewResourceAsync(final APICallBack<Object> callBack)
```

#### Example Usage

```java
// Invoking the API call with sample inputs
checkoutCheckoutResourceEndpoints.getShowTheFormForCreatingANewResourceAsync(new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


### <a name="get_display_a_listing_of_the_resource_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.CheckoutCheckoutResourceEndpointsController.getDisplayAListingOfTheResourceAsync") getDisplayAListingOfTheResourceAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void getDisplayAListingOfTheResourceAsync(final APICallBack<Object> callBack)
```

#### Example Usage

```java
// Invoking the API call with sample inputs
checkoutCheckoutResourceEndpoints.getDisplayAListingOfTheResourceAsync(new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


### <a name="remove_the_specified_resource_from_storage_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.CheckoutCheckoutResourceEndpointsController.removeTheSpecifiedResourceFromStorageAsync") removeTheSpecifiedResourceFromStorageAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void removeTheSpecifiedResourceFromStorageAsync(
        final String checkout,
        final APICallBack<Object> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| checkout |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```java
String checkout = "checkout";
// Invoking the API call with sample inputs
checkoutCheckoutResourceEndpoints.removeTheSpecifiedResourceFromStorageAsync(checkout, new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


### <a name="update_the_specified_resource_in_storage_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.CheckoutCheckoutResourceEndpointsController.updateTheSpecifiedResourceInStorageAsync") updateTheSpecifiedResourceInStorageAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void updateTheSpecifiedResourceInStorageAsync(
        final String checkout,
        final APICallBack<Object> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| checkout |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```java
String checkout = "checkout";
// Invoking the API call with sample inputs
checkoutCheckoutResourceEndpoints.updateTheSpecifiedResourceInStorageAsync(checkout, new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


### <a name="get_show_the_form_for_editing_the_specified_resource_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.CheckoutCheckoutResourceEndpointsController.getShowTheFormForEditingTheSpecifiedResourceAsync") getShowTheFormForEditingTheSpecifiedResourceAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void getShowTheFormForEditingTheSpecifiedResourceAsync(
        final String checkout,
        final APICallBack<Object> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| checkout |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```java
String checkout = "checkout";
// Invoking the API call with sample inputs
checkoutCheckoutResourceEndpoints.getShowTheFormForEditingTheSpecifiedResourceAsync(checkout, new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


### <a name="get_display_the_specified_resource_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.CheckoutCheckoutResourceEndpointsController.getDisplayTheSpecifiedResourceAsync") getDisplayTheSpecifiedResourceAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void getDisplayTheSpecifiedResourceAsync(
        final String checkout,
        final APICallBack<Object> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| checkout |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```java
String checkout = "checkout";
// Invoking the API call with sample inputs
checkoutCheckoutResourceEndpoints.getDisplayTheSpecifiedResourceAsync(checkout, new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


[Back to List of Controllers](#list_of_controllers)

## <a name="cart_shopping_cart_endpoints_controller"></a>![Class: ](https://apidocs.io/img/class.png "run.booconnect.controllers.CartShoppingCartEndpointsController") CartShoppingCartEndpointsController

### Get singleton instance

The singleton instance of the ``` CartShoppingCartEndpointsController ``` class can be accessed from the API Client.

```java
CartShoppingCartEndpointsController cartShoppingCartEndpoints = client.getCartShoppingCartEndpoints();
```

### <a name="get_display_the_specified_resource_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.CartShoppingCartEndpointsController.getDisplayTheSpecifiedResourceAsync") getDisplayTheSpecifiedResourceAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void getDisplayTheSpecifiedResourceAsync(
        final String cart,
        final APICallBack<Object> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| cart |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```java
String cart = "cart";
// Invoking the API call with sample inputs
cartShoppingCartEndpoints.getDisplayTheSpecifiedResourceAsync(cart, new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


### <a name="create_store_a_newly_created_resource_in_storage_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.CartShoppingCartEndpointsController.createStoreANewlyCreatedResourceInStorageAsync") createStoreANewlyCreatedResourceInStorageAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void createStoreANewlyCreatedResourceInStorageAsync(final APICallBack<Object> callBack)
```

#### Example Usage

```java
// Invoking the API call with sample inputs
cartShoppingCartEndpoints.createStoreANewlyCreatedResourceInStorageAsync(new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


### <a name="get_show_the_form_for_creating_a_new_resource_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.CartShoppingCartEndpointsController.getShowTheFormForCreatingANewResourceAsync") getShowTheFormForCreatingANewResourceAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void getShowTheFormForCreatingANewResourceAsync(final APICallBack<Object> callBack)
```

#### Example Usage

```java
// Invoking the API call with sample inputs
cartShoppingCartEndpoints.getShowTheFormForCreatingANewResourceAsync(new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


### <a name="get_display_a_listing_of_the_resource_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.CartShoppingCartEndpointsController.getDisplayAListingOfTheResourceAsync") getDisplayAListingOfTheResourceAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void getDisplayAListingOfTheResourceAsync(final APICallBack<Object> callBack)
```

#### Example Usage

```java
// Invoking the API call with sample inputs
cartShoppingCartEndpoints.getDisplayAListingOfTheResourceAsync(new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


### <a name="remove_the_specified_resource_from_storage_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.CartShoppingCartEndpointsController.removeTheSpecifiedResourceFromStorageAsync") removeTheSpecifiedResourceFromStorageAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void removeTheSpecifiedResourceFromStorageAsync(
        final String cart,
        final APICallBack<Object> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| cart |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```java
String cart = "cart";
// Invoking the API call with sample inputs
cartShoppingCartEndpoints.removeTheSpecifiedResourceFromStorageAsync(cart, new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


### <a name="update_the_specified_resource_in_storage_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.CartShoppingCartEndpointsController.updateTheSpecifiedResourceInStorageAsync") updateTheSpecifiedResourceInStorageAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void updateTheSpecifiedResourceInStorageAsync(
        final String cart,
        final APICallBack<Object> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| cart |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```java
String cart = "cart";
// Invoking the API call with sample inputs
cartShoppingCartEndpoints.updateTheSpecifiedResourceInStorageAsync(cart, new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


### <a name="get_show_the_form_for_editing_the_specified_resource_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.CartShoppingCartEndpointsController.getShowTheFormForEditingTheSpecifiedResourceAsync") getShowTheFormForEditingTheSpecifiedResourceAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void getShowTheFormForEditingTheSpecifiedResourceAsync(
        final String cart,
        final APICallBack<Object> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| cart |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```java
String cart = "cart";
// Invoking the API call with sample inputs
cartShoppingCartEndpoints.getShowTheFormForEditingTheSpecifiedResourceAsync(cart, new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


[Back to List of Controllers](#list_of_controllers)

## <a name="account_account_endpoints_controller"></a>![Class: ](https://apidocs.io/img/class.png "run.booconnect.controllers.AccountAccountEndpointsController") AccountAccountEndpointsController

### Get singleton instance

The singleton instance of the ``` AccountAccountEndpointsController ``` class can be accessed from the API Client.

```java
AccountAccountEndpointsController accountAccountEndpoints = client.getAccountAccountEndpoints();
```

### <a name="create_store_a_newly_created_resource_in_storage_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.AccountAccountEndpointsController.createStoreANewlyCreatedResourceInStorageAsync") createStoreANewlyCreatedResourceInStorageAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void createStoreANewlyCreatedResourceInStorageAsync(final APICallBack<Object> callBack)
```

#### Example Usage

```java
// Invoking the API call with sample inputs
accountAccountEndpoints.createStoreANewlyCreatedResourceInStorageAsync(new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


### <a name="get_show_the_form_for_creating_a_new_resource_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.AccountAccountEndpointsController.getShowTheFormForCreatingANewResourceAsync") getShowTheFormForCreatingANewResourceAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void getShowTheFormForCreatingANewResourceAsync(final APICallBack<Object> callBack)
```

#### Example Usage

```java
// Invoking the API call with sample inputs
accountAccountEndpoints.getShowTheFormForCreatingANewResourceAsync(new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


### <a name="get_display_a_listing_of_the_resource_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.AccountAccountEndpointsController.getDisplayAListingOfTheResourceAsync") getDisplayAListingOfTheResourceAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void getDisplayAListingOfTheResourceAsync(final APICallBack<Object> callBack)
```

#### Example Usage

```java
// Invoking the API call with sample inputs
accountAccountEndpoints.getDisplayAListingOfTheResourceAsync(new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


### <a name="remove_the_specified_resource_from_storage_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.AccountAccountEndpointsController.removeTheSpecifiedResourceFromStorageAsync") removeTheSpecifiedResourceFromStorageAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void removeTheSpecifiedResourceFromStorageAsync(
        final String account,
        final APICallBack<Object> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| account |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```java
String account = "account";
// Invoking the API call with sample inputs
accountAccountEndpoints.removeTheSpecifiedResourceFromStorageAsync(account, new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


### <a name="update_the_specified_resource_in_storage_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.AccountAccountEndpointsController.updateTheSpecifiedResourceInStorageAsync") updateTheSpecifiedResourceInStorageAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void updateTheSpecifiedResourceInStorageAsync(
        final String account,
        final APICallBack<Object> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| account |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```java
String account = "account";
// Invoking the API call with sample inputs
accountAccountEndpoints.updateTheSpecifiedResourceInStorageAsync(account, new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


### <a name="get_show_the_form_for_editing_the_specified_resource_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.AccountAccountEndpointsController.getShowTheFormForEditingTheSpecifiedResourceAsync") getShowTheFormForEditingTheSpecifiedResourceAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void getShowTheFormForEditingTheSpecifiedResourceAsync(
        final String account,
        final APICallBack<Object> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| account |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```java
String account = "account";
// Invoking the API call with sample inputs
accountAccountEndpoints.getShowTheFormForEditingTheSpecifiedResourceAsync(account, new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


### <a name="get_display_the_specified_resource_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.AccountAccountEndpointsController.getDisplayTheSpecifiedResourceAsync") getDisplayTheSpecifiedResourceAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void getDisplayTheSpecifiedResourceAsync(
        final String account,
        final APICallBack<Object> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| account |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```java
String account = "account";
// Invoking the API call with sample inputs
accountAccountEndpoints.getDisplayTheSpecifiedResourceAsync(account, new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


[Back to List of Controllers](#list_of_controllers)

## <a name="wishlist_item_wishlist_resource_endpoints_controller"></a>![Class: ](https://apidocs.io/img/class.png "run.booconnect.controllers.WishlistItemWishlistResourceEndpointsController") WishlistItemWishlistResourceEndpointsController

### Get singleton instance

The singleton instance of the ``` WishlistItemWishlistResourceEndpointsController ``` class can be accessed from the API Client.

```java
WishlistItemWishlistResourceEndpointsController wishlistItemWishlistResourceEndpoints = client.getWishlistItemWishlistResourceEndpoints();
```

### <a name="remove_the_specified_resource_from_storage_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.WishlistItemWishlistResourceEndpointsController.removeTheSpecifiedResourceFromStorageAsync") removeTheSpecifiedResourceFromStorageAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void removeTheSpecifiedResourceFromStorageAsync(
        final String wishlist,
        final APICallBack<Object> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| wishlist |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```java
String wishlist = "wishlist";
// Invoking the API call with sample inputs
wishlistItemWishlistResourceEndpoints.removeTheSpecifiedResourceFromStorageAsync(wishlist, new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


### <a name="update_the_specified_resource_in_storage_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.WishlistItemWishlistResourceEndpointsController.updateTheSpecifiedResourceInStorageAsync") updateTheSpecifiedResourceInStorageAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void updateTheSpecifiedResourceInStorageAsync(
        final String wishlist,
        final APICallBack<Object> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| wishlist |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```java
String wishlist = "wishlist";
// Invoking the API call with sample inputs
wishlistItemWishlistResourceEndpoints.updateTheSpecifiedResourceInStorageAsync(wishlist, new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


### <a name="get_show_the_form_for_editing_the_specified_resource_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.WishlistItemWishlistResourceEndpointsController.getShowTheFormForEditingTheSpecifiedResourceAsync") getShowTheFormForEditingTheSpecifiedResourceAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void getShowTheFormForEditingTheSpecifiedResourceAsync(
        final String wishlist,
        final APICallBack<Object> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| wishlist |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```java
String wishlist = "wishlist";
// Invoking the API call with sample inputs
wishlistItemWishlistResourceEndpoints.getShowTheFormForEditingTheSpecifiedResourceAsync(wishlist, new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


### <a name="get_display_the_specified_resource_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.WishlistItemWishlistResourceEndpointsController.getDisplayTheSpecifiedResourceAsync") getDisplayTheSpecifiedResourceAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void getDisplayTheSpecifiedResourceAsync(
        final String wishlist,
        final APICallBack<Object> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| wishlist |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```java
String wishlist = "wishlist";
// Invoking the API call with sample inputs
wishlistItemWishlistResourceEndpoints.getDisplayTheSpecifiedResourceAsync(wishlist, new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


### <a name="create_store_a_newly_created_resource_in_storage_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.WishlistItemWishlistResourceEndpointsController.createStoreANewlyCreatedResourceInStorageAsync") createStoreANewlyCreatedResourceInStorageAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void createStoreANewlyCreatedResourceInStorageAsync(final APICallBack<Object> callBack)
```

#### Example Usage

```java
// Invoking the API call with sample inputs
wishlistItemWishlistResourceEndpoints.createStoreANewlyCreatedResourceInStorageAsync(new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


### <a name="get_show_the_form_for_creating_a_new_resource_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.WishlistItemWishlistResourceEndpointsController.getShowTheFormForCreatingANewResourceAsync") getShowTheFormForCreatingANewResourceAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void getShowTheFormForCreatingANewResourceAsync(final APICallBack<Object> callBack)
```

#### Example Usage

```java
// Invoking the API call with sample inputs
wishlistItemWishlistResourceEndpoints.getShowTheFormForCreatingANewResourceAsync(new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


### <a name="get_display_a_listing_of_the_resource_async"></a>![Method: ](https://apidocs.io/img/method.png "run.booconnect.controllers.WishlistItemWishlistResourceEndpointsController.getDisplayAListingOfTheResourceAsync") getDisplayAListingOfTheResourceAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void getDisplayAListingOfTheResourceAsync(final APICallBack<Object> callBack)
```

#### Example Usage

```java
// Invoking the API call with sample inputs
wishlistItemWishlistResourceEndpoints.getDisplayAListingOfTheResourceAsync(new APICallBack<void>() {
    public void onSuccess(HttpContext context, void response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


[Back to List of Controllers](#list_of_controllers)



