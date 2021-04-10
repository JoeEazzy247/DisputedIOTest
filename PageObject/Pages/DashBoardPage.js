import {Selector, t} from 'testcafe'

class DashBoardPage{
    constructor(){
            this.ExpectedHeaderTxt = Selector('h1');
    }
    
}

export default new DashBoardPage();