# Reglas de trabajo para agentes — Aconquija React

Estas reglas son obligatorias para cualquier agente, asistente o colaborador que trabaje dentro de `aconquija-react/`. Aplican tanto al mantenimiento del sitio existente como a la creación de nuevas páginas, componentes, estilos y rutas.

## 1. Autorización y alcance

- Una petición directa del usuario autoriza el cambio solicitado y los pasos estrictamente necesarios para completarlo; no hace falta volver a pedir permiso por el mismo alcance.
- Para cambios adicionales no solicitados, explicar antes qué se modificaría, en qué archivos, por qué y cuál sería el impacto, y esperar autorización.
- No ampliar silenciosamente el alcance, cambiar el diseño aprobado, inventar contenido, instalar dependencias ni alterar la configuración del proyecto.
- Crear, borrar, mover, renombrar o reemplazar archivos cuenta como modificación y debe estar cubierto por la autorización.
- Si aparece un bloqueo o una decisión que no está contemplada, detener únicamente la parte afectada, explicar la situación y consultar al usuario.

## 2. Registro obligatorio

- Todo cambio dentro de `aconquija-react/` debe registrarse en `aconquija-react/Registro.md`.
- Cada entrada debe incluir:
  - Fecha y hora reales, con zona horaria local de Argentina (UTC-03:00).
  - Archivos o rutas afectados.
  - Cambio concreto y motivo.
  - Autorización (petición directa o permiso explícito).
  - Resultado y pruebas ejecutadas o pendientes.
- Actualizar `Registro.md` como parte de la misma tarea. Si no se puede actualizar, no continuar con modificaciones adicionales y avisar al usuario.
- No afirmar que se guardó, verificó o probó algo si no existe evidencia del resultado.

## 3. Documentación de referencia

- Leer `Metodologia.md` y este archivo antes de cambios que afecten estructura, arquitectura, rutas o criterios del proyecto.
- `Metodologia.md` contiene los criterios vigentes al inicio del documento y el historial de la migración. Si un anexo histórico contradice la sección de estado actual, prevalece el estado actual más reciente y las decisiones posteriores anotadas en `Registro.md`.
- Actualizar la metodología cuando cambie de forma importante la arquitectura, la organización de carpetas, las rutas, el flujo de publicación o las reglas acordadas. No convertirla en un registro de cada ajuste menor de CSS.
- Mantener este archivo al día si cambian las reglas de colaboración, pruebas o estructura del proyecto.

## 4. Organización y reutilización del código

- Aplicación React/Vite: trabajar dentro de `aconquija-react/`; la configuración de rutas se encuentra en `src/App.jsx`.
- Páginas de segundo nivel: `src/pages/second-level/`.
- Páginas de detalle de tercer nivel: `src/pages/third-level/`.
- Componentes propios de cada página deben seguir el patrón existente bajo `src/components/second-level/<seccion>/` o `src/components/third-level/<pagina>/`.
- Antes de crear un componente, revisar si existe uno compartido adecuado. Reutilizar `Header`, `Footer`, el reproductor global y los componentes comunes en vez de duplicarlos.
- Para galerías acordeón, revisar y reutilizar `src/components/ui/AccordionGallery.jsx` cuando corresponda.
- Mantener los estilos coherentes con las hojas compartidas de `src/styles/` y con los estilos locales de cada página. Evitar reglas duplicadas o selectores globales nuevos sin necesidad.
- No cambiar nombres de carpetas, convenciones de rutas ni arquitectura general sin autorización cuando la modificación exceda la petición concreta.

## 5. Rutas, navegación y enlaces

- Registrar páginas nuevas en `src/App.jsx` y conectar los enlaces desde sus tarjetas o páginas de origen cuando forme parte de la petición.
- Antes de añadir una ruta, comprobar que no exista ya un destino equivalente y mantener la convención de URL del proyecto.
- No dejar enlaces activos a rutas inexistentes, ni cambiar rutas ya publicadas por iniciativa propia.
- Mantener los breadcrumbs y enlaces de retorno coherentes con la jerarquía real del sitio.
- Los enlaces a mapas, WhatsApp y redes deben utilizar datos existentes y confirmados; no inventar teléfonos, ubicaciones o cuentas.

## 6. Imágenes y recursos

- Reutilizar recursos locales dentro de `aconquija-react/imagenes/` y confirmar el nombre, la extensión y la ubicación reales antes de importarlos.
- Si el nombre solicitado no coincide, buscar el mismo recurso local con otra extensión o mayúsculas/minúsculas. Cambiar la referencia solo si se confirma que es el mismo archivo.
- No descargar ni sustituir imágenes por otras externas, generadas o meramente parecidas, salvo solicitud expresa.
- Las posiciones vacías de galerías pueden estar reservadas. No usar `src=""`; conservar un espacio visual seguro hasta que haya una imagen confirmada.
- Añadir texto alternativo descriptivo a imágenes informativas y mantener el comportamiento responsive de las imágenes.
- No borrar, mover ni duplicar archivos gráficos como parte de una tarea de página salvo que esté autorizado.

## 7. Contenido y estilo visual

- Basarse en el contenido ya aprobado, en los materiales aportados por el usuario o en fuentes que el usuario haya indicado. Distinguir hechos confirmados de texto orientativo.
- No inventar datos turísticos, historia, precios, horarios, disponibilidad, dificultad, servicios, duración ni contactos.
- Respetar el estilo existente: naturaleza y calidez, estética rústica, pizarra oscura `#1c222c`, acentos dorados y texto con contraste adecuado, según la sección.
- Mantener la adaptación a escritorio y móvil. Si se añaden animaciones, contemplar `prefers-reduced-motion` cuando sea pertinente.
- No cambiar elementos no solicitados solo por preferencia personal del agente.

## 8. Verificación y comunicación

- Distinguir revisión estática, lint, build y pruebas visuales en navegador; son comprobaciones distintas.
- Cuando sea posible en el entorno de trabajo, ejecutar `npm.cmd run lint` y `npm.cmd run build` desde `aconquija-react/`, siempre que los scripts estén definidos. Informar los resultados reales.
- No afirmar que el sitio funciona en móvil, que el build pasa o que Netlify está desplegado sin haberlo comprobado.
- Si no se ejecutaron pruebas, decirlo claramente y de forma breve; no repetir recordatorios genéricos innecesarios.
- Al finalizar, resumir los cambios y enlazar los archivos relevantes o el registro cuando sea posible.

## 9. Publicación y servicios externos

- No publicar, modificar DNS, cambiar dominios, editar configuraciones de hosting ni ejecutar acciones externas salvo que el usuario lo pida o autorice.
- La configuración de Netlify existente debe conservarse, salvo petición concreta o necesidad adicional aprobada.
- Distinguir la configuración presente en el repositorio del estado real de un deploy.

## 10. Prioridad entre documentos

1. Petición más reciente y explícita del usuario, dentro de su alcance.
2. Sección «Estado actual del proyecto» al inicio de `Metodologia.md`.
3. Decisiones posteriores documentadas en `Registro.md`.
4. Resto de `Metodologia.md` y sus anexos históricos.
5. Estas reglas generales, cuando no contradigan los puntos anteriores.

Si existe una contradicción real entre decisiones vigentes, no adivinar: explicarla y consultar al usuario.
