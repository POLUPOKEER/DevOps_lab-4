## Так как compose файл не предусмотрен
для сборки и запуска последовательно используй эти команды:
 - docker build -f Dockerfile.system -t system .
 - docker build -f Dockerfile.build -t build . 
 - docker build -f Dockerfile.run -t myapp .
 - docker run -p 8080:8080 myapp 
