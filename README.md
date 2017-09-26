# Cars Comments
   
### Requirements ###

 * Node LTS version(6.11.0) 
 * MongoDB 3.4.4
 
### I have used Express app Generator To start Coding With Express faster.
 
### How do I get set up? ###
    * Clone Repo.
    * Run `npm install` 
    * Run `npm start` server will start on port 3000. (note if u want to run the app as a deamon then u can npm install PM2 and start the app)
    * A database with name carsComments will be created in mongoDb.
    
### Restrictions
    * Duplicate cars of same brand can't be added ,the car name and brand is being checked for uniqness.


### Language/Platform Used ### 
      *  Node.js
      *  Express.js
      *  MongoDB

         
 ### EndPoints
  ### API's
      *   localhost:3000/cars 
          POST request 

          payload type json 

          example : {
                      "carName":"verna 1.0",
                      "carBrand":"Hyundai",
                      "carDescription":"petrol car"
                      
                    }    
      
      *   localhost:3000/cars
          Get Request
      
      *   localhost:3000/users
          POST request

          example : {
                      "name":"user",
                      "userName":"user@123",
                      "email":"user123@gmail.com"
                    }
      *   localhost:3000/users
          GET request

      *   localhost:3000/comments
          POST Request

          example : {
                      "carId":"59c9573f4cfece3407a8dca7",
                      "userId":"59c96a90bf19251fd79a9ec4",
                      "comment":"this is a car which is good for nothing"
                    }

      *   localhost:3000/comments/{{userId}}
          Get request
          Pass the _id of a user from users collection at {{userId}} 

      *   localhost:3000/comments/{{carId}}
          Get request    
          Pass the _id of a car from cars collection at {{carId}} 
