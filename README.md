# Project3
Full stack anime tracking app using React for the front end


User Story
  MVP
  - user lands on a homepage where they can log in or register 
  - user registers with username, password and email
  - once account is created it will "redirect" to a page where the user can add a series the user is watching to get started
  - once a series is selected the user is shown the series basic information about it
  - they can then save it to their watch list 
  - after the user added a series it will render their anime watch list with the series photo, name
  - the user will also see a header which has links for my anime, all anime, and my account and has the username shown on top
  - the user can then click on a series and it will render the photo, name, description and episode listing
  - there will be buttons for removing the series from list
  - the user can then check or uncheck episodes they have watched.
  
  
Routes

POST /user -- creates a new user with
  request body should include:
      username:
      password:
      email:

GET /user/:id -- gets user's information

DELETE /user/:id -- deletes the user's account

PUT /user/:id -- edits information on the user's account
  request body should include:
      username:
      password:
      email:




POST /anime -- adds a series to users anime list
  request body should include:
       Note:
     

GET /anime -- gets the user's anime list

GET /anime/:id -- gets the data for a specfic series from the user's anime list

PUT /anime/:id -- updates 
  request body should include:
      Note:
    
DELETE /anime/:id -- removes the anime from anime list




Models
const UserSchema = new mongoose.Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  email: {type: String, required: true},
  anime: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Anime'
  }]
  
});

const AnimeSchema = new mongoose.Schema({
  name: type: String,
  photo: type: String,
  description: type: String,
  episodes: [{
    type: String
  }]
  notes: String
});

