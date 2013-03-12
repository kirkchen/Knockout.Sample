var App;
(function (App) {
    /// <reference path="../../../Lib/knockout.mapping.d.ts" />
    /// <reference path="../TreenodeSampleViewModel.ts" />
    (function (ViewModel) {
        var Mapping = (function () {
            function Mapping() { }
            Mapping.CategoryMapping = {
                'childNodes': {
                    create: function (options) {
                        var model = new App.ViewModel.Category();
                        ko.mapping.fromJS(options.data, Mapping.CategoryMapping, model);
                        return model;
                    }
                }
            };
            Mapping.TreenodeSampleViewModelMapping = {
                'category': {
                    create: function (options) {
                        var model = new App.ViewModel.Category();
                        ko.mapping.fromJS(options.data, Mapping.CategoryMapping, model);
                        return model;
                    }
                }
            };
            return Mapping;
        })();
        ViewModel.Mapping = Mapping;        
    })(App.ViewModel || (App.ViewModel = {}));
    var ViewModel = App.ViewModel;
})(App || (App = {}));
//@ sourceMappingURL=Mappings.js.map
