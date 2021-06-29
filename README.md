# spark-backend
This repository contains the backend for SPARK. Our frontend repository is [spark](https://github.com/qreoct/spark)

## Done so far
- [X] Setup API endpoints for fetching questions and pictures (Milestone 1)
- [X] Core feature: Online mode (Milestone 2)

## Things to do
- [ ] Sync the pictures for both users in online mode
- [ ] Unit test for questions and pictures endpoint
- [ ] Integrated testing
- [ ] Refactor code to follow socket.io recommendations

# Getting Started
Create an .env file with your Unsplash API Access Key, MongoDB URI and PORT

# Deployment
We use heroku. Push using
`git push heroku branch_name:main`

Remember to set your config vars in heroku!
