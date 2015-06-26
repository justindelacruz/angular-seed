(function() {
    'use strict';

    describe("Home", function () {
        beforeEach(module('app'));

        var $controller;
        beforeEach(inject(function (_$controller_) {
            $controller = _$controller_;
        }));

        it("should exist", function () {
            var controller = $controller('IndexController', {});
            expect(controller).toBeDefined();
        });
    });
})();
