/// <reference path="../../../Lib/knockout.mapping.d.ts" />
/// <reference path="../TreenodeSampleViewModel.ts" />

module App.ViewModel {
    export class Mapping {
        static CategoryMapping = {
            'childNodes': {
                create: function (options) {
                    var model = new App.ViewModel.Category();

                    ko.mapping.fromJS(options.data, Mapping.CategoryMapping, model);

                    return model;
                }
            }
        }

        static TreenodeSampleViewModelMapping = {
            'category': {
                create: function (options) {
                    var model = new App.ViewModel.Category();

                    ko.mapping.fromJS(options.data, Mapping.CategoryMapping, model);

                    return model;
                }
            }
        }
    }
}