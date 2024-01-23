FROM openjdk:19-oracle
VOLUME /tmp
COPY target/*.jar ap.jar
ENTRYPOINT ["java","-jar","/ap.jar"]