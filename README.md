### Open Web

To get started

1. Clone the repository and cd into the project directory.

2. Build the services
`docker-compose -f docker-compose-dev.yml build`

3. Load the initial sample data
`docker-compose -f docker-compose-dev.yml run --rm django python manage.py loaddata db.json`

4. Start the services
`docker-compose -f docker-compose-dev.yml up`

The django admin is accessible at: `http://localhost:8000`
The react admin is accessible at: `http://localhost:300`

You can log into each with `admin`/`admin`
