# Getting started

TODO: Add Description

## How to Build

The generated SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).
The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)
> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:

* `node --version`
* `npm -version`

![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=BooConnecct-Node)

Now use npm to resolve all dependencies by running the following command in the root directory (of the SDK folder):

```bash
npm install
```

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency1&workspaceFolder=BooConnecct-Node)

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency2)

This will install all dependencies in the `node_modules` folder.

Once dependencies are resolved, you will need to move the folder `BooConnecctLib ` in to your `node_modules` folder.

## How to Use

The following section explains how to use the library in a new project.

### 1. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

Click on `File` and select `Open Folder`.

![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![Open Project](https://apidocs.io/illustration/nodejs?step=openProject&workspaceFolder=BooConnecct-Node)

### 2. Creating a Test File

Now right click on the folder name and select the `New File` option to create a new test file. Save it as `index.js` Now import the generated NodeJS library using the following lines of code:

```js
var lib = require('lib');
```

Save changes.

![Create new file](https://apidocs.io/illustration/nodejs?step=createNewFile&workspaceFolder=BooConnecct-Node)

![Save new file](https://apidocs.io/illustration/nodejs?step=saveNewFile&workspaceFolder=BooConnecct-Node)

### 3. Running The Test File

To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:

```
node index.js
```

![Run file](https://apidocs.io/illustration/nodejs?step=runProject&workspaceFolder=BooConnecct-Node)


## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run.
Tests can be run in a number of ways:

### Method 1 (Run all tests)

1. Navigate to the root directory of the SDK folder from command prompt.
2. Type `mocha --recursive` to run all the tests.

### Method 2 (Run all tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha *` to run all the tests.

### Method 3 (Run specific controller's tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha  BooConnecctController`  to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TEST_TIMEOUT` parameter's value in `TestBootstrap.js`.

![Run Tests](https://apidocs.io/illustration/nodejs?step=runTests&controllerName=BooConnecctController)

## Initialization

### 

API client can be initialized as following:

```JavaScript
const lib = require('lib');


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

## <a name="verify_phone_verification_endpoints_controller"></a>![Class: ](https://apidocs.io/img/class.png ".VerifyPhoneVerificationEndpointsController") VerifyPhoneVerificationEndpointsController

### Get singleton instance

The singleton instance of the ``` VerifyPhoneVerificationEndpointsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.VerifyPhoneVerificationEndpointsController;
```

### <a name="get_display_a_listing_of_the_resource"></a>![Method: ](https://apidocs.io/img/method.png ".VerifyPhoneVerificationEndpointsController.getDisplayAListingOfTheResource") getDisplayAListingOfTheResource

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function getDisplayAListingOfTheResource(callback)
```

#### Example Usage

```javascript


    controller.getDisplayAListingOfTheResource(function(error, response, context) {

    
    });
```



### <a name="remove_the_specified_resource_from_storage"></a>![Method: ](https://apidocs.io/img/method.png ".VerifyPhoneVerificationEndpointsController.removeTheSpecifiedResourceFromStorage") removeTheSpecifiedResourceFromStorage

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function removeTheSpecifiedResourceFromStorage(verify, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| verify |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var verify = 'verify';

    controller.removeTheSpecifiedResourceFromStorage(verify, function(error, response, context) {

    
    });
```



### <a name="update_the_specified_resource_in_storage"></a>![Method: ](https://apidocs.io/img/method.png ".VerifyPhoneVerificationEndpointsController.updateTheSpecifiedResourceInStorage") updateTheSpecifiedResourceInStorage

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function updateTheSpecifiedResourceInStorage(verify, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| verify |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var verify = 'verify';

    controller.updateTheSpecifiedResourceInStorage(verify, function(error, response, context) {

    
    });
```



### <a name="get_show_the_form_for_editing_the_specified_resource"></a>![Method: ](https://apidocs.io/img/method.png ".VerifyPhoneVerificationEndpointsController.getShowTheFormForEditingTheSpecifiedResource") getShowTheFormForEditingTheSpecifiedResource

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function getShowTheFormForEditingTheSpecifiedResource(verify, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| verify |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var verify = 'verify';

    controller.getShowTheFormForEditingTheSpecifiedResource(verify, function(error, response, context) {

    
    });
```



### <a name="get_display_the_specified_resource"></a>![Method: ](https://apidocs.io/img/method.png ".VerifyPhoneVerificationEndpointsController.getDisplayTheSpecifiedResource") getDisplayTheSpecifiedResource

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function getDisplayTheSpecifiedResource(verify, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| verify |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var verify = 'verify';

    controller.getDisplayTheSpecifiedResource(verify, function(error, response, context) {

    
    });
```



### <a name="create_store_a_newly_created_resource_in_storage"></a>![Method: ](https://apidocs.io/img/method.png ".VerifyPhoneVerificationEndpointsController.createStoreANewlyCreatedResourceInStorage") createStoreANewlyCreatedResourceInStorage

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function createStoreANewlyCreatedResourceInStorage(callback)
```

#### Example Usage

```javascript


    controller.createStoreANewlyCreatedResourceInStorage(function(error, response, context) {

    
    });
```



### <a name="get_show_the_form_for_creating_a_new_resource"></a>![Method: ](https://apidocs.io/img/method.png ".VerifyPhoneVerificationEndpointsController.getShowTheFormForCreatingANewResource") getShowTheFormForCreatingANewResource

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function getShowTheFormForCreatingANewResource(callback)
```

#### Example Usage

```javascript


    controller.getShowTheFormForCreatingANewResource(function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="resturant_lists_resturants_registered_on_booconnect_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ResturantListsResturantsRegisteredOnBooconnectController") ResturantListsResturantsRegisteredOnBooconnectController

### Get singleton instance

The singleton instance of the ``` ResturantListsResturantsRegisteredOnBooconnectController ``` class can be accessed from the API Client.

```javascript
var controller = lib.ResturantListsResturantsRegisteredOnBooconnectController;
```

### <a name="create_store_a_newly_created_resource_in_storage"></a>![Method: ](https://apidocs.io/img/method.png ".ResturantListsResturantsRegisteredOnBooconnectController.createStoreANewlyCreatedResourceInStorage") createStoreANewlyCreatedResourceInStorage

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function createStoreANewlyCreatedResourceInStorage(callback)
```

#### Example Usage

```javascript


    controller.createStoreANewlyCreatedResourceInStorage(function(error, response, context) {

    
    });
```



### <a name="get_show_the_form_for_creating_a_new_resource"></a>![Method: ](https://apidocs.io/img/method.png ".ResturantListsResturantsRegisteredOnBooconnectController.getShowTheFormForCreatingANewResource") getShowTheFormForCreatingANewResource

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function getShowTheFormForCreatingANewResource(callback)
```

#### Example Usage

```javascript


    controller.getShowTheFormForCreatingANewResource(function(error, response, context) {

    
    });
```



### <a name="get_display_a_listing_of_the_resource"></a>![Method: ](https://apidocs.io/img/method.png ".ResturantListsResturantsRegisteredOnBooconnectController.getDisplayAListingOfTheResource") getDisplayAListingOfTheResource

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function getDisplayAListingOfTheResource(callback)
```

#### Example Usage

```javascript


    controller.getDisplayAListingOfTheResource(function(error, response, context) {

    
    });
```



### <a name="remove_the_specified_resource_from_storage"></a>![Method: ](https://apidocs.io/img/method.png ".ResturantListsResturantsRegisteredOnBooconnectController.removeTheSpecifiedResourceFromStorage") removeTheSpecifiedResourceFromStorage

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function removeTheSpecifiedResourceFromStorage(resturant, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| resturant |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var resturant = 'resturant';

    controller.removeTheSpecifiedResourceFromStorage(resturant, function(error, response, context) {

    
    });
```



### <a name="update_the_specified_resource_in_storage"></a>![Method: ](https://apidocs.io/img/method.png ".ResturantListsResturantsRegisteredOnBooconnectController.updateTheSpecifiedResourceInStorage") updateTheSpecifiedResourceInStorage

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function updateTheSpecifiedResourceInStorage(resturant, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| resturant |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var resturant = 'resturant';

    controller.updateTheSpecifiedResourceInStorage(resturant, function(error, response, context) {

    
    });
```



### <a name="get_show_the_form_for_editing_the_specified_resource"></a>![Method: ](https://apidocs.io/img/method.png ".ResturantListsResturantsRegisteredOnBooconnectController.getShowTheFormForEditingTheSpecifiedResource") getShowTheFormForEditingTheSpecifiedResource

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function getShowTheFormForEditingTheSpecifiedResource(resturant, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| resturant |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var resturant = 'resturant';

    controller.getShowTheFormForEditingTheSpecifiedResource(resturant, function(error, response, context) {

    
    });
```



### <a name="get_display_the_specified_resource"></a>![Method: ](https://apidocs.io/img/method.png ".ResturantListsResturantsRegisteredOnBooconnectController.getDisplayTheSpecifiedResource") getDisplayTheSpecifiedResource

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function getDisplayTheSpecifiedResource(resturant, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| resturant |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var resturant = 'resturant';

    controller.getDisplayTheSpecifiedResource(resturant, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="orders_orders_resource_endpoints_controller"></a>![Class: ](https://apidocs.io/img/class.png ".OrdersOrdersResourceEndpointsController") OrdersOrdersResourceEndpointsController

### Get singleton instance

The singleton instance of the ``` OrdersOrdersResourceEndpointsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.OrdersOrdersResourceEndpointsController;
```

### <a name="create_store_a_newly_created_resource_in_storage"></a>![Method: ](https://apidocs.io/img/method.png ".OrdersOrdersResourceEndpointsController.createStoreANewlyCreatedResourceInStorage") createStoreANewlyCreatedResourceInStorage

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function createStoreANewlyCreatedResourceInStorage(callback)
```

#### Example Usage

```javascript


    controller.createStoreANewlyCreatedResourceInStorage(function(error, response, context) {

    
    });
```



### <a name="get_show_the_form_for_creating_a_new_resource"></a>![Method: ](https://apidocs.io/img/method.png ".OrdersOrdersResourceEndpointsController.getShowTheFormForCreatingANewResource") getShowTheFormForCreatingANewResource

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function getShowTheFormForCreatingANewResource(callback)
```

#### Example Usage

```javascript


    controller.getShowTheFormForCreatingANewResource(function(error, response, context) {

    
    });
```



### <a name="list_all_orders_display_a_listing_of_the_resource"></a>![Method: ](https://apidocs.io/img/method.png ".OrdersOrdersResourceEndpointsController.listAllOrdersDisplayAListingOfTheResource") listAllOrdersDisplayAListingOfTheResource

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function listAllOrdersDisplayAListingOfTheResource(callback)
```

#### Example Usage

```javascript


    controller.listAllOrdersDisplayAListingOfTheResource(function(error, response, context) {

    
    });
```



### <a name="remove_the_specified_resource_from_storage"></a>![Method: ](https://apidocs.io/img/method.png ".OrdersOrdersResourceEndpointsController.removeTheSpecifiedResourceFromStorage") removeTheSpecifiedResourceFromStorage

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function removeTheSpecifiedResourceFromStorage(order, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| order |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var order = 'order';

    controller.removeTheSpecifiedResourceFromStorage(order, function(error, response, context) {

    
    });
```



### <a name="update_the_specified_resource_in_storage"></a>![Method: ](https://apidocs.io/img/method.png ".OrdersOrdersResourceEndpointsController.updateTheSpecifiedResourceInStorage") updateTheSpecifiedResourceInStorage

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function updateTheSpecifiedResourceInStorage(order, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| order |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var order = 'order';

    controller.updateTheSpecifiedResourceInStorage(order, function(error, response, context) {

    
    });
```



### <a name="get_show_the_form_for_editing_the_specified_resource"></a>![Method: ](https://apidocs.io/img/method.png ".OrdersOrdersResourceEndpointsController.getShowTheFormForEditingTheSpecifiedResource") getShowTheFormForEditingTheSpecifiedResource

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function getShowTheFormForEditingTheSpecifiedResource(order, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| order |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var order = 'order';

    controller.getShowTheFormForEditingTheSpecifiedResource(order, function(error, response, context) {

    
    });
```



### <a name="get_display_the_specified_resource"></a>![Method: ](https://apidocs.io/img/method.png ".OrdersOrdersResourceEndpointsController.getDisplayTheSpecifiedResource") getDisplayTheSpecifiedResource

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function getDisplayTheSpecifiedResource(order, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| order |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var order = 'order';

    controller.getDisplayTheSpecifiedResource(order, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="items_items_sold_in_resturants_registered_on_boo_connect_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ItemsItemsSoldInResturantsRegisteredOnBooConnectController") ItemsItemsSoldInResturantsRegisteredOnBooConnectController

### Get singleton instance

The singleton instance of the ``` ItemsItemsSoldInResturantsRegisteredOnBooConnectController ``` class can be accessed from the API Client.

```javascript
var controller = lib.ItemsItemsSoldInResturantsRegisteredOnBooConnectController;
```

### <a name="create_store_a_newly_created_resource_in_storage"></a>![Method: ](https://apidocs.io/img/method.png ".ItemsItemsSoldInResturantsRegisteredOnBooConnectController.createStoreANewlyCreatedResourceInStorage") createStoreANewlyCreatedResourceInStorage

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function createStoreANewlyCreatedResourceInStorage(callback)
```

#### Example Usage

```javascript


    controller.createStoreANewlyCreatedResourceInStorage(function(error, response, context) {

    
    });
```



### <a name="get_show_the_form_for_creating_a_new_resource"></a>![Method: ](https://apidocs.io/img/method.png ".ItemsItemsSoldInResturantsRegisteredOnBooConnectController.getShowTheFormForCreatingANewResource") getShowTheFormForCreatingANewResource

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function getShowTheFormForCreatingANewResource(callback)
```

#### Example Usage

```javascript


    controller.getShowTheFormForCreatingANewResource(function(error, response, context) {

    
    });
```



### <a name="list_items_display_a_listing_of_the_resource"></a>![Method: ](https://apidocs.io/img/method.png ".ItemsItemsSoldInResturantsRegisteredOnBooConnectController.listItemsDisplayAListingOfTheResource") listItemsDisplayAListingOfTheResource

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function listItemsDisplayAListingOfTheResource(callback)
```

#### Example Usage

```javascript


    controller.listItemsDisplayAListingOfTheResource(function(error, response, context) {

    
    });
```



### <a name="remove_the_specified_resource_from_storage"></a>![Method: ](https://apidocs.io/img/method.png ".ItemsItemsSoldInResturantsRegisteredOnBooConnectController.removeTheSpecifiedResourceFromStorage") removeTheSpecifiedResourceFromStorage

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function removeTheSpecifiedResourceFromStorage(item, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| item |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var item = 'item';

    controller.removeTheSpecifiedResourceFromStorage(item, function(error, response, context) {

    
    });
```



### <a name="update_the_specified_resource_in_storage"></a>![Method: ](https://apidocs.io/img/method.png ".ItemsItemsSoldInResturantsRegisteredOnBooConnectController.updateTheSpecifiedResourceInStorage") updateTheSpecifiedResourceInStorage

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function updateTheSpecifiedResourceInStorage(item, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| item |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var item = 'item';

    controller.updateTheSpecifiedResourceInStorage(item, function(error, response, context) {

    
    });
```



### <a name="get_show_the_form_for_editing_the_specified_resource"></a>![Method: ](https://apidocs.io/img/method.png ".ItemsItemsSoldInResturantsRegisteredOnBooConnectController.getShowTheFormForEditingTheSpecifiedResource") getShowTheFormForEditingTheSpecifiedResource

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function getShowTheFormForEditingTheSpecifiedResource(item, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| item |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var item = 'item';

    controller.getShowTheFormForEditingTheSpecifiedResource(item, function(error, response, context) {

    
    });
```



### <a name="get_show_item_display_the_specified_resource"></a>![Method: ](https://apidocs.io/img/method.png ".ItemsItemsSoldInResturantsRegisteredOnBooConnectController.getShowItemDisplayTheSpecifiedResource") getShowItemDisplayTheSpecifiedResource

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function getShowItemDisplayTheSpecifiedResource(item, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| item |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var item = 'item';

    controller.getShowItemDisplayTheSpecifiedResource(item, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="checkout_checkout_resource_endpoints_controller"></a>![Class: ](https://apidocs.io/img/class.png ".CheckoutCheckoutResourceEndpointsController") CheckoutCheckoutResourceEndpointsController

### Get singleton instance

The singleton instance of the ``` CheckoutCheckoutResourceEndpointsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.CheckoutCheckoutResourceEndpointsController;
```

### <a name="create_store_a_newly_created_resource_in_storage"></a>![Method: ](https://apidocs.io/img/method.png ".CheckoutCheckoutResourceEndpointsController.createStoreANewlyCreatedResourceInStorage") createStoreANewlyCreatedResourceInStorage

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function createStoreANewlyCreatedResourceInStorage(callback)
```

#### Example Usage

```javascript


    controller.createStoreANewlyCreatedResourceInStorage(function(error, response, context) {

    
    });
```



### <a name="get_show_the_form_for_creating_a_new_resource"></a>![Method: ](https://apidocs.io/img/method.png ".CheckoutCheckoutResourceEndpointsController.getShowTheFormForCreatingANewResource") getShowTheFormForCreatingANewResource

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function getShowTheFormForCreatingANewResource(callback)
```

#### Example Usage

```javascript


    controller.getShowTheFormForCreatingANewResource(function(error, response, context) {

    
    });
```



### <a name="get_display_a_listing_of_the_resource"></a>![Method: ](https://apidocs.io/img/method.png ".CheckoutCheckoutResourceEndpointsController.getDisplayAListingOfTheResource") getDisplayAListingOfTheResource

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function getDisplayAListingOfTheResource(callback)
```

#### Example Usage

```javascript


    controller.getDisplayAListingOfTheResource(function(error, response, context) {

    
    });
```



### <a name="remove_the_specified_resource_from_storage"></a>![Method: ](https://apidocs.io/img/method.png ".CheckoutCheckoutResourceEndpointsController.removeTheSpecifiedResourceFromStorage") removeTheSpecifiedResourceFromStorage

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function removeTheSpecifiedResourceFromStorage(checkout, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| checkout |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var checkout = 'checkout';

    controller.removeTheSpecifiedResourceFromStorage(checkout, function(error, response, context) {

    
    });
```



### <a name="update_the_specified_resource_in_storage"></a>![Method: ](https://apidocs.io/img/method.png ".CheckoutCheckoutResourceEndpointsController.updateTheSpecifiedResourceInStorage") updateTheSpecifiedResourceInStorage

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function updateTheSpecifiedResourceInStorage(checkout, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| checkout |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var checkout = 'checkout';

    controller.updateTheSpecifiedResourceInStorage(checkout, function(error, response, context) {

    
    });
```



### <a name="get_show_the_form_for_editing_the_specified_resource"></a>![Method: ](https://apidocs.io/img/method.png ".CheckoutCheckoutResourceEndpointsController.getShowTheFormForEditingTheSpecifiedResource") getShowTheFormForEditingTheSpecifiedResource

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function getShowTheFormForEditingTheSpecifiedResource(checkout, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| checkout |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var checkout = 'checkout';

    controller.getShowTheFormForEditingTheSpecifiedResource(checkout, function(error, response, context) {

    
    });
```



### <a name="get_display_the_specified_resource"></a>![Method: ](https://apidocs.io/img/method.png ".CheckoutCheckoutResourceEndpointsController.getDisplayTheSpecifiedResource") getDisplayTheSpecifiedResource

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function getDisplayTheSpecifiedResource(checkout, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| checkout |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var checkout = 'checkout';

    controller.getDisplayTheSpecifiedResource(checkout, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="cart_shopping_cart_endpoints_controller"></a>![Class: ](https://apidocs.io/img/class.png ".CartShoppingCartEndpointsController") CartShoppingCartEndpointsController

### Get singleton instance

The singleton instance of the ``` CartShoppingCartEndpointsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.CartShoppingCartEndpointsController;
```

### <a name="get_display_the_specified_resource"></a>![Method: ](https://apidocs.io/img/method.png ".CartShoppingCartEndpointsController.getDisplayTheSpecifiedResource") getDisplayTheSpecifiedResource

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function getDisplayTheSpecifiedResource(cart, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| cart |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var cart = 'cart';

    controller.getDisplayTheSpecifiedResource(cart, function(error, response, context) {

    
    });
```



### <a name="create_store_a_newly_created_resource_in_storage"></a>![Method: ](https://apidocs.io/img/method.png ".CartShoppingCartEndpointsController.createStoreANewlyCreatedResourceInStorage") createStoreANewlyCreatedResourceInStorage

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function createStoreANewlyCreatedResourceInStorage(callback)
```

#### Example Usage

```javascript


    controller.createStoreANewlyCreatedResourceInStorage(function(error, response, context) {

    
    });
```



### <a name="get_show_the_form_for_creating_a_new_resource"></a>![Method: ](https://apidocs.io/img/method.png ".CartShoppingCartEndpointsController.getShowTheFormForCreatingANewResource") getShowTheFormForCreatingANewResource

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function getShowTheFormForCreatingANewResource(callback)
```

#### Example Usage

```javascript


    controller.getShowTheFormForCreatingANewResource(function(error, response, context) {

    
    });
```



### <a name="get_display_a_listing_of_the_resource"></a>![Method: ](https://apidocs.io/img/method.png ".CartShoppingCartEndpointsController.getDisplayAListingOfTheResource") getDisplayAListingOfTheResource

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function getDisplayAListingOfTheResource(callback)
```

#### Example Usage

```javascript


    controller.getDisplayAListingOfTheResource(function(error, response, context) {

    
    });
```



### <a name="remove_the_specified_resource_from_storage"></a>![Method: ](https://apidocs.io/img/method.png ".CartShoppingCartEndpointsController.removeTheSpecifiedResourceFromStorage") removeTheSpecifiedResourceFromStorage

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function removeTheSpecifiedResourceFromStorage(cart, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| cart |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var cart = 'cart';

    controller.removeTheSpecifiedResourceFromStorage(cart, function(error, response, context) {

    
    });
```



### <a name="update_the_specified_resource_in_storage"></a>![Method: ](https://apidocs.io/img/method.png ".CartShoppingCartEndpointsController.updateTheSpecifiedResourceInStorage") updateTheSpecifiedResourceInStorage

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function updateTheSpecifiedResourceInStorage(cart, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| cart |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var cart = 'cart';

    controller.updateTheSpecifiedResourceInStorage(cart, function(error, response, context) {

    
    });
```



### <a name="get_show_the_form_for_editing_the_specified_resource"></a>![Method: ](https://apidocs.io/img/method.png ".CartShoppingCartEndpointsController.getShowTheFormForEditingTheSpecifiedResource") getShowTheFormForEditingTheSpecifiedResource

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function getShowTheFormForEditingTheSpecifiedResource(cart, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| cart |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var cart = 'cart';

    controller.getShowTheFormForEditingTheSpecifiedResource(cart, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="account_account_endpoints_controller"></a>![Class: ](https://apidocs.io/img/class.png ".AccountAccountEndpointsController") AccountAccountEndpointsController

### Get singleton instance

The singleton instance of the ``` AccountAccountEndpointsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.AccountAccountEndpointsController;
```

### <a name="create_store_a_newly_created_resource_in_storage"></a>![Method: ](https://apidocs.io/img/method.png ".AccountAccountEndpointsController.createStoreANewlyCreatedResourceInStorage") createStoreANewlyCreatedResourceInStorage

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function createStoreANewlyCreatedResourceInStorage(callback)
```

#### Example Usage

```javascript


    controller.createStoreANewlyCreatedResourceInStorage(function(error, response, context) {

    
    });
```



### <a name="get_show_the_form_for_creating_a_new_resource"></a>![Method: ](https://apidocs.io/img/method.png ".AccountAccountEndpointsController.getShowTheFormForCreatingANewResource") getShowTheFormForCreatingANewResource

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function getShowTheFormForCreatingANewResource(callback)
```

#### Example Usage

```javascript


    controller.getShowTheFormForCreatingANewResource(function(error, response, context) {

    
    });
```



### <a name="get_display_a_listing_of_the_resource"></a>![Method: ](https://apidocs.io/img/method.png ".AccountAccountEndpointsController.getDisplayAListingOfTheResource") getDisplayAListingOfTheResource

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function getDisplayAListingOfTheResource(callback)
```

#### Example Usage

```javascript


    controller.getDisplayAListingOfTheResource(function(error, response, context) {

    
    });
```



### <a name="remove_the_specified_resource_from_storage"></a>![Method: ](https://apidocs.io/img/method.png ".AccountAccountEndpointsController.removeTheSpecifiedResourceFromStorage") removeTheSpecifiedResourceFromStorage

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function removeTheSpecifiedResourceFromStorage(account, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| account |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var account = 'account';

    controller.removeTheSpecifiedResourceFromStorage(account, function(error, response, context) {

    
    });
```



### <a name="update_the_specified_resource_in_storage"></a>![Method: ](https://apidocs.io/img/method.png ".AccountAccountEndpointsController.updateTheSpecifiedResourceInStorage") updateTheSpecifiedResourceInStorage

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function updateTheSpecifiedResourceInStorage(account, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| account |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var account = 'account';

    controller.updateTheSpecifiedResourceInStorage(account, function(error, response, context) {

    
    });
```



### <a name="get_show_the_form_for_editing_the_specified_resource"></a>![Method: ](https://apidocs.io/img/method.png ".AccountAccountEndpointsController.getShowTheFormForEditingTheSpecifiedResource") getShowTheFormForEditingTheSpecifiedResource

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function getShowTheFormForEditingTheSpecifiedResource(account, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| account |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var account = 'account';

    controller.getShowTheFormForEditingTheSpecifiedResource(account, function(error, response, context) {

    
    });
```



### <a name="get_display_the_specified_resource"></a>![Method: ](https://apidocs.io/img/method.png ".AccountAccountEndpointsController.getDisplayTheSpecifiedResource") getDisplayTheSpecifiedResource

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function getDisplayTheSpecifiedResource(account, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| account |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var account = 'account';

    controller.getDisplayTheSpecifiedResource(account, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="wishlist_item_wishlist_resource_endpoints_controller"></a>![Class: ](https://apidocs.io/img/class.png ".WishlistItemWishlistResourceEndpointsController") WishlistItemWishlistResourceEndpointsController

### Get singleton instance

The singleton instance of the ``` WishlistItemWishlistResourceEndpointsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.WishlistItemWishlistResourceEndpointsController;
```

### <a name="remove_the_specified_resource_from_storage"></a>![Method: ](https://apidocs.io/img/method.png ".WishlistItemWishlistResourceEndpointsController.removeTheSpecifiedResourceFromStorage") removeTheSpecifiedResourceFromStorage

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function removeTheSpecifiedResourceFromStorage(wishlist, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| wishlist |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var wishlist = 'wishlist';

    controller.removeTheSpecifiedResourceFromStorage(wishlist, function(error, response, context) {

    
    });
```



### <a name="update_the_specified_resource_in_storage"></a>![Method: ](https://apidocs.io/img/method.png ".WishlistItemWishlistResourceEndpointsController.updateTheSpecifiedResourceInStorage") updateTheSpecifiedResourceInStorage

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function updateTheSpecifiedResourceInStorage(wishlist, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| wishlist |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var wishlist = 'wishlist';

    controller.updateTheSpecifiedResourceInStorage(wishlist, function(error, response, context) {

    
    });
```



### <a name="get_show_the_form_for_editing_the_specified_resource"></a>![Method: ](https://apidocs.io/img/method.png ".WishlistItemWishlistResourceEndpointsController.getShowTheFormForEditingTheSpecifiedResource") getShowTheFormForEditingTheSpecifiedResource

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function getShowTheFormForEditingTheSpecifiedResource(wishlist, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| wishlist |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var wishlist = 'wishlist';

    controller.getShowTheFormForEditingTheSpecifiedResource(wishlist, function(error, response, context) {

    
    });
```



### <a name="get_display_the_specified_resource"></a>![Method: ](https://apidocs.io/img/method.png ".WishlistItemWishlistResourceEndpointsController.getDisplayTheSpecifiedResource") getDisplayTheSpecifiedResource

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function getDisplayTheSpecifiedResource(wishlist, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| wishlist |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var wishlist = 'wishlist';

    controller.getDisplayTheSpecifiedResource(wishlist, function(error, response, context) {

    
    });
```



### <a name="create_store_a_newly_created_resource_in_storage"></a>![Method: ](https://apidocs.io/img/method.png ".WishlistItemWishlistResourceEndpointsController.createStoreANewlyCreatedResourceInStorage") createStoreANewlyCreatedResourceInStorage

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function createStoreANewlyCreatedResourceInStorage(callback)
```

#### Example Usage

```javascript


    controller.createStoreANewlyCreatedResourceInStorage(function(error, response, context) {

    
    });
```



### <a name="get_show_the_form_for_creating_a_new_resource"></a>![Method: ](https://apidocs.io/img/method.png ".WishlistItemWishlistResourceEndpointsController.getShowTheFormForCreatingANewResource") getShowTheFormForCreatingANewResource

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function getShowTheFormForCreatingANewResource(callback)
```

#### Example Usage

```javascript


    controller.getShowTheFormForCreatingANewResource(function(error, response, context) {

    
    });
```



### <a name="get_display_a_listing_of_the_resource"></a>![Method: ](https://apidocs.io/img/method.png ".WishlistItemWishlistResourceEndpointsController.getDisplayAListingOfTheResource") getDisplayAListingOfTheResource

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```javascript
function getDisplayAListingOfTheResource(callback)
```

#### Example Usage

```javascript


    controller.getDisplayAListingOfTheResource(function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)



