# Backend ülesande lahendus (student API)
Autor: Marten Mathias Jaani

Siin on minu lahendus **API Test Task** ülesandele, allpool on instruktsioonid käivitamiseks nii lokaalselt kui ka Docker konteineri kaudu

Lahendus kasutab Express.js serverit, endpointid on saadaval http://localhost:5000

### Instruktsioonid käivitamiseks lokaalselt 
(vaja on node.js ja yarn/npm (sel juhul käskudes kasutada ```yarn``` asemel ```npm```)

1. Paki kaust lahti
2. Käivita backend
```cmd
yarn install
yarn start
```
3. Jooksuta testid uues aknas

Windows cmd
```cmd
setx API_URL "http://localhost:5000"
yarn test
```
Linux
```cmd
API_URL="http://localhost:5000" yarn test
```

### Instruktsioonid käivitamiseks Dockeri konteineriga 
(vaja on Docker Engine)

1. Tõmba image
```cmd
docker pull martenjaani/student-api:latest
```
2. Käivita konteiner
```cmd
docker run -p 5000:5000 --name student-api-container martenjaani/student-api:latest
```
See käivitab backendi konteineris, endpointid on saadavad ka lokaalselt http://localhost:5000

3. Jooksuta testid uues aknas
```cmd
docker exec -it student-api-container yarn run test
```

