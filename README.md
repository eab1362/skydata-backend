# SKYDATA Backend - API REST

## Descripción del Proyecto

Backend API REST para el Sistema de Visualización de Información Ambiental de Bogotá (SKYDATA). 
Provee datos ambientales en formato GeoJSON (RFC 7946) mediante endpoints REST.

**Proyecto Académico** - Universidad Distrital Francisco José de Caldas  
**Curso**: Ingeniería de Software II  
**Propósito**: Demostración de competencias en ingeniería de software siguiendo estándares internacionales

## Cumplimiento Normativo

Este proyecto ha sido desarrollado siguiendo los siguientes estándares internacionales:

- **ISO/IEC/IEEE 29148:2018**: Requirements Engineering
- **ISO/IEC 12207:2017**: Software Life Cycle Processes (Sec 6.4.6.4: Implementation Process)
- **ISO/IEC/IEEE 42010:2011**: Architecture Description
- **TOGAF 9.2**: Architecture Framework
- **ISO/IEC 25010:2011**: Systems and Software Quality Models
- **ISO/IEC 5055:2021**: Software Measurement

## Arquitectura Clean Architecture

```
backend/
├── src/
│   ├── domain/              # Entidades y lógica de negocio
│   ├── application/         # Casos de uso
│   ├── infrastructure/      # Implementaciones externas
│   └── presentation/        # API REST
├── data/                    # Datos mock
├── tests/                   # Pruebas
└── docs/                    # Documentación
```

## Instalación

```bash
npm install
npm run dev
```

## Requisitos Implementados

| Requisito | Descripción | Implementación |
|-----------|-------------|----------------|
| SwR-F05 | Endpoint REST | `/api/datos` |
| SwR-F06 | Formato GeoJSON | RFC 7946 |
| SwR-F08 | Datos Mock | `data/mock-data.json` |
| SwR-I03 | Servidor HTTP | Express.js |
| SwR-I04 | CORS | Config CORS |

## Licencia

Proyecto Académico - Universidad Distrital