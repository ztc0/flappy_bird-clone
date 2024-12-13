# Flappy Bird Clone

Este proyecto es una clonación del popular juego Flappy Bird utilizando Phaser 3. El objetivo del juego es controlar un pájaro que debe volar evitando obstáculos.

## Características

- **Juego en 2D**: Utiliza Phaser 3 para la creación de gráficos y físicas.
- **Animaciones**: Animaciones suaves para el pájaro y los obstáculos.
- **Sonidos**: Efectos de sonido para saltos y colisiones.
- **Interfaz de usuario**: Mensajes de inicio y fin de juego.

## Instalación

1. Clona el repositorio:
  ```sh
  git clone https://github.com/tu_usuario/flappy_bird-clone.git
  cd flappy_bird-clone
  ```

2. Instala las dependencias:
  ```sh
  npm install
  ```

## Uso

- Para iniciar el juego en modo desarrollo:
  ```sh
  npm run dev
  ```

- Para construir el proyecto:
  ```sh
  npm run build
  ```

- Para previsualizar la construcción:
  ```sh
  npm run preview
  ```

- Para formatear el código:
  ```sh
  npm run format
  ```

- Para ejecutar el linter:
  ```sh
  npm run lint
  ```

## Estructura del Proyecto

- **src/**: Contiene el código fuente del juego.
  - **assets/**: Contiene los recursos del juego como imágenes y sonidos.
  - **entity/**: Contiene las clases relacionadas con las entidades del juego como el jugador.
  - **objects/**: Contiene las clases relacionadas con los objetos del juego como los obstáculos y el fondo.
  - **scenes/**: Contiene las escenas del juego como la sala de espera y la escena de juego.
  - **main.js**: Archivo principal que inicializa el juego.

## Dependencias

- **Phaser**: Motor de juegos 2D.
- **Vite**: Herramienta de construcción rápida.
- **Prettier**: Formateador de código.
- **Standard**: Linter de JavaScript.

## Autor

- **Oscar Arango Barrios**

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.