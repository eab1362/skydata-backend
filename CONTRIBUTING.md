# Guía de Contribución - SKYDATA Backend

## 📚 Introducción

Este documento describe cómo contribuir al proyecto SKYDATA Backend siguiendo las mejores prácticas de ingeniería de software y cumpliendo con los estándares ISO requeridos.

## 📄 Contexto del Proyecto

**Nota Importante**: Este proyecto ya tiene todas las features implementadas en la rama `main`. Las branches de features existen para demostrar el flujo de trabajo propuesto y permitir que cada colaborador pueda:

1. Revisar el código asignado a su tarea
2. Hacer mejoras o ajustes si es necesario
3. Documentar su contribución
4. Crear PRs con fines demostrativos y de evaluación

## 👥 Distribución de Tareas

### @carlosperdomo376 (3 tareas)

1. **Backend Issue #3**: SwR-F08 - Implementar Datos Mock GeoJSON
   - Branch: `feature/SwR-F08-datos-mock-geojson`
   - Archivo: `data/mock-data.json`
   - Commit de referencia: a4e6126

2. **Backend Issue #6**: SwR-V01 - Implementar Pruebas Unitarias
   - Branch: `feature/SwR-V01-unit-tests`
   - Archivos: `tests/unit/**/*.test.js`, `jest.config.js`
   - Commit de referencia: 16a774f

3. **Frontend Issue #3**: SwR-F07 - Cliente HTTP
   - Ver repo frontend

### @eab1362 (3 tareas)

1. **Backend Issue #1**: SwR-F05, SwR-F06 - Endpoint REST
   - Branch: `feature/SwR-F05-F06-endpoint-rest`
   - Archivos: Todo el flujo Clean Architecture
   - Commit de referencia: 53d117b

2. **Backend Issue #2**: SwR-M01 - Documentación
   - Branch: `feature/SwR-M01-documentation`
   - Archivos: `docs/API.md`, comentarios en código
   - Commit de referencia: d7771b0 (README)

3. **Frontend Issue #4**: SwR-F03, SwR-F04 - Info Detallada
   - Ver repo frontend

### @jeissonmp15 (3 tareas)

1. **Backend Issue #4**: SwR-I03, SwR-I04 - Servidor HTTP y CORS
   - Branch: `feature/SwR-I03-I04-server-cors`
   - Archivos: `src/presentation/server.js`, `src/infrastructure/config/cors.config.js`
   - Commit de referencia: d9d011b

2. **Frontend Issue #1**: SwR-F01 - Renderizado Mapa
3. **Frontend Issue #5**: SwR-V03 - Tests UI

### @giancarloprieto (3 tareas)

1. **Backend Issue #5**: SwR-ST01 - Validadores GeoJSON
   - Branch: `feature/SwR-ST01-validators-geojson`
   - Archivos: `src/domain/value-objects/geojson.vo.js`, `src/infrastructure/validators/geojson.validator.js`
   - Commit de referencia: 59167de

2. **Frontend Issue #2**: SwR-F02 - Marcadores
3. **Frontend Issue #6**: SwR-U01, U02 - UI/UX

## 🛠️ Flujo de Trabajo

### Opción A: Revisar y Documentar (Recomendado)

Ya que el código está implementado, tu trabajo consiste en:

1. **Revisar tu código asignado**
   ```bash
   git checkout feature/SwR-XXX-tu-feature
   # Revisar los archivos relacionados
   ```

2. **Verificar que funciona**
   ```bash
   npm install
   npm test
   npm run dev
   ```

3. **Documentar lo que hiciste**
   - Agregar comentarios adicionales si es necesario
   - Crear archivo `docs/FEATURE_SwR-XXX.md` explicando tu implementación

4. **Crear PR demostrativo**
   - Usar el template de PR (ver abajo)
   - Explicar la trazabilidad completa
   - Solicitar review de otro miembro

### Opción B: Mejorar o Extender

Si encuentras mejoras posibles:

1. **Crear nueva branch desde main**
   ```bash
   git checkout main
   git pull origin main
   git checkout -b improvement/SwR-XXX-mejora
   ```

2. **Hacer tus mejoras**
   - Seguir los estándares de código (ESLint)
   - Agregar tests si aplica
   - Documentar cambios

3. **Commit con trazabilidad**
   ```bash
   git commit -m "improvement(SwR-XXX): descripción
   
   Trazabilidad:
   - Requisito: SwR-XXX
   - ISO: ISO/IEC XXXXX
   
   Mejoras realizadas:
   - ...
   "
   ```

4. **Push y PR**
   ```bash
   git push origin improvement/SwR-XXX-mejora
   ```

## 📝 Template de Pull Request

Cuando crees un PR, usa este template:

```markdown
## 📝 Descripción

[Descripción breve de lo implementado]

## 🔍 Trazabilidad Completa

### Requisitos Implementados
- **SwR-XXX**: [Nombre del requisito] ✅
- **SyR-XXX**: [Requisito del sistema] ✅
- **StR-XXX**: [Requisito de stakeholder] ✅
- **BN-XX**: [Requisito de negocio] ✅

### Casos de Uso
- **CU-XX**: [Nombre del caso de uso] ✅

### Decisiones Arquitectónicas
- **ADR-XX**: [Nombre de la decisión] ✅

### Estándares ISO y Normas
- **ISO/IEC XXXXX**: Sec X.X.X - [Descripción] ✅
- **RFC XXXX**: [Si aplica] ✅

## 📎 Archivos Modificados

- ✅ `path/to/file1.js`
- ✅ `path/to/file2.js`

## ✨ Características Implementadas

- ✅ [Característica 1]
- ✅ [Característica 2]

## 🧪 Criterios de Aceptación

- [x] [Criterio 1]
- [x] [Criterio 2]

## 👤 Asignación

**Asignado a**: @tu-usuario
**Relacionado con Issue**: #X

## 📚 Referencias

- [Link a documentación relevante]
- [Link a issue relacionado]

---

**Cumplimiento Normativo**: ISO/IEC XXXXX
```

## ✅ Checklist Pre-PR

Antes de crear un PR, verifica:

- [ ] Código ejecuta sin errores
- [ ] ESLint pasa sin warnings críticos: `npm run lint`
- [ ] Tests pasan: `npm test`
- [ ] Comentarios con trazabilidad agregados (// SwR-XXX)
- [ ] No hay vulnerabilidades críticas: `npm audit`
- [ ] README actualizado si es necesario
- [ ] Commit messages siguen el formato con trazabilidad

## 🔍 Code Review

### Qué Revisar

1. **Trazabilidad**:
   - ¿Tiene comentarios // SwR-XXX?
   - ¿El commit message incluye trazabilidad?

2. **Calidad (ISO 5055)**:
   - ¿Funciones < 50 líneas?
   - ¿Complejidad < 10?
   - ¿Manejo de errores implementado?

3. **Funcionalidad**:
   - ¿Cumple los criterios de aceptación?
   - ¿Pasan los tests?

4. **Documentación**:
   - ¿Código auto-explicativo?
   - ¿Comentarios donde se necesitan?

### Cómo Aprobar un PR

```
1. Ir al PR en GitHub
2. Revisar "Files changed"
3. Agregar comentarios si es necesario
4. Si todo está bien:
   - Click en "Review changes"
   - Seleccionar "Approve"
   - Agregar comentario positivo
5. Click en "Merge pull request"
```

## 💬 Comunicación

### Canales

- **Issues**: Para discutir tareas específicas
- **PRs**: Para review de código
- **Commits**: Para documentar cambios

### Etiqueta

- Sé constructivo en los reviews
- Haz preguntas si no entiendes algo
- Documenta tus decisiones
- Comparte conocimiento

## 🎯 Objetivos de Aprendizaje

Al contribuir a este proyecto, demostrarás:

1. ✅ Aplicación de estándares ISO en desarrollo real
2. ✅ Clean Architecture en práctica
3. ✅ Principios SOLID
4. ✅ Testing automatizado
5. ✅ Documentación técnica
6. ✅ Trabajo en equipo con Git/GitHub
7. ✅ Trazabilidad de requisitos

## 📞 Contacto

Para dudas o problemas:

1. Crear un issue descriptivo
2. Mencionar al miembro del equipo relevante
3. Incluir información de contexto

---

**Gracias por contribuir a SKYDATA! 🚀**