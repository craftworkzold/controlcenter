# Hack The Future 2015

*Het is 2277, 3 jaar na de fallout en jullie verlaten de vault om voorraad te verzamelen. Anderen liggen
echter op de loer om jullie vault aan te vallen. Jullie ontwikkelen ControlCenter, een webapplicatie die het mogelijk maakt om vanop 
afstand de vault in de gaten te houden en te beschermen.*

![HackTheSFuture](HackTheFuture.png)

Item | Omschrijving
------------- | -------------
ControlCenter  | Webapplicatie die jullie laten draaien op IBM Bluemix.
Bluemix | Bluemix is een [Platform as a service](https://en.wikipedia.org/wiki/Platform_as_a_service) oplossing van IBM, gebaseerd op [Cloud Foundry](https://www.cloudfoundry.org/)
IOT Foundation | De [IoT Foundation](https://www.ng.bluemix.net/docs/#services/IoT/index.html) fungeert als message broker.
Android App | Jullie ontwerpen een Android applicatie die de berichten via MQTT leest en instructies doorstuurt naar Ollie via de [Android SDK for Sphero](https://github.com/orbotix/Sphero-Android-SDK)
Ollie | [Ollie](http://www.sphero.com/ollie) is de beschermer van jullie vault. 

## 1. Start de applicatie
Om van start te kunnen gaan, hebben we 2 kleine applicaties gemaakt. Eén op basis van [Spring Boot](http://projects.spring.io/spring-boot) en één op basis van [ExpressJs](http://expressjs.com). Kies één van beiden en start deze lokaal op. 

### Gebruik de Java applicatie:
1. Installeer [Apache Maven](https://maven.apache.org/install.html)
2. Open terminal en voer volgende commando's uit:

   ```
   cd controlcenter-java
   mvn spring-boot:run
   ```

3. Ga naar http://localhost:8080

### Gebruik de NodeJS applicatie:
1. Installeer [NodeJS](https://nodejs.org/en/download/)
2. Open terminal en voer volgende commando's uit:

   ```
   cd controlcenter-nodejs
   npm install
   npm start
   ```
   
3. Ga naar http://localhost:3000


## Challenges

Challenge | Omschrijving
------------- | -------------
