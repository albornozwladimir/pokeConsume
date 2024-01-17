# Proyectos Pokemon

Este proyecto utiliza la API de Pokemon v2 para crear diferentes soluciones con distintas tecnologías. El proyecto tiene 3 ramas principales, cada una con un enfoque diferente:

- Branch **cdk**: Contiene un proyecto de AWS CDK construido con Python que permite crear las pilas correspondientes, plantilla de CloudFormation y despliegue de un sitio web que simula ser una **pokedex de Pokemon**. Esta rama demuestra el uso de AWS CDK como herramienta de infraestructura como código y el despliegue automatizado de una solución web. Código base para la publicación de post en dev.to
- Branch **python-api**: contiene una API asincrónica escrita en Python para obtener toda la información de pokemones, sus características y habilidades. Esta rama demuestra el uso de Python como lenguaje de backend y el manejo de peticiones concurrentes.
- Branch **js-vanilla**: sitio web estático que utiliza JavaScript vanilla para construir el HTML e ir obteniendo con axios la data desde la API de Pokemon. Esta rama demuestra el uso de JavaScript como lenguaje de frontend y el consumo de una API externa.

**Nota**: Es importante mencionar que este proyecto no tiene como objetivo ser una solución frontend completa, sino que ofrecer distintas posibilidades de trabajo relacionadas con la API pública de Pokemon. El frontend es totalmente mejorable y se aceptan sugerencias y aportes.

## Requisitos

Para ejecutar este proyecto se necesita:

- Python 3.8 o superior
- AWS CLI
- AWS Account

## Instalación y ejecución

Para instalar las dependencias del proyecto se debe ejecutar:

```bash
Uso
Para usar cada una de las ramas se debe seguir los siguientes pasos:

rama python: python3 app.py
rama js-vanilla: Acceder con navegador y visualizar archivo index.html
rama cdk: seguir las instrucciones en publicación dev.to/....
Contribución
Si quieres contribuir a este proyecto, puedes hacer un fork y enviar un pull request con tus cambios. Asegúrate de seguir las buenas prácticas de código y documentación.
