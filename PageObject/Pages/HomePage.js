import {Selector, t} from 'testcafe'

class HomePage{
    constructor(){
        this.DashBoardMenuName = Selector('a[href="/dashboard"]');
        this.GeneralMenuNameDropDwn = Selector('div[class="rz-navigation-item-link"]');
        this.ImageMenuNameFromDropDwn = Selector('a[href="image"]');
        this.NotificationMenuNameDropDwn = Selector('a[href="notification"]');
    }

    async clickDashBoardMenuName(){
        await t
        .click(this.DashBoardMenuName);
    }

    async clickGeneralMenuNameDropDwn(){
        await t
        .wait(2000)
        .click(this.GeneralMenuNameDropDwn);
    }

    async clickImageMenuNameFromDropDwn(){
        await t
        .wait(1000)
        .click(this.ImageMenuNameFromDropDwn);
    }

    async clickNotificationMenuNameDropDwn(){
        await t
        .wait(1000)
        .click(this.NotificationMenuNameDropDwn);
    }
}

export default new HomePage();