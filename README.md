# Angular Sample Project

This project serves as a test project to evaluate job prospects technical skills and work habits.
It consists of a basic angular/bootstrap application where applicants will be asked to implement certain features.

## Getting started

### Technology

This project uses the following technologies:

* Angular 6 (https://angular.io/)
* Bootstrap 4 (https://getbootstrap.com/)
* Node.js and NPM (Node package manager) (https://nodejs.org/en/)
* Git version control (https://git-scm.com/)
* Sass css pre-processor (https://sass-lang.com/)
* Font awesome icons (https://fontawesome.com/)

Before continuing please install a Git client, and Node.js for your platform.

### Cloning the repository

Clone this repository using `git clone <url>` with the url specified at the top of this page.

Create a personal branch of the master branch where you can commit your code. Run `git branch USER-<your-name>` to create a local branch.

### Testing the application

First install all the npm packages using `npm install`. This will download all the required packages to the node_modules folder.

Run `ng serve` inside the project directory to start a development server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Committing your changes

Add and commit your changes to your personal branch. Whenever you are ready to do so, push your changes to the repository using `git push origin`.

## Assignment

The task(s) specific assignment will be delivered to you separately. They can cover html & (s)css, javascript/typescipt or angular topics depending on your skills.

## Application

The application is a basic browser based application. It has a header bar, a side menu and a main content container. Pages will be loaded in the main container.
The following pages exist in the application:

* Dashboard (empty)
* Overview of items
* Details of single item
* Create new item page

### Directory structure

The application follows a common angular directory structure. The relevant files are all located in the /src directory.

* /src/app -> all the angular code
    * /src/app/components -> all the angular components (e.g. overview, header, menu, etc)
    * /src/app/services -> all the application services (e.g. data-service)
    * /src/app/model -> all the application data model (e.g. data-item)
* /src/assets -> images & icons
* /src/scss -> all the scss pre-processor files

### Data storage

The application contains data service that stores entries in memory. This means new items are lost after every refresh. Please use the provisioned items for testing. The data service has a limit of 100 items, and applies an small delay on requests to simulate a real data service.
