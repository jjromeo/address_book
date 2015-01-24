Address Book app
===========================

This is a one-page address book app which allows users to search for contacts, add new contacts, update contacts and delete contacts.

Technologies used
-----------------
- Angularjs
- Bootstrap (and angular-bootstrap)
- Karma-Jasmine
- Protractor
- Npm and Bower for dependencies

How to use
---------------
- Clone repo
- Run ```bower install``` and ```npm install```
- ```npm start``` and go to localhost:8000/app

Testing
------

E2E Tests can be run with ```npm run protractor```
Unit tests can be run with ```npm test```

Features
------
- A user may add, edit, delete and search for contacts.
- Users will receive alerts as confirmation of the actions they take.
- Responsive

My approach
-----------

I decided to use angular for this as I was eager to have another chance to learn it further, having used it once suboptimally in the past. I wanted to ensure my controllers my app was well-organised and as such gave controllers their own files, folder and specs. Additionally I sought to keep the logic out of the views as much as possible.

As I continued with the project I realised Angular was very well-suited to the job and made handling search and accessing the api quite simple.

I used Bootstrap for the styling of the app, making it responsive for mobiles, and giving it a slightly pleasant look.

If I were to improve the app I would refactor existing and add further integration and unit tests, additionally I would refactor the $http requests to use a service. I would also make the app look slightly more exciting.

Lastly, I did have some trouble test driving the app, some of the tests were written afterwards. I will in future test-drive my angular apps, having learned more about angular testing.
