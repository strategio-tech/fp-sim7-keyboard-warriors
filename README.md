# Keyboard Warriors

<div id="readme-top"></div>

![alt text](/src/assets/Yoga-Logo.png)
## Table of Contents

  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#tools">Tools</a></li>
        <li><a href="#architecture-diagram">Architecture Diagram</a></li>
      </ul>
    </li>
    <li><a href="#local-installation">Getting Started</a></li>
    <li><a href="#backend-repo">Back-End Repository</a></li> 
    <li><a href="#web-deployment">Web Deployment</a></li> 
    <li><a href="#end-points">End Points</a></li> 
    <li><a href="#get-request">Get Requests</a></li> 
    <li><a href="#post-request">Post Requests</a></li>
    <li><a href="#upcoming-features">Upcoming Features</a></li> 
	<li><a href="#authors">Authors</a></li>
  </ol>

## Serenity Yoga Studio
<div id="about-the-project" >
 <p> Serenity Yoga Studio is a web application that provides users with a platform to upload, share, and discover yoga videos. It is built using React on the front end and Amazon DynamoDB as the database. Users can create their own personalized playlists, rate and comment on videos, and connect with other members of the community. The app is designed to cater to yoga enthusiasts of all levels, from beginners to advanced practitioners. </p>
</div>

## Features:
 - User authentication and authorization
 - Video upload and management
 - Video browsing and searching by level, duration, or style
 - Personalized playlist creation
 - Rating and commenting on videos
 - Community engagement and connection

 <p align="right">(<a href="#readme-top">back to top</a>)</p>

 <div id="tools">

### Tools

- Plan: 
    - Figma, Slack, Notion, Google docs
- Code: 
    - GitHub, VSCode(React.js w/ Bootstrap, Python w/ Flask), Docker Hub, AWS Elastic Trasncoder, AWS Lambda, AWS DynamoDB, AWS S3 Bucket
- Build: 
    - NPM, Docker 
- Test: 
    - Jest, Pytest
- Release: 
    - Github Workflows, 
- Deploy and Monitor: 
    - Docker, AWS EC2


<p align="right">(<a href="#readme-top">back to top</a>)</p>

</div>

 <div id="architecture-diagram">

## Architecture Diagram

### Sign up architecture
![alt text](/src/assets/signup.png)

### Log in architecture
![alt text](/src/assets/login.png)

### Upload video architecture
![alt text](/src/assets/upload.png)

### Watch video architecture
![alt text](/src/assets/watch.png)

### Get video architecture
![alt text](/src/assets/getVideo.png)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

</div>

<div id="local-installation">

## Getting Started

To get started with the app, you will need to have Node.js, Python, Git...... installed on your machine. You will also need to create an AWS S3 account and set up your credentials.

Clone the repository to your local machine.

Install the dependencies by running the following command in both the client and server directories:

```shell
npm install
```
Create a .env file in the server directory and set the following environment variables: 

```shell
PORT=<your port number>
AWS_REGION=<your AWS region>
AWS_ACCESS_KEY_ID=<your AWS access key ID>
AWS_SECRET_ACCESS_KEY=<your AWS secret access key>
DYNAMODB_TABLE_NAME=<your DynamoDB table name>
```

Start the server by running the following command in the server directory:
```shell
npm start
```

Start the client by running the following command in the client directory:

```shell
npm start
```
Open your web browser and navigate to the link on your terminal to access the app.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
</div>

<div id="backend-repo">

## Back-End Repository
See our back-end repo [here](https://github.com/UmiKami/serenitystream-backend).

<p align="right">(<a href="#readme-top">back to top</a>)</p>
</div>

<div id="web-deployment">

## Web Deployment

### Front-End Pipeline
![Front-End Pipeline](/src/assets/Front-End-Pipeline.png)

### Back-End Pipeline

![Back-End Pipeline](/src/assets/Back-End-Pipeline.png)

To set up your own CI/CD pipeline, you will need to follow these general steps:

....


<p align="right">(<a href="#readme-top">back to top</a>)</p>
</div>


<div id="end-points">

## End Points 
...

<p align="right">(<a href="#readme-top">back to top</a>)</p>
</div>

<div id="get-request">

## Get Requests 

...
<p align="right">(<a href="#readme-top">back to top</a>)</p>
</div>

<div id="post-request">

## Post Requests  

...
<p align="right">(<a href="#readme-top">back to top</a>)</p>
</div>

<div id="upcoming features" >

## Upcoming Features:
 - Video upload and management
 - Video browsing and searching by level, duration, or style
 - Personalized playlist creation
 - Rating and commenting on videos
 - Community engagement and connection

 <p align="right">(<a href="#readme-top">back to top</a>)</p>
</div>

<div id="authors">

## Authors

- [Ernesto Gonzalez](https://github.com/UmiKami)
- [Luis Carmona](https://github.com/LuECar)
- [Denny Wong](https://github.com/den-ny)
- [Estephany Sanchez Criado](https://github.com/fany19)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
</div>

<div id="credits">


