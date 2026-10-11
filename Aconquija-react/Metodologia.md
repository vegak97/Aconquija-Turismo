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

- [x] Revisar la estructura del repositorio y enumerar las páginas HTML identificadas.
- [x] Identificar las hojas de estilo CSS y el JavaScript principal.
- [ ] Completar el inventario de imágenes y asociarlas con cada página o sección.
- [ ] Completar la revisión de enlaces internos, externos y destinos de navegación.
- [x] Identificar las interacciones principales descritas en `js/scrip.js`.
- [x] Registrar las referencias obsoletas informadas por el usuario, sin corregirlas en esta fase.
- [x] Preparar una tabla inicial de correspondencia entre páginas originales y destinos React propuestos.
- [x] Presentar el diagnóstico al usuario y obtener autorización para documentarlo en esta metodología y en el registro.

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


## Anexo A — Inventario inicial del sitio original (2026-10-10)

**Alcance de esta revisión:** inspección de archivos disponibles en la rama remota `main` del repositorio. Fue una revisión de solo lectura: no se ejecutó el sitio ni se modificó código fuente. Los elementos marcados como pendientes requieren verificación adicional; su ausencia en la ruta remota esperada no demuestra por sí sola que haya un error en la copia local.

### A.1 Archivos principales encontrados

| Ruta | Hallazgo |
|---|---|
| `index.html` | Página de inicio, 413 líneas; título “Aconquija Turismo”. Referencia `css/style.css`, `js/scrip.js` y recursos de imágenes. Incluye navegación y varias secciones turísticas. |
| `css/style.css` | 853 líneas; reglas adaptables detectadas en 880, 1024, 768 y 520 px. Se observan variables tipográficas y referencias a Fraunces y Work Sans. |
| `css/atractivos.css` | 464 líneas; reglas adaptables detectadas en 1024, 640 y 400 px. |
| `js/scrip.js` | 196 líneas; implementa progreso de desplazamiento, estado de navegación al hacer scroll, menú móvil y superposición, cierre con Escape, animaciones de aparición, pestañas de estaciones, lightbox y acciones para compartir/copiar. |
| `html/segundo_nivel/aconquija_respira_verde.html` | Página de circuito “Aconquija Respira Verde”, 400 líneas. Referencia los estilos comunes y `js/atractivos.js`. |
| `html/segundo_nivel/cultiva_tradicion.html` | Página “Atractivos — Aconquija Turismo”, 501 líneas. Referencia los estilos comunes y `js/atractivos.js`. |
| `html/segundo_nivel/noches_estrelladas.html` | Página “Planetario Janaxpacha Huasi — Aconquija Turismo”, 591 líneas. |
| `html/segundo_nivel/pucara_aconquija.html` | Página “Pucará de Aconquija — Aconquija Turismo”, 599 líneas. |

También se localizaron estas páginas de tercer nivel: `html/tercer_nivel/cristo_redentor.html`, `bosque_de_alisos.html`, `virgen_del_valle.html`, `balneario_buena_vista.html`, `tuneles_rio_potrero.html`, `rio_potrero.html`, `yunka_suma.html`, `fiesta_bandoneon.html`, `festival_mayor_aconquija.html` y `desfile_civico.html`, todas dentro de `html/tercer_nivel/`.

### A.2 Estado de verificación y pendientes

- [x] Se confirmó con el usuario que la estructura local y la del repositorio remoto coinciden.
- [x] Se confirmó el inventario de 16 páginas HTML originales: la página principal, cuatro páginas de segundo nivel y once páginas de tercer nivel. La página `aconquija-react/index.html` pertenece a la aplicación Vite, no al sitio original.
- [x] Se identificaron los archivos principales `css/style.css`, `css/atractivos.css` y `js/scrip.js`.
- [x] El usuario aclaró que las referencias a `js/atractivos.js` y a determinados HTML que no existen son restos obsoletos que olvidó retirar. Se documentan como referencias por revisar, no como archivos reales que deban migrarse.
- [ ] Completar el inventario visual de imágenes y registrar qué página/sección usa cada recurso.
- [ ] Completar la auditoría de enlaces internos, externos, redes sociales y destinos de navegación. La detección textual inicial no equivale a una comprobación manual en navegador.
- [ ] Verificar visualmente las páginas y sus interacciones en un navegador.
- [ ] Revisar dependencias externas, fuentes, iconos y recursos de terceros de manera exhaustiva.
- [ ] Confirmar el inventario final de rutas dudosas con una revisión sistemática de todos los atributos href y src.

No se ha ejecutado el sitio en un navegador ni se ha realizado una prueba funcional integral. Las referencias obsoletas no se han eliminado; cualquier limpieza del HTML se tratará como un cambio separado, aunque el usuario haya aclarado que los destinos referenciados no existen.
### A.3 Interacciones identificadas en el JavaScript principal

1. Barra de progreso de desplazamiento.
2. Cambio de estado visual de la barra de navegación al desplazarse.
3. Apertura y cierre del menú móvil y su superposición.
4. Cierre del menú mediante la tecla Escape.
5. Revelado de elementos al entrar en pantalla mediante `IntersectionObserver`.
6. Pestañas de estaciones con selectores `.est-tab` y paneles `.est-panel`.
7. Galería/lightbox con elementos `.gallery-item`, navegación anterior/siguiente y cierre con Escape.
8. Acciones para compartir o copiar contenido.

**Estado del inventario:** parcial. Esta inspección no modifica el sitio original y no autoriza correcciones de rutas ni migraciones. Antes de iniciar la fase siguiente, se debe revisar la copia local, completar el inventario y presentar los archivos concretos previstos para esa etapa.

## Anexo B — Correspondencia inicial del sitio original con React (2026-10-10)

Esta tabla es una propuesta de arquitectura para orientar la migración. Los nombres de destino son propuestas; no implica que esos archivos ya existan ni autoriza su creación en esta fase. La organización final se confirmará al comenzar la Fase 1, después de revisar la estructura real de la aplicación Vite.

### B.1 Página principal y recursos comunes

| Origen actual | Destino React propuesto | Alcance |
|---|---|---|
| `index.html` | `src/pages/Inicio.jsx` | Contenido de la página principal y sus secciones. |
| `css/style.css` | `src/styles/global.css` y estilos específicos de componentes | Estilos globales, distribución, tipografía y diseño adaptable; conservar el aspecto original. |
| `css/atractivos.css` | `src/styles/atractivos.css` o estilos de páginas/componentes equivalentes | Estilos de las páginas de atractivos, tras comprobar qué reglas utiliza cada una. |
| `js/scrip.js` | Estado, efectos y manejadores en componentes React | Adaptar las interacciones a React; no copiar el script de forma indiscriminada. |
| `imagenes/` | `public/imagenes/` (propuesta) | Incorporar copias de los recursos que se usen; no mover ni borrar los originales. |

### B.2 Páginas de segundo nivel

| Página original | Página React propuesta |
|---|---|
| `html/segundo_nivel/aconquija_respira_verde.html` | `src/pages/RespiraVerde.jsx` |
| `html/segundo_nivel/cultiva_tradicion.html` | `src/pages/CultivaTradicion.jsx` |
| `html/segundo_nivel/noches_estrelladas.html` | `src/pages/NochesEstrelladas.jsx` |
| `html/segundo_nivel/pucara_aconquija.html` | `src/pages/PucaraAconquija.jsx` |

### B.3 Páginas de tercer nivel

| Página original | Página React propuesta |
|---|---|
| `html/tercer_nivel/balneario_buena_vista.html` | `src/pages/BalnearioBuenaVista.jsx` |
| `html/tercer_nivel/bosque_de_alisos.html` | `src/pages/BosqueDeAlisos.jsx` |
| `html/tercer_nivel/cristo_redentor.html` | `src/pages/CristoRedentor.jsx` |
| `html/tercer_nivel/desfile_civico.html` | `src/pages/DesfileCivico.jsx` |
| `html/tercer_nivel/el_charquiadero.html` | `src/pages/ElCharquiadero.jsx` |
| `html/tercer_nivel/festival_mayor_aconquija.html` | `src/pages/FestivalMayor.jsx` |
| `html/tercer_nivel/fiesta_bandoneon.html` | `src/pages/FiestaBandoneon.jsx` |
| `html/tercer_nivel/rio_potrero.html` | `src/pages/RioPotrero.jsx` |
| `html/tercer_nivel/tuneles_rio_potrero.html` | `src/pages/TunelesRioPotrero.jsx` |
| `html/tercer_nivel/virgen_del_valle.html` | `src/pages/VirgenDelValle.jsx` |
| `html/tercer_nivel/yunka_suma.html` | `src/pages/YunkaSuma.jsx` |

### B.4 Componentes reutilizables candidatos

| Componente propuesto | Responsabilidad posible |
|---|---|
| `Navbar.jsx` | Encabezado, navegación y menú móvil. |
| `Hero.jsx` | Presentación principal con imagen, título, texto y llamada a la acción. |
| `PlaceCard.jsx` y `CardGrid.jsx` | Tarjetas reutilizables para excursiones y atractivos. |
| `SeasonTabs.jsx` | Pestañas y paneles de estaciones. |
| `Gallery.jsx` y `Lightbox.jsx` | Galería, ampliación y navegación entre imágenes. |
| `ShareButtons.jsx` | Compartir por redes o copiar el enlace. |
| `Reveal.jsx` | Aparición de elementos al entrar en pantalla, si se conserva ese efecto. |
| `Footer.jsx` | Información de contacto, enlaces y redes sociales. |
| `PageLayout.jsx` | Estructura común de páginas secundarias, si las páginas comparten suficiente estructura. |

La lista es orientativa: en la Fase 1 se revisará qué componentes realmente convienen y cómo resolver las rutas, sin añadir dependencias nuevas ni alterar el diseño por iniciativa propia.

### B.5 Interacciones que deben preservarse y adaptarse

Según la lectura de `js/scrip.js`, deben evaluarse: barra de progreso de lectura; estado de la navegación al desplazarse; menú móvil con superposición y cierre por botón, enlace o Escape; animaciones `reveal` mediante `IntersectionObserver`; pestañas de estaciones; lightbox con anterior/siguiente, cierre por fondo y Escape/flechas; y acciones para compartir o copiar el enlace. Su presencia y funcionamiento deben verificarse página por página antes de declarar la migración completa.

### B.6 Estado de la Fase 0

**Estado: diagnóstico inicial documentado; Fase 0 todavía parcial.** La tabla de correspondencia y el inventario de páginas ya están documentados, pero falta completar la asociación de imágenes, la auditoría exhaustiva de enlaces y la verificación visual/funcional en navegador. No se ejecutaron pruebas de la aplicación durante esta actualización. No se inició la Fase 1 ni se modificó el código del sitio original.

### Anexo C — Revisión preliminar de referencias de recursos (2026-10-10)

Se revisaron referencias `href`, `src`, `poster` y `data-src` presentes en las 16 páginas HTML originales. Esta pasada es preliminar: recopila rutas que requieren revisión, pero no confirma todavía la validez de todas las referencias ni reemplaza una auditoría exhaustiva.

**Destinos comprobados como inexistentes en el repositorio de la rama `main`:**
- `html/segundo_nivel/lugares/cabalgatas.html`
- `html/segundo_nivel/lugares/senderismo.html`
- `html/segundo_nivel/lugares/estrellas.html`
- `html/tercer_nivel/Cruce de los Nevados.html`
- `js/atractivos.js`
- `html/imagenes/bosque.webp`
- `imagenes/bosque.webp`

**Otras referencias que requieren inspección:**
- En `html/segundo_nivel/noches_estrelladas.html` aparece la referencia `....//index.html#lugares`, con formato sospechoso.
- Varias páginas de tercer nivel contienen referencias como `../imagenes/montaña.png`, `../imagenes/rio.jpeg`, `../../imagenes/bosque.webp` o enlaces HTML relativos que podrían resolver a ubicaciones distintas de las previstas.
- Se encontraron referencias a recursos alojados en Unsplash y enlaces externos a redes sociales, WhatsApp y mapas. Deben clasificarse y verificarse por separado.
- Algunas páginas contienen referencias repetidas al logotipo y enlaces hacia páginas que no figuran entre las 16 páginas inventariadas.

**Criterio de migración:** las rutas inexistentes se documentan como incidencias y no se migran como archivos. No se eliminó ni corrigió ninguna referencia en el sitio original. Antes de decidir si un enlace se descarta, se reemplaza o se conserva como externo, se deberá revisar su intención y, cuando corresponda, pedir autorización al usuario.

**Pendiente:** comprobar todas las rutas contra el árbol completo del repositorio, mapear cada imagen por página, revisar enlaces internos y anclas, clasificar recursos externos y realizar pruebas visuales/funcionales en navegador. La Fase 0 continúa parcial; la Fase 1 no comenzó.


## Anexo D — Referencias de imágenes con rutas/extensiones no coincidentes (2026-10-10)

Esta revisión compara referencias de imagen en atributos HTML (`src`, `poster`, `data-src`, `data-image` y `data-bg`) con el árbol de archivos de la rama `main`. Las líneas indicadas corresponden a los HTML revisados en esta fecha. La revisión es estática: no se cambiaron referencias ni se confirmó visualmente qué imagen pretendía usar cada sección.

### 1. Extensión solicitada distinta de la disponible

| Página original | Línea | Referencia actual | Archivo encontrado en el repositorio |
|---|---:|---|---|
| `html/tercer_nivel/balneario_buena_vista.html` | 306 | `../../imagenes/balneario_municipal/balneario.png` | `imagenes/balneario_municipal/balneario.webp` |
| `html/tercer_nivel/balneario_buena_vista.html` | 320 | `../../imagenes/balneario_municipal/balneario_2.png` | `imagenes/balneario_municipal/balneario_2.webp` |
| `html/tercer_nivel/balneario_buena_vista.html` | 335 | `../../imagenes/balneario_municipal/balneario_5.png` | `imagenes/balneario_municipal/balneario_5.webp` |
| `html/tercer_nivel/balneario_buena_vista.html` | 350 | `../../imagenes/balneario_municipal/balneario_4.png` | `imagenes/balneario_municipal/balneario_4.webp` |
| `html/tercer_nivel/balneario_buena_vista.html` | 567 | `../../imagenes/planetario/noche.jpeg` | `imagenes/planetario/noche.webp` |
| `html/tercer_nivel/bosque_de_alisos.html` | 579 | `../../imagenes/planetario/noche.jpeg` | `imagenes/planetario/noche.webp` |
| `html/tercer_nivel/cristo_redentor.html` | 572 | `../../imagenes/planetario/noche.jpeg` | `imagenes/planetario/noche.webp` |
| `html/tercer_nivel/desfile_civico.html` | 569 | `../../imagenes/planetario/noche.jpeg` | `imagenes/planetario/noche.webp` |
| `html/tercer_nivel/el_charquiadero.html` | 579 | `../../imagenes/planetario/noche.jpeg` | `imagenes/planetario/noche.webp` |
| `html/tercer_nivel/festival_mayor_aconquija.html` | 568 | `../../imagenes/planetario/noche.jpeg` | `imagenes/planetario/noche.webp` |
| `html/tercer_nivel/fiesta_bandoneon.html` | 566 | `../../imagenes/planetario/noche.jpeg` | `imagenes/planetario/noche.webp` |
| `html/tercer_nivel/rio_potrero.html` | 572 | `../../imagenes/planetario/noche.jpeg` | `imagenes/planetario/noche.webp` |
| `html/tercer_nivel/tuneles_rio_potrero.html` | 578 | `../../imagenes/planetario/noche.jpeg` | `imagenes/planetario/noche.webp` |
| `html/tercer_nivel/virgen_del_valle.html` | 524 | `../../imagenes/planetario/noche.jpeg` | `imagenes/planetario/noche.webp` |
| `html/tercer_nivel/yunka_suma.html` | 574 | `../../imagenes/planetario/noche.jpeg` | `imagenes/planetario/noche.webp` |

La existencia de un archivo con el mismo nombre base no demuestra por sí sola que sea la imagen visualmente correcta; antes de cambiar la extensión se debe confirmar que corresponde al recurso pretendido.

### 2. Referencias que resuelven a una carpeta incorrecta por la ruta relativa

En páginas ubicadas en `html/tercer_nivel/`, `../imagenes/` retrocede solamente a `html/`, por lo que la referencia termina apuntando a `html/imagenes/`. Para llegar a la carpeta `imagenes/` ubicada en la raíz del repositorio se necesitan dos niveles (`../../imagenes/`). Esta explicación describe la resolución de rutas; no autoriza cambios automáticos.

| Páginas y líneas | Referencia actual | Ubicación que se encontró |
|---|---|---|
| `bosque_de_alisos.html` línea 357; `cristo_redentor.html` línea 324; `desfile_civico.html` línea 323; `el_charquiadero.html` línea 331; `festival_mayor_aconquija.html` línea 337; `fiesta_bandoneon.html` línea 322; `rio_potrero.html` línea 325; `tuneles_rio_potrero.html` línea 357; `virgen_del_valle.html` línea 289; `yunka_suma.html` línea 327 | `../imagenes/montaña.png` | El archivo existe como `imagenes/montaña.png` en la raíz; la referencia actual resuelve a `html/imagenes/montaña.png`. |
| `cristo_redentor.html` línea 350; `desfile_civico.html` línea 349; `el_charquiadero.html` línea 357; `fiesta_bandoneon.html` línea 348; `rio_potrero.html` línea 351; `tuneles_rio_potrero.html` línea 313; `virgen_del_valle.html` línea 319; `yunka_suma.html` línea 353 | `../imagenes/rio.jpeg` | El archivo existe como `imagenes/rio.jpeg` en la raíz; la referencia actual resuelve a `html/imagenes/rio.jpeg`. |
| `bosque_de_alisos.html` línea 313 | `../imagenes/bosque.webp` | La referencia resuelve a `html/imagenes/bosque.webp`, que no existe. Hay un archivo `imagenes/bosque_de_alisos/bosque.webp`; falta confirmar si es el recurso pretendido. |

### 3. Referencias sin archivo exacto localizado

| Página original | Línea(s) | Referencia actual | Observación |
|---|---:|---|---|
| `html/tercer_nivel/balneario_buena_vista.html` | 538 | `../../imagenes/bosque.webp` | No existe en la raíz `imagenes/bosque.webp`. Existe `imagenes/bosque_de_alisos/bosque.webp`, pero no se presume que sea equivalente. |
| `html/tercer_nivel/bosque_de_alisos.html` | 564 | `../../imagenes/chica.PNG` | No se encontró un archivo con esa ruta ni nombre base en el árbol actual. |
| `html/tercer_nivel/cristo_redentor.html` | 337; `desfile_civico.html` 336; `el_charquiadero.html` 344; `festival_mayor_aconquija.html` 350; `fiesta_bandoneon.html` 335; `rio_potrero.html` 338; `tuneles_rio_potrero.html` 563; `virgen_del_valle.html` 304; `yunka_suma.html` 340 | `../imagenes/chica.PNG` en las seis páginas desde `cristo_redentor.html` hasta `rio_potrero.html`; `../../imagenes/chica.PNG` en túneles; `../imagenes/chica.PNG` en virgen y yunka | No se encontró `imagenes/chica.PNG` ni un archivo con el mismo nombre base en el árbol actual. Las referencias `../imagenes/chica.PNG` además resuelven a `html/imagenes/chica.PNG`. |

### 4. Estado y criterio

- Se confirmó la diferencia de extensión `.png`/`.webp` en las cuatro referencias del balneario y `.jpeg`/`.webp` en las once referencias a la imagen nocturna del planetario.
- Se confirmó que `../imagenes/montaña.png` y `../imagenes/rio.jpeg` apuntan a `html/imagenes/`, aunque los archivos existen en la carpeta `imagenes/` de la raíz.
- Las referencias a `chica.PNG` y a `bosque.webp` requieren identificar la imagen correcta o decidir si la referencia está obsoleta.
- Este anexo es un inventario de incidencias, no una orden de corrección. No se modificó ningún HTML original, CSS, imagen ni archivo React. La Fase 0 sigue abierta y la Fase 1 no comenzó.
