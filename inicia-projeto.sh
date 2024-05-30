echo " >>> subindo docker ...  <<< "
docker compose up -d

sleep 2

echo " >>> inicializando a aplicação  <<< "
npm run start:dev