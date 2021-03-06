#Lab Tasks

After you have cloned the project and set it up as specified in the Readme, complete the following tasks, answering any
questions by editing this file. 

## Part #1: exploring the project.

- Try adding new pets on the index page through the form. Try deleting entries. Observe the results.
- 
>We did it! They did what you would expect.

> Protip: You'll need to start up the server before you can play with the website.

- Click links on the navigation bar. See what happens. Note that when you move away from the page with pets, your changes to the list of pets are lost. This is because we are not storing the array in a database (this will be a part of the next lab). 
- Observe the HTML element's formatting (it's done via bootstrap). As you are working on the questions below, experiment with the project to get a better sense for what each element is. 
- 
>Observed.

##### List all the files at the top level of your project (i.e. not in public) and briefly state the purpose of each one, as you understand it. You might want to postpone describing some files until you work with the project a bit more. 
>``` .gitignore ``` tells git which files to ignore
>``` .travis.yml ``` Travis file that tells Travis how to deal with our files
>``` app.js ``` main server application file
>``` bower.json ``` information about website
>``` Gruntfile.js ``` grunt test file
>``` karma.conf.js ``` karma test file
>``` LABTASKS.md ``` our tasks
>``` package.json ``` node information
>``` README.md ``` the main page for setup (GitHub looks at this)
##### List the folders in the public folder and describe the purpose for each.
>``` assets``` things we want on the page (images right now)
>``` css``` the css for the pages
>``` javascript``` the javascript for the pages
>``` views``` the html pages
##### What are the names of the Angular controllers in this web application? What does each of them do?
>``` main.controller.js```  the data for the main webpage ```public/views/index.html``` (inside the module)
>``` navbar.controller.js``` the data for the Navbar (inside the module)
##### Open the index.html view. What controller(s) is it using? 
>``` main.controller.js``` and ``` navbar.controller.js```
##### Where is the navigation bar included in the source code for index.html? 
> The first ```<div>``` within the ```<body>```
##### app.js within public/javascript is where your Angular modules are located at. What modules does the project currently have?
>```angular.module('stdControllers', [])```
>```angular.module("mainApp", ['stdControllers'])```
##### Notice, the code controlling the Node.js server is in a file also called app.js. There is no particular reason for this other than a generator we will use later on follows the same convention. Explain the difference between the purpose of the files (think client vs server).
>```app.js``` mediates the conversation between the client and the server (tells what the server does).
>```public/javascript/app.js``` defines what modules are being used in the client
##### Add a pet to the array, data (in the appropriate controller). See the change on the web page (you need to reload, but not restart). 
>added wolves (and made consistent plurality)
##### How are new items added and deleted through the web page? (i.e. - What functions from the main controller are used in index.html, and what Angular directives allow them to interact with the view?)
>```index.html``` uses ```mainControl.addData()```, ```mainControl.removeData($index)```, and ```mainControl.itemsInList()```
> the angular directive ```mainControl.textField``` allows it to interact with the view
##### Open navbar.html view. What is its purpose? How would you go about adding links to the navigation bar? 
> The purpose of ```navbar.html``` is to reference the ```navbar.controller.js``` to make the navbar. To add links you add to the list in the controller.
##### Find two instances of use of bootstrap (see above) in either navbar view or index view or both; explain what is formatted. 
> 1st instance: ```role="presentation"```
> 2nd instance: ```class="btn btn-primary"```

>Protip: Bootstrap is awesome. Start using it. Seriously. This allows you to do fancy things with styling (CSS) with very little effort. Think back to lab 1. http://getbootstrap.com/components/ <- Regular Bootstrap. https://angular-ui.github.io/bootstrap/ <- Angular Bootstrap. These offer separate functionality and both can be used simultaneously.

##### Stop the server by pressing Ctrl-C in the terminal, type "grunt test" to run tests. Where are the tests located?
>grunt just runs karma: ```karma.conf.js```

## Part #2: modifying the project.

- Set up Travis CI and add the build status icon to your project's README.
  - This should have been done as part of the setup.

- Currently clicking on "kittens" returns the "page under construction" message. Using the view about.html as a sample, add a page that has a navigation bar. Add an image of your choice to the page (be aware of copyright rules) and a div that describes the image. 
- Explore bootstrap by changing formatting of the page (for instance, position of the image and text). It doesn't have to look "nice", just different from what it currently is. 
>We lowercased the navbar on the kittens page, and centered text.

## Part #3: components, controllers, and modules, oh my!

>Protip: You can blame Jacob for the cheesy part name.

- Your first task here is to create a new Angular module that acts as a container for Angular component controllers. To do this, look at javascript/app.js. Similar to `stdControllers`, create a module named `stdComponents`, and inject that into the `mainApp` module.
- Now that we have an Angular module for containing Angular controllers of components, we want to add the controller for our Angular component to the new module. As such, go to `navbar.controller.js` and change the module it is a part of to the new `stdComponents` module.
- Boom! You're done making your own module. To make sure Angular is still working, serve the application (using Grunt), and make sure you can still use the navbar on the index.html and about.html pages.

- Now, we are going to go a bit more in depth into this. Using navbar as an example, we want you to make another component. This component will be a `footer` that you will add to your index.html and about.html pages.
- To do this, you need to create: `footer.controller.js`, `footer.html`.

>Protip: Make sure these are added to Git before you commit!

- You need to modify: `index.html`, `about.html`.
- Some general advice:
  - Add the footer controller to the newly created `stdComponents` Angular module.
  - Make sure to include the javascript for the Angular controller in the web pages the components will be a part of. DO NOT put the script tag to include this into `footer.html`.
  - Put the footer at the bottom of the pages. Please.
  - If you get confused, look at the respective files that navbar uses. You should be able to mirror this _very_ closely after those files.
  - We don't really care what the content of your footer is. It should definitely consist of a footer element.

>Protip: From w3schools... A footer element typically contains: authorship information, copyright information, contact information, sitemap, back to top links, related documents.


## Part #4: adding the GPA calculator, redux.
- Your goal is to add a page with a form that allows a student to add their courses (course name, number of credits, and letter grade) and displays their GPA. The GPA changes as courses are added or removed. As before, letter grades are A, B, C, D, and F only. 
- The controller for the GPA needs to be added to main.controller.js. Think of what needs to be in its scope. 
- Add the necessary view, include the navbar into it, and then add the GPA calculator. Add one feature at a time, make sure everything is working as it should. 
- As before, use TDD for all the helper functions (you may reuse the tests from the previous lab). Now they will all be located in public (client-side). No need to modify karma files since it's already testing client-side javascript. 
- Use different color for displaying the GPA, depending on whether it is below 2.0, between 2.0 and 3.0, and 3.0 and above. Use your own CSS or bootstrap. 
- Perform simple data validation (add the corresponding function to the controller) so that invalid entries (invalid grades or wrong number of credits) are not added to the model. An error message needs to be displayed to the user). 

##### When you're done with the lab, take a look at your test coverage report and make a note here about what pieces of code are covered well, what isn't, and why this is the case.


