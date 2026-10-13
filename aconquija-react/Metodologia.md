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

## 3. Criterios vigentes acordados para la migración

- **Diseño y contenido:** mantener el diseño original lo más fielmente posible y conservar textos, estructura, enlaces e interacciones de las páginas aprobadas. No introducir mejoras, reescrituras ni contenido nuevo por iniciativa propia.
- **Alcance vigente:** el inventario autorizado para migrar es de **15 páginas originales**, conforme al mapa aprobado en el Anexo W/Y. `html/tercer_nivel/el_charquiadero.html` fue excluida intencionalmente y no debe recrearse ni migrarse. Los conteos de 16 páginas y las listas anteriores que aparecen en anexos antiguos son antecedentes históricos, no el alcance actual.
- **Rutas:** el mapa de 15 rutas del Anexo W está aprobado como conjunto. Esta aprobación documental no autoriza por sí sola a modificar código ni a implementar rutas; se requiere la autorización específica de la etapa correspondiente.
- **Páginas futuras aún no terminadas:** algunos destinos inexistentes se incluyeron intencionalmente como recordatorios de contenido futuro. No crear esas páginas ni redactar su contenido durante esta migración. Antes de migrar los enlaces que apuntan a ellas, conservar la referencia como pendiente y no convertirla en un enlace activo roto; si la forma de representarla en la interfaz requiere una decisión no acordada, consultar al usuario.
- **Imágenes y recursos faltantes:** si una ruta o extensión de imagen no coincide con un archivo disponible, buscar en el repositorio local el mismo recurso con otra extensión (por ejemplo, `.webp`, `.png`, `.jpg` o variaciones de mayúsculas). Usar la ruta real solo cuando se confirme que es la misma imagen y documentar la correspondencia. Si no existe una imagen equivalente local, conservar el espacio visual reservado para que el usuario la agregue más adelante; no descargar, inventar ni sustituirla por una imagen parecida.
- **Referencias de imagen vacías:** algunas pueden ser espacios intencionales reservados para recursos que todavía no se agregaron. No clasificarlas automáticamente como errores ni generar en React elementos `<img>` con `src=""`; mantener el espacio reservado de forma segura hasta que el usuario proporcione el recurso.
- **Contacto y redes sociales globales:** usar los datos de contacto y redes de `index.html` como fuente canónica. Si una página secundaria presenta datos globales diferentes o incompletos, unificarlos con los de `index.html` durante la migración. No inventar datos que no estén allí. Los enlaces de mapas o ubicación específicos de cada atractivo se revisan por separado.
- **Verificación:** distinguir siempre una auditoría estática de las pruebas reales. Inspeccionar archivos o referencias no demuestra que la aplicación compile, que el linter pase ni que la interfaz funcione en un navegador. Informar cada prueba como ejecutada, fallida o pendiente según corresponda.
- **Separación:** el proyecto nuevo estará dentro de `aconquija-react/`; el sitio original HTML/CSS/JavaScript debe permanecer intacto.
- **Trazabilidad histórica:** conservar los anexos antiguos por trazabilidad. Cuando contradigan las decisiones vigentes, señalar que son antecedentes superados y tomar como referencia los criterios actuales y el mapa aprobado.
- **Cambios no previstos:** si surge una decisión sobre diseño, contenido, comportamiento, dependencias o alcance que no esté cubierta por estos acuerdos, detenerse y consultarla antes de modificar archivos.

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
aconquija-react/
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

## 13. Estado vigente del proyecto — 2026-10-12

Esta sección resume el estado actual para retomar el trabajo sin repetir auditorías ni confundir decisiones antiguas con las vigentes. El detalle histórico se conserva en los anexos y en el registro de cambios.

### Decisiones aprobadas

- [x] Reglas de autorización y trazabilidad documentadas en `agents.md`.
- [x] Mapa definitivo de **15 páginas** y sus rutas React aprobado como conjunto (Anexo W/Y).
- [x] Estrategia de rutas agrupadas por categoría aprobada.
- [x] Criterios de preservación del sitio original, imágenes, enlaces pendientes y datos globales consolidados en la sección 3.
- [x] Exclusión de `html/tercer_nivel/el_charquiadero.html` confirmada.
- [x] Etapa 1 de preparación de la base React autorizada e implementada.
- [x] El usuario autorizó la migración de la página principal original a React, reutilizando los archivos existentes `src/App.jsx`, `src/App.css`, `src/index.css`, `Metodologia.md` y `Registro.md`.

### Estado de la Etapa 1 — Base React

- [x] Se configuraron las 15 rutas aprobadas usando React Router y se mantuvo una pantalla provisional para las páginas aún no migradas.
- [x] Se reemplazaron los estilos globales de la plantilla por una base neutral y adaptable.
- [x] Se actualizaron idioma, título y metadatos básicos del documento HTML de React.
- [ ] La verificación local posterior al cambio (lint, build y navegación en navegador) no está confirmada todavía.

### Estado de la migración de Inicio


#### Ajuste del fondo del hero — 2026-10-12

- Se confirmó que el archivo `imagenes/fondo(1).webp` existe en el repositorio.
- Para que Vite resuelva el recurso de forma explícita, se importó el archivo en `src/App.jsx` y se asignó como `backgroundImage` al contenedor `.hero-bg`.
- Se quitó la referencia CSS con paréntesis escapados de `src/App.css` y se dejó un color de respaldo mientras carga la imagen.
- La verificación remota confirma la importación y la asignación en el JSX, pero todavía falta comprobar en el navegador local que la imagen se vea correctamente.

- [x] Se trasladó a `src/App.jsx` la estructura de la página principal: navegación, hero, presentación, circuitos, lugares, pestañas de estaciones, servicios, sección final y pie de página.
- [x] Se reutilizaron los recursos gráficos existentes del repositorio mediante importaciones relativas, sin mover ni modificar los archivos de imágenes originales.
- [x] Se trasladaron a `src/App.css` las reglas de diseño originales de `css/style.css`, ajustando únicamente las rutas de recursos necesarias desde la ubicación del archivo React.
- [x] Se adaptaron a React el menú móvil, el cierre con Escape, el progreso de lectura, el estado del encabezado al desplazarse, las animaciones de aparición y las pestañas de estaciones.
- [x] Se actualizaron los estilos globales de `src/index.css` para integrar la tipografía y la base visual del sitio.
- [ ] La comparación visual en navegador, el lint y la compilación después de esta migración siguen pendientes. No se declara la etapa validada hasta recibir esos resultados.
- [ ] Los títulos y descripciones vacíos de las tarjetas de circuitos se conservaron porque están vacíos en el original; no se inventó contenido.

### Archivos protegidos y límites

- El sitio original HTML/CSS/JavaScript fuera de `aconquija-react/` permanece sin cambios.
- No se modificaron `src/main.jsx`, `vite.config.js`, `package.json` ni las dependencias.
- No se crearon archivos adicionales ni se movieron imágenes.
- Las 14 páginas secundarias siguen con pantallas provisionales y se migrarán en una etapa posterior, con autorización específica.
- Las pruebas posteriores a la migración aún no se han ejecutado en el entorno local del usuario; el contenido remoto fue escrito mediante GitHub, pero eso no equivale a una prueba de build, lint o navegador.

### Próximos pasos

1. El usuario sincroniza los cambios como parte de su flujo habitual.
2. Ejecutar `npm.cmd run lint` y revisar el resultado antes de pasar al build.
3. Ejecutar `npm.cmd run build` y resolver cualquier error solo tras explicar los archivos afectados y obtener autorización si el cambio no está incluido en el alcance ya aprobado.
4. Iniciar la aplicación y revisar la página principal en escritorio y móvil; comparar contra el original y anotar problemas concretos.
5. No migrar las páginas secundarias hasta cerrar la validación de Inicio y solicitar autorización separada para la etapa siguiente.

**Estado general:** la base React y la primera migración de la página de inicio están implementadas en la rama remota. La validación local posterior permanece pendiente.

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

## Anexo E — Planificación de rutas React y control de alcance (2026-10-11)

**Estado: propuesta de planificación; todavía no implementada.** Este anexo organiza el trabajo previo a la migración. No autoriza por sí solo a crear componentes, modificar rutas, migrar contenido ni cambiar el sitio original. Las rutas de destino que aparecen abajo son propuestas pendientes de contrastar con los enlaces reales (`href`) del sitio.

### E.1 Inventario confirmado por la revisión local

El usuario ejecutó desde la raíz del repositorio:

```powershell
Get-ChildItem .\html -Recurse -Filter *.html |
    Select-Object -ExpandProperty FullName
```

La salida mostró 14 páginas dentro de `html/`:

**Segundo nivel (4):**
- `html/segundo_nivel/aconquija_respira_verde.html`
- `html/segundo_nivel/cultiva_tradicion.html`
- `html/segundo_nivel/noches_estrelladas.html`
- `html/segundo_nivel/pucara_aconquija.html`

**Tercer nivel (10):**
- `html/tercer_nivel/balneario_buena_vista.html`
- `html/tercer_nivel/bosque_de_alisos.html`
- `html/tercer_nivel/cristo_redentor.html`
- `html/tercer_nivel/desfile_civico.html`
- `html/tercer_nivel/festival_mayor_aconquija.html`
- `html/tercer_nivel/fiesta_bandoneon.html`
- `html/tercer_nivel/rio_potrero.html`
- `html/tercer_nivel/tuneles_rio_potrero.html`
- `html/tercer_nivel/virgen_del_valle.html`
- `html/tercer_nivel/yunka_suma.html`

A estas 14 páginas se suma el `index.html` original en la raíz del repositorio: **15 páginas originales incluidas en el alcance actual (1 inicio + 4 de segundo nivel + 10 de tercer nivel)**.

**Exclusión explícita:** `html/tercer_nivel/el_charquiadero.html` fue eliminada intencionalmente por indicación previa del usuario y no debe recrearse ni migrarse. Las menciones anteriores a ese archivo y los conteos preliminares de 16 páginas/11 páginas de tercer nivel en los anexos previos quedan superados por este inventario local más reciente. Se conservan en el historial documental para trazabilidad, pero no son la lista vigente de migración.

### E.2 Tabla inicial de rutas propuestas

Los segmentos de URL se escriben en minúsculas, sin tildes y con guiones. Esta convención es una propuesta para la aplicación React, no una orden de cambiar enlaces del sitio original.

| Página original | Ruta React propuesta | Estado |
|---|---|---|
| `index.html` | `/` | Propuesta |
| `html/segundo_nivel/aconquija_respira_verde.html` | `/respira-verde` | Propuesta |
| `html/segundo_nivel/cultiva_tradicion.html` | `/cultiva-tradicion` | Propuesta |
| `html/segundo_nivel/noches_estrelladas.html` | `/noches-estrelladas` | Propuesta |
| `html/segundo_nivel/pucara_aconquija.html` | `/pucara-aconquija` | Propuesta |
| `html/tercer_nivel/balneario_buena_vista.html` | `/lugares/balneario-buena-vista` | Propuesta |
| `html/tercer_nivel/bosque_de_alisos.html` | `/naturaleza/bosque-de-alisos` | Propuesta |
| `html/tercer_nivel/cristo_redentor.html` | `/lugares/cristo-redentor` | Propuesta |
| `html/tercer_nivel/desfile_civico.html` | `/tradiciones/desfile-civico` | Propuesta |
| `html/tercer_nivel/festival_mayor_aconquija.html` | `/fiestas/festival-mayor-aconquija` | Propuesta |
| `html/tercer_nivel/fiesta_bandoneon.html` | `/fiestas/fiesta-bandoneon` | Propuesta |
| `html/tercer_nivel/rio_potrero.html` | `/naturaleza/rio-potrero` | Propuesta |
| `html/tercer_nivel/tuneles_rio_potrero.html` | `/naturaleza/tuneles-rio-potrero` | Propuesta |
| `html/tercer_nivel/virgen_del_valle.html` | `/lugares/virgen-del-valle` | Propuesta |
| `html/tercer_nivel/yunka_suma.html` | `/naturaleza/yunka-suma` | Propuesta |

### E.3 Reglas para aprobar las rutas

Antes de declarar definitiva la tabla:

1. Revisar los `href` de `index.html` y de las 14 páginas dentro de `html/`, anotando origen, destino y tipo de enlace (interno, ancla, externo, red social o contacto).
2. Confirmar la relación real entre secciones y páginas específicas. No inferir jerarquías solo por el nombre del archivo ni por la categoría sugerida en la URL.
3. Detectar enlaces rotos, destinos inexistentes y diferencias de mayúsculas/minúsculas; documentar las incidencias sin corregir el sitio original.
4. Decidir y documentar el comportamiento de las rutas desconocidas mediante una página 404.
5. Definir cómo se tratarán las URL antiguas si la aplicación React reemplaza al sitio en el mismo dominio. No configurar redirecciones ni hosting en esta etapa.
6. Aprobar con el usuario la tabla final antes de implementar el enrutador.

### E.4 Organización prevista en React

La estructura existente bajo `aconquija-react/src/` incluye `components/layout`, `components/home`, `components/ui`, `pages/second-level`, `pages/third-level`, `data` y `styles`. La propuesta es mantener esa separación y asignar una página React a cada ruta, reutilizando componentes compartidos cuando sea apropiado. Los nombres y ubicaciones finales de los archivos se confirmarán antes de crearlos.

- `components/layout/`: navegación compartida y estructura común del sitio.
- `components/home/`: bloques específicos de la página principal.
- `components/ui/`: elementos visuales reutilizables.
- `pages/second-level/`: las cuatro páginas de segundo nivel.
- `pages/third-level/`: las diez páginas de tercer nivel.
- `data/`: datos de navegación u otros contenidos compartidos, solo si su uso queda definido.
- `styles/`: estilos globales y específicos acordados.

React Router ya está instalado en las dependencias del proyecto. Su instalación no significa que las rutas estén implementadas: todavía hay que diseñarlas, aprobarlas y probarlas.

### E.5 Secuencia de trabajo acordada antes de migrar

1. **Planificar:** completar la tabla de rutas y el mapa de enlaces a partir de los `href` reales.
2. **Revisar:** comparar la tabla con el inventario y resolver dudas con el usuario.
3. **Documentar:** actualizar esta metodología y el registro de cambios antes de pasar a la implementación.
4. **Solicitar autorización de implementación:** enumerar los archivos React que se crearán o modificarán y el objetivo de cada uno.
5. **Implementar el enrutador:** solo después de la aprobación; definir las 15 rutas incluidas y la ruta 404.
6. **Verificar:** probar acceso directo a cada ruta, enlaces internos, navegación atrás/adelante y compilación. No marcar pruebas que no se hayan ejecutado.
7. **Migrar por etapas:** comenzar por la página principal y continuar con las páginas secundarias, conservando el sitio original intacto.

### E.6 Estado actualizado

- [x] Se recibió la salida de PowerShell que enumera las 14 páginas bajo `html/`.
- [x] Se registró el alcance actual de 15 páginas originales, incluida la página de inicio.
- [x] Se excluyó expresamente `el_charquiadero.html` del alcance vigente.
- [x] Se documentó una primera propuesta de rutas para revisión.
- [ ] Auditar los enlaces `href` de todas las páginas y construir el mapa de navegación real.
- [ ] Aprobar con el usuario la tabla definitiva de rutas.
- [ ] Implementar el enrutador React.
- [ ] Iniciar la migración de contenido.

**Estado de la metodología:** planificación de rutas en curso. No se ha modificado código React ni el sitio original como resultado de este anexo. La Fase 0 sigue abierta; no se considera iniciada la migración de contenido.

## Anexo F — Hallazgos de la auditoría de enlaces de segundo nivel (2026-10-11)

**Fuente:** salida de solo lectura de PowerShell ejecutada por el usuario desde la raíz del repositorio:

```powershell
Get-ChildItem .\html\segundo_nivel -Filter *.html |
    Select-String -Pattern 'href\s*='
```

**Alcance de esta revisión:** se inspeccionaron las coincidencias de `href` en los cuatro archivos de `html/segundo_nivel/`. La salida puede dividir líneas largas; los hallazgos siguientes son incidencias por verificar, no una prueba de funcionamiento o fallo en navegador.

### F.1 Enlaces internos a revisar

| Archivo de origen | Referencia encontrada | Observación / siguiente acción |
|---|---|---|
| `html/segundo_nivel/aconquija_respira_verde.html` | `../tercer_nivel/tuneles_rio_potrero.html` | Apunta a una página incluida en el inventario actual. Confirmar destino y relación de navegación durante la auditoría completa. |
| `html/segundo_nivel/aconquija_respira_verde.html` | `../tercer_nivel/bosque_de_alisos.html` | Apunta a una página incluida en el inventario actual. |
| `html/segundo_nivel/aconquija_respira_verde.html` | `../tercer_nivel/rio_potrero.html` | Apunta a una página incluida en el inventario actual. |
| `html/segundo_nivel/aconquija_respira_verde.html` | `../tercer_nivel/yunka_suma.html` | Apunta a una página incluida en el inventario actual. |
| `html/segundo_nivel/aconquija_respira_verde.html` | `../tercer_nivel/Cruce de los Nevados.html` | El nombre contiene espacios y mayúsculas y no coincide con ninguna de las páginas de tercer nivel incluidas en el inventario vigente. Verificar el destino pretendido; no crear un archivo ni decidir una sustitución automáticamente. |
| `html/segundo_nivel/aconquija_respira_verde.html` | `lugares/cabalgatas.html`, `lugares/senderismo.html` | Son rutas relativas al directorio `html/segundo_nivel/`; no aparecen entre las páginas inventariadas. Confirmar si son referencias obsoletas o si el destino esperado es otro. |
| `html/segundo_nivel/cultiva_tradicion.html` | `../tercer_nivel/fiesta_bandoneon.html` | Apunta a una página incluida en el inventario actual. |
| `html/segundo_nivel/cultiva_tradicion.html` | `../tercer_nivel/festival_mayor_aconquija.html` | Apunta a una página incluida en el inventario actual. |
| `html/segundo_nivel/cultiva_tradicion.html` | `../tercer_nivel/desfile_civico.html` | Apunta a una página incluida en el inventario actual. |
| `html/segundo_nivel/cultiva_tradicion.html` | `lugares/cabalgatas.html`, `lugares/estrellas.html`, `lugares/quebrada.html`, `lugares/gastronomia.html`, `lugares/bosque.html`, `lugares/artesanias.html`, `lugares/laguna.html`, `lugares/filo-amanecer.html`, `lugares/mirador.html` | Estas rutas relativas no corresponden a páginas incluidas en el inventario vigente. Verificar cada destino antes de definir qué debe ocurrir en React. No asumir que cada referencia requiere una página nueva. |
| `html/segundo_nivel/noches_estrelladas.html` | `....//index.html#lugares` | La ruta parece contener un error tipográfico. Registrar para confirmar el destino pretendido; no modificar el original durante esta fase. |
| `html/segundo_nivel/pucara_aconquija.html` | `../../index.html` y `../../index.html#explorar` | Enlaces de regreso a la página de inicio y a una sección de esta. En React deberán conservar el destino equivalente. |

### F.2 Contacto, recursos y enlaces externos

- Las cuatro páginas enlazan a Google Fonts; varias enlazan a `../../css/style.css` y a `../../imagenes/aconquija_icono.png`. Respira Verde y Cultiva Tradición también referencian `../../css/atractivos.css`. Verificar qué recursos existen y se usan antes de trasladarlos; las rutas originales son relativas al HTML de origen.
- Se encontraron enlaces a Instagram, Facebook y WhatsApp. Conservar los destinos externos previstos durante la migración, salvo autorización para cambiarlos.
- En `noches_estrelladas.html`, la salida muestra un atributo parecido a `href=">Maxyz000@icloud.com"`. Parece estar mal formado; confirmar el HTML exacto y el correo previsto antes de proponer una corrección.
- En `pucara_aconquija.html`, el destino telefónico `tel:+5438300000` no parece coincidir con el número visible `+54 383 4966977`. El enlace de correo apunta a `mailto:info@aconquija.tur.ar`, mientras que el texto visible es `Maxyz000@icloud.com`. Son discrepancias que requieren confirmación del usuario; no adivinar el dato correcto.
- Hay enlaces de mapas, teléfono, correo y WhatsApp que son externos o de contacto, no rutas de páginas React. Deben clasificarse por separado del mapa de rutas internas.

### F.3 Procedimiento para resolver incidencias

1. Continuar la auditoría de `href` en las páginas de tercer nivel y comparar todas las referencias con el inventario local.
2. Clasificar cada referencia como ruta interna existente, ancla de sección, recurso, enlace externo, contacto, destino dudoso o destino no inventariado.
3. Para rutas dudosas, consultar el archivo y el contexto antes de sugerir una equivalencia. Si el destino deseado no puede deducirse con seguridad, preguntar al usuario.
4. Mantener las incidencias como pendientes hasta que se verifiquen. No cambiar el sitio original como parte de esta auditoría.
5. Al aprobar las rutas React, construir un mapa de navegación con origen, destino original, destino React propuesto y estado de verificación.
6. Antes de implementar, confirmar con el usuario qué enlaces conservar, cuáles deben apuntar a páginas migradas y cuáles requieren una decisión de contenido.

### F.4 Estado tras esta revisión

- [x] Se recibió la salida de PowerShell para los cuatro archivos de segundo nivel.
- [x] Se identificaron rutas internas hacia páginas incluidas en el inventario vigente.
- [x] Se documentaron referencias a destinos no inventariados y posibles errores tipográficos.
- [x] Se registraron discrepancias aparentes en enlaces de contacto para confirmación.
- [ ] Verificar cada destino dudoso contra los archivos locales y el contexto del contenido.
- [ ] Auditar los `href` de las diez páginas de tercer nivel.
- [ ] Completar el mapa de enlaces y aprobar las rutas definitivas con el usuario.

**Resultado:** auditoría estática parcial. No se modificaron archivos HTML, CSS, JavaScript ni código React. No se ejecutaron pruebas de navegador; los destinos dudosos siguen pendientes de confirmación.

## Anexo G — Hallazgos de la auditoría de enlaces de tercer nivel (2026-10-11)

Se revisó la salida compartida de PowerShell para los diez HTML de `html/tercer_nivel/`. Esta es una inspección estática de atributos `href`: no demuestra por sí sola que un destino funcione o falle al abrirlo en un navegador. Las referencias dudosas quedan pendientes; no se cambia automáticamente el sitio original.

### G.1 Navegación interna y relaciones entre páginas

- En las diez páginas se repiten enlaces de navegación hacia `../../index.html` y sus secciones `#explorar`, `#lugares`, `#estaciones`, `#servicios` y `#sobre`, además de enlaces de inicio en el pie. Al migrar, habrá que definir equivalentes React y decidir cómo conservar la navegación a secciones de la página principal.
- `html/tercer_nivel/desfile_civico.html` enlaza a `festival_mayor_aconquija.html`, que corresponde a un archivo incluido en el inventario, y a `../segundo_nivel/noches_estrelladas.html`, también inventariado.
- En `html/tercer_nivel/desfile_civico.html` aparece `cabalgatas de pirca.html`. El nombre contiene espacios y no coincide con ninguno de los diez archivos de tercer nivel del inventario actual. Confirmar el destino esperado; no crear una página ni sustituir el enlace por inferencia.
- Los enlaces a `../../index.html` y a archivos HTML vecinos son rutas internas relativas al archivo original. En React se deben transformar según el mapa de rutas aprobado, no copiar literalmente sin evaluar su destino.

### G.2 Contacto: discrepancias que requieren confirmación

- Varias páginas muestran el enlace telefónico `tel:+5438300000` con el texto visible `+54 383 000 0000`; en `balneario_buena_vista.html` se encontró además `tel:+543834961062` con el texto `Balneario: 0383 496-1062`. Verificar cuáles son los números correctos antes de trasladarlos.
- Se repite el correo `mailto:info@aconquija.tur.ar` en la mayoría de estas páginas. Este hallazgo no confirma que la dirección esté activa ni que sea el contacto definitivo.
- Hay enlaces generales de WhatsApp a `https://wa.me/5493834966977` y otros enlaces con mensajes precargados dirigidos a `https://wa.me/543830000000`. La diferencia entre ambos destinos debe revisarse y confirmarse; no se debe decidir automáticamente cuál conservar.
- Los números y correos son datos de contenido, no rutas de React. Mantenerlos separados de la tabla de rutas y pedir confirmación si la fuente no permite establecer el valor correcto.

### G.3 Enlaces externos y recursos

- Se encontraron enlaces a Google Fonts, Instagram, Facebook, WhatsApp y Google Maps. Deben clasificarse como recursos o destinos externos, no como rutas internas de páginas React.
- Las páginas enlazan a `../../css/style.css` y `../../imagenes/aconquija_icono.png`. Durante la migración, comprobar la existencia y el uso real de los recursos antes de decidir cómo trasladarlos.
- La salida muestra enlaces a mapas para destinos como Balneario Municipal Buena Vista, Yunka Suma, Cristo Redentor, Río Potrero y Aconquija. Conservar sus destinos salvo que el usuario autorice cambios.

### G.4 Procedimiento y estado

1. Comparar cada referencia local con el inventario vigente y clasificarla como ruta interna, ancla, recurso, enlace externo, contacto o destino dudoso.
2. Verificar el contexto de `cabalgatas de pirca.html` y de los teléfonos/WhatsApp antes de decidir equivalencias.
3. Añadir al mapa de navegación una columna para el destino original, la ruta React propuesta y el estado de verificación.
4. No modificar archivos originales durante la auditoría; pedir confirmación cuando la intención del enlace o el dato de contacto no se pueda deducir con seguridad.

- [x] Recibida la salida de PowerShell para los diez archivos de tercer nivel.
- [x] Registrados enlaces internos, externos y de contacto relevantes para la migración.
- [x] Identificado un destino HTML que no figura en el inventario vigente.
- [ ] Confirmar las referencias dudosas y los datos de contacto.
- [ ] Completar y aprobar el mapa de rutas antes de implementar React Router.

**Resultado:** auditoría estática de enlaces de tercer nivel documentada; no se verificó navegación en navegador, no se modificó el sitio HTML/CSS/JavaScript original ni el código React, y no se ejecutaron pruebas.

## Anexo H — Decisión inicial sobre la estrategia de rutas React (2026-10-11)

### H.1 Decisión acordada

El usuario eligió la **opción A: rutas agrupadas por categoría** para organizar las páginas en React Router. La propuesta es utilizar segmentos legibles como `/experiencias/...`, `/lugares/...` y `/eventos/...`, en lugar de copiar las rutas físicas de los HTML originales.

Esta decisión fija el criterio de organización, pero **no aprueba todavía las rutas individuales ni autoriza a implementarlas**. Cada destino se debe contrastar con el contenido y los enlaces de las 15 páginas incluidas en el alcance vigente. Las rutas candidatas se considerarán provisionales hasta que el usuario revise y apruebe el mapa completo.

### H.2 Revisión de la página 1 de 15: página principal

**Origen:** `index.html` en la raíz del sitio original.

**Destino candidato:** `/`.

La auditoría estática de los atributos `href` de la página principal encontró enlaces a cuatro páginas de segundo nivel y cinco páginas de tercer nivel que sí figuran en el inventario vigente. También aparecen anclas a secciones de la página (`#explorar`, `#lugares`, `#estaciones`, `#servicios` y `#sobre`), enlaces externos de redes/contacto, recursos de fuentes e icono, y algunos enlaces `#` cuyo comportamiento de destino aún debe revisarse.

Para la migración, las anclas de la página principal deben seguir apuntando a secciones reales de esa página, y los enlaces a otras páginas deben convertirse a las rutas React que se aprueben. Los enlaces externos y recursos no deben confundirse con rutas internas. Los enlaces `href="#"` se mantienen como pendientes de inspección; no se les asigna un destino inventado.

Esta revisión es estática: no se probó la navegación en navegador ni se confirmó el comportamiento de los enlaces.

### H.3 Procedimiento para continuar el mapa

1. Revisar las páginas de forma ordenada y registrar para cada una: archivo de origen, función/contenido, enlaces a otras páginas del inventario, enlaces a secciones, destinos externos y referencias dudosas.
2. Proponer un destino legible bajo la categoría que corresponda; si la categoría no es clara, marcarla como pendiente en vez de decidir por suposición.
3. Revisar todos los destinos propuestos en una tabla única y obtener aprobación del usuario antes de implementar React Router.
4. Documentar nuevos hallazgos en este archivo y cada modificación documental en `Registro.md`.

- [x] Elegida por el usuario la estrategia de rutas agrupadas por categoría.
- [x] Revisados los tipos principales de enlaces de `index.html` a partir de la salida de PowerShell compartida.
- [ ] Revisar y proponer las rutas de las cuatro páginas de segundo nivel.
- [ ] Revisar y proponer las rutas de las diez páginas de tercer nivel.
- [ ] Resolver o marcar como pendientes los destinos dudosos y enlaces `href="#"`.
- [ ] Presentar y aprobar el mapa definitivo antes de escribir código de rutas.

**Resultado:** criterio de rutas acordado y primera revisión documentada como provisional. No se modificó código React ni el sitio original, no se implementaron rutas y no se ejecutaron pruebas.

## Anexo I — Revisión de rutas de la página 2 de 15: Aconquija Respira Verde (2026-10-11)

**Archivo de origen:** `html/segundo_nivel/aconquija_respira_verde.html`.

**Ruta React candidata:** `/experiencias/respira-verde`. Es provisional y deberá validarse al comparar el contenido de la página con el mapa completo.

### I.1 Enlaces internos hacia páginas del inventario vigente

La auditoría estática encontró referencias a estas páginas de tercer nivel que sí forman parte del inventario vigente:

| Destino original enlazado | Ruta React candidata | Estado |
|---|---|---|
| `../tercer_nivel/tuneles_rio_potrero.html` | `/lugares/tuneles-rio-potrero` | Provisional; confirmar categoría al revisar el contenido |
| `../tercer_nivel/bosque_de_alisos.html` | `/lugares/bosque-de-alisos` | Provisional |
| `../tercer_nivel/rio_potrero.html` | `/lugares/rio-potrero` | Provisional |
| `../tercer_nivel/yunka_suma.html` | `/lugares/yunka-suma` | Provisional |

### I.2 Destinos dudosos o no incluidos en el inventario

- Se detectó `../tercer_nivel/Cruce de los Nevados.html`. El nombre contiene espacios y no coincide con ninguno de los diez archivos de tercer nivel del inventario vigente. No se asigna una ruta React ni se crea una página hasta confirmar el destino pretendido.
- Se detectaron `lugares/cabalgatas.html` y `lugares/senderismo.html`, que no figuran entre las 15 páginas incluidas en el alcance actual. Debe confirmarse si representan páginas que quedaron fuera del inventario, secciones internas, contenido que debe integrarse en otra página o referencias obsoletas. No asumir que deben crearse.

### I.3 Recursos y estado de verificación

Las referencias a hojas de estilo, imágenes, fuentes y redes sociales deben clasificarse por separado de las rutas de navegación React. La presencia de un `href` en el HTML no demuestra por sí sola que el destino cargue correctamente.

- [x] Revisados estáticamente los destinos `href` compartidos para esta página.
- [x] Propuesta de ruta React registrada como provisional.
- [x] Enlaces a páginas inventariadas separados de los destinos dudosos/no inventariados.
- [ ] Confirmar el destino de “Cruce de los Nevados”.
- [ ] Confirmar la intención de los enlaces de cabalgatas y senderismo.
- [ ] Verificar navegación en navegador cuando exista una versión React navegable.

**Resultado:** revisión estática documentada. No se modificó el HTML original ni el código React; no se implementaron rutas y no se ejecutaron pruebas de navegador.


## Anexo J — Revisión de la página 3 de 15: Cultiva Tradición (2026-10-11)

**Archivo revisado:** `html/segundo_nivel/cultiva_tradicion.html` (501 líneas). Revisión estática del HTML remoto en `main`; no se ejecutó la página en navegador.

### Hallazgos para el mapa de rutas

- **Contenido principal:** el `<h1>` es “Cultiva Tradicion”. El texto de presentación lo describe como un recorrido turístico que reúne naturaleza, costumbres y trabajo local. La página funciona como un circuito o colección temática, aunque varias tarjetas corresponden a eventos culturales concretos.
- **Ruta React candidata según la convención elegida:** `/experiencias/cultiva-tradicion`. Se mantiene como propuesta provisional hasta revisar las 15 páginas y aprobar el mapa completo.
- **Enlaces internos hacia páginas inventariadas:**
  - `../tercer_nivel/fiesta_bandoneon.html` → candidata a una ruta de la categoría eventos, por ejemplo `/eventos/fiesta-del-bandoneon` (slug pendiente de decisión).
  - `../tercer_nivel/festival_mayor_aconquija.html` → candidata a `/eventos/festival-mayor` (slug pendiente de confirmar).
  - `../tercer_nivel/desfile_civico.html` → candidata a una ruta de eventos o tradiciones; decidir la categoría al comparar el contenido de la página destino.
  - La navegación general vuelve a `index.html` y a sus anclas `#explorar`, `#lugares`, `#estaciones`, `#servicios` y `#sobre`; en React deberán convertirse en navegación interna compatible con la ruta final.
- **Destinos no incluidos en el inventario vigente de 15 páginas:** `lugares/cabalgatas.html`, `lugares/estrellas.html`, `lugares/quebrada.html`, `lugares/gastronomia.html`, `lugares/bosque.html`, `lugares/artesanias.html`, `lugares/laguna.html`, `lugares/filo-amanecer.html` y `lugares/mirador.html`. No deben convertirse automáticamente en rutas React: primero hay que confirmar si son enlaces obsoletos, contenido que se decidió excluir o destinos que necesitan una decisión del usuario.
- **Criterio de clasificación:** no clasificar toda la página como “evento” solo porque contiene varias tarjetas culturales. Su introducción la presenta como un circuito/recorrido; las páginas destino de festivales y desfile se evaluarán individualmente por su contenido.

### Estado de esta revisión

Página 3 de 15 revisada estáticamente. Se documentaron la ruta candidata, los enlaces a tres páginas incluidas en el inventario y los destinos no inventariados. Queda pendiente revisar las páginas destino y decidir sus slugs definitivos. No se modificó código React ni el sitio HTML/CSS/JavaScript original; no se ejecutaron pruebas de navegador.


## Anexo K — Revisión de la página 4 de 15: Noches Estrelladas / Planetario Janaxpacha Huasi (2026-10-11)

**Archivo revisado:** `html/segundo_nivel/noches_estrelladas.html` (591 líneas). Revisión estática del HTML de la rama `main`; no se ejecutó en navegador.

### Hallazgos para el mapa de rutas

- **Título y contenido principal:** el título del documento y el `<h1>` identifican el contenido como “Planetario Janaxpacha Huasi”. Por lo tanto, aunque el archivo se llame `noches_estrelladas.html`, la página está centrada en un atractivo concreto: el planetario.
- **Ruta React candidata:** `/lugares/planetario-janaxpacha-huasi`. El usuario aprobó expresamente esta ruta candidata el 2026-10-11. Esto aprueba la propuesta para esta página, pero no equivale a aprobar el mapa completo de las 15 páginas.
- **Navegación interna:** los enlaces del encabezado regresan a `index.html` y a sus secciones. En la línea 31 aparece el destino anómalo `....//index.html#lugares`, que no coincide con el patrón de los demás enlaces `../../index.html#...`. Se documenta como probable error de ruta, sin corregir el HTML original.
- **Enlaces de visita y contacto:** hay un enlace a Google Maps en la línea 437, un enlace telefónico en la línea 469, una referencia de correo en la línea 470 cuyo atributo `href` comienza con `>Maxyz000@icloud.com` y un enlace de WhatsApp con mensaje en la línea 480. La referencia de correo parece mal formada; no se debe convertir en un destino React ni cambiar el dato sin confirmar el correo correcto.
- **Otros destinos externos:** se encontró un enlace a una búsqueda de Google Maps sobre Aconquija en la línea 491. Estos enlaces externos/contacto deben conservarse como tales, no mapearse como rutas internas.
- **Recursos locales referenciados:** `../../imagenes/planetario/planetario_3.webp`, `planetario_4.webp`, `noche.webp` y `planetario_2.webp`, además de los logotipos y `../../js/scrip.js`. Las referencias se anotan para preservar la asociación de imágenes e interacción al migrar; esta revisión del HTML no confirma por sí sola que cada recurso cargue correctamente en navegador.
- **Convención de categorías:** el nombre de archivo “noches estrelladas” no debe imponerse como slug definitivo si la página visible identifica otro contenido. La propuesta prioriza el nombre del atractivo, sujeto a aprobación.

### Estado de esta revisión

Página 4 de 15 revisada estáticamente. Se documentaron una ruta candidata, una referencia de navegación sospechosa, un enlace de correo mal formado y los recursos principales. No se modificó código React ni el sitio HTML/CSS/JavaScript original; no se implementaron rutas ni se ejecutaron pruebas de navegador.


### Actualización posterior a la revisión inicial — 2026-10-11

- **Confirmación del usuario:** informa que ya corrigió los problemas señalados en `html/segundo_nivel/noches_estrelladas.html` y confirma que le gusta la ruta `/lugares/planetario-janaxpacha-huasi`.
- **Estado de las incidencias:** las referencias sospechosas descritas arriba quedan marcadas como reportadas como corregidas por el usuario; todavía no se han vuelto a inspeccionar en el archivo para verificar los cambios. No asumir que siguen presentes ni afirmar que se comprobaron.
- **Estado de la ruta:** aprobada por el usuario como propuesta de ruta para esta página. El mapa global sigue pendiente hasta completar y revisar el inventario de 15 páginas.
- **Alcance:** solo se actualiza documentación. No se modifica el código React ni se implementan rutas.


## Anexo L — Página 5 de 15: Pucará de Aconquija

**Archivo revisado:** `html/segundo_nivel/pucara_aconquija.html` (599 líneas). Revisión estática del archivo en la rama `main`; no se ejecutó en navegador.

### Hallazgos para el mapa de rutas

- **Título y contenido principal:** el título del documento es “Pucará de Aconquija — Aconquija Turismo” y el H1 de la línea 101 es “Pucará de Aconquija”. El contenido trata el sitio arqueológico, su contexto histórico, acceso, equipamiento recomendado y galería.
- **Ruta React:** `/lugares/pucara-de-aconquija`. El usuario aprobó expresamente esta ruta el 2026-10-11. La ruta queda aprobada para esta página; el mapa global de las 15 páginas sigue pendiente de revisión y aprobación.
- **Categorías descriptivas visibles:** la página usa etiquetas “Patrimonio Mundial UNESCO”, “Arqueología Inca” y “Monumento Histórico Nacional” (líneas 95–97). Son datos de contenido que conviene preservar al migrar.
- **Navegación interna:** los enlaces del encabezado, breadcrumb y pie apuntan a `../../index.html` o a secciones del inicio, como `../../index.html#lugares`. No se detectó en la revisión textual el patrón extraño señalado en la página anterior.
- **Mapa y contacto:** el enlace “Ver en el mapa” de la línea 431 usa un enlace corto de Google Maps. En las líneas 461–462 hay posibles inconsistencias entre los destinos y los datos visibles: el teléfono muestra `+54 383 4966977` pero el `href` usa `tel:+5438300000`; el texto visible es `Maxyz000@icloud.com` pero el `href` apunta a `mailto:info@aconquija.tur.ar`. El pie muestra además `info@aconquija.tur.ar` y `+54 383 000 0000` (líneas 547–548). No se deben elegir datos correctos por suposición; confirmar con el usuario antes de migrarlos como contactos definitivos.
- **WhatsApp:** hay enlaces de contacto/reserva en las líneas 56, 472 y 562. Se conservan como destinos externos, no como rutas internas. La revisión estática no confirma que los números estén activos.
- **Imágenes:** el hero referencia `../../imagenes/ruinas_del_pucara/ruinas.webp` (línea 80). La galería referencia `ruinas_3.webp`, `ruinas_2.webp`, `ruina.webp` y `ruinas_4.webp` bajo `../../imagenes/ruinas_del_pucara/` (líneas 313, 327, 341 y 354). La tercera imagen tiene `alt=""`; la segunda describe explícitamente una “imagen ilustrativa de arquitectura inca”. Revisar estos textos alternativos y la correspondencia de las imágenes al validar recursos, sin cambiar los originales ahora.
- **Recursos compartidos:** hoja de estilos `../../css/style.css`, icono `../../imagenes/aconquija_icono.png`, logotipos `../../imagenes/logo_aconquija(1).png` y `../../imagenes/logo_aconquija(2).png`, y script `../../js/scrip.js`. Las referencias fueron encontradas en el HTML, pero esta revisión no verifica que los archivos carguen.
- **Interacción a conservar:** hay una galería con lightbox y controles anterior/siguiente/cerrar, además de botones de compartir. Deben inventariarse para la futura migración a componentes React; no se implementan en esta etapa.

### Estado de esta revisión

Página 5 de 15 revisada estáticamente. Se documentaron una ruta candidata, la estructura de contenido, los recursos referenciados, la galería/lightbox y discrepancias aparentes en los enlaces de contacto. No se modificó código React ni el sitio HTML/CSS/JavaScript original; no se implementaron rutas ni se ejecutaron pruebas de navegador.


## Anexo M — Página 6 de 15: Aconquija Respira Verde

**Archivo revisado:** `html/segundo_nivel/aconquija_respira_verde.html` (400 líneas). Revisión estática del archivo en la rama `main`; no se ejecutó en navegador.

### Hallazgos para el mapa de rutas

- **Título y contenido principal:** el título del documento es “Aconquija Respira Verde — Circuito Turístico” y el H1 de la línea 81 es “Respira Verde”. La página presenta una colección de atractivos para armar un recorrido, por lo que su función es la de un circuito turístico, no la de un atractivo individual.
- **Ruta React aprobada para esta página:** `/circuitos/respira-verde`. El usuario aprobó esta ruta el 2026-10-11. La categoría `circuitos` distingue el recorrido de los atractivos individuales en `/lugares/...`; el mapa global de las 15 páginas sigue pendiente de revisión y aprobación.
- **Enlaces a páginas de atractivos:** aparecen destinos a `../tercer_nivel/tuneles_rio_potrero.html` (línea 92), `../tercer_nivel/bosque_de_alisos.html` (líneas 122 y 289), `../tercer_nivel/rio_potrero.html` (línea 175), `../tercer_nivel/yunka_suma.html` (línea 202) y `../tercer_nivel/Cruce de los Nevados.html` (línea 230). Se deben comparar con los nombres reales de archivo antes de establecer las rutas React definitivas.
- **Destinos potencialmente problemáticos:** las tarjetas de Cabalgatas y Senderismo apuntan a `lugares/cabalgatas.html` (línea 149) y `lugares/senderismo.html` (línea 260), rutas relativas que, desde este archivo, podrían resolver a una carpeta inexistente bajo `segundo_nivel/lugares/`. Verificar el árbol real del repositorio antes de decidir el destino.
- **Contenido y tratamiento de las tarjetas:** el usuario aclara que las tarjetas deben conservarse como están por ahora, porque todavía faltan definir/desarrollar sus destinos concretos. La repetición de “Bosque de los Alisos” es intencional y se utilizó como referencia visual, no como duplicación accidental. La tarjeta de Senderismo tiene un encabezado vacío en la línea 270 y la tarjeta de Túneles usa el título “Túneles Quebrada de las cañas” (línea 101) mientras el alt de su imagen dice “Túneles de Yunca” (línea 94). Registrar estas observaciones sin borrar, renombrar ni reorganizar tarjetas en esta etapa. Los destinos internos definitivos se decidirán al diseñar y aprobar el mapa completo; no hace falta inventar ahora una dirección para cada tarjeta.
- **Imágenes:** referencias locales a `../../imagenes/tuneles.webp`, `../../imagenes/bosque_de_alisos/bosque_de_alisos.webp`, `../../imagenes/cabalgata.webp`, `../../imagenes/rio.jpeg`, `../../imagenes/otoño.jpg` y `../../imagenes/cruz.webp`. La tarjeta de Senderismo usa además una imagen remota de Unsplash (línea 262). La inspección estática no confirma que los archivos existan o carguen.
- **Navegación y recursos compartidos:** el encabezado y pie vuelven a secciones del inicio mediante `../../index.html#...`. La página referencia `../../css/style.css`, `../../css/atractivos.css`, `../../imagenes/aconquija_icono.png`, logotipos y `../../js/scrip.js`.
- **Contacto/acción:** incluye enlaces a WhatsApp para redes y para “Armamos el recorrido con vos” (líneas 54 y 338), que deben conservarse como destinos externos en la futura migración.

### Estado de esta revisión

Página 6 de 15 revisada estáticamente. Se documentó la función de circuito turístico, la ruta candidata, los enlaces a atractivos, tarjetas con contenido posiblemente incompleto/duplicado y los recursos referenciados. No se modificó código React ni el sitio HTML/CSS/JavaScript original; no se implementaron rutas ni se ejecutaron pruebas de navegador.


### Aclaración del usuario — tarjetas de Respira Verde

El usuario confirmó que aprueba `/circuitos/respira-verde` y aclaró que las tarjetas deben mantenerse tal como están por ahora: todavía faltan definir o desarrollar sus destinos concretos. La repetición de Bosque de los Alisos es intencional y funciona como referencia visual. No tratarla como error ni eliminarla; no modificar el diseño ni asignar rutas definitivas a las tarjetas antes de revisar y aprobar el mapa global.


## Anexo N — Página 7 de 15: Balneario Municipal Buena Vista

**Archivo revisado:** `html/tercer_nivel/balneario_buena_vista.html`. Revisión estática del HTML en la rama `main`; no se ejecutó en navegador ni se verificó que los recursos existan o carguen.

### Hallazgos para el mapa de rutas

- **Título y contenido principal:** el título del documento es “Balneario Municipal Buena Vista — Aconquija Turismo” y el H1 es “Balneario Municipal Buena Vista”. La página describe la pileta municipal, sus sectores de profundidad, tobogán, quinchos y asadores; incluye acceso, equipamiento, galería e información lateral.
- **Ruta React aprobada para esta página:** `/lugares/balneario-municipal-buena-vista`. El usuario aprobó expresamente esta ruta el 2026-10-11. El mapa global de las 15 páginas sigue pendiente de revisión y aprobación.
- **Categorías y datos presentados:** “Pileta Municipal”, “Recreación Familiar” y “Buena Vista, Aconquija”; duración “Medio día”, temporada primavera/verano y aptitud familiar. Son contenidos del HTML que se deben preservar durante la migración, sin asumir que sus datos están actualizados externamente.
- **Navegación y recursos compartidos:** enlaces del encabezado y pie al inicio y sus secciones mediante `../../index.html#...`; hoja `../../css/style.css`, icono `../../imagenes/aconquija_icono.png`, logotipos `../../imagenes/logo_aconquija(1).webp` y `../../imagenes/logo_aconquija(2).webp`, y script `../../js/scrip.js`.
- **Imágenes y galería:** hero y galería referencian `../../imagenes/balneario_municipal/balneario.webp`, `balneario_2.webp`, `balneario_5.webp` y `balneario_4.webp`. Los textos alternativos de las primeras tres las identifican como “imagen ilustrativa”. Las imágenes primera y cuarta tienen `data-full=""`, a diferencia de las otras dos, que indican una ruta. Se registra para comprobar durante las pruebas de la futura migración, sin corregir el original ahora.
- **Mapa y contacto:** el mapa apunta a una búsqueda de Google Maps para “Balneario Municipal Buena Vista Aconquija Catamarca”. La ficha muestra el teléfono `0383 496-1062` con `tel:+543834961062` y el correo `info@aconquija.tur.ar`. El botón de WhatsApp usa `https://wa.me/543830000000`, mientras que los enlaces de WhatsApp de redes y pie usan `https://wa.me/5493834966977`; hay además un teléfono genérico en el pie (`+54 383 000 0000`). No se debe elegir ni cambiar un dato por suposición; confirmar cuáles son los contactos definitivos antes de migrar.
- **Detalles estructurales observados:** dentro del encabezado hay un contenedor de cierre adicional después del bloque de iconos, y los iconos de Facebook y WhatsApp incluyen elementos con clase `icon-circle` anidados. Se anotan para revisión visual/DOM posterior; no se modifica el HTML original en esta etapa.
- **Interacciones:** barra de progreso de lectura, navegación adaptable, galería con lightbox y controles anterior/siguiente/cerrar, compartir por Facebook/WhatsApp y copiar enlace. Se deberán inventariar y probar al migrar a React.

### Estado de esta revisión

Página 7 de 15 revisada estáticamente. Se documentaron la ruta candidata, contenido, recursos, interacciones y asuntos pendientes de verificación en imágenes y contactos. No se modificó código React ni el sitio HTML/CSS/JavaScript original; no se implementaron rutas ni se ejecutaron pruebas de navegador.


### Aprobación de ruta — Balneario Municipal Buena Vista

El usuario aprobó expresamente la ruta React `/lugares/balneario-municipal-buena-vista` para la página `html/tercer_nivel/balneario_buena_vista.html` el 2026-10-11. La aprobación aplica a esta página; el mapa global de las 15 páginas continúa pendiente. No se modificó código ni se implementó la ruta.


## Anexo O — Página 8 de 15: Bosque de Alisos

**Archivo revisado:** `html/tercer_nivel/bosque_de_alisos.html`. Revisión estática del HTML en la rama `main`; no se ejecutó en navegador ni se verificó que los recursos existan o carguen.

### Hallazgos para el mapa de rutas

- **Título y contenido principal:** el título del documento es “Bosque de Alisos — Aconquija Turismo” y el H1 es “Bosque de Alisos”. Presenta el bosque montano de yungas, flora y fauna, duración y dificultad estimadas, acceso, equipamiento y galería.
- **Ruta React aprobada:** `/lugares/bosque-de-alisos`. El usuario la autorizó expresamente el 2026-10-11. La aprobación aplica a esta página; el mapa global de 15 páginas sigue pendiente de revisión y aprobación.
- **Relación con Respira Verde:** la página describe al Bosque de Alisos como parte del circuito Respira Verde y menciona conexiones con Charqueadero, Río Potrero y los túneles. Esto no cambia la ruta independiente propuesta para el circuito (`/circuitos/respira-verde`): esta página representa un atractivo individual.
- **Recursos de imagen con posibles errores:** el fondo hero usa `../../imagenes/bosque_de_alisos/bosque_de_alisos_2.webo` (extensión escrita como `.webo`), mientras la galería referencia `../../imagenes/bosque_de_alisos/bosque.webp` y `../../imagenes/bosque_de_alisos/bosque_de_alisos_2.webp`. Dos imágenes de la galería tienen `src=""`; el hero y otras imágenes tienen `data-full=""`. Registrar para verificar contra el árbol de imágenes y las pruebas de navegador; no corregir ahora el sitio original.
- **Contenido editorial:** la galería explica que algunas imágenes de bosque nuboso son ilustrativas. Debe conservarse esa distinción al migrar y no presentarse una imagen ilustrativa como fotografía local confirmada.
- **Navegación y recursos compartidos:** enlaces de navegación al inicio y sus secciones; CSS `../../css/style.css`, icono `../../imagenes/aconquija_icono.png`, logotipo de encabezado `../../imagenes/logo_aconquija(1).webp`, logotipo del pie `../../imagenes/logo_aconquija(2).png` y script `../../js/scrip.js`. Las extensiones distintas de los logotipos deben verificarse contra los archivos reales.
- **Mapa y contacto:** el mapa apunta a una búsqueda de Google Maps para Yunka Suma, Aconquija. La página contiene datos de contacto/WhatsApp distintos de los que deben tomarse como referencia central. Por instrucción expresa del usuario, para la migración los datos oficiales de contacto y redes sociales (correo electrónico, teléfono, WhatsApp, Instagram, Facebook, TikTok y cualquier otra red/canal) deben extraerse de `index.html`; cuando una página interior difiera, prevalece `index.html`. No copiar automáticamente sus datos locales ni inventar datos faltantes. El enlace de Google Maps sigue siendo un destino externo específico de este atractivo, no un dato de contacto general.
- **Detalles estructurales:** se observa un cierre `</div>` adicional después del bloque de iconos del encabezado y contenedores `icon-circle` anidados en los accesos de Facebook y WhatsApp. Dejar pendiente la verificación estructural/visual; no modificar el original en esta fase.
- **Interacciones:** barra de progreso de lectura, navegación adaptable, galería con lightbox y controles anterior/siguiente/cerrar, compartir por Facebook/WhatsApp y copiar enlace.

### Estado de esta revisión

Página 8 de 15 revisada estáticamente. Se documentaron la ruta aprobada, la relación con Respira Verde, recursos de imágenes posiblemente mal referenciados y las interacciones. No se modificó código React ni el sitio HTML/CSS/JavaScript original; no se implementaron rutas ni se ejecutaron pruebas de navegador.


### Aprobación de ruta — Bosque de Alisos

El usuario aprobó expresamente la ruta React `/lugares/bosque-de-alisos` para `html/tercer_nivel/bosque_de_alisos.html` el 2026-10-11. La aprobación aplica a esta página individual; el mapa global de las 15 páginas continúa pendiente. No se modificó código ni se implementó la ruta.

## Criterio transversal confirmado por el usuario — Contacto y redes sociales

El 2026-10-11, el usuario indicó que toda la información general de contacto y redes sociales debe tomarse de `index.html`, para evitar discrepancias entre páginas interiores. Este criterio se aplica a correo electrónico (incluido Gmail u otro proveedor), teléfono, WhatsApp, Instagram, Facebook, TikTok y cualquier otra red social o canal de contacto.

- `index.html` es la referencia principal para extraer esos datos y enlaces al migrar las páginas.
- Si una página interior contiene valores distintos, no deben copiarse como datos globales: prevalece la información de `index.html`.
- No se debe inventar un dato si falta en `index.html`, ni cambiar el HTML original como parte de esta auditoría.
- Los enlaces específicos de un atractivo —por ejemplo, su ubicación en Google Maps— se analizan aparte y no se sustituyen por enlaces generales de contacto.
- Este criterio documenta la fuente de verdad para la futura migración; todavía no autoriza cambios en componentes React ni en el sitio original.


## Anexo P — Página 9 de 15: Cristo Redentor de Aconquija

**Archivo revisado:** `html/tercer_nivel/cristo_redentor.html`. Revisión estática del HTML en `main`; no se ejecutó en navegador ni se verificó que las imágenes carguen.

### Hallazgos para el mapa de rutas

- **Título y contenido principal:** título “Cristo Redentor de Aconquija — Aconquija Turismo” y H1 “Cristo Redentor de Aconquija”. Describe un mirador en El Lindero, vistas de los Nevados del Aconquija, sendero corto de 30 a 60 minutos ida y vuelta, acceso libre y recomendaciones para la visita.
- **Ruta React candidata:** `/lugares/cristo-redentor`. Es una propuesta provisional, pendiente de aprobación del usuario y de contrastarla con el mapa global de 15 páginas.
- **Ubicación y mapa:** el contenido indica El Lindero, municipio de Aconquija. El enlace de mapa usa una búsqueda de Google Maps para “Cristo Redentor Aconquija Catamarca”; debe conservarse como enlace externo específico del atractivo, no como ruta interna React.
- **Imágenes:** el fondo hero referencia `../../imagenes/cristo_redentor/cristo_redentor_2.webp`. La primera imagen de galería es externa de Unsplash y está marcada explícitamente como ilustrativa. Las otras tres imágenes usan `../imagenes/montaña.webp`, `../imagenes/chica.webp` y `../imagenes/rio.webp`; desde la ubicación `html/tercer_nivel/`, esas rutas relativas parecen apuntar a `html/imagenes/` en vez de la carpeta raíz `imagenes/`. Las tres también tienen `data-full=""`. Registrar para comprobar contra los archivos reales y las pruebas de navegador; no corregir el original ahora.
- **Contacto y redes sociales:** esta página contiene valores genéricos de teléfono/correo y enlaces sociales propios. Conforme al criterio transversal confirmado por el usuario, durante la migración los datos globales de contacto y redes (correo, teléfono, WhatsApp, Instagram, Facebook, TikTok y otros canales) deben extraerse de `index.html`; no copiar los valores distintos de esta página ni inventar datos faltantes. Los botones de compartir son interacciones de la página y se documentan por separado de los enlaces generales de perfil.
- **Navegación y recursos compartidos:** CSS `../../css/style.css`, favicon `../../imagenes/aconquija_icono.png`, logotipo de cabecera `../../imagenes/logo_aconquija(1).png`, logotipo de pie `../../imagenes/logo_aconquija(2).webp` y JavaScript `../../js/scrip.js`. Las extensiones de los logotipos difieren de otras páginas y deben verificarse contra el inventario real.
- **Detalles estructurales:** se observa un cierre `</div>` adicional cerca del final del encabezado, y hay contenedores `icon-circle` anidados en los accesos de Facebook/WhatsApp. En el pie, los iconos de Instagram y Facebook aparecen como elementos visuales sin enlace propio; verificar si deben reutilizar los destinos oficiales de `index.html` al migrar.
- **Interacciones:** navegación adaptable, barra de progreso de lectura, galería/lightbox con anterior/siguiente/cerrar, botones para compartir por Facebook y WhatsApp, y copiar enlace.

### Estado de esta revisión

Página 9 de 15 revisada estáticamente. Se documentaron la ruta candidata, el contenido del mirador, referencias de imágenes que requieren verificación, discrepancias de contacto sujetas al criterio de `index.html`, recursos compartidos e interacciones. No se modificó código React ni el sitio HTML/CSS/JavaScript original; no se implementó la ruta ni se ejecutaron pruebas de navegador.


## Criterio transversal confirmado por el usuario — Imágenes ilustrativas eliminadas

El usuario aclaró el 2026-10-11 que las referencias vacías de imágenes pueden ser intencionales: eliminó imágenes ilustrativas que no estaban alojadas localmente. Aplicar este criterio en la auditoría y la futura migración:

- No volver a agregar imágenes ilustrativas externas que el usuario haya eliminado ni buscar sustitutos por iniciativa propia.
- Una referencia vacía como `src=""` o `data-full=""` no se debe asumir automáticamente como un error ni rellenar con una imagen de Internet. Registrar el caso y respetar que el recurso puede haber sido retirado intencionalmente.
- En la futura implementación React, las imágenes deben tratarse como opcionales. Si no existe una imagen local aprobada, se puede dejar el espacio vacío o no renderizar el elemento de imagen, según el diseño acordado; evitar un `src=""` en el elemento `img` si puede causar que el navegador cargue la propia página como recurso.
- Las imágenes alojadas localmente se conservarán solo cuando su archivo y ruta se puedan comprobar. Las rutas sospechosas se documentan para verificación, no se corrigen a ciegas.
- No se modifica el HTML original ni el código React antes de la aprobación del mapa definitivo de rutas.

Este criterio se suma a las reglas del proyecto y a la indicación de extraer los datos generales de contacto y redes sociales desde `index.html`. Ante una regla existente en los documentos del proyecto que sea más específica, se respetará y se aclarará cualquier conflicto antes de implementar.


## Anexo Q — Página 10 de 15: Desfile Cívico Escolar (2026-10-11)

**Archivo revisado:** `html/tercer_nivel/desfile_civico.html`. Revisión estática del HTML remoto en `main`; no se ejecutó en navegador y no se verificó que los recursos carguen.

### Hallazgos para el mapa de rutas

- **Título y contenido principal:** título “Desfile Cívico Escolar — Aconquija Turismo” y H1 “Desfile Cívico Escolar”. Describe una actividad comunitaria de verano en el Complejo Municipal de Aconquija, en El Lindero: participación de escuelas, vecinos a caballo y policía, feria posterior, recomendaciones para asistir y fecha variable, habitualmente en enero según el texto de la página.
- **Ruta React candidata:** `/eventos/desfile-civico-escolar`. Es provisional y queda pendiente de aprobación del usuario y de la revisión del mapa global; no se implementó.
- **Fecha y contenido informativo:** el propio HTML aclara que la fecha exacta cambia según el año y recomienda confirmarla antes de viajar. No convertir la referencia a enero en una fecha anual fija ni añadir fechas no presentes en el original.
- **Ubicación y mapa:** el contenido ubica la actividad en el Complejo Municipal, El Lindero, Aconquija. El enlace de Google Maps busca “Complejo Municipal Aconquija Catamarca”; es un destino externo específico, no una ruta React.
- **Galería e imágenes:** la primera imagen de galería procede de Unsplash y el texto alternativo y el pie de galería la identifican como ilustrativa. Las tres imágenes siguientes usan `../imagenes/montaña.png`, `../imagenes/chica.PNG` y `../imagenes/rio.jpeg`; desde `html/tercer_nivel/`, esas rutas relativas parecen apuntar a `html/imagenes/`, no a la carpeta raíz `imagenes/`. Sus atributos `data-full` están vacíos. No completar ni corregir estas referencias por suposición: comprobar los archivos locales y respetar el criterio del usuario de no reponer ilustraciones externas retiradas.
- **Tarjetas relacionadas:** se muestran “Festival Mayor de Aconquija”, “Cabalgatas de Pirca” y “Planetario Janaxpacha Huasi”. El enlace a `festival_mayor_aconquija.html` corresponde a un archivo del inventario actual; `../segundo_nivel/noches_estrelladas.html` corresponde a otra página inventariada. El destino `cabalgatas de pirca.html` contiene espacios y no coincide con los archivos de tercer nivel listados; queda pendiente confirmar su destino y no debe asignársele una ruta nueva por inferencia.
- **Navegación y recursos compartidos:** el HTML enlaza a `../../css/style.css`, `../../imagenes/logo_aconquija(1).png`, `../../imagenes/logo_aconquija(2).png` y `../../js/scrip.js`. Las rutas y extensiones deben contrastarse con el inventario de archivos antes de migrarlas.
- **Contacto y redes:** aparecen Instagram, Facebook y WhatsApp, además de teléfono y correo en la ficha. Por el criterio transversal confirmado por el usuario, los datos globales de contacto y redes sociales se tomarán de `index.html`; no copiar automáticamente los datos distintos de esta página ni inventar valores. Los enlaces de compartir y el mapa específico se evalúan por separado.
- **Interacciones:** navegación adaptable, galería/lightbox, botones para compartir por Facebook y WhatsApp y botón para copiar enlace. Deben conservarse como comportamientos a inventariar; no se probaron en navegador durante esta revisión.

### Estado de esta revisión

Página 10 de 15 revisada estáticamente. Se documentaron el contenido, la ruta candidata, los destinos relacionados, las referencias de imagen que requieren verificación y las interacciones. No se modificó código React ni el sitio HTML/CSS/JavaScript original; no se implementó la ruta ni se ejecutaron pruebas de navegador.


### Aprobación de ruta — Desfile Cívico Escolar

El usuario aprobó expresamente la ruta React `/eventos/desfile-civico-escolar` para `html/tercer_nivel/desfile_civico.html` el 2026-10-11. Esta aprobación corresponde a la página individual; el mapa global de las 15 páginas continúa pendiente. No se modificó código React ni el sitio original y la ruta no se implementó.


## Anexo R — Página 11 de 15: Festival Mayor de Aconquija

**Archivo revisado:** `html/tercer_nivel/festival_mayor_aconquija.html`. Revisión estática del HTML en la rama `main`; no se ejecutó en navegador ni se verificó la carga de recursos.

### Hallazgos para el mapa de rutas

- **Título y contenido principal:** título “Festival Mayor de Aconquija — Aconquija Turismo” y H1 “Festival Mayor de Aconquija”. Presenta el festival como evento popular de tres noches consecutivas (viernes a domingo), hacia fines de enero, en el Complejo Polideportivo Municipal Juan Higinio Vedia y el escenario Lindor Núñez Piosek. Incluye contexto cultural, venta de entradas, ubicación, recomendaciones para asistir y referencias a artistas de ediciones recientes.
- **Ruta React candidata:** `/eventos/festival-mayor`. Es provisional y queda pendiente de aprobación del usuario y de la revisión del mapa global de 15 páginas; no se implementó.
- **Fechas y entradas:** el contenido aclara que la fecha exacta varía y recomienda consultar la edición del año en curso. No fijar una fecha anual ni presentar precios, cartelera o disponibilidad como vigentes sin confirmación actualizada.
- **Ubicación y mapa:** el texto nombra el Complejo Polideportivo Municipal Juan Higinio Vedia y el enlace abre una búsqueda de Google Maps para Aconquija, Catamarca. Conservar como enlace externo específico; no confundir con la ruta interna.
- **Imágenes:** las cuatro imágenes de galería tienen `src=""`; tres también tienen `data-full=""`. El texto alternativo identifica imágenes de músicos/público como ilustrativas y distingue otras del entorno local. Según el criterio confirmado por el usuario, las referencias vacías pueden ser intencionales tras retirar ilustraciones: no reponer imágenes externas ni buscar sustitutos por iniciativa propia. Verificar solo los archivos locales si corresponde, y tratar imágenes no disponibles como opcionales en la futura implementación React.
- **Navegación y recursos compartidos:** enlaces al inicio y secciones del sitio; CSS `../../css/style.css`, logotipos `../../imagenes/logo_aconquija(1).png` y `../../imagenes/logo_aconquija(2).png`, y JavaScript `../../js/scrip.js`. Comprobar la existencia de los recursos antes de migrarlos, sin corregir rutas por suposición.
- **Contacto y redes:** la página incluye enlaces de Instagram, Facebook y WhatsApp, teléfono, correo y una llamada a “Reservar por WhatsApp”. Por el criterio transversal confirmado por el usuario, los datos generales de contacto y perfiles se extraerán de `index.html`; no reutilizar automáticamente los valores locales distintos ni inventar datos ausentes. El enlace de mapa se evalúa aparte.
- **Detalles e interacciones:** navegación adaptable, galería/lightbox con controles anterior/siguiente/cerrar, compartir por Facebook/WhatsApp y copiar enlace. El lightbox también tiene `src=""` inicialmente; evitar renderizar una imagen con fuente vacía si ello provoca una solicitud a la propia página. Las interacciones se identificaron en el código, pero no se probaron en navegador.
- **Tarjetas relacionadas:** esta página aparece como destino desde la tarjeta “Festival Mayor de Aconquija” en la página del Desfile Cívico Escolar, coherente con la categoría propuesta `/eventos/`; no se cambia ningún enlace del HTML original en esta fase.

### Estado de esta revisión

Página 11 de 15 revisada estáticamente. Se documentaron el contenido, la ruta candidata, la fecha variable, las imágenes vacías, los enlaces de contacto/mapa y las interacciones. No se modificó código React ni el sitio HTML/CSS/JavaScript original; no se implementó la ruta ni se ejecutaron pruebas de navegador.


## Aprobación de ruta — Página 11: Festival Mayor de Aconquija

- **Fecha de aprobación:** 2026-10-11.
- **Archivo original revisado:** `html/tercer_nivel/festival_mayor_aconquija.html`.
- **Ruta aprobada por el usuario:** `/eventos/festival-mayor`.
- **Alcance:** se aprueba únicamente el nombre y patrón de ruta para el mapa definitivo. No autoriza cambios en código ni migración de la página; estos siguen pendientes hasta aprobar el mapa completo.
- **Criterios que se conservan:** no completar referencias de imágenes vacías ni restaurar imágenes ilustrativas eliminadas; obtener contacto y redes globales desde `index.html`; verificar rutas locales antes de migrar.


## Anexo S — Página 12 de 15: Túneles del Río Potrero

**Archivo revisado:** `html/tercer_nivel/tuneles_rio_potrero.html`. Revisión estática del HTML en la rama `main`; no se ejecutó en navegador ni se comprobó la existencia física de los recursos locales.

### Hallazgos para el mapa de rutas

- **Título y contenido principal:** título “Túneles del Río Potrero — Aconquija Turismo” y H1 “Túneles del Río Potrero”. La página presenta los túneles del Cerro de Las Cañas como vestigios del proyecto hidroeléctrico Potrero del Clavillo, detenido en 1976; describe el entorno de yungas, los cursos de agua, el acceso desde Río Potrero, el equipamiento recomendado y la visita guiada dentro del circuito Respira Verde.
- **Ruta React candidata:** `/lugares/tuneles-del-rio-potrero`. Es una propuesta provisional, pendiente de aprobación expresa del usuario y de la aprobación del mapa completo de las 15 páginas. No se implementó.
- **Categoría y relación:** la página etiqueta la experiencia como trekking en yungas, historia e ingeniería y circuito Respira Verde. Puede pertenecer a la categoría de lugares y relacionarse con `/circuitos/respira-verde`, pero no se debe modificar ni crear navegación hasta aprobar el mapa.
- **Duración contradictoria:** el encabezado muestra “30 a 1,20 horas” y una característica dice “40 a 1,20 horas”, mientras que la ficha lateral informa “3 a 4 horas (ida y vuelta)”. No elegir ni corregir una duración durante la migración sin confirmación; registrar el dato para validarlo con el responsable del contenido.
- **Imágenes:** el fondo principal apunta a `../../imagenes/respira_verde/tuneles/tuneles.png`, que debe verificarse en el repositorio. Las cuatro imágenes de galería tienen `src=""`; la primera y la cuarta también tienen `data-full=""`. El texto identifica la foto de túnel como ilustrativa y el pie señala que el resto corresponde al entorno local. Conforme al criterio confirmado por el usuario, no restaurar ilustraciones externas ni completar referencias vacías por iniciativa propia. En React, las imágenes deben tratarse como opcionales y nunca renderizarse con `src=""`.
- **Ubicación y mapa:** el punto de partida indicado es la localidad de Río Potrero, Aconquija. El enlace abre Google Maps con la búsqueda `Rio Potrero Aconquija Catamarca`; el botón secundario abre una búsqueda general de Aconquija. Son enlaces externos y no rutas internas de la aplicación.
- **Contacto y redes:** hay enlaces a Instagram, Facebook y WhatsApp, teléfono y correo que parecen genéricos o de ejemplo, incluidos `+54 383 000 0000`, `info@aconquija.tur.ar` y un WhatsApp con número `543830000000`. Por el criterio transversal del usuario, los datos globales de contacto y redes se tomarán de `index.html`; no migrar estos valores locales como fuente de verdad.
- **Recursos compartidos:** CSS `../../css/style.css`, icono `../../imagenes/aconquija_icono.png`, logos `../../imagenes/logo_aconquija(1).png` y `../../imagenes/logo_aconquija(2).png`, JavaScript `../../js/scrip.js`. Verificar que existan antes de usarlos, sin cambiar el sitio original.
- **Estructura e interacciones:** hay un `</div>` extra cerca del cierre del encabezado. Se identifican barra de progreso, navegación adaptable, galería/lightbox anterior/siguiente/cerrar, compartir por Facebook/WhatsApp y copiar enlace. El lightbox comienza con `src=""`; evitar una solicitud accidental a la propia página en React. No se probó ninguna interacción en navegador.
- **Contenido a validar:** el texto usa distintas variantes de nombres de ríos y contiene frases que podrían requerir revisión editorial; no normalizar ni alterar afirmaciones geográficas/históricas sin aprobación.

### Estado de esta revisión

Página 12 de 15 revisada estáticamente. Se documentaron contenido, ruta candidata, duración contradictoria, referencias de imagen vacías, contactos, recursos y posibles detalles estructurales. No se modificó código React ni el sitio HTML/CSS/JavaScript original; la ruta no se implementó y las interacciones no se probaron en navegador.


## Aprobación de ruta — Página 12: Túneles del Río Potrero

- **Fecha de aprobación:** 2026-10-11.
- **Archivo original:** `html/tercer_nivel/tuneles_rio_potrero.html`.
- **Ruta aprobada expresamente por el usuario:** `/lugares/tuneles-del-rio-potrero`.
- **Alcance:** se aprueba la ruta para incluirla en el mapa definitivo. No se autoriza implementar la ruta ni modificar el código React; la implementación permanece pendiente hasta que el usuario apruebe el mapa completo.
- **Observaciones que siguen pendientes:** confirmar la duración, que aparece contradictoria en el HTML, y verificar recursos locales cuando corresponda. Respetar el criterio de imágenes vacías y tomar datos globales de contacto y redes desde `index.html`.


## Anexo T — Página 13 de 15: Río Potrero

**Archivo revisado:** `html/tercer_nivel/rio_potrero.html`. Revisión estática del HTML en la rama `main`; no se ejecutó en navegador ni se verificó físicamente la existencia de recursos.

### Hallazgos para el mapa de rutas

- **Título y contenido principal:** título “Río Potrero — Aconquija Turismo” y H1 “Río Potrero”. Describe la localidad del departamento Andalgalá, su ubicación entre las sierras de Aconquija y Narváez, los bosques de aliso de cerro, la confluencia de tres ríos, el camping y las posibilidades de senderismo. También presenta el acceso por la Ruta Provincial N.º 1 desde Catamarca y por la Cuesta del Clavillo desde Tucumán.
- **Ruta React candidata:** `/lugares/rio-potrero`. Es una propuesta provisional, pendiente de aprobación expresa y de la revisión del mapa completo de 15 páginas. No se implementó.
- **Relación con otras páginas:** el contenido se relaciona temáticamente con `/lugares/tuneles-del-rio-potrero` (ruta ya aprobada) y con el circuito Respira Verde. Esta relación no autoriza a modificar enlaces ni a implementar navegación antes de aprobar el mapa completo.
- **Imagen principal:** el contenedor hero utiliza `background-image: url('')`, por lo que la referencia está vacía. Las imágenes de galería también tienen `src=""`; algunas tienen además `data-full=""`. Según el criterio confirmado por el usuario, no restaurar ilustraciones eliminadas ni completar referencias vacías por iniciativa propia. En React, evitar renderizar imágenes con fuente vacía; tratarlas como opcionales y respetar el diseño aprobado.
- **Acceso y datos variables:** el texto indica que hay tramos de ripio y vados del río y recomienda consultar el estado del camino, especialmente después de lluvias. Mantener esta advertencia como contenido de la página, sin convertirla en una afirmación actual sobre transitabilidad.
- **Ubicación y mapa:** el enlace de mapa abre Google Maps con la búsqueda `Rio Potrero Aconquija Catamarca`. Es un destino externo, no una ruta React.
- **Contacto y redes:** la página incluye Instagram, Facebook y WhatsApp, teléfono `+54 383 000 0000`, correo `info@aconquija.tur.ar` y un enlace de WhatsApp con número genérico. Aplicar el criterio transversal del usuario: los datos globales de contacto y perfiles se extraen de `index.html`; no reutilizar los datos locales genéricos como fuente de verdad.
- **Recursos compartidos:** CSS `../../css/style.css`, icono `../../imagenes/aconquija_icono.png`, logos `../../imagenes/logo_aconquija(1).png` y `../../imagenes/logo_aconquija(2).png`, JavaScript `../../js/scrip.js`. Verificar archivos y rutas antes de la migración, sin alterar los originales.
- **Estructura e interacciones:** se identifica un cierre `</div>` adicional en el encabezado, además de navegación adaptable, barra de progreso, galería/lightbox, botones de compartir y copiar enlace. El lightbox comienza con una fuente vacía. Se detectaron posibles datos y enlaces de contacto genéricos; las interacciones no se probaron en navegador.
- **Contenido geográfico:** la descripción menciona Río del Campo, río Potrero y Río Las Chacras como confluencia, y conecta el punto con la Quebrada de las Cañas. Se registra como contenido original, sin verificación externa ni corrección editorial en esta fase.

### Estado de esta revisión

Página 13 de 15 revisada estáticamente. Se documentaron el contenido, la ruta candidata, las relaciones con otros destinos, las referencias de imagen vacías, los datos de contacto genéricos y los recursos/interacciones. No se modificó código React ni el sitio HTML/CSS/JavaScript original; la ruta no se implementó y las interacciones no se probaron en navegador.


## Aprobación de ruta — Página 13: Río Potrero

- **Fecha de aprobación:** 2026-10-11.
- **Archivo original:** `html/tercer_nivel/rio_potrero.html`.
- **Ruta aprobada expresamente por el usuario:** `/lugares/rio-potrero`.
- **Alcance:** se aprueba la ruta para el mapa definitivo; no se autoriza implementar rutas ni modificar código React. La implementación continúa pendiente de aprobación del mapa completo.
- **Observaciones pendientes:** las imágenes del hero y la galería contienen referencias vacías; no completarlas por suposición ni restaurar ilustraciones eliminadas. Los datos globales de contacto y redes deben obtenerse de `index.html`.


## Anexo U — Página 14 de 15: Yunka Suma

**Archivo revisado:** `html/tercer_nivel/yunka_suma.html`. Revisión estática del HTML en la rama `main`; no se ejecutó en navegador ni se verificó físicamente la existencia de recursos locales.

### Hallazgos para el mapa de rutas

- **Título y contenido principal:** título “Yunka Suma — Aconquija Turismo” y H1 “Yunka Suma”. Presenta la localidad como un refugio de montaña y última parada de Aconquija antes de cruzar hacia Tucumán por la Cuesta del Clavillo. Describe su ubicación a unos 1.470 msnm, los bosques nublados de aliso de cerro, el Río Las Chacras, opciones de alojamiento y el acceso desde Catamarca y Tucumán.
- **Ruta React candidata:** `/lugares/yunka-suma`. Propuesta provisional, pendiente de aprobación expresa del usuario y de la revisión del mapa completo. No se implementó.
- **Relaciones con el inventario:** la página puede relacionarse con el circuito Respira Verde y con otros destinos naturales de la zona. No se detectaron enlaces directos en el cuerpo a archivos de otras páginas del inventario; los enlaces principales son anclas a la página de inicio y búsquedas de Google Maps.
- **Imágenes:** las cuatro imágenes de galería tienen `src=""`; la primera está identificada como ilustrativa y el pie dice que el resto corresponde al entorno local. El lightbox contiene también una imagen con fuente vacía. Según el criterio confirmado por el usuario, no restaurar ilustraciones externas ni rellenar referencias vacías por iniciativa propia. En React no renderizar imágenes con `src=""`; tratarlas como opcionales según el diseño aprobado.
- **Ubicación y mapas:** los enlaces “Ver en el mapa” y “Cómo llegar” abren Google Maps con la búsqueda `Yunka Suma Aconquija Catamarca`; son destinos externos, no rutas internas.
- **Alojamiento y datos variables:** el texto menciona el Complejo Valle Hermoso y cabañas provinciales en comodato con el municipio, equipadas para grupos de hasta ocho personas. No dar por actuales disponibilidad, condiciones ni capacidad comercial sin verificación posterior.
- **Acceso:** el contenido describe la Ruta Provincial N.º 1 y un tramo de camino de tierra desde Singuil, además del acceso por la Cuesta del Clavillo desde Tucumán. Es descripción editorial del HTML, no una confirmación en tiempo real del estado de los caminos.
- **Contacto y redes:** se aplicará el criterio transversal: obtener los datos globales de contacto y perfiles sociales desde `index.html`; no copiar datos locales como fuente de verdad.
- **Recursos compartidos:** CSS `../../css/style.css`, icono `../../imagenes/aconquija_icono.png`, logos `../../imagenes/logo_aconquija(1).png` y `../../imagenes/logo_aconquija(2).png`, JavaScript `../../js/scrip.js`. Verificar que existan y que las rutas sean correctas antes de migrar, sin alterar los originales.
- **Estructura e interacciones:** la página contiene navegación adaptable, barra de progreso, galería/lightbox y controles de compartir/copiar enlace. Las interacciones no se probaron en navegador. Las afirmaciones superlativas sobre alojamiento se conservan como texto original, no como información verificada.

### Estado de esta revisión

Página 14 de 15 revisada estáticamente. Se documentaron contenido, ruta candidata, referencias de imágenes vacías, enlaces de mapas, descripción de acceso/alojamiento y recursos compartidos. No se modificó código React ni el sitio HTML/CSS/JavaScript original; la ruta no se implementó y las interacciones no se probaron en navegador.


## Aprobación de ruta — Página 14: Yunka Suma

- **Fecha de aprobación:** 2026-10-11.
- **Archivo original:** `html/tercer_nivel/yunka_suma.html`.
- **Ruta aprobada expresamente por el usuario:** `/lugares/yunka-suma`.
- **Alcance:** se aprueba la ruta para el mapa definitivo; no se autoriza implementar rutas ni modificar código React. La implementación continúa pendiente de aprobación del mapa completo.
- **Observaciones pendientes:** las imágenes de la galería y la imagen del lightbox contienen referencias vacías; no completarlas por suposición ni restaurar ilustraciones eliminadas. Los datos globales de contacto y redes deben obtenerse de `index.html`.


## Anexo V — Página 15 de 15: Virgen del Valle de Aconquija

**Archivo revisado:** `html/tercer_nivel/virgen_del_valle.html`. Revisión estática del HTML en la rama `main`; no se ejecutó en navegador ni se verificó físicamente la existencia de recursos locales.

### Hallazgos para el mapa de rutas

- **Título y contenido principal:** título “Virgen del Valle de Aconquija — Aconquija Turismo” y H1 “Virgen del Valle de Aconquija”. Describe la escultura religiosa ubicada en El Lindero, frente al Cristo Redentor y al otro lado del Río del Campo. Incluye contexto religioso, referencia a la Semana Santa y una descripción de la caminata desde el pueblo.
- **Ruta React candidata:** `/lugares/virgen-del-valle`. Propuesta provisional, pendiente de aprobación expresa del usuario y de la revisión del mapa completo. No se implementó.
- **Relaciones entre páginas:** el texto vincula explícitamente este destino con `html/tercer_nivel/cristo_redentor.html` como paseo combinable en la misma jornada. La relación puede representarse en el mapa definitivo; no se creó ningún enlace React.
- **Imágenes:** la imagen principal usa una URL externa de Unsplash y está marcada como ilustrativa; otra referencia local es `../../imagenes/virgen_del_valle/virgen_del_valle_2.webp`; dos imágenes de galería tienen `src=""`, y el lightbox también empieza con una fuente vacía. Verificar la existencia de la imagen local antes de migrar. No restaurar ilustraciones externas ni completar referencias vacías sin autorización. En React no renderizar imágenes con `src=""`; tratarlas como opcionales según el diseño aprobado.
- **Ubicación y mapas:** los enlaces “Ver en el mapa” y “Cómo llegar” abren Google Maps con la búsqueda `Virgen del Valle Aconquija Catamarca`; son destinos externos, no rutas internas.
- **Acceso y seguridad del recorrido:** el HTML indica que desde el pueblo se cruza el Río del Campo para llegar a la lomada y recomienda calzado cerrado con buen agarre. Es una descripción editorial, no una confirmación del caudal o las condiciones actuales del río; no presentar el cruce como seguro en todo momento sin verificar condiciones.
- **Datos religiosos:** el texto identifica a la Virgen del Valle como patrona de Catamarca y menciona la celebración del 8 de diciembre y actividades de Semana Santa. Se registran como contenido de la página, no como comprobación independiente de fechas de eventos locales.
- **Contacto y redes:** aplicar el criterio transversal de tomar los datos globales desde `index.html`, no de páginas interiores.
- **Recursos compartidos:** CSS `../../css/style.css`, icono `../../imagenes/aconquija_icono.png`, logos `../../imagenes/logo_aconquija(1).png` y `../../imagenes/logo_aconquija(2).png`, JavaScript `../../js/scrip.js`. Verificar su existencia y rutas antes de migrar; conservar intactos los originales.
- **Estructura e interacciones:** la página contiene navegación, barra de progreso, galería/lightbox y controles para compartir/copiar enlace. Las interacciones no se probaron en navegador.

### Estado de esta revisión

Página 15 de 15 revisada estáticamente. Se documentaron el contenido, la ruta candidata, la relación con Cristo Redentor, las referencias de imágenes y los enlaces externos. La ruta queda pendiente de aprobación; no se modificó código React ni el sitio HTML/CSS/JavaScript original.


## Aprobación de ruta — Página 15: Virgen del Valle de Aconquija

- **Fecha de aprobación:** 2026-10-11.
- **Archivo original:** `html/tercer_nivel/virgen_del_valle.html`.
- **Ruta aprobada expresamente por el usuario:** `/lugares/virgen-del-valle`.
- **Alcance:** ruta aprobada para incluirla en el mapa definitivo; no se autoriza implementar rutas ni modificar código React. La implementación sigue pendiente de aprobación del mapa definitivo de las 15 páginas.
- **Observaciones pendientes:** la imagen principal externa está identificada como ilustrativa; la galería contiene referencias vacías y un recurso local por verificar. No restaurar imágenes ni completar referencias vacías sin autorización. Los datos globales de contacto y redes deben obtenerse de `index.html`.


## Anexo W — Mapa consolidado y aprobado de las 15 páginas (2026-10-11)

Este cuadro reúne una sola vez cada uno de los 15 archivos del inventario vigente. El usuario aprobó expresamente el **mapa completo como conjunto el 2026-10-11**, exactamente como aparece en esta tabla. La aprobación valida el mapa documental, pero no autoriza por sí sola la modificación del código React; la implementación requiere autorización separada.

| N.º | Página / contenido | Archivo original | Ruta propuesta para React | Estado de la ruta |
|---:|---|---|---|---|
| 1 | Inicio | `index.html` | `/` | Aprobada individualmente y como parte del mapa completo |
| 2 | Aconquija Respira Verde | `html/segundo_nivel/aconquija_respira_verde.html` | `/circuitos/respira-verde` | Aprobada expresamente. Sustituye la candidata inicial `/experiencias/respira-verde` documentada en la revisión temprana; mantener una sola ruta para este archivo |
| 3 | Cultiva Tradición | `html/segundo_nivel/cultiva_tradicion.html` | `/circuitos/cultiva-tradicion` | Confirmada por el usuario; pendiente aprobación del mapa como conjunto |
| 4 | Planetario Janaxpacha Huasi | `html/segundo_nivel/noches_estrelladas.html` | `/lugares/planetario-janaxpacha-huasi` | Aprobada expresamente |
| 5 | Pucará de Aconquija | `html/segundo_nivel/pucara_aconquija.html` | `/lugares/pucara-de-aconquija` | Aprobada expresamente |
| 6 | Balneario Municipal Buena Vista | `html/tercer_nivel/balneario_buena_vista.html` | `/lugares/balneario-municipal-buena-vista` | Aprobada expresamente |
| 7 | Bosque de Alisos | `html/tercer_nivel/bosque_de_alisos.html` | `/lugares/bosque-de-alisos` | Aprobada expresamente |
| 8 | Cristo Redentor de Aconquija | `html/tercer_nivel/cristo_redentor.html` | `/lugares/cristo-redentor` | Confirmada por el usuario; pendiente aprobación del mapa como conjunto |
| 9 | Desfile Cívico Escolar | `html/tercer_nivel/desfile_civico.html` | `/eventos/desfile-civico-escolar` | Aprobada expresamente |
| 10 | Festival Mayor de Aconquija | `html/tercer_nivel/festival_mayor_aconquija.html` | `/eventos/festival-mayor` | Aprobada expresamente |
| 11 | Festival Provincial del Bandoneón | `html/tercer_nivel/fiesta_bandoneon.html` | `/eventos/fiesta-del-bandoneon` | Confirmada por el usuario; pendiente aprobación del mapa como conjunto |
| 12 | Río Potrero | `html/tercer_nivel/rio_potrero.html` | `/lugares/rio-potrero` | Aprobada expresamente |
| 13 | Túneles del Río Potrero | `html/tercer_nivel/tuneles_rio_potrero.html` | `/lugares/tuneles-del-rio-potrero` | Aprobada expresamente |
| 14 | Virgen del Valle de Aconquija | `html/tercer_nivel/virgen_del_valle.html` | `/lugares/virgen-del-valle` | Aprobada expresamente |
| 15 | Yunka Suma | `html/tercer_nivel/yunka_suma.html` | `/lugares/yunka-suma` | Aprobada expresamente |

### Revisión final del mapa

- La estrategia acordada es agrupar las rutas por categoría (opción A).
- La propuesta contiene 15 archivos únicos y no incluye páginas adicionales para cabalgatas, senderismo u otros enlaces que no forman parte del inventario vigente.
- Las tarjetas de Aconquija Respira Verde deben conservarse como están en el original; no inferir rutas definitivas para destinos no incluidos en el inventario.
- Los enlaces a secciones de la página principal, recursos, mapas externos, correo, teléfono, redes y WhatsApp no son páginas adicionales de este mapa.
- Las referencias de imágenes vacías y los recursos locales dudosos siguen pendientes de verificación; no se restaurarán imágenes eliminadas ni se modificarán originales sin autorización.
- Las revisiones de contenido fueron estáticas. No se han ejecutado pruebas en navegador ni de acceso directo a rutas React, porque el enrutador aún no se implementó.
- **Aprobación conjunta:** el usuario confirmó expresamente que aprueba las 15 rutas exactamente como aparecen en la tabla.
- **Estado:** mapa de rutas aprobado como conjunto el 2026-10-11. La implementación de React Router y cualquier modificación de código siguen pendientes de autorización separada. No se modificó código React ni el sitio original.


## Anexo X — Decisiones del usuario sobre rutas pendientes (2026-10-11)

El usuario confirmó estas decisiones individuales para el mapa de rutas:

- `index.html` → `/`.
- `html/segundo_nivel/cultiva_tradicion.html` → `/circuitos/cultiva-tradicion`.
- `html/tercer_nivel/cristo_redentor.html` → `/lugares/cristo-redentor`.
- `html/tercer_nivel/fiesta_bandoneon.html` → `/eventos/fiesta-del-bandoneon`.

Estas decisiones reemplazan las propuestas anteriores para esas páginas. Se registran como rutas elegidas individualmente; el mapa de 15 páginas todavía necesita la aprobación del usuario como conjunto antes de implementar React Router.


## Anexo Y — Aprobación conjunta del mapa de rutas (2026-10-11)

- **Decisión expresa del usuario:** «Apruebo el mapa completo de las 15 rutas de Aconquija React exactamente como aparece en la tabla».
- **Alcance aprobado:** las 15 correspondencias entre páginas originales y rutas React del Anexo W, sin cambios.
- **Resultado:** el mapa de rutas queda aprobado como conjunto y pasa a ser la referencia acordada para planificar la implementación.
- **Límite de autorización:** esta aprobación no permite modificar código. Antes de implementar, se presentará un plan concreto con los archivos React que se crearían o modificarían y se solicitará autorización independiente.
- **Estado del código:** no se modificó ningún archivo de código React ni los originales HTML/CSS/JavaScript; tampoco se implementó ni probó React Router.


## 14. Plan de implementación y continuidad — Aconquija React

Este plan refleja las etapas y autorizaciones vigentes. Las decisiones históricas se conservan en los anexos, pero ante cualquier contradicción prevalecen la sección 3, el estado vigente de la sección 13 y las autorizaciones explícitas posteriores.

### Principios para todas las etapas

- Respetar `agents.md`: explicar los cambios antes de realizarlos, esperar autorización para cada etapa y registrar los resultados.
- Mantener intacto el sitio original HTML/CSS/JavaScript fuera de `aconquija-react/`.
- No crear ni migrar la página excluida `html/tercer_nivel/el_charquiadero.html`.
- No inventar contenido ni reemplazar imágenes faltantes por imágenes parecidas.
- Mantener las rutas aprobadas y no activar enlaces a páginas futuras inexistentes.
- Distinguir siempre entre revisión estática, lint, build y pruebas reales en navegador.
- No crear nuevos archivos, cambiar configuración, mover recursos ni añadir dependencias sin explicarlo y pedir autorización si no está incluido en la etapa aprobada.

### Etapa 1 — Preparación de la base React

**Estado:** implementada en la rama remota; la verificación local posterior no está confirmada.

- `src/App.jsx`: componente raíz y 15 rutas aprobadas, con pantallas provisionales para páginas aún no migradas.
- `src/index.css`: base global neutral inicial.
- `index.html` dentro de React: idioma, título y metadatos básicos.
- `Metodologia.md` y `Registro.md`: plan y trazabilidad.

### Etapa 2 — Migración de la página principal

**Estado:** implementación remota aplicada; lint, build y comparación en navegador pendientes.

- `src/App.jsx`: estructura de Inicio migrada desde el `index.html` original, con navegación, hero, introducción, circuitos, lugares, estaciones, servicios, sección final y pie de página. Se mantuvieron las 14 rutas secundarias como pantallas provisionales.
- `src/App.css`: estilos basados en `css/style.css`, con ajuste de las rutas de imágenes para su ubicación dentro de React.
- `src/index.css`: integración de la base visual global y reglas de apoyo para los controles React.
- `Metodologia.md` y `Registro.md`: actualización del estado y trazabilidad.
- Los recursos gráficos se importan desde sus ubicaciones originales mediante rutas relativas; no se movieron ni editaron archivos de imagen.
- No se añadieron dependencias ni se modificó configuración de Vite.
- Criterio de aceptación: lint y build ejecutados correctamente; página Inicio revisada en navegador en escritorio y móvil; enlaces y pestañas verificados; cualquier problema se documenta antes de avanzar.

### Etapa 3 — Revisión y cierre de Inicio

- Ejecutar lint y build después de sincronizar los cambios.
- Revisar el resultado visual contra el original, en escritorio y móvil.
- Corregir problemas detectados solo después de explicar qué archivos requieren cambios y obtener autorización cuando corresponda.
- No dar por completada la etapa hasta documentar los resultados reales.

### Etapa 4 — Migración de las 14 páginas secundarias

- Presentar un plan específico de archivos antes de comenzar y solicitar autorización independiente.
- Migrar las páginas conforme al mapa aprobado de 15 rutas.
- Reutilizar componentes cuando no altere el resultado visual; pedir permiso antes de crear archivos nuevos fuera del alcance aprobado.
- No crear contenido futuro no aprobado ni migrar `el_charquiadero.html`.
- Confirmar rutas de imágenes; usar una extensión alternativa solo si se confirma que es el mismo recurso. Si no existe equivalente, preservar el espacio visual reservado sin usar `img src=""`.
- Probar cada ruta directa y sus enlaces antes de pasar a la siguiente página.

### Etapa 5 — Pruebas y control de calidad integral

- Ejecutar lint y build.
- Revisar errores de consola, recursos faltantes, enlaces, navegación, controles, accesibilidad básica y diseño adaptable.
- Registrar cada prueba como aprobada, fallida o pendiente; nunca afirmar que una prueba pasó si no se ejecutó.

### Etapa 6 — Publicación

- Confirmar con el usuario el alojamiento antes de elegir base path o estrategia de rutas.
- Revisar navegación directa y recarga de rutas para el alojamiento elegido.
- Solicitar autorización separada antes de publicar o modificar servicios externos.
- Conservar el sitio original como respaldo hasta que el usuario confirme la aceptación de la migración.

### Cómo retomar sin perder el hilo

1. Consultar la sección 13 y la última entrada de `Registro.md`.
2. Revisar la condición pendiente de la etapa actual.
3. Pedir solo la información que falte para esa condición; no repetir auditorías ya completadas.
4. Explicar archivos, propósito e impacto antes de solicitar autorización para una nueva etapa.
5. Al terminar, actualizar el estado de esta metodología y añadir una entrada detallada al registro.


## Ajuste visual de la navegación de Inicio — 2026-10-12

- **Archivo de estilos afectado:** `aconquija-react/src/App.css`.
- **Cambio:** se reforzó el color blanco de los enlaces principales en sus estados normal, visitado, hover, foco y activo; se redujo el peso tipográfico a `400` para que no se vean tan gruesos; y se explicitó el blanco de los iconos sociales tanto en escritorio como en el menú móvil.
- **Alcance:** solo estilos de navegación de la aplicación React. No se cambiaron los textos, destinos de los enlaces, componentes, fondo de la barra, recursos gráficos ni el sitio original.
- **Autorización:** el usuario autorizó expresamente revisar y corregir el color y el grosor visual de los enlaces y redes sociales de la barra.
- **Validación pendiente:** comprobar visualmente en `http://localhost:5173/` tanto el encabezado sobre el hero como la barra después de desplazarse, además del menú móvil. No se ejecutaron pruebas de navegador, lint ni build en esta intervención.


## Color del título principal de Inicio — 2026-10-12

- **Archivo de estilos afectado:** `aconquija-react/src/App.css`.
- **Cambio:** se fijó el color blanco puro (`#fff`) para el título central `Aconquija` y el subtítulo `Naturaleza que inspira` del hero, mediante selectores específicos de `.hero-content`.
- **Alcance:** únicamente el color de esos dos textos de la portada. No se modificaron la navegación, el fondo, las imágenes, el resto de la página ni el sitio original.
- **Autorización:** confirmación explícita del usuario el 2026-10-12.
- **Validación:** cambio registrado en `main`; queda pendiente que el usuario compruebe el resultado visual en el navegador local. No se afirma que se hayan ejecutado lint, build o pruebas de navegador.


## Fondo azul pizarra de Estaciones / Climas — 2026-10-12

- **Archivo de estilos afectado:** `aconquija-react/src/App.css`.
- **Diagnóstico:** la sección `.estaciones` tenía el fondo `#1c222c`.
- **Cambio:** se cambió únicamente el color de fondo de `.estaciones` a azul pizarra `#34485b`, conservando las demás propiedades y estilos de la sección.
- **Autorización:** el usuario eligió expresamente Azul pizarra y autorizó cambiar únicamente el fondo de Estaciones / Climas.
- **Validación pendiente:** revisar visualmente la sección en el navegador local. No se ejecutaron lint, build ni pruebas de navegador en esta intervención.


## Ajuste visual de circuitos, estaciones y pie de página — 2026-10-12

- **Archivo de estilos:** `aconquija-react/src/App.css`.
- **Referencia:** capturas compartidas por el usuario para las secciones «Qué hacer», «Cuándo venir» y el pie de página.
- **Cambio:** se restauró el fondo oscuro original de Estaciones / Climas (`#1c222c`) para que coincida con la referencia; se añadió el estado hover/foco dorado (`var(--sand)`) a los botones de estaciones, manteniendo el texto blanco y la línea dorada de la pestaña seleccionada. Los rótulos de sección y los encabezados del pie ya usan el tono dorado `var(--sand)` en las reglas existentes, por lo que se conservaron sin cambios.
- **Alcance:** estilos visuales de esas partes; sin cambios en textos, imágenes, enlaces, estructura JSX ni sitio original.
- **Autorización:** el usuario autorizó expresamente este ajuste el 2026-10-12.
- **Validación:** pendiente de comprobación visual local; no se ejecutaron lint, build ni pruebas de navegador.


## Fondo de la sección Explorar — 2026-10-12

- **Archivo de estilos afectado:** `aconquija-react/src/App.css`.
- **Cambio:** se cambió únicamente el valor de fondo de `.explorar` de `var(--night)` a `#1c222c`, para igualarlo exactamente al fondo de `.estaciones`. Se conservaron el padding, el color del texto y el posicionamiento de la sección.
- **Alcance:** solo el fondo de «Explorá Aconquija a tu manera». No se modificaron tarjetas, imágenes, textos, enlaces, otras secciones ni el sitio original.
- **Autorización:** petición directa del usuario el 2026-10-12.
- **Validación pendiente:** se verificó estáticamente el valor CSS guardado en GitHub; no se ejecutaron lint, build ni pruebas de navegador.

## Color dorado del título y la descripción de Explorar — 2026-10-12

- **Archivo de estilos afectado:** `aconquija-react/src/App.css`.
- **Cambio:** se agregó una regla específica para que el título «Explorá Aconquija a tu manera» y la descripción «Recorré Aconquija a través de nuestros circuitos turísticos, diseñados para que vivas una experiencia inolvidable» usen `var(--sand)`, el tono dorado de la paleta del proyecto.
- **Alcance:** únicamente el color de esos dos textos dentro de `.explorar`. El fondo `#1c222c`, las tarjetas, imágenes, márgenes, estructura y demás secciones permanecen sin cambios.
- **Autorización:** el usuario autorizó expresamente este ajuste el 2026-10-12.
- **Validación pendiente:** la comprobación visual queda a cargo del usuario. No se ejecutaron lint, build ni pruebas de navegador.

## Refuerzo del color dorado en los textos de Explorar — 2026-10-12

- **Archivo afectado:** `aconquija-react/src/App.css`.
- **Ajuste:** se reemplazó el selector anterior por `#explorar .section-head h2` y `#explorar .section-head p`, con el color dorado explícito `#cdaa78 !important`, para dar prioridad a los dos textos exactos de la sección cuyo contenedor tiene el id `explorar`.
- **Textos objetivo:** «Explorá Aconquija a tu manera» y «Recorré Aconquija a través de nuestros circuitos turísticos, diseñados para que vivas una experiencia inolvidable».
- **Se conserva:** el fondo `#1c222c`, el resto de la sección, y los estilos de otras secciones.
- **Autorización:** el usuario pidió reintentar el cambio porque el resultado anterior no se reflejó.
- **Validación:** selector guardado y comprobado estáticamente en GitHub. La revisión visual queda a cargo del usuario; no se ejecutaron lint, build ni pruebas de navegador.


## 2026-10-12 — Corrección a blanco de los textos de Explorar

- **Archivo afectado:** `aconquija-react/src/App.css`.
- **Cambio concreto:** el título «Explorá Aconquija a tu manera» y su párrafo descriptivo pasan a `#ffffff` mediante el selector `#explorar .section-head h2, #explorar .section-head p`.
- **Motivo y autorización:** el usuario aclaró que quería los dos textos blancos, no dorados, y autorizó cambiarlo directamente para probar.
- **Límites:** se conserva el fondo `#1c222c`; no se modifican tarjetas ni otras secciones. La comprobación visual queda a cargo del usuario; no se ejecutaron lint, build ni pruebas de navegador.

## Rótulos de sección en dorado arena — 2026-10-12

- **Archivo de estilos afectado:** `aconquija-react/src/App.css`.
- **Cambio:** los cinco rótulos pequeños «Qué hacer», «Recorridos», «Cuándo venir», «Servicios» y «Sobre Aconquija» usan `var(--sand)` (`#cdaa78`). Los selectores están limitados a esos rótulos de la página de inicio.
- **Alcance preservado:** no se cambian los títulos grandes, las descripciones, los fondos, las tarjetas, los botones, la navegación ni otras secciones. El texto principal y la descripción de Explorar permanecen blancos.
- **Autorización:** permiso explícito del usuario el 2026-10-12.
- **Validación:** selector comprobado estáticamente en el CSS guardado en GitHub. La comprobación visual queda pendiente; no se ejecutaron lint, build ni pruebas de navegador.

## Refuerzo de prioridad para los cinco rótulos dorado arena — 2026-10-12

- **Archivo afectado:** `aconquija-react/src/App.css`.
- **Ajuste:** se reemplazó el color heredado `var(--sand)` por el valor explícito `#cdaa78 !important` en los selectores específicos de «Qué hacer», «Recorridos», «Cuándo venir», «Servicios» y «Sobre Aconquija», para reforzar la prioridad del color frente a reglas generales de sección.
- **Alcance:** solo los cinco rótulos pequeños; no se cambian títulos principales, párrafos, fondos, tarjetas, botones ni navegación.
- **Autorización:** petición directa del usuario el 2026-10-12 para volver a intentar el ajuste de color.
- **Validación:** cambio comprobado estáticamente en GitHub. Aún falta verificarlo en navegador; no se ejecutaron lint, build ni pruebas de navegador.


## Imagen de fondo de Sobre Aconquija — 2026-10-12

- **Archivos afectados:** `aconquija-react/src/App.jsx` y `aconquija-react/src/App.css`.
- **Cambio:** se importa explícitamente `imagenes/caballo.webp` desde `App.jsx` y se asigna al fondo de la sección `#sobre` mediante el elemento `.cta-bg`. Se elimina la URL duplicada de la hoja CSS para que Vite resuelva el recurso a través del import.
- **Estilo conservado:** se mantienen el tamaño de cobertura, el posicionamiento centrado, la capa oscura superpuesta y el contenido de la sección.
- **Autorización:** solicitud directa del usuario el 2026-10-12.
- **Validación:** se confirmó que `imagenes/caballo.webp` existe en el repositorio y se verificó estáticamente la referencia del código. No se ejecutaron lint, build ni pruebas visuales en navegador.


## Título blanco de Sobre Aconquija — 2026-10-12

- **Archivo de estilos afectado:** `aconquija-react/src/App.css`.
- **Cambio:** se añadió el selector específico `#sobre .cta-content h2` con `color: #ffffff !important` para que el título «Un pueblo, una sierra, un mismo ritmo.» aparezca en blanco sobre la imagen de fondo.
- **Alcance:** solo el título de la sección `#sobre`; no se cambian el rótulo dorado, el párrafo, el botón, la imagen ni otras secciones.
- **Autorización:** petición directa del usuario el 2026-10-12.
- **Validación:** regla comprobada estáticamente en el CSS guardado en GitHub; no se ejecutaron lint, build ni pruebas visuales en navegador.


## Botón «Planeá tu visita» de Sobre Aconquija — 2026-10-12

- **Archivos afectados:** `aconquija-react/src/App.jsx`, `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Referencia:** botón del sitio original en `index.html` y sus estilos en `css/style.css`.
- **Hallazgo:** el original usa `class="btn-primary"` y `href="#"`; React ya comparte la clase y sus estilos visuales, pero el enlace apuntaba a `#servicios`.
- **Cambio:** se ajustó únicamente el destino del botón React a `href="#"` para igualar el comportamiento definido en el HTML original. No fue necesario cambiar el CSS del botón porque sus estilos coinciden con la referencia.
- **Alcance preservado:** no se modificó el sitio original, otros botones, la imagen de fondo ni el resto de la sección.
- **Autorización:** permiso explícito del usuario el 2026-10-12, tras explicar que se replicaría el aspecto y el comportamiento del botón original.
- **Validación:** se verificó estáticamente la diferencia entre el HTML original y React. No se ejecutaron lint, build ni pruebas de navegador; la comprobación visual local queda pendiente.


## Botón «Planeá tu visita»: refuerzo visual — 2026-10-12

- **Archivo afectado:** `aconquija-react/src/App.css`.
- **Cambio:** se añadió un selector específico para el botón dentro de `#sobre .cta-content`, reforzando el fondo ámbar anaranjado `#e2935c`, los bordes redondeados de 30 px y el texto oscuro; en hover pasa a fondo blanco y se eleva ligeramente.
- **Motivo:** el usuario indicó que el estilo visual no se estaba aplicando como esperaba y pidió un tono más anaranjado con bordes redondeados.
- **Autorización:** permiso explícito del usuario el 2026-10-12.
- **Alcance:** solo el botón «Planeá tu visita» de «Sobre Aconquija»; no se alteran otros botones ni el sitio original.
- **Validación:** regla comprobada estáticamente en el CSS de GitHub. La comprobación visual en navegador sigue pendiente.


## Footer en pizarra oscuro y texto blanco — 2026-10-12

- **Archivo afectado:** `aconquija-react/src/App.css`.
- **Cambio:** se aplicó al pie de página un fondo pizarra oscuro `#1c222c` y color blanco explícito a los textos de marca, encabezados de columnas, enlaces, datos de contacto y aviso de derechos reservados.
- **Motivo:** unificar el pie de página con el tono pizarra oscuro solicitado y asegurar contraste blanco para todos sus textos.
- **Autorización:** permiso explícito del usuario el 2026-10-12.
- **Alcance:** reglas limitadas a `footer`; no se cambian las demás secciones ni el sitio original fuera de `aconquija-react/`.
- **Validación:** selectores comprobados estáticamente en el CSS guardado en GitHub. La revisión visual en navegador sigue pendiente.


## Encabezados del footer en dorado arena — 2026-10-12

- **Archivo afectado:** `aconquija-react/src/App.css`.
- **Cambio:** los encabezados de las tres columnas del pie de página —«Explorar», «Servicios» y «Contacto»— usan el dorado arena `#cdaa78`. Los enlaces, la descripción, la dirección, el correo, el teléfono y el texto legal permanecen blancos sobre el fondo pizarra `#1c222c`.
- **Motivo:** destacar los encabezados de navegación y contacto sin perder el contraste del resto del pie de página.
- **Autorización:** permiso explícito del usuario el 2026-10-12.
- **Alcance:** solo los encabezados de columnas dentro del footer de React; no se modifican otras secciones ni el sitio original.
- **Validación:** selector CSS comprobado estáticamente en GitHub. La comprobación visual en navegador queda pendiente.


## Barra de progreso de desplazamiento — 2026-10-12

- **Archivo de estilos afectado:** `aconquija-react/src/App.css`.
- **Cambio:** la barra superior `#readProgress` pasa a medir 3 px y usa el dorado arena `#cdaa78`. Se suavizó la transición de anchura con una curva de aceleración y se añadió `will-change: width` para preparar el navegador para ese cambio visual.
- **Comportamiento existente:** `src/App.jsx` ya calcula el porcentaje de desplazamiento y actualiza la anchura al subir o bajar; por eso no fue necesario cambiar la lógica React.
- **Motivo y autorización:** el usuario pidió que la navegación se sintiera más viva, con una línea fina que crezca fluidamente a medida que se desplaza por la página, y autorizó implementarla.
- **Alcance:** solo se ajustó el estilo de la barra de progreso en React; no se alteraron los enlaces, el fondo ni la estructura de la navegación, y no se modificó el sitio original.
- **Validación:** cambio guardado en `main`. No se ejecutaron lint, build ni pruebas de navegador; falta confirmar la sensación del movimiento visualmente.


## 2026-10-12 — Contraste blanco en los textos principales de Estaciones

- **Archivos de código afectados:** `aconquija-react/src/App.css` y `aconquija-react/src/App.jsx`.
- **Cambio concreto:** se fijó el blanco puro (`#ffffff`) para el título «Aconquija cambia con cada estación» y su descripción. Se añadió una clase exclusiva al título de verano «Días largos» para que también sea blanco sin cambiar los títulos de las demás estaciones.
- **Motivo:** mejorar el contraste de esos tres textos sobre el fondo oscuro de Estaciones.
- **Autorización:** permiso explícito del usuario el 2026-10-12.
- **Límites:** no se modificaron el fondo, las pestañas, las imágenes, los textos ni los estilos de otras secciones; el sitio original fuera de `aconquija-react/` permanece intacto.
- **Validación:** cambio registrado en la rama `main`. No se ejecutaron lint, build ni pruebas de navegador; falta revisar el resultado visual local.


## 2026-10-12 — Fecha de verano en dorado arena

- **Archivos de código afectados:** `aconquija-react/src/App.jsx` y `aconquija-react/src/App.css`.
- **Cambio concreto:** la fecha «Diciembre — Marzo» recibe una clase exclusiva de verano y el color dorado arena `#cdaa78`.
- **Motivo:** destacar la fecha de verano dentro de la sección Estaciones.
- **Autorización:** solicitud directa del usuario el 2026-10-12.
- **Límites:** no se cambian las fechas de otoño, invierno o primavera ni otros estilos o secciones.
- **Validación:** cambio registrado en `main`; no se ejecutaron build, lint ni pruebas de navegador.


## Ajuste sutil del alto de la navegación — 2026-10-12

- **Archivo afectado:** `aconquija-react/src/App.css`.
- **Cambio:** se redujo ligeramente el relleno vertical de la barra de navegación de 20 px a 16 px y, al desplazarse, de 12 px a 10 px. El logo del encabezado pasa de 72 px a 66 px y se reduce suavemente a 58 px al activar el estado desplazado.
- **Motivo:** hacer que la barra se vea menos gruesa sin alterar sus enlaces, colores ni funcionamiento.
- **Autorización:** petición directa del usuario el 2026-10-12.
- **Alcance:** solo el alto visual de la navegación React; el logo del footer y el sitio original no se modifican intencionalmente.
- **Validación:** reglas guardadas en `main`; no se ejecutaron build, lint ni pruebas de navegador.


## Imágenes más compactas y bordes suaves en Estaciones — 2026-10-12

- **Archivo afectado:** `aconquija-react/src/App.css`.
- **Cambio:** las imágenes de las cuatro estaciones pasan a ocupar el 94 % del ancho disponible, con una altura de 390 px en escritorio y alturas ligeramente menores en tablet y móvil. Se aplican esquinas redondeadas de 10 px y se centran dentro de su columna.
- **Motivo:** darles un aspecto algo más compacto y suave sin cambiar las fotografías ni el contenido.
- **Autorización:** petición directa del usuario el 2026-10-12.
- **Alcance:** únicamente las imágenes de la sección Estaciones; las demás imágenes del sitio no se modifican intencionalmente.
- **Validación:** reglas CSS guardadas en `main`; no se ejecutaron build, lint ni pruebas de navegador.

## Colores uniformes para las cuatro estaciones — 2026-10-12

- **Archivo de estilos afectado:** `aconquija-react/src/App.css`.
- **Cambio:** las fechas de Verano, Otoño, Invierno y Primavera usan explícitamente dorado arena (`#cdaa78`); los títulos de las cuatro estaciones usan blanco (`#ffffff`). Se elimina la dependencia del selector exclusivo de verano para el color del título y se mantiene el mismo criterio visual en todos los paneles.
- **Motivo:** extender a Otoño, Invierno y Primavera los colores que se habían ajustado primero en Verano.
- **Alcance:** solo colores de fechas y títulos dentro de Estaciones. No se modifican textos, imágenes, tamaños, bordes, distribución, pestañas ni otras secciones.
- **Autorización:** permiso explícito del usuario el 2026-10-12.
- **Validación:** cambio comprobado estáticamente en el CSS de GitHub. No se ejecutaron lint, build ni pruebas de navegador; queda pendiente la comprobación visual local.

## Botones de estaciones iguales al index.html original — 2026-10-12

- **Archivo afectado:** `aconquija-react/src/App.css`.
- **Referencia revisada:** `css/style.css` del sitio original, reglas `.est-tabs`, `.est-tab`, `.est-tab.active` y `.est-tab.active::after`.
- **Cambio:** se neutralizaron los estilos predeterminados del elemento `button` (fondo, borde y apariencia), se heredó la tipografía del sitio y se quitó el cambio de color al pasar el cursor que no existe en la referencia original. Se conservaron el espaciado, tamaño, mayúsculas, color inactivo, color activo y línea inferior ámbar. Se añadió un contorno de foco visible para navegación por teclado.
- **Alcance:** solo la apariencia de las pestañas Verano, Otoño, Invierno y Primavera en React. No se modificaron textos, comportamiento de selección, imágenes ni archivos del sitio original.
- **Autorización:** petición directa del usuario el 2026-10-12.
- **Validación:** reglas comparadas estáticamente con `css/style.css`; no se ejecutaron lint, build ni pruebas de navegador.

## Contraste y estado iluminado de las pestañas de Estaciones — 2026-10-12

- **Archivo de estilos afectado:** `aconquija-react/src/App.css`.
- **Referencia revisada:** `index.html`, `css/style.css` y `js/scrip.js` del sitio original. El JavaScript original alterna la clase `active`; el CSS original destaca la pestaña seleccionada en blanco y con una línea inferior ámbar.
- **Cambio:** el color de las pestañas inactivas pasa de gris piedra a blanco translúcido (`rgba(255,255,255,.62)`). La pestaña activa permanece blanca y recibe un resplandor blanco muy sutil, conservando la línea inferior ámbar. No se altera la selección de estación.
- **Motivo:** recuperar el contraste translúcido de las pestañas inactivas y hacer más evidente cuál estación está seleccionada, según la aclaración del usuario.
- **Autorización:** petición directa del usuario el 2026-10-12.
- **Validación:** cambio guardado en `main` y comparado estáticamente; no se ejecutaron lint, build ni pruebas visuales en navegador.

## Línea fina debajo de las pestañas de Estaciones — 2026-10-12

- **Archivo afectado:** `aconquija-react/src/App.css`.
- **Cambio:** se reemplazó el borde inferior general anterior por una línea independiente de 1 px, blanco translúcido (`rgba(255,255,255,.38)`), limitada al 60 % del ancho con un máximo de 520 px y ubicada 14 px debajo de las pestañas.
- **Motivo:** agregar el separador solicitado, con el color de la familia visual de los botones, sin que quede pegado ni ocupe todo el ancho.
- **Autorización:** petición directa del usuario el 2026-10-12.
- **Alcance:** solo el separador visual de las pestañas de Estaciones; se conservan la línea ámbar de la pestaña activa y el comportamiento de selección.
- **Validación:** CSS guardado en `main`; no se ejecutaron lint, build ni pruebas visuales en navegador.


## Línea base continua y subrayado dorado activo en Estaciones — 2026-10-12

- **Archivo afectado:** `aconquija-react/src/App.css`.
- **Cambio:** la línea base de las pestañas ahora mide 1 px y ocupa el 100 % del ancho disponible del contenedor, para acompañar el ancho de la zona de imágenes. El subrayado de la pestaña activa también mide 1 px, usa dorado arena (`var(--sand)`, `#cdaa78`) y se alinea sobre la línea base, reemplazando visualmente ese pequeño tramo en vez de quedar separado.
- **Motivo:** hacer la línea más fina, extenderla hasta el ancho del contenido visual y conseguir que el dorado arena siga a la estación seleccionada al presionar cada botón.
- **Autorización:** petición directa del usuario el 2026-10-12.
- **Alcance:** solo se ajustaron los estilos de las pestañas de Estaciones en React; no se modificó la lógica de selección ni el sitio original.
- **Validación:** cambio revisado estáticamente en el contenido de GitHub. No se ejecutaron lint, build ni pruebas visuales en navegador.


## Ajuste de proximidad y grosor de la línea de Estaciones — 2026-10-12

- **Archivo afectado:** `aconquija-react/src/App.css`.
- **Cambio:** la línea base blanca translúcida pasa de 1 px a 0,5 px y se acerca a las pestañas al moverla de `bottom: -14px` a `bottom: -2px`. El segmento dorado de la pestaña activa también se acerca a la misma posición, conservando 1 px de grosor para cubrir visualmente la línea base.
- **Motivo:** el usuario autorizó hacer la línea translúcida aún más fina y más cercana a los botones, manteniendo la idea de que el dorado reemplace el tramo situado bajo la estación activa.
- **Alcance:** solo se modificaron los dos pseudo-elementos de las pestañas de Estaciones; la selección React, los textos, las imágenes y el sitio original quedan sin cambios intencionales.
- **Validación:** cambio guardado en GitHub y revisado estáticamente. No se ejecutaron lint, build ni pruebas de navegador; falta la comprobación visual local.


## Corrección de visibilidad del subrayado activo en Estaciones — 2026-10-12

- **Archivo afectado:** `aconquija-react/src/App.css`.
- **Cambio:** se eleva la pestaña activa dentro del orden de apilamiento (`z-index: 2`) y se da prioridad al subrayado dorado (`z-index: 3)); el tramo dorado aumenta a 2 px para que se distinga claramente de la línea blanca translúcida de 0,5 px.
- **Motivo:** el usuario informó que el tramo dorado arena no se estaba mostrando y pidió revisarlo y solucionarlo.
- **Alcance:** ajuste exclusivo del apilamiento y grosor del subrayado activo; no se modifica la selección React ni el contenido de la sección.
- **Validación:** cambio guardado y revisado estáticamente en GitHub. No se ejecutaron lint, build ni pruebas de navegador; se necesita comprobarlo visualmente en el navegador local.


## Corrección estructural del subrayado activo de Estaciones — 2026-10-12 19:00:00 -03:00

- **Archivo afectado:** `aconquija-react/src/App.css`.
- **Cambio:** se reemplazó el pseudo-elemento `.est-tab.active::after` por un `span.est-tab-underline` real dentro de cada botón. Su opacidad depende de la clase `.active`; se conservan el color arena `var(--sand)`, el grosor de 2 px y la posición alineada con la línea base.
- **Motivo:** el ajuste anterior basado únicamente en pseudo-elementos no resolvió el reporte visual del usuario; esta alternativa hace explícito el indicador dentro del botón seleccionado.
- **Alcance:** solo la línea de las pestañas de Estaciones; no se cambia la lógica de selección ni el sitio original fuera de `aconquija-react/`.
- **Validación:** revisión estática del JSX y CSS guardados en GitHub. La comprobación visual local, build y pruebas de navegador no se han ejecutado.


## Clima actual compacto en la barra de navegación — 2026-10-12

- **Archivos afectados:** `aconquija-react/src/App.jsx` y `aconquija-react/src/App.css`.
- **Cambio:** se agregó `WeatherBadge` junto a las redes sociales de la barra superior. Consulta temperatura actual y código de condición para Aconquija mediante la API pública de Open-Meteo, actualiza cada 15 minutos y representa la condición con un icono compacto. En pantallas pequeñas oculta el nombre del lugar para ahorrar espacio.
- **Motivo:** petición directa del usuario para mostrar el clima de Aconquija en tamaño pequeño junto a los iconos sociales.
- **Alcance:** únicamente la barra de navegación del proyecto React; no se modificó el sitio original ni se añadieron dependencias.
- **Validación:** revisión estática de los cambios guardados en GitHub. No se ejecutaron build, lint ni pruebas de navegador. La consulta del clima requiere conexión a internet y puede mostrar `—°` si el servicio no responde.


## Contraste blanco para la temperatura de la barra de navegación — 2026-10-12

- **Archivo afectado:** `aconquija-react/src/App.css`.
- **Cambio:** la cifra de temperatura del indicador del clima ahora tiene color blanco explícito (`#ffffff`) para destacar sobre la barra pizarra oscura.
- **Motivo:** mejorar la legibilidad del dato de temperatura, como pidió el usuario.
- **Alcance:** solo el texto de temperatura del indicador climático; no se cambian el icono, el nombre del lugar, la consulta meteorológica ni otras partes de la navegación.
- **Validación:** revisión estática del cambio. No se ejecutaron build, lint ni pruebas de navegador.


## Separadores verticales negros en Servicios — 2026-10-12

- **Archivo afectado:** `aconquija-react/src/App.css`.
- **Cambio:** se añadieron líneas verticales negras de 1 px entre las cuatro tarjetas de Servicios. En anchos de tablet se conserva la separación entre las dos columnas; en móvil angosto, donde las tarjetas se apilan, se ocultan los separadores verticales para evitar líneas aisladas.
- **Motivo:** separar visualmente «Dónde dormir», «Dónde comer», «Guías y excursiones» y «Artesanías» con una línea negra.
- **Alcance:** solo la presentación de las tarjetas de Servicios en React; no se modifican textos, enlaces ni el sitio original.
- **Validación:** revisión estática del CSS. No se ejecutaron build, lint ni pruebas de navegador.

## Movimiento sutil y tipografías conservadas — 2026-10-12

- **Archivo afectado:** `aconquija-react/src/App.css`.
- **Cambio:** se añadieron transiciones suaves para navegación, botones, iconos y tarjetas; una elevación mínima al interactuar; una entrada delicada para el separador del hero; y ajustes de movimiento reducido para accesibilidad.
- **Tipografía:** se conservan las familias que ya estaban definidas en el proyecto: Fraunces para títulos y Work Sans para textos. No se modificaron las imágenes, los textos ni la estructura de las secciones.
- **Motivo:** dar al sitio una sensación más viva y natural sin recargar el diseño.
- **Alcance:** solo CSS dentro de `aconquija-react/`; no se modificó el sitio original ni se añadieron dependencias.
- **Validación:** revisión estática del CSS guardado. No se ejecutaron build, lint ni pruebas de navegador.

## Tipografía de la interfaz React — Playfair Display + Montserrat

- **Fecha:** 2026-10-12.
- **Criterio:** usar Playfair Display en títulos y elementos que heredan `--ff-display`, y Montserrat como tipografía de lectura e interfaz mediante `--ff-body` y la fuente base de `index.css`.
- **Motivo:** dar más personalidad editorial a los títulos y una lectura moderna y uniforme a navegación, párrafos, controles y textos de tarjetas.
- **Alcance:** solo la aplicación React dentro de `aconquija-react/`; no se modifican el sitio original, los colores, las imágenes, el contenido ni la estructura.
- **Carga de fuentes:** Google Fonts mediante el import existente en `src/App.css`.
- **Verificación pendiente:** revisar en el navegador local el aspecto y la carga de las fuentes; no se declara ejecutado lint, build ni pruebas visuales.

## Detalles cálidos y microinteracciones — 2026-10-12

- **Archivo afectado:** `aconquija-react/src/App.css`.
- **Cambio:** se añadieron pequeños subrayados dorados a rótulos de sección, respuestas más cálidas en tarjetas e iconos, un matiz de color al pasar sobre títulos de lugares y entradas escalonadas suaves para estadísticas, tarjetas de explorar y servicios.
- **Motivo:** aportar movimiento y calidez sin recargar la interfaz ni cambiar el contenido.
- **Límites:** no se modificaron imágenes, textos, colores base, estructura JSX ni el sitio original. Se conservó la preferencia de accesibilidad para reducir movimiento.
- **Tipografía:** Playfair Display para títulos y Montserrat para textos.
- **Validación:** revisión estática del CSS; queda pendiente comprobar el resultado en navegador. No se ejecutaron build, lint ni pruebas de navegador.

## Entrada lateral del párrafo de introducción — 2026-10-12

- **Archivos afectados:** `aconquija-react/src/App.jsx` y `aconquija-react/src/App.css`.
- **Cambio:** el propio párrafo recibe la clase `reveal` para que el observador existente detecte cuándo entra en la zona visible. Comienza transparente y desplazado 76 px hacia la izquierda; luego se desliza hacia la derecha hasta su posición normal durante 1,7 segundos, con una demora breve de 0,08 segundos.
- **Momento y repetición:** se activa cuando el texto mismo entra en pantalla y se ejecuta una sola vez, porque el observador deja de observar el elemento tras su primera entrada.
- **Alcance:** solo se ajustó la aparición del párrafo solicitado. No se cambiaron sus palabras, imágenes, otras secciones ni el sitio original; no se agregaron dependencias.
- **Accesibilidad:** la regla global existente `prefers-reduced-motion: reduce` reduce la duración de las transiciones.
- **Validación:** cambios revisados estáticamente en GitHub. No se ejecutaron build, lint ni pruebas de navegador.


## Carrusel infinito de Lugares — 2026-10-12

- **Archivos afectados:** `aconquija-react/src/App.jsx` y `aconquija-react/src/App.css`.
- **Cambio:** la lista de lugares se renderiza en tres secuencias consecutivas y el desplazamiento se reajusta entre secuencias equivalentes para simular un bucle horizontal continuo. Se agregaron flechas anterior/siguiente para escritorio; los botones desplazan una tarjeta por vez.
- **Interacción conservada:** el contenedor sigue usando desplazamiento horizontal nativo, por lo que admite gesto táctil, panel táctil y desplazamiento horizontal del usuario. Las flechas se ocultan en anchos de 880 px o menos.
- **Diseño:** se conservan las tarjetas, fotografías, textos, tamaños y separación existentes. Los números de las tarjetas se repiten del 01 al 05 en cada vuelta.
- **Accesibilidad y movimiento:** las flechas tienen nombres accesibles y foco visible; el carrusel no introduce animaciones automáticas.
- **Autorización:** el usuario aprobó explícitamente la opción A de carrusel infinito y fluido el 2026-10-12.
- **Validación:** revisión estática de los cambios y del registro. No se ejecutaron build, lint ni pruebas en navegador.


## Movimiento automático y elevación de la tarjeta central en Lugares — 2026-10-12

- **Archivos afectados:** `aconquija-react/src/App.jsx` y `aconquija-react/src/App.css`.
- **Cambio:** el carrusel avanza automáticamente hacia la derecha a velocidad suave y conserva el bucle infinito existente. Se pausa temporalmente cuando el visitante interactúa con él o mantiene el puntero encima, y vuelve a avanzar al dejar de interactuar.
- **Tarjeta central:** se calcula cuál de las tarjetas está más cerca del centro visible y se le aplica una elevación sutil con escala y sombra suaves; el efecto se adapta a pantallas pequeñas.
- **Accesibilidad:** se respeta `prefers-reduced-motion`; cuando el sistema solicita reducir movimiento, el avance automático se desactiva. Se mantienen las flechas de escritorio y el desplazamiento manual con tacto o panel táctil.
- **Autorización:** petición directa del usuario el 2026-10-12.
- **Validación:** revisión estática del código y la documentación; no se ejecutaron build, lint ni pruebas en navegador.


## Ajuste del carrusel de Lugares para centrar las tarjetas y mejorar el avance automático — 2026-10-13

- **Archivos afectados:** `aconquija-react/src/App.jsx` y `aconquija-react/src/App.css`.
- **Cambio:** en escritorio, el carrusel se limita al ancho necesario para mostrar tres tarjetas completas centradas, sin dejar visible una cuarta tarjeta cortada. En móvil se muestra una tarjeta completa por vez, conservando una imagen amplia. La elevación y sombra de la tarjeta central se desactivan en pantallas de hasta 768 px.
- **Movimiento automático:** se aumentó ligeramente la velocidad de avance y se quitó la pausa provocada solo por mantener el puntero o el foco sobre el carrusel; la pausa breve por interacción táctil sigue disponible. Se mantiene el bucle y el respeto por `prefers-reduced-motion`.
- **Motivo y autorización:** petición directa del usuario el 2026-10-13; pidió quitar la elevación en teléfonos, centrar las tarjetas visibles, eliminar la media tarjeta cortada y asegurar el movimiento automático también en móvil.
- **Alcance:** no se modificaron imágenes, textos ni otras secciones. No se modificó el sitio original fuera de `aconquija-react/`.
- **Validación:** revisión estática del código y documentación tras guardar. No se ejecutaron build, lint ni pruebas en navegador.


## Corrección del bucle y del gesto táctil en el carrusel de Lugares — 2026-10-13

- **Archivo afectado:** `aconquija-react/src/App.jsx`.
- **Cambio:** el reajuste infinito ahora ocurre solo al acercarse a los extremos de la secuencia central, en vez de activarse ante cualquier desplazamiento mínimo por debajo del inicio. Esto evita que el scroll táctil se corrija repetidamente y parezca trabarse.
- **Movimiento automático:** se conserva el avance automático hacia la derecha, su velocidad actual, la pausa breve durante la interacción y el respeto por la preferencia de reducir movimiento del sistema.
- **Motivo y autorización:** reporte directo del usuario el 2026-10-13: el avance automático no se percibía y el gesto de deslizar se trababa en teléfono.
- **Validación:** código y documentación revisados estáticamente después de guardar. No se ejecutaron build, lint ni pruebas en navegador.

### Avance automático del carrusel de Lugares

El avance automático no debe depender de `prefers-reduced-motion`, ya que esa condición puede dejar el carrusel inmóvil en ciertos equipos. La animación sí debe respetar la pausa temporal durante la interacción manual y conservar el scroll táctil nativo.

### Carrusel de Lugares: avance continuo y scroll táctil

- El contenedor `.place-scroll` no debe usar `scroll-snap`, porque el ajuste a las tarjetas puede competir con el avance automático continuo.
- El avance se calcula con el tiempo transcurrido entre cuadros para mantener una velocidad consistente; se conserva el scroll horizontal nativo para el gesto táctil y el bucle infinito.

### Carrusel de Lugares: avance por tarjeta con pausa

El carrusel debe avanzar una tarjeta por vez mediante `scrollBy({ behavior: 'smooth' })`, usando la misma distancia que el botón «siguiente». Entre avances espera 3,8 segundos para dejar tiempo de observar el contenido. La interacción manual pausa temporalmente el avance automático; el bucle infinito y el scroll táctil se mantienen.


### Ajuste del intervalo del carrusel de Lugares
El avance automático desplaza una tarjeta por vez hacia la derecha y espera 2,5 segundos entre avances, manteniendo la transición suave, el bucle infinito y la pausa temporal durante la interacción manual.

### Corrección del rebote al elevar la tarjeta central del carrusel
La regla de hover de las tarjetas no debe sobrescribir la elevación de `.place-card.is-center`. Las tarjetas no centrales pueden elevarse al pasar el puntero; la tarjeta central conserva `translateY(-10px) scale(1)` incluso cuando está bajo el puntero, evitando cambios bruscos de altura al desplazarse el carrusel.

## Subrayado temporizado y sección activa en la navegación — 2026-10-13

- **Archivos afectados:** `src/App.jsx`, `src/App.css`, `Metodologia.md` y `Registro.md`.
- **Reutilización:** se amplió el `updateScroll` que ya actualizaba la barra de progreso y el estado visual del encabezado. Ese mismo listener identifica cuál de las secciones principales quedó atrás del umbral visible y marca el enlace correspondiente, sin añadir otro listener de scroll ni otra dependencia.
- **Escritorio:** el subrayado dorado arena (`#cdaa78`) permanece oculto hasta que el puntero pasa por encima de un enlace o este recibe foco de teclado. Al interactuar, crece de izquierda a derecha durante 1,45 segundos; al retirar el puntero se reinicia.
- **Móvil:** el enlace que corresponde a la sección actual mantiene la línea visible mientras esa sección está activa. Al desplazarse a otra sección, la marca cambia al enlace correspondiente.
- **Accesibilidad y alcance:** se conserva el foco visible y la preferencia global de movimiento reducido. No se añadieron dependencias ni se modificó el sitio original fuera de `aconquija-react/`.
- **Autorización:** petición directa del usuario el 2026-10-13.
- **Validación:** cambios revisados estáticamente en GitHub. No se ejecutaron build, lint ni pruebas en navegador.
