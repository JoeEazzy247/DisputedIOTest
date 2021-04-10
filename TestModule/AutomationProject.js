import { Console } from 'console';
import { hasUncaughtExceptionCaptureCallback } from 'process';
import { Selector } from 'testcafe';
import { xPathToCss } from 'xpath-to-css';

const url = 'https://blazor.radzen.com';

const elementWithId = Selector(id => {
    return document.getElementById(id);
})

fixture('DisputedIO Test')
    .page(url)

test('DashBoard Test', async _ => {
    console.log('-------------------------------------------');
    console.log('DashBoard------------------------------Test');

    const DashBoardMenuName = Selector('a[href="/dashboard"]')
    const ExpectedHeaderTxt = Selector('h1').innerText;

    await _
        .click(DashBoardMenuName)
        .expect(ExpectedHeaderTxt).contains('Blazor GitHub Issues')
    console.log("My Page Header Text is: " + await ExpectedHeaderTxt);
});


test('Image Test', async _ => {
    console.log('-------------------------------------------');
    console.log('Image----------------------------------Test');

    const GeneralMenuNameDropDwn = Selector('div[class="rz-navigation-item-link"]')
    const ImageMenuNameFromDropDwn = Selector('a[href="image"]')
    const ExpectedHeaderTxt = Selector('h1').innerText;

    await _
        .wait(2000)
        .click(GeneralMenuNameDropDwn)
        .wait(2000)
        .click(ImageMenuNameFromDropDwn)
        .expect(ExpectedHeaderTxt).contains('Image')
    console.log("My Page Header Text is: " + await ExpectedHeaderTxt);    
});



test('Notification Test', async _ =>{
    console.log('-------------------------------------------');
    console.log('Notification---------------------------Test');

    const GeneralMenuNameDropDwn = Selector('div[class="rz-navigation-item-link"]')
    const NotificationMenuNameDropDwn = Selector('a[href="notification"]')
    const ExpectedHeaderTxt = Selector('h1').innerText;
    const ShowInfoBtn = Selector('button[type="button"]')
    
    await _
            .wait(2000)
            .click(GeneralMenuNameDropDwn)
            .wait(2000)
            .click(NotificationMenuNameDropDwn)
            .expect(ExpectedHeaderTxt).contains('Notification')
        console.log("My Page Header Text is: " + await ExpectedHeaderTxt); 
})


test('Notification Test2', async _ =>{
    console.log('-------------------------------------------');
    console.log('Notification---------------------------Test2');

    const GeneralMenuNameDropDwn = Selector('div[class="rz-navigation-item-link"]')
    const NotificationMenuNameDropDwn = Selector('div[class="rz-navigation-item-wrapper"]>a[href="notification"]')
    const ExpectedHeaderTxt = Selector('h1').innerText;
    let Buttons = Selector('button[type="button"]')
    //const buttonNameXpath = '//button[@type="button"]//span[.="Show info notification"]';
    const ConsoleMessage = Selector('div[class="console-message"]').innerText
    
    
    await _
            .wait(2000)
            .click(GeneralMenuNameDropDwn)
            .wait(2000)
            .click(NotificationMenuNameDropDwn)
            .expect(ExpectedHeaderTxt).contains('Notification')
            .click(Buttons.withText('Show info notification'))
            .wait(2000)
            .expect(ConsoleMessage).contains('Info notification')
            console.log("My Console Log Text is: " + await ConsoleMessage); 
})


test('Notification Test3', async _ =>{
    console.log('-------------------------------------------');
    console.log('Notification---------------------------Test3');

    const GeneralMenuNameDropDwn = Selector('div[class="rz-navigation-item-link"]')
    const NotificationMenuNameDropDwn = Selector('div[class="rz-navigation-item-wrapper"]>a[href="notification"]')
    const ExpectedHeaderTxt = Selector('h1').innerText;
    let Buttons = Selector('button[type="button"]')
    const ConsoleMessage = Selector('div[class="console-message"]').innerText
    const ConsoleContent = Selector('div[class="console-content"]').innerText
    let ConsoleClearBtn = Selector('button[class="console-clear"]')
    
    
    await _
            .wait(2000)
            .click(GeneralMenuNameDropDwn)
            .wait(2000)
            .click(NotificationMenuNameDropDwn)
            .expect(ExpectedHeaderTxt).contains('Notification')
            .click(Buttons.withText('Show info notification'))
            .wait(2000)
            .expect(ConsoleMessage).contains('Info notification')
            console.log("My Console Log Text is: " + await ConsoleMessage); 

    await _
            .wait(2000)
            .click(ConsoleClearBtn)
            .wait(2000)
            .expect(ConsoleContent).contains('')
            .click(Buttons.withText('Show success notification'))
            .expect(ConsoleMessage).contains('Success notification')
            console.log("My Console Log Text is: " + await ConsoleMessage); 
})