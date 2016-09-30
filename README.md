## __beerleague.me__
#### A phonegap android/iOS application
### Description
Currently, coordinating a kickball team for a local league is a practice in disorganization. It involves word-of-mouth recruiting and a combination of SMS and email communication. Our platform streamlines this process and consolidates the experience of recreational, ‘beer-league’ sports.

### Collaborators:
 - [Alex Nye](https://github.com/alnye655321)
 - [Sam Goldsmith](https://github.com/girlsam)
 - [Tyler Maier](https://github.com/tyguy310)
 - [Allen Fordham](http://github.com/Allen-37F)
 - [Nathan Dennis](http://github.com/nathanejbrown)

### Technology:
- AngularJS
- Phonegap
- [Mobile Angular UI](http://mobileangularui.com/)
- Node.js RESTful API
  - Access the [Repo Here](https://github.com/tyguy310/sports-league-manager)

### Build Philosophy
We tackled the build for this application with a service-oriented approach. The backend is a RESTful API service and the front-end is an MVC Javascript application using AngularJS (Mobile Angular UI). The client and server have separate repos and communicate only through API calls and cURL requests.  

#### To run this application locally:
  1. Fork and clone this repository
  1. Run `bower i` in the main file directory
  1. Run `gulp build`
  1. To run the server after the build, run `gulp`
  1. Once the server is running, visit http://0.0.0.0:8000/ in your browser

Built for Galvanize Web Development Immersive (g30 cohort) Unit 2 Project

README last updated: September 30, 2016
