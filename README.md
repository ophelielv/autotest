# autotest [WIP]
## Description
This app allows you to :
* Launch a test suites with Selenium from the browser
* Change test-case’s parameters (like login, username, ...) in a friendly interface
* Keep history of every launches and their parameters.

Made in Javascript with ExpressJS, Mocha, Selenium and ReactJS.

## Get started
First launch the back end server (port 3000) then the front end server (port 3001)
### Back
  1. Change directory: > `cd autotestback`
  2. Install dependencies: > `npm install`
  3. Run the app:  > `SET DEBUG=autotestback:* & npm start` or > `npm start`

    http://localhost:3000/

  4. Database manager : install DB Browser for SQlite

Order of calls / stacktrace:
1. /routes/index.js
2. /services/mocha.service.js
3. /suites/test1.spec.js
4. /services/selenium.service.js which calls the following files:
* /pages/connectionPage.service.js
* /constants/urls.constants.js
* /constants/users.constants.js

### Front 
Success! Created autotestfront at C:\Projects\autotest\autotestfront
Inside that directory, you can run several commands:

  1. Starts the development server: > `npm start`
  2. Bundles the app into static files for production: > `npm run build`
  3. Starts the test runner: > `npm test`
  4. Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back! > `npm run eject`

We suggest that you begin by typing:

  > `cd autotestfront`

  > `npm start`

  http://localhost:3001


### Note about Chrome driver

https://stackoverflow.com/questions/26191142/selenium-nodejs-chromedriver-path
Ok assuming you are using Windows please try the following steps:

    Download the latest version of ChromeDriver from here http://chromedriver.storage.googleapis.com/index.html

    Extract the zip and place the contents somewhere you know where it is for example "C:\Users\UserName\AppData\Local\ChromeDriver" ou  "C:\Users\UserName\AppData\ChromeDriver"

    Go to your Control Panel -> System -> Edit the System Variables. Click on the "environment variables" button.

    In the system variables box there will be a variable named "Path" select it and click edit. Copy and paste the path to the containing directory of the chromedriver.exe you downloaded onto the end of the variable value and end it with a semi-colon.

    Click ok and again to close environment variables and again to close system properties.

    Close and reopen your terminal window.

    Run the command again.
