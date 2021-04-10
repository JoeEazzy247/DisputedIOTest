import {Selector, t} from 'testcafe'

class NotificationPage{
    constructor(){
            this.ExpectedHeaderTxt = Selector('h1');
            this.Buttons = Selector('button[type="button"]');
            this.ConsoleMessage = Selector('div[class="console-message"]');
            this.ConsoleContent = Selector('div[class="console-content"]');
            this.ConsoleClearBtn = Selector('button[class="console-clear"]');
    }
    
    async clickButtonBtn(BtnText){
        await t
        .wait(1000)
        .click(this.Buttons.withText(BtnText));
    }

    async clickSConsoleClearBtn(){
        await t
        .wait(2000)
        .click(this.ConsoleClearBtn);
    }
}

export default new NotificationPage();