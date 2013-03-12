/// <reference path="../../Lib/knockout.d.ts" />

module App.ViewModel {
    export interface ITreeNode {
        childNodeVisible: KnockoutObservableBool;

        childNodes: ITreeNode[];
    }

    export class Category implements ITreeNode {
        id: KnockoutObservableNumber;

        name: KnockoutObservableString;

        childNodeVisible: KnockoutObservableBool;

        childNodes: Category[];

        constructor() {            
            this.childNodes = [];
            this.childNodeVisible = ko.observable(true);
        }

        toogleChildNode() {
            var value = this.childNodeVisible();
            this.childNodeVisible(!value);
        }
    }

    export class TreenodeSampleViewModel {
        category: ITreeNode[];

        constructor() {
            this.category = [];
        }
    }
}