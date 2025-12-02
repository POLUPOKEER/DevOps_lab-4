## Так как нет compose файл не предусмотрен, то
для сборки и запуска последовательно используй эти команды:
 - docker build -f Dockerfile.system -t system .
 - docker build -f Dockerfile.run -t myapp .
 - docker build -f Dockerfile.run -t myapp .
 - docker build -f Dockerfile.run -t myapp .
