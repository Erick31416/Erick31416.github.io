```
Notas para aprovechar estos apuntes.
Cada vez que los retomes repasa y simplifica el destilado
y al ser estos unos apuntes a largo plazo , crea un pocillo.

la proxima vez puedes subir esto a git.

El objetivo es tener unos apuntes en github organizados por temas, con indices, destilados , pocillos....

Un destilado no puede tener mas de 12 puntos.

<elemento> | <elementos>
[opcional] (ouno|uotro)
git diff (--catched |--staged ) [color] [<files>]
▼ pierde importancia
▲ gana importancia
🌓︎ contrastar, repasar , comprobar, poner en duda
```
 
# CONTENEDORES 

**Indice:**
1. [Comienzo Rapido](#id01)
2. [Cabio de manual de docker](#id02)

## Cabio de manual de docker<a name='id02'></a>

He visto este otro curso de docker y me parece mejor que el de Atareao.
... veremos ...
https://ualmtorres.github.io/SeminarioDockerPresentacion/

2.7.3. Abrir un terminal en un contenedor

para usar el primer contenedor que pone en el ejemplo tengo que dejar libres los puertos:  
https://www.cyberciti.biz/faq/star-stop-restart-apache2-webserver/  


```bash
## Start command ##
#systemctl start apache2.service
## Stop command ##
systemctl stop apache2.service
systemctl stop mysql.service
## Restart command ##
#systemctl restart apache2.service
```

## Comienzo Rapido<a name='id01'></a>
Te recuerdo que puedes consultar que hacen los comandos en :
https://explainshell.com/

Estoy siguiendo los pasos de : https://atareao.es/tutorial/docker/


Instalación:
```bash
$ curl -fsSL https://get.docker.com -o get-docker.sh
$ sudo sh get-docker.sh
```

Permisos:
```bash
sudo usermod -aG docker $USER
```

```bash
MIGRUPO=$(id -gn)
newgrp docker
newgrp $MIGRUPO
```

En este caso me voy a saltar la instalacion del contenedor helloworld.  
paso a -> https://atareao.es/tutorial/docker/gestionar-imagenes-con-docker/

Aqui recuerda que las imagenes estan subidas a dokerhub.

ejecuta :
```bash
docker image ls
```
Para ver las imagenes que ya te has bajado.
(si es que ya tenias instalado docker)

Me bajo la ultima version de ubuntu:
```bash
docker pull ubuntu
```
Puedes observar que esta imagen en oficial porque no viene el autor.
Una imagen de un usuario seria:
```bash
docker pull atareao/baseimage	
```

paso a -> https://atareao.es/tutorial/docker/gestionar-contenedores-con-docker/

retomo el texto el 2021-11-06-12h32m

En ve de ubuntu voy a instalar otro contenedor:
`docker run -d --name test01 -p 81:80 nginx:alpine`
-p 81:80 significa que las peticiones que vallan al puerto 81 de tu equipo se redirigen al 80 de docker.
poniendo en el navegador:
http://localhost:81/ ya verias la pagina de ngix
_nota: NO me ha funcionado a la primera, pero me he puesto a trastear con el servidor de mi equipo y a rato a funcionado_
con trasteando me refiero a :
```bash
  353  sudo systemctl start apache2
  354  sudo systemctl stop apache2
  355  sudo systemctl status apache2
  356  sudo systemctl stop 
  357  sudo apachectl stop 
  358  sudo systemctl start apache2
```

Me he saltado toda la parte de listar, nombrar, parar, borrar ... contededores.

Mas tarde , pararare, borrare contenedores y lo mismo hasta desinstalo docker para acabar.  
de momento, nos mentemos en el contenedor con :
`docker run -d --name test01 nginx:alpine`


## Comienzo rapido.


## **Desitilado**

1. `docker run hello-world` -> baja una imagen y ejecuta un contenedor.
1. `docker run -it ubuntu bash` -> se mete dentro de un conteidor y ejecuta el comando bash.
1. `docker image|container  --help`
1. ▼ dockerhub -> recuerda que existe 
1. ▲ `docker image ls` -> te muestra todas las imágenes que tienes descargadas
1. `docker image pull ubuntu` -> te permite descargar una imagen de un repositorio.
1. `docker rmi <nombre_imagen>` para **borrar** una imagen
1. Las imágenes tipo : `doker pull ubuntu` son oficiales y Las imágenes tipo: `docker pull bliztone/baseimage` son imagenes no oficiales.
1. `docker stop 1e0e92b8255e` para parar el contenedor
1. tambien tienes docker kill , docker restart , docker pause docker unpause
1. `docker cp archivo.txt midocker:. ` esto copia el archivo archivo.txt al docker llamado midocker, a la ruta  /
1. `docker rm test01` para borrar el contenedor test01 🌓︎->primero hay que pararlo.
- `docker cp midocker:archivo2.txt .` esto copia el archivo del docker a fuera del docker
- `docker ps` 
  - ▲▲`docker ps -a` -> para ver todos los contenedores parados
- 🌓︎ `docker run -d --name <nombre_nuevo>` ejemplo blitznote/baseimage -> para poner nombre a un contenedor.
- `docker -d run blitznote/baseimage sleep 100`
  - -d hace que el contenedor se ejecute en segundo plano asi puedes hacer cosas, sin -d de bloquea el terminal.
  - sleep 100 es el comando que ejecutara el contenedor.
- docker commit test01 atareao/nginx:autocertificado

### Puntero a - https://www.atareao.es/tutorial/docker/ejecutar-contenedores-docker/

# Conceptos basicos

## Imagen vs contenedores:
- Un contenedor es una instancia de una imagen.
### Instalando :
Existen dos versiones de dokker yo estoy viendo un manual de comunity.

Como todos las aplicaciones hay tres canales de actualizacion: **Stable** . Test. Nightly.

### probando:
ejecutando : ' docker run hello-world' 
obtendras:
```
		Hello from Docker!
		This message shows that your installation appears to be working correctly.

		To generate this message, Docker took the following steps:
		1. The Docker client contacted the Docker daemon.
		2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
			(amd64)
		3. The Docker daemon created a new container from that image which runs the
			executable that produces the output you are currently reading.
		4. The Docker daemon streamed that output to the Docker client, which sent it
			to your terminal.

		To try something more ambitious, you can run an Ubuntu container with:
		$ docker run -it ubuntu bash

		Share images, automate workflows, and more with a free Docker ID:
		https://hub.docker.com/

		For more examples and ideas, visit:
		https://docs.docker.com/get-started/
```

para meterte dentro de un contenedor :

docker run -it ubuntu bash
	
## GESTIONAR IMAGENES DOCKER.

		docker hub.[existe]
		# docker image --help #->ayuda
		build -> costruir tus propias imágenes 
		history -> historya de una imagen en cocreto.
		inspect -> detalles y entrañas de una imagen.
		# docker image ls -> te muestra todas las imágenes que tienes descargadas
		prune -> borra las imagnes que no estes utilizando.
		# docker image pull ubunto -> te permite descargar una imagen de un repositorio.
		push permite subir una imagen a un repositorio.
		# docker rmi <nombre de la imagen> pra borrar una imagen
		-----
		# si te descargas una imagen que sea como : doker pull ubuntu, es oficial
		# si te cescargas una imagen como docker pull bliztone/baseimage son imagenes que han creado otras personas.
	Gestionado contenedores con docker.
		# docker container --help
		--
		[lo mismo es :] docker container run blitznote/baseimage
		#[lo mismo es :] docker run blitznote/baseimage
		---
		[lo mismo es :] docker ps 
		[lo mismo es :] docker container ls.
		#docker ps -a -> para ver todos los contenedores parados
		----
		#docker run -d --name ejemplo blitznote/baseimage -> para poner nombre a un contenedor.
		#docker -d run blitznote/baseimage sleep 100
		#con -d puedes hacer cosas, sin -d de bloquea el terminal.
		#sleep 100 es el comando que ejecutara el contenedor.
		#docker stop 1e0e92b8255e para parar el contenedor
		#tambien tienes docker kill , docker restart , docker pause docker unpause
		---
		docker cp archivo.txt midocker:. esto copia el archivo archivo.txt al docker llamado midocker, a la ruta  /
		docker cp midocker:archivo2.txt . esto copia el archivo del docker a fuera del docker

		ahora toca esto :https://www.atareao.es/tutorial/docker/ejecutar-contenedores-docker/ #la-solución-no-deseable

## EJECUTAR CONTENEDORES DOCKER

Atareao, aconseja utilizar Bash-it . {https://www.atareao.es/software/utilidades/bash-it/} [https://www.atareao.es/software/utilidades/bash-it/] pero para no perderme en las profundidades, de los hipertextos, voy a pasar mucho del tema de momento.
Atareao aconseja hacer las pruebas con un centenedor de Nginx sobre Alpine, 
Alpine es una distribucion linux enfocada a la simplicidad, eficiendia de recursos y seguridad.
Atareao se vuelve a liar y me manda estos dos links que pueden estar muy intereseantes:
https://www.atareao.es/tutorial/raspberry-pi-primeros-pasos/
https://www.atareao.es/tutorial/raspberry-pi-primeros-pasos/infraestructura-lemp-con-nginx-en-raspberry/
- docker images | nginx -> veo las caracteristicas de una imagen concreta.
- docker exec -it test01 sh
- ps -ef
- docker run -d --name test01 -p 81:80 nginx:alpine
- docker run -d --name test01 -p 80:80 -p 443:443 nginx:alpine
- exponer el puerto 443 del contenedor permite acceder mediante https:
- certificados autofirmados 
Aqui hay mucha tela que cortar, me he quedado bloqueado con un problema en los certificados.
# Buscar: certificados https, configuracion de servidor engins arquitectura lemp... 

