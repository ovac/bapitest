/*
 * BooConnecctLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */
 'use strict';

const chai = require('chai');
const assert = chai.assert;
const TestHelper = require("../TestHelper");
const APIHelper = require("../../lib/APIHelper");
const testerlib = require("../../lib");
const testConfiguration = require("../TestBootstrap");

const controller = testerlib.CheckoutCheckoutResourceEndpointsController;
describe("CheckoutCheckoutResourceEndpointsController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Todo Add description for test testStoreANewlyCreatedResourceInStorage
     */
    it("should testStoreANewlyCreatedResourceInStorage response", function testStoreANewlyCreatedResourceInStorageTest(done) {
        controller.createStoreANewlyCreatedResourceInStorage(function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            done();
        });
    });

    /**
     * Todo Add description for test testShowTheFormForCreatingANewResource
     */
    it("should testShowTheFormForCreatingANewResource response", function testShowTheFormForCreatingANewResourceTest(done) {
        controller.getShowTheFormForCreatingANewResource(function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            done();
        });
    });

    /**
     * Todo Add description for test testDisplayAListingOfTheResource
     */
    it("should testDisplayAListingOfTheResource response", function testDisplayAListingOfTheResourceTest(done) {
        controller.getDisplayAListingOfTheResource(function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            done();
        });
    });

});
