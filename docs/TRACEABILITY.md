# Matriz de Trazabilidad - SKYDATA Backend

## Trazabilidad: BRS → StRS → SyRS → SRS → Código

### Requisitos de Negocio → Software

| BN (Business Need) | StR (Stakeholder) | SyR (System) | SwR (Software) | Implementación |
|--------------------|-------------------|--------------|----------------|----------------|
| BN-01 | StR-01, StR-02 | SyR-IM03 | SwR-M01, SwR-M02 | Estructura Clean Architecture |
| BN-02 | StR-01 | SyR-PR01 | SwR-ST01, SwR-ST03 | GeoJSON RFC 7946, REST API |
| BN-03 | StR-06, StR-08 | SyR-LC01 | SwR-DC02 | Separación por capas |
| BN-04 | StR-09, StR-10 | SyR-F04, SyR-F05 | SwR-F05, SwR-F06, SwR-F08 | API REST + Mock Data |

### Requisitos Software → Código

| SwR | Descripción | Archivo Principal | ISO/Norma |
|-----|-------------|-------------------|----------|
| SwR-F05 | Endpoint REST | `src/presentation/routes/datos.routes.js` | ISO 12207 Sec 6.4.6.4 |
| SwR-F06 | Formato GeoJSON | `src/infrastructure/data/geojson-repository.js` | RFC 7946 |
| SwR-F08 | Datos Mock | `data/mock-data.json` | BRS Restricción |
| SwR-I03 | Servidor HTTP | `src/presentation/server.js` | ISO 12207 Sec 6.4.6.4.3 |
| SwR-I04 | CORS | `src/infrastructure/config/cors.config.js` | ADR-01 |
| SwR-ST01 | GeoJSON RFC 7946 | `src/domain/value-objects/geojson.vo.js` | RFC 7946 |
| SwR-ST03 | REST API | `src/presentation/routes/` | REST Principles |
| SwR-DC02 | Arquitectura | Estructura completa | Clean Architecture |
| SwR-M01 | Código Documentado | Comentarios en código | ISO 5055:2021 |
| SwR-M02 | Estructura Modular | 4 capas separadas | SyR-LC01 |

### ADRs → Código

| ADR | Decisión | Implementación | Requisitos |
|-----|----------|----------------|------------|
| AD-01 | Arquitectura 2 capas | Backend separado | SwR-DC02, SyR-I02 |
| AD-02 | GeoJSON | RFC 7946 | SwR-ST01, SwR-F06 |

### ISOs Aplicadas

| ISO | Sección | Aplicación en Código |
|-----|---------|---------------------|
| ISO/IEC/IEEE 29148:2018 | Sec 8.5, 9.6 | Estructura SRS → Código |
| ISO/IEC 12207:2017 | Sec 6.4.6.4 | Implementation Process |
| ISO/IEC 5055:2021 | Completo | ESLint config, calidad |
| ISO/IEC 25010:2011 | Sec 4.2 | Mantenibilidad |