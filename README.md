How to run project:
-Make sure you are in the project file diretory. 
Ensure you have all the depndencies installed
    -Download node.js if you do not already have it: https://nodejs.org/en/download
    - Install nodemon: npm install nodemon
    - Install express: npm install express
    - Install bodyParser = npm install body-parser
    - Install cors = npm install cors
    - Initialize project = npm init 
        follow command prompts, output in package.json should look similar:
        {
          "dependencies": {
            "body-parser": "^1.20.2",
            "cors": "^2.8.5",
            "express": "^4.18.3",
            "nodemon": "^3.1.0"
          },
          "scripts": {
            "start": "node server.js"
          },
          "name": "software-test-main",
          "description": "",
          "version": "1.0.0",
          "main": "script.js",
          "devDependencies": {},
          "author": "Anshika Khare",
          "license": "ISC"
        }

1.Start server.js file (running on port 3000)
    -nodemon server.js
2.Once server is running, access index.html by copying file path and directly pasting into web browser or use the command line to open the file using the command 'open insert-file-path' 
    -As long as the server is running fine, the data should populate on the webpage.   
