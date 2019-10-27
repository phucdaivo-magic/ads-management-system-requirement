echo "----build---"
npm run-script build
echo "----remove build runtime---"
rm -rf ./run_client/dist
echo "----copy build---"
cp -r dist ./run_client
echo "----remove build client---"
rm -rf dist

echo "----build image----"
docker-compose build

echo "----push image----"
docker push registry.taimh.xyz/chung-cu-mini:latest
