##  Friend Finder

  
![enter image description here](https://github.com/n8benzor/Friend-Finder/blob/master/images/main.png?raw=true)
  

###  Development

 

- **Developed for:** University of Arizona Coding Bootcamp

  
- **Developed by:** Nathan Benzor

  

- **Developed using:** Node.js, Express.js, Javascript, jQuery, Bootstrap, Deployed on Heroku


  


- **Herkou Live Link:** [Friend | Finder](https://polar-depths-10639.herokuapp.com/home)

   


***

 
###  What does this app do?

  
Friend Finder is a application that lets a user find a friendly match based on the results from an online survey. All that is required by the user is their name and a photo of themself, which when the survey is completed the user will also be added to the friends api.

***

  

###  Functionality of the app


This application relies on several technologies. The Express.js framework is used to handle the backend, or server of this application.
![enter image description here](https://github.com/n8benzor/Friend-Finder/blob/master/images/serverjs.png?raw=true)

Express is also used to build our routes within the application. The routes serve two main purposes; getting data and posting data. 
![enter image description here](https://github.com/n8benzor/Friend-Finder/blob/master/images/routes.png?raw=true)

The friends.js file stores the api data that the application uses to find the perfect match for the user. Upon submission of the users survey, their information will be added to the api.
![enter image description here](https://github.com/n8benzor/Friend-Finder/blob/master/images/api.png?raw=true)

  Some Javascript and jQuery is used to perform the math to find the perfect match for the user.
  ![javascript math](https://github.com/n8benzor/Friend-Finder/blob/master/images/jsmath.png?raw=true)

***

###  How to use this app

Visit the Heroku link above to visit the Friend Finder website. Click on the *'Take the Survey'* button to be take the the survey.html page. Fill out the name and image link input fields.
![enter image description here](https://github.com/n8benzor/Friend-Finder/blob/master/images/survey1.png?raw=true)

Continue on the the survey questions.
![enter image description here](https://github.com/n8benzor/Friend-Finder/blob/master/images/questions.png?raw=true)

 All questions must be answered!
 ![enter image description here](https://github.com/n8benzor/Friend-Finder/blob/master/images/alert.png?raw=true)

Click on the *'Submit Your Survey* button to get your results for your best match.
![enter image description here](https://github.com/n8benzor/Friend-Finder/blob/master/images/submit.png?raw=true)

Possible result:
![enter image description here](https://github.com/n8benzor/Friend-Finder/blob/master/images/match.png?raw=true)
***