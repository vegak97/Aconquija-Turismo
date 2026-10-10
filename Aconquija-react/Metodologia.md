# Metodología de migración — Aconquija React

## 1. Objetivo

Migrar el sitio turístico de Aconquija desde su implementación actual en HTML, CSS y JavaScript a React, de forma ordenada, verificable y por etapas. La meta es conservar el diseño, los contenidos, las imágenes, los enlaces y las interacciones existentes, salvo que el usuario autorice expresamente cambios concretos.

Este documento funciona como lista de trabajo y referencia común para no olvidar tareas durante la migración. No significa que todas las etapas estén aprobadas para ejecutarse automáticamente: antes de modificar archivos se deben respetar las reglas de `agents.md` y registrar los cambios en `Registro.md`.

## 2. Reglas obligatorias de trabajo

1. **Pedir permiso antes de modificar.** Antes de cada etapa, explicar qué se hará, qué archivos se crearán o modificarán y cuál es el resultado esperado.
2. **Respetar el alcance autorizado.** Una petición directa autoriza solo el cambio pedido y los pasos estrictamente necesarios para completarlo.
3. **Consultar ante imprevistos.** Si aparece una necesidad de modificar archivos, diseño, contenido, dependencias o comportamiento que no estaba prevista o autorizada, detenerse, explicar la necesidad y esperar permiso.
4. **No tocar el sitio original durante la migración.** El sitio HTML/CSS/JS existente debe conservarse intacto, salvo autorización expresa.
5. **Registrar todos los cambios.** Cada modificación debe anotarse en `Registro.md`, con fecha y hora de Argentina (UTC-03:00), rutas afectadas, cambio concreto, motivo, autorización y resultado.
6. **Si no se puede actualizar el registro, detenerse.** No continuar con más modificaciones hasta informar el problema y resolver cómo mantener la trazabilidad.
7. **No dar por verificado lo que no se probó.** Diferenciar entre tareas realizadas, pruebas ejecutadas y asuntos pendientes.

## 3. Criterios acordados para la migración

- **Diseño:** mantener el diseño original lo más fielmente posible; corregir errores solo dentro del alcance autorizado.
- **Páginas y contenido:** conservar las páginas, textos, enlaces y contenidos existentes, adaptándolos a React.
- **Alcance previsto:** migrar el sitio completo, incluidas las páginas secundarias, las imágenes y las interacciones. Cada etapa concreta se confirmará antes de ejecutarla.
- **Separación:** el proyecto nuevo estará dentro de `Aconquija-react/`; el sitio original no se utilizará como lugar de trabajo para esta migración.
- **Cambios no previstos:** ninguna mejora estética, reescritura de contenido, eliminación de funciones, cambio de rutas o instalación adicional se hará por iniciativa propia sin consultarlo primero.

## 4. Fase 0 — Inventario y diagnóstico

**Objetivo:** conocer todo lo que existe antes de trasladarlo.

- [ ] Revisar la estructura completa del sitio original.
- [ ] Enumerar las páginas HTML, incluida la página de inicio y todas las páginas secundarias.
- [ ] Identificar hojas de estilo CSS, archivos JavaScript, fuentes, iconos y dependencias externas.
- [ ] Inventariar las imágenes y registrar qué página o sección utiliza cada una.
- [ ] Revisar enlaces internos, enlaces externos, redes sociales, botones y destinos de navegación.
- [ ] Identificar interacciones: menú adaptable, barra de progreso de desplazamiento, animaciones de aparición, pestañas de estaciones, galería/lightbox y cualquier otra función existente.
- [ ] Registrar posibles rutas rotas, errores o comportamientos dudosos sin corregirlos todavía.
- [ ] Preparar una tabla de correspondencia entre los archivos originales y los componentes o páginas React previstos.
- [ ] Presentar los hallazgos y pedir autorización para comenzar la siguiente etapa.

**Condición para avanzar:** el inventario debe estar completo en lo posible y el usuario debe conocer cualquier problema que implique ampliar el alcance.

## 5. Fase 1 — Preparación de la estructura React

**Objetivo:** organizar la aplicación sin migrar contenido todavía, salvo lo expresamente autorizado.

Estructura de referencia propuesta (se puede ajustar únicamente tras explicar y acordar cualquier cambio relevante):

```text
Aconquija-react/
├── public/
│   └── imagenes/
├── src/
│   ├── components/
│   ├── pages/
│   ├── data/
│   ├── styles/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── agents.md
├── Metodologia.md
└── Registro.md
```

- [ ] Revisar la estructura existente de Vite y React antes de crear o mover archivos.
- [ ] Confirmar dónde se alojarán los recursos estáticos; usar rutas coherentes desde `public/` si corresponde.
- [ ] Definir responsabilidades de componentes, páginas, datos y estilos.
- [ ] Decidir cómo se representarán las rutas de las páginas secundarias. Mantener los destinos existentes cuando sea posible; consultar antes de incorporar una dependencia nueva.
- [ ] Evitar instalar paquetes o cambiar la configuración sin necesidad demostrada y autorización.
- [ ] Probar que la aplicación inicial arranque y compile antes de incorporar contenido.

**Condición para avanzar:** la estructura está clara, el sitio original sigue intacto y la aplicación base funciona.

## 6. Fase 2 — Migración de recursos y estilos

- [ ] Copiar o incorporar a la carpeta autorizada de React las imágenes necesarias, sin borrar ni mover los originales.
- [ ] Verificar nombres de archivos, extensiones, mayúsculas/minúsculas y rutas de imágenes.
- [ ] Reproducir los estilos globales: tipografías, colores, variables, tamaños, espaciados y comportamiento adaptable.
- [ ] Mantener las fuentes Fraunces y Work Sans si siguen siendo compatibles con el sitio original.
- [ ] Revisar el fondo principal, el logotipo, iconos y fotografías.
- [ ] Separar los estilos por componente o página cuando sea útil, sin alterar el diseño por iniciativa propia.
- [ ] Comprobar que los recursos se carguen en desarrollo y en la compilación final.

**Condición para avanzar:** los recursos utilizados por la primera página están disponibles y las rutas han sido comprobadas.

## 7. Fase 3 — Migración de la página de inicio

Migrar la página principal por bloques pequeños, comparando el resultado con el sitio original.

- [ ] Encabezado y navegación.
- [ ] Menú adaptable para móvil.
- [ ] Sección principal (hero), imagen de fondo, título, texto y botón.
- [ ] Introducción o presentación turística.
- [ ] Tarjetas y secciones de atractivos.
- [ ] Secciones de circuitos, estaciones u otros contenidos que estén presentes en el original.
- [ ] Pie de página y enlaces de contacto/redes sociales.
- [ ] Estados de foco, hover y navegación por teclado cuando corresponda.
- [ ] Diseño adaptable para escritorio, tableta y móvil.
- [ ] Comparar textos, orden, imágenes, enlaces y espaciado con el original.

**Condición para avanzar:** la página principal conserva el contenido y el aspecto acordados y no presenta errores visibles importantes.

## 8. Fase 4 — Adaptación de las interacciones a React

No copiar el JavaScript original de forma indiscriminada: revisar cada comportamiento y adaptarlo al ciclo de vida y al estado de React.

- [ ] Menú móvil y apertura/cierre del panel o superposición.
- [ ] Estado visual de la navegación al desplazarse.
- [ ] Barra de progreso de desplazamiento, si existe en el original.
- [ ] Animaciones de aparición mediante una solución compatible con React.
- [ ] Pestañas de estaciones o categorías.
- [ ] Galería y visor ampliado (lightbox), incluidos cierre y navegación si existen.
- [ ] Botones, anclas y desplazamiento a secciones.
- [ ] Revisar eventos y observadores para evitar duplicados o fugas al desmontar componentes.
- [ ] Comprobar accesibilidad básica: controles utilizables con teclado, nombres comprensibles y cierre de paneles/visores.
- [ ] Verificar que ninguna interacción original desaparezca sin aprobación.

**Condición para avanzar:** cada interacción inventariada se ha probado o figura claramente como pendiente, con su motivo.

## 9. Fase 5 — Migración de páginas secundarias

- [ ] Migrar cada página secundaria identificada en el inventario.
- [ ] Conservar textos, imágenes, estructura y enlaces existentes.
- [ ] Reutilizar componentes comunes cuando no altere el resultado visual.
- [ ] Mantener las rutas o acordar expresamente cualquier cambio necesario.
- [ ] Verificar enlaces desde la página de inicio y enlaces entre páginas.
- [ ] Confirmar que una visita directa a cada ruta funcione correctamente.
- [ ] Comprobar que ninguna página del sitio original quede modificada.

Páginas ya identificadas para revisar en el inventario, sin asumir que la lista sea completa:
- `html/segundo_nivel/aconquija_respira_verde.html`
- `html/segundo_nivel/cultiva_tradicion.html`

## 10. Fase 6 — Pruebas y control de calidad

- [ ] Ejecutar el servidor de desarrollo y revisar cada página.
- [ ] Ejecutar el linter disponible (`npm run lint`) y revisar los errores.
- [ ] Ejecutar la compilación de producción (`npm run build`).
- [ ] Corregir errores que estén dentro del alcance aprobado; consultar antes de cambios adicionales.
- [ ] Revisar la consola del navegador y las solicitudes de recursos.
- [ ] Probar enlaces, botones, menú, pestañas, galería y desplazamiento.
- [ ] Probar tamaños de escritorio y móvil.
- [ ] Verificar imágenes, fuentes, iconos y rutas tanto en desarrollo como en producción.
- [ ] Comparar visualmente las páginas React con las originales.
- [ ] Registrar resultados, errores conocidos y tareas pendientes.

No marcar una prueba como aprobada si no se ejecutó realmente.

## 11. Fase 7 — Preparación para publicación

Esta fase no implica publicar el sitio ni modificar servicios externos automáticamente.

- [ ] Confirmar el método de alojamiento y los requisitos de rutas.
- [ ] Revisar la configuración de compilación y la carpeta de salida.
- [ ] Comprobar navegación directa y recarga en rutas secundarias según el alojamiento elegido.
- [ ] Revisar enlaces, metadatos y recursos para producción.
- [ ] Explicar las opciones de publicación y sus consecuencias.
- [ ] Solicitar autorización antes de publicar, cambiar DNS, modificar configuración de hosting o realizar acciones externas.
- [ ] Mantener el sitio original disponible como referencia y respaldo hasta que el usuario confirme que la migración está aceptada.

## 12. Lista de verificación por cada etapa

Antes de trabajar:
- [ ] La etapa y su objetivo están definidos.
- [ ] Se enumeraron los archivos que se prevé crear o modificar.
- [ ] Se explicó el motivo y el resultado esperado.
- [ ] Se obtuvo autorización para esa etapa.
- [ ] Se revisó `agents.md` y el estado actual de `Registro.md`.

Después de trabajar:
- [ ] Solo se modificaron los archivos autorizados.
- [ ] Se ejecutaron las pruebas correspondientes, o se indicó que no se ejecutaron.
- [ ] Se revisó que el sitio original no haya cambiado.
- [ ] Se actualizó `Registro.md` con fecha y hora de Argentina (UTC-03:00), rutas, cambio, motivo, autorización y resultado.
- [ ] Se informó al usuario qué se hizo, qué se comprobó y qué queda pendiente.

## 13. Estado inicial del plan

- [x] Reglas de autorización y registro documentadas en `agents.md`.
- [x] Registro de cambios ubicado en `Registro.md`.
- [x] Metodología de migración documentada en este archivo.
- [ ] Inventario técnico completo del sitio original.
- [ ] Estructura React final confirmada.
- [ ] Migración de la página de inicio.
- [ ] Adaptación de interacciones.
- [ ] Migración de páginas secundarias.
- [ ] Pruebas completas.
- [ ] Preparación de publicación.

**Estado:** planificación documentada. La metodología no autoriza por sí sola a ejecutar las etapas siguientes. Se debe acordar el plan de trabajo concreto y obtener autorización antes de modificar archivos del proyecto para la migración.
