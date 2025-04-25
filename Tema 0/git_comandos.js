/* IMPORTANTE **** COMANDOS GIT:

*** USUARIO Y CORREO ELECTRONICO:
git config --global user.name "tuUsuario"
git config --global user.email tuemail@email.com
Ejemplo: git config --global user.name "carlamape"
Ejemplo: git config --global user.email carlamaape@gmail.com

--------------------------------------------------------------------

*** REPOSITORIO
git clone url <> Code HTTPS
Ejemplo: git clone https://github.com/carlamape/cursoJavaScript.git

git clone https://<username>:<AccessToken>@<domain>/<owner>/<reponame>.git
Ejemplo: git clone https://carlamape:tokencreado(copiarURLqueGeneraGitHub)@github.com/carlamape/cursoJavaScript.git

--------------------------------------------------------------------

***OTROS COMANDOS

AGREGAR LOS CAMBIOS QUE SE HICIERON:
    Guardar todos los cambios que hice en una carpeta/subcarpetas. 
    No hace el commit todavía, solo prepara los cambios para el commit.
git add . 

CREAR MENSAJE:
    Creas un mensaje nuevo para ver los cambios que se realizaron. 
    Tiene que ser claro y conciso y además como si fuera una orden.
git commit -m ""
Ejemplo: git commit -m "Añadir el archivo git_comandos.js en la carpeta Tema 0"

AÑADIR TODOS LOS CAMBIOS REALIZADOS EN EL PROYECTO
    Archivos nuevos, modificados, eliminados, etc.
    La diferencia entre git add . es que este último solo afecta a los archivos dentro 
    del directorio actual y sus subdirectorios. Mientras que git add -A afecta a todo el proyecto.
git add -A

AÑADIR ARCHIVOS MODIFICADOS/ELIMINADOS AL ÁREA DE PREPARACIÓN
    Añade automáticamente todos los archivos modificados y eliminados al área de preparación.
    Luego hace el commit con el mensaje que pongas. IMPORTANTE: no añade archivos nuevos creados.
    Si has modificado un archivo y borrado otro, Git lo guarda directamente sin tener que usar git add antes.
    Úsalo si solo quieres hacer el commit rápido, todo en un solo paso.
git commit -am "mensaje"

ENVIAR MIS COMMITS/CAMBIOS GUARDADOS AL REPOSITORIO REMOTO GITHUB
git push

    Si necesitas especificar la rama (origin es el nombre por defecto del repositorio remoto,
    y maines la rama principal, aunque a veces puede llamarse master):
git push origin main

AÑADIR ÚLTIMOS CAMBIOS DEL REPOSITORIO REMOTO (GITHUB) Y MEZCLALOS CON MI COPIA LOCAL
    Cuando alguien más ha hecho cambios y los ha subido o yo misma hice los cambios desde la web GITHUB
git pull


PASOS A SEGUIR PARA AÑADIR UN ARCHIVO NUEVO
git add nombreDelArchivo.ext

O, si quieres añador todos los cambios 
git add -A

Después de uno de estos dos pasos:
git commit -m "mensaje"
git push origin main
--------------------------------------------------------------------
Terminal > Nuevo terminal

*/