*************************************** What is Presenter ?  **********************************************************

Presenter helps you to automate you website without writing extra code to your code base. Easy to integrate and has various method provided to make control over page.
Its helps you to present your website on video calls in group. (Eg. Zoom meeting);
Just give the proper instructions and time to Presenter and rest of the things presenter will do its own.
More methods and updats coming soon !


*************************************** How to use Presenter ? *********************************************************

Step -1 Clone the repo in your project folder.
Step -2 import Presenter ---> import Presenter from "../Presenter/presenter.js"
Step -3 Create Instance of Presenter  ----> let presenter = new Presenter(pass <first person name> in string);
Step -4 Initialize Presenter ----> presenter.initialize()
Step -5 Ready to use :)

************************************** Methods provided by library ****************************************************

//Initialize Presenter library;
**** .initialize();

// scroll your page on specific time 
**** .scrollPage(<divId(without #) in string>,<time in sec(number)>,<personName in string>,<color-name in string>);

// click on element on specific time
**** .clickit(<divId(without #) in string>,<time in sec(number)>,<personName in string>,<color-name in string>);

// Change the page on specific time
**** .changePage(<time in sec(number)>,<FILE-PATH in string>)

// Show the alert box with custom msg on specific time
**** .alertUser(<msg in string>,<time in sec(number)>);

//Change only name on specific time
**** .name(<personName in string>,<time in sec(number)>);

//Change only color on specific time
**** .color(<color-name in string>,<time in sec(number)>);


***************************************************************************************************************************
***************************************************************************************************************************

************************************************* More Methods coming soon ************************************************

***************************************************************************************************************************
***************************************************************************************************************************