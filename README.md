# Clase 06 - JavaScript Parte 1

## Proyecto: Portafolio Personal

En esta etapa del proyecto comenzarás a implementar funcionalidades interactivas utilizando JavaScript. Vas a trabajar sobre el archivo `contacto.html` y deberás crear un archivo JavaScript externo para integrar las nuevas funciones.  
El objetivo es mejorar la experiencia del usuario haciendo que el sitio responda a sus acciones de manera dinámica.

---

## Objetivos

- Aplicar los conocimientos de JavaScript vistos en clase.
- Modificar elementos del DOM desde un archivo JS externo.
- Capturar eventos del usuario (entrada de texto y envío de formularios).
- Mostrar mensajes personalizados.

---

## Instrucciones generales

1. Crear un archivo nuevo llamado `formulario.js` dentro del mismo directorio que tu archivo `contacto.html`.
2. Enlazar correctamente el archivo JavaScript externo al final de `contacto.html`, antes de la etiqueta de cierre `</body>`.

---

## Tareas a realizar

### 1. Personalizar el saludo al escribir

Seleccionar el campo de texto correspondiente al nombre completo y detectar cuando el usuario está escribiendo.  
Mostrar en un párrafo, en tiempo real, un mensaje que diga:

> “Hola, [nombre]”

Este mensaje debe aparecer justo debajo del formulario.  
Si el campo está vacío, el mensaje no debe mostrarse.

---

### 2. Mostrar mensaje al enviar el formulario

Cuando el usuario haga clic en el botón "Enviar", se debe evitar que la página se recargue.  
En lugar de eso, mostrar una alerta agradeciendo el envío e incluyendo el nombre escrito. Ejemplo:

> “Gracias por tu mensaje, Martín”

---

## Recomendaciones

- Usar `getElementById` o `querySelector` para seleccionar los elementos del formulario.
- Asociar los eventos correctamente utilizando `addEventListener`.
- No modificar la estructura ni el estilo del HTML original.
- Asegurarse de que el archivo `.js` se cargue correctamente y no tenga errores en consola.
