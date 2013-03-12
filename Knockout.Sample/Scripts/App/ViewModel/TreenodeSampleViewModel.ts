declare var ko;

module App.ViewModel {
    export interface ITreeNode {
        childNodeVisible: any;

        childNodes: ITreeNode[];
    }

    export class Category implements ITreeNode {
        id: number;

        name: string;

        childNodeVisible: any;

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