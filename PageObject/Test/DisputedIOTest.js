import {ClientFunction} from 'testcafe'
import HomePage from '../Pages/HomePage'
import DashBoardPage from '../Pages/DashBoardPage'
import ImagePage from '../Pages/ImagePage'
import NotificationPage from '../Pages/NotificationPage'


const url = 'https://blazor.radzen.com'
const getUrl = ClientFunction(() => window.location.href);


fixture('Home Page')
    .page(url)

test('Home Page validation Test', async _ => {
    console.log('-------------------------------------------');
    console.log('HomePage-------------------------------Test');

    await _
        .expect(getUrl()).contains(url)
        .expect(HomePage.DashBoardMenuName.exists).ok();
});


test('DashBoard Page validation Test', async _ => {
    console.log('-------------------------------------------');
    console.log('DashBoard------------------------------Test');
        
        HomePage.clickDashBoardMenuName();

    await _
        .expect(DashBoardPage.ExpectedHeaderTxt.innerText).contains('Blazor GitHub Issues')
});


test('Image Page validation Test', async _ => {
    console.log('-------------------------------------------');
    console.log('Image----------------------------------Test');
    
        HomePage.clickGeneralMenuNameDropDwn();
        HomePage.clickImageMenuNameFromDropDwn();
    await _
        .expect(ImagePage.ExpectedHeaderTxt.innerText).contains('Image')
});


    test('Notification Page validation Test', async _ => {
        console.log('-------------------------------------------');
        console.log('Notification---------------------------Test');
        
        HomePage.clickGeneralMenuNameDropDwn();
        HomePage.clickNotificationMenuNameDropDwn();

        await _
        .expect(NotificationPage.ExpectedHeaderTxt.innerText).contains('Notification');
    });


    test('Button/Console Info Notification Test', async _ => {
        console.log('-------------------------------------------');
        console.log('Notification---------------------------Test');
        
        HomePage.clickGeneralMenuNameDropDwn();
        HomePage.clickNotificationMenuNameDropDwn();

        await _
        .expect(NotificationPage.ExpectedHeaderTxt.innerText).contains('Notification');
        NotificationPage.clickButtonBtn('Show info notification');
        
        await _
        .expect(NotificationPage.ConsoleMessage.innerText).contains('Info notification');
    });


    test('Button/Console Success Notification Test', async _ => {
        console.log('-------------------------------------------');
        console.log('Notification---------------------------Test');
        
        HomePage.clickGeneralMenuNameDropDwn();
        HomePage.clickNotificationMenuNameDropDwn();

        await _
        .expect(NotificationPage.ExpectedHeaderTxt.innerText).contains('Notification');
        NotificationPage.clickButtonBtn('Show info notification');

        await _
        .expect(NotificationPage.ConsoleMessage.innerText).contains('Info notification');

        NotificationPage.clickSConsoleClearBtn();

        NotificationPage.clickButtonBtn('Show success notification');
        await _
        .expect(NotificationPage.ConsoleMessage.innerText).contains('Success notification');
    });