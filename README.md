# Faume

# Dependencies

- Foreman
- Yarn

# Versions

- Uses Ruby 2.2.3
- Uses Rails 5.0.1
- Uses PostgreSQL as a database

# Initialization

Clone the project using:

    git@github.com:team-divers/faume.git

Install dependencies using:

    bundle && yarn
    cd client/
    yarn

Initialize database using:

    rails db:setup

Run migrations using:

    rails db:migrate

# Running

Run the project using:

    foreman start -f Procfile.dev 
