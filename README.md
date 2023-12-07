# DOCKER-COMPOSED OF A TODO APPLICATION
It is a package of todo application. which works on adding todo, check todo and delete todo. 

### Components of todo app
 #### React App(Frontend)
  - With Dockerfile and components file.
  - It will run on http://localhost:3000

 #### Express App(Backend)
  - With Dockerfile and components file.
  - It will run on http://localhost:5000

### How to Run:

- Install Docker on your system https://docs.docker.com/engine/install/

- Go to VS-code and clone repository 'git clone https://github.com/ankitmishraindia/todo-fullStack-w3dev .

- Change your docker-compose.yml file with mongo cloud cluster(with useremail and password)

- Run command 'docker-compose up --build'

- Go to http://localhost:3000 to see your todo app.