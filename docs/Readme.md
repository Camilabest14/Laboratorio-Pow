# Documentación del Proyecto

## Estructura de Carpetas

```
Laboratorio-Pow/
│
├── index1cv.html
├── README.md
├── /docs
│   └── README.md
├── /assets
│   └── Img/
├── /shared
│   └── css/
├── /views
│   ├── /config/
│   │   ├── configuracion.html
│   │   └── config.css
│   └── /contact/
│       ├── Contacto1Cv.html
│       └── contact.css
```

## Justificación de la Estructura

- **/assets/Img/**: Contiene todas las imágenes usadas en el sitio, centralizando los recursos gráficos.
- **/shared/css/**: Incluye los estilos globales reutilizables en todas las vistas.
- **/views/config/** y **/views/contact/**: Cada vista tiene su propio HTML y CSS para facilitar el mantenimiento y la escalabilidad.
- **/docs/**: Carpeta dedicada a la documentación técnica y de usuario del proyecto.
- **index1cv.html**: Página principal del proyecto.

Esta estructura permite separar claramente los recursos globales de los específicos de cada vista, facilitando la colaboración y el crecimiento del proyecto.

---