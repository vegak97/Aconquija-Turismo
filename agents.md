# Reglas de trabajo para agentes

Estas reglas son obligatorias para cualquier agente, asistente o colaborador que trabaje en este repositorio.

## 1. Permiso antes de modificar

- Antes de modificar cualquier archivo que afecte la página o el proyecto, se debe explicar claramente qué se va a cambiar y pedir permiso explícito al usuario.
- La solicitud de permiso debe enumerar los archivos o carpetas afectados, los cambios previstos y su posible impacto.
- No se debe comenzar la modificación hasta recibir la aprobación del usuario.
- **Excepción:** si el usuario pide directamente un cambio específico (por ejemplo, «modificá el menú para que sea responsive»), esa petición cuenta como autorización para realizar ese cambio concreto y no hace falta volver a pedir permiso.
- La autorización directa cubre únicamente el cambio solicitado y los pasos estrictamente necesarios para realizarlo. **Si para completar la tarea hace falta modificar algo adicional que el usuario no mencionó ni tuvo en cuenta, hay que detenerse, explicar qué se necesita cambiar, por qué y qué archivos se verían afectados, y pedir permiso antes de hacerlo.**
- **Si durante el trabajo aparece una necesidad imprevista de modificar algo fuera del alcance autorizado, no realizar ese cambio silenciosamente:** notificar al usuario, describir el cambio previsto y su impacto, y esperar su autorización.
- Crear, borrar, mover, renombrar o reemplazar archivos también cuenta como modificación y requiere autorización, salvo que esté comprendido en la petición directa del usuario.

## 2. Registro obligatorio de cambios

- Todo cambio realizado debe registrarse en el archivo `Registro.mp`.
- Cada entrada debe incluir, como mínimo:
  - **Fecha y hora** del cambio, con zona horaria.
  - **Archivo(s) o ruta(s)** afectados.
  - **Qué se cambió**, de forma concreta.
  - **Motivo** del cambio.
  - **Autorización:** permiso explícito del usuario o petición directa que autorizó la tarea.
  - **Resultado:** completado, parcial o fallido.
- La fecha y la hora deben corresponder al momento real en que se realiza el cambio. Usar la zona horaria local indicada en el registro y no inventar horarios.
- Registrar cada cambio, incluso si es pequeño, como corregir una línea, cambiar un nombre, agregar un recurso o ajustar un estilo.
- Actualizar `Registro.mp` como parte de la misma tarea de cambios. Si no se puede actualizar el registro, detener nuevas modificaciones y avisar al usuario.
- No afirmar que un cambio se realizó si no se verificó su resultado.

## 3. Proteger el sitio original

- No eliminar ni sobrescribir el sitio HTML/CSS/JavaScript original durante la migración a React, salvo autorización explícita para hacerlo.
- Mantener los cambios limitados al alcance aprobado.
- Si aparece un problema que requiere cambios fuera del alcance aprobado, explicar el problema y pedir permiso antes de continuar.

## 4. Comunicación

- Antes de pedir permiso, describir los cambios en lenguaje claro y específico, sin expresiones vagas como «arreglar algunas cosas».
- Al terminar, resumir qué se modificó, indicar el resultado y enlazar los archivos o el registro cuando sea posible.
