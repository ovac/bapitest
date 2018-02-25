/**
  * @module BooConnecctLib
  *
  * TODO: Add Description
  */

'use strict';

const Configuration = require('./configuration');
const Environments = require('./Environments');
const VerifyPhoneVerificationEndpointsController =
  require('./Controllers/VerifyPhoneVerificationEndpointsController');
const ResturantListsResturantsRegisteredOnBooconnectController =
  require('./Controllers/ResturantListsResturantsRegisteredOnBooconnectController');
const OrdersOrdersResourceEndpointsController =
  require('./Controllers/OrdersOrdersResourceEndpointsController');
const ItemsItemsSoldInResturantsRegisteredOnBooConnectController =
  require('./Controllers/ItemsItemsSoldInResturantsRegisteredOnBooConnectController');
const CheckoutCheckoutResourceEndpointsController =
  require('./Controllers/CheckoutCheckoutResourceEndpointsController');
const CartShoppingCartEndpointsController =
  require('./Controllers/CartShoppingCartEndpointsController');
const AccountAccountEndpointsController =
  require('./Controllers/AccountAccountEndpointsController');
const WishlistItemWishlistResourceEndpointsController =
  require('./Controllers/WishlistItemWishlistResourceEndpointsController');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of BooConnecctLib
    Configuration,
    Environments,
    // controllers of BooConnecctLib
    VerifyPhoneVerificationEndpointsController,
    ResturantListsResturantsRegisteredOnBooconnectController,
    OrdersOrdersResourceEndpointsController,
    ItemsItemsSoldInResturantsRegisteredOnBooConnectController,
    CheckoutCheckoutResourceEndpointsController,
    CartShoppingCartEndpointsController,
    AccountAccountEndpointsController,
    WishlistItemWishlistResourceEndpointsController,
    // models of BooConnecctLib
    // exceptions of BooConnecctLib
    APIException,
};

module.exports = initializer;
