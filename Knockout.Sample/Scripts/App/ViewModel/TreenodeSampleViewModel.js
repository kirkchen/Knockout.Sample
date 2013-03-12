var App;
(function (App) {
    (function (ViewModel) {
        var Category = (function () {
            function Category() {
                this.childNodes = [];
                this.childNodeVisible = ko.observable(true);
            }
            Category.prototype.toogleChildNode = function () {
                var value = this.childNodeVisible();
                this.childNodeVisible(!value);
            };
            return Category;
        })();
        ViewModel.Category = Category;        
        var TreenodeSampleViewModel = (function () {
            function TreenodeSampleViewModel() {
                this.category = [];
            }
            return TreenodeSampleViewModel;
        })();
        ViewModel.TreenodeSampleViewModel = TreenodeSampleViewModel;        
    })(App.ViewModel || (App.ViewModel = {}));
    var ViewModel = App.ViewModel;
})(App || (App = {}));
