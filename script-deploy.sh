echo "----pull image----"
docker pull registry.taimh.xyz/chung-cu-mini:latest

echo "----deploy----"
docker-compose up -d
