# Ip-APi

To start the application after cloning the directory

> cd ip-domain-api

Run the following command to start the docker swarm

> docker swarm init

> docker network create -d overlay app-network

> docker stack deploy -c docker-compose.yml ip-api

Visit url http://localhost to view the interface for the ip api request form. Currently no data is displayed on the screen, inspecting the network request will display the post request for the api query.
