# Metodología de desarrollo y mantenimiento — Aconquija React

## 1. Propósito y estado del proyecto

El sitio de Aconquija Turismo ya fue migrado a React y el proyecto se encuentra en una etapa avanzada, centrada en terminar detalles, corregir problemas y preparar la publicación. Este documento describe cómo mantener y completar el proyecto actual; **no es un plan para volver a realizar la migración**.

La historia de decisiones y cambios se conserva en `Registro.md`. No se mantienen aquí inventarios antiguos de páginas, listas de migración ni fases ya superadas. Si cambia de forma importante la arquitectura o el flujo de trabajo, actualizar esta metodología.

## 2. Reglas para trabajar

1. **Respetar el alcance.** La petición directa del usuario autoriza el cambio solicitado y los pasos necesarios para completarlo. Para cambios adicionales, explicar los archivos y el impacto, y pedir autorización antes de hacerlos.
2. **Leer la documentación.** Antes de cambios estructurales, consultar `agents.md`, esta metodología y las entradas relevantes de `Registro.md`.
3. **Registrar cada cambio.** Actualizar `Registro.md` en la misma tarea, con fecha y hora de Argentina (UTC-03:00), archivos afectados, cambio, motivo, autorización y estado de las pruebas.
4. **No inventar información.** No agregar datos turísticos, históricos, precios, horarios, disponibilidad, dificultad, servicios ni contactos que no estén confirmados.
5. **No declarar pruebas inexistentes.** Diferenciar entre revisión estática, lint, compilación y prueba visual en navegador.
6. **No cambiar servicios externos sin autorización.** Publicación, dominio, DNS, configuración de hosting y acciones similares requieren una petición expresa.

## 3. Estructura y patrones del proyecto

La aplicación React/Vite está en `aconquija-react/`.

- Rutas de la aplicación: `src/App.jsx`.
- Páginas de segundo nivel: `src/pages/second-level/`.
- Páginas de detalle: `src/pages/third-level/`.
- Componentes específicos: seguir la organización existente bajo `src/components/second-level/` y `src/components/third-level/`.
- Componentes compartidos y estilos: revisar `src/components/ui/` y `src/styles/` antes de crear algo nuevo.
- Galería acordeón compartida: `src/components/ui/AccordionGallery.jsx`.
- Reutilizar los componentes globales existentes, incluidos `Header`, `Footer` y el reproductor global, cuando corresponda.

No duplicar componentes ni crear nuevas convenciones de carpetas si el patrón actual resuelve la necesidad.

## 4. Rutas, navegación y enlaces

- Antes de crear una ruta, comprobar si ya existe un destino equivalente en `src/App.jsx`.
- Al añadir una página, conectar su ruta y los enlaces de navegación que formen parte de la petición.
- Mantener breadcrumbs y enlaces de retorno coherentes con la jerarquía del sitio.
- No dejar enlaces activos hacia destinos inexistentes.
- Reutilizar únicamente enlaces de contacto, WhatsApp y mapas que estén confirmados para ese uso.

## 5. Imágenes y contenido

- Priorizar los recursos locales de `aconquija-react/imagenes/`; confirmar el nombre, la extensión y la ruta real antes de importarlos.
- No descargar ni sustituir fotografías por imágenes externas, inventadas o simplemente parecidas, salvo petición expresa.
- Si falta una imagen confirmada, conservar un espacio reservado con una presentación segura. No usar `src=""`.
- Mantener textos alternativos descriptivos en imágenes informativas.
- Respetar la identidad visual existente: naturaleza, calidez y estética rústica, con pizarra oscura `#1c222c`, acentos dorados y contraste legible donde corresponda.
- Mantener la adaptación a escritorio y móvil; contemplar `prefers-reduced-motion` cuando se incorporen animaciones.

## 6. Flujo recomendado para cada cambio

1. Identificar la página o componente afectado y revisar las implementaciones similares existentes.
2. Modificar solo los archivos necesarios para la petición.
3. Revisar imports, rutas, nombres de recursos, enlaces y comportamiento relacionado.
4. Si el entorno local está disponible, ejecutar desde `aconquija-react/` los scripts existentes de lint y compilación, por ejemplo `npm.cmd run lint` y `npm.cmd run build`.
5. Cuando corresponda, abrir la aplicación y revisar la página en escritorio y móvil. Una revisión estática no sustituye esta prueba.
6. Registrar el cambio y los resultados reales en `Registro.md`.
7. Informar brevemente qué se hizo y qué quedó pendiente, sin afirmar que algo fue probado si no lo fue.

## 7. Preparación final y publicación

Antes de considerar terminada una tarea de cierre, revisar únicamente lo pertinente al cambio y al estado real del proyecto:

- Errores de compilación o lint, si se ejecutaron esas comprobaciones.
- Rutas directas, enlaces y navegación afectados.
- Carga de imágenes y recursos locales afectados.
- Presentación responsive y accesibilidad básica de los componentes modificados.
- Configuración de build y redirecciones de React Router, cuando la tarea afecte la publicación.
- Estado real de Netlify por separado del contenido del repositorio.

No asumir que el sitio está desplegado porque exista configuración de Netlify. No publicar ni modificar dominio, DNS o servicios externos sin autorización expresa.

## 8. Documentación relacionada

- `agents.md`: reglas operativas para agentes y colaboradores.
- `Registro.md`: historial de cambios, decisiones y pruebas.
- `Metodologia.md` (este archivo): criterios vigentes para mantener y terminar el proyecto.

Mantener este documento breve y actualizado. Los detalles históricos pertenecen a `Registro.md`, no a la metodología.
