/// <reference path="../../Lib/jquery.d.ts" />
/// <reference path="../../Lib/knockout.d.ts" />
ko.utils.extend(ko.bindingHandlers, {
    slideVisible: {
        update: function (element, valueAccessor, allBindingsAccessor) {
            // First get the latest data that we're bound to
                        var value = valueAccessor(), allBindings = allBindingsAccessor();
            // Next, whether or not the supplied model property is observable, get its current value
            var valueUnwrapped = ko.utils.unwrapObservable(value);
            // Grab some more data from another binding property
            var duration = allBindings.slideDuration || 400;// 400ms is default duration unless otherwise specified
            
            // Now manipulate the DOM element
            if(valueUnwrapped == true) {
                $(element).slideDown(duration);
            } else {
                // Make the element visible
                $(element).slideUp(duration);
            }// Make the element invisible
            
        }
    }
});
//@ sourceMappingURL=customBinding.js.map
