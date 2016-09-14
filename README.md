# git-dashboard
Simple UI for displaying organization's projects

Built with Angular.JS, Angular Material and GitHub APIs

See demo: http://www.okonyk.com

In order to serve the app:

* Install Node.js from https://nodejs.org
* Install http-server running command:  ``` npm install http-server -g ``` https://www.npmjs.com/package/http-server
* Make sure you are in project's root directory 
* Start the server ``` http-server -p 3000 ``` (or specify any other port)



Main functionality:

* Loads projects for specific organization
* 'Order By' dropdown gives convenient way to sort project based on following criteria:
  - Forks
  - Stars
  - Watchers
  - Open Issues
  - Size
  - Creation Date
  - Last Push
* 'Search box' provides filtering and name suggestion base on first characters that are typed in (3 char min) 
* 'Browse Commits' provides the list of recent commits (last hundred)
* There are number of links that brings you to specific page of github.com:
  - project name
  - commit message
  - committer nick and image
* 'SETTINGS' tab provides the way to change organization name: 'Apple', 'Google'. etc. (If name not valid error message will appear)
