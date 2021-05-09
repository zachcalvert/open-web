## About this project

Open web is an application designed to help nonprofits manage:

1. Enrollment programs
2. Fundraising channels
3. Event management
4. Donations


### Dev setup

1. Clone the repository and cd into the project directory.

2. Build the services  
`docker-compose -f docker-compose-dev.yml build`

3. Load the initial sample data  
`docker-compose -f docker-compose-dev.yml run --rm django python manage.py loaddata db.json`

4. Start the services  
`docker-compose -f docker-compose-dev.yml up`

The django admin is accessible at: `http://localhost:8000`  
The react admin is accessible at: `http://localhost:300`    

Log in with `admin`/`admin`
