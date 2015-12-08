describe('ng-browse', function () {
    var browseService = {},
        $location,
        $state,
        $window,
        temp;
    // load app
    beforeEach(module('ngBrowse'));
    // inject all dependencies (for mocking and spying)
    beforeEach(inject(function ($injector) {
        browseService = $injector.get('$ngBrowse');
        $location = $injector.get('$location');
        $state = $injector.get('$state');
        $window = $injector.get('$window');
        temp = $window.location.reload;
        $window.location.reload = angular.noop;
    }));
    // undo overwritings
    afterEach(function () {
        //$window.location.reload = temp;
    });

    describe('init', function () {
        // check if default values are set
        it('functions', function () {
            expect(browseService.back).toBeDefined();
            expect(browseService.navigate).toBeDefined();
            expect(browseService.go).toBeDefined();
            expect(browseService.current).toBeDefined();
            expect(browseService.params).toBeDefined();
            expect(browseService.location).toBeDefined();
            expect(browseService.reload).toBeDefined();
        });
    });
    describe('callFunctions', function () {
        it('back', function () {
            spyOn($window.history, 'go');
            browseService.back(3);
            expect($window.history.go).toHaveBeenCalledWith(3);
        });
        it('back without param', function () {
            spyOn($window.history, 'go');
            browseService.back();
            expect($window.history.go).toHaveBeenCalledWith(-1);
        });
        it('navigate wihout notInHistory', function () {
            spyOn($location, 'path');
            browseService.navigate('senf');
            expect($location.path).toHaveBeenCalledWith('senf');
        });
        it('navigate with notInHistory', function () {
            spyOn($location, 'path').and.callThrough();
            spyOn($location, 'replace');
            browseService.navigate('senf', true);
            expect($location.path).toHaveBeenCalledWith('senf');
            expect($location.path).toHaveBeenCalled();
        });
        it('current', function () {
            expect(browseService.current()).toBeDefined();
        });
        it('params', function () {
            expect(browseService.params()).toBeDefined();
        });
        it('go', function () {
            spyOn($state, 'go');
            browseService.go('asdf', {});
            expect($state.go).toHaveBeenCalled();
            browseService.go('asdf', {}, true, true);
            expect($state.go).toHaveBeenCalled();
        });
        it('location', function () {
            spyOn($location, 'path');
            browseService.location();
            expect($location.path).toHaveBeenCalled();
        });
        it('reload', function () {
            spyOn($state, 'transitionTo');
            browseService.reload();
            expect($state.transitionTo).toHaveBeenCalled();
        });
        it('force full reload', function () {
            spyOn($window.location, 'reload');
            browseService.reload(true);
            expect($window.location.reload).toHaveBeenCalled();
        });
    });
});
