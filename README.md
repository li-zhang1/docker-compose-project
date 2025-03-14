# Docker Compose Project

## Deploy a Three-Tier Application Architecture with AWS Using Docker Machine

### Prerequisites
- Ensure Docker and Docker Machine are installed.

**Install Docker Machine (macOS):**
```sh
brew install docker-machine
```

### Set Up Docker Host on Amazon EC2

Create a new Docker host on **Amazon EC2**:
```sh
docker-machine create --driver amazonec2 docker-aws
docker-machine ssh docker-aws
docker-machine ls
```

Find the Docker Machine IP address:
```sh
docker-machine ip docker-aws
```

### Configure Environment Variables

Connect your local Docker client to the Docker engine on EC2:
```sh
eval $(docker-machine env docker-aws)
```

### Deploy the Project

Start the containers with Docker Compose in production mode:
```sh
docker-compose -f docker-compose.prod.yaml up -d --build
```

Check running containers:
```sh
docker-compose ps
```

View logs:
```sh
docker-compose logs
```

Stop and remove containers:
```sh
docker-compose -f docker-compose.prod.yaml down
```

## Troubleshooting

1. **Access Issues:** Ensure inbound rules in the security group allow traffic on:
   - **Port 80**: For the frontend
   - **Port 3001**: For the backend

2. **Verify Docker Host Connection:** Ensure environment variables are set correctly:
```sh
eval $(docker-machine env docker-aws)
```

3. **Inspect Docker Machine:**
```sh
docker-machine ssh docker-aws
```

4. **Check Logs for Errors:**
```sh
docker-compose logs
```

