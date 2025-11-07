// SwR-ST01: GeoJSON RFC 7946 - Value Object
// Clean Architecture: Domain Layer - Value Objects
// RFC 7946: The GeoJSON Format

/**
 * GeoJSON Value Object
 * 
 * Trazabilidad:
 * - SwR-ST01: Cumplimiento con GeoJSON RFC 7946
 * - SwR-DB01: Estructura de Datos Mock
 * - ADR-02: Uso de GeoJSON como Formato de Datos
 * 
 * Cumplimiento:
 * - RFC 7946 - The GeoJSON Format Specification
 * - ISO/IEC/IEEE 29148:2018 Sec 9.6.15 (Database Requirements)
 * 
 * Representa un objeto GeoJSON válido en el dominio
 */
class GeoJSONValueObject {
  /**
   * Crea una instancia de GeoJSON Value Object
   * @param {Object} data - Datos en formato GeoJSON
   * @throws {Error} Si el formato no es válido
   */
  constructor(data) {
    this.validate(data);
    this.data = data;
  }

  /**
   * Valida que los datos cumplan con RFC 7946
   * @param {Object} data - Datos a validar
   * @throws {Error} Si la validación falla
   */
  validate(data) {
    // RFC 7946 Sec 3.3: FeatureCollection
    if (!data || typeof data !== 'object') {
      throw new Error('GeoJSON debe ser un objeto válido');
    }

    if (data.type !== 'FeatureCollection') {
      throw new Error('GeoJSON type debe ser "FeatureCollection"');
    }

    if (!Array.isArray(data.features)) {
      throw new Error('GeoJSON features debe ser un array');
    }

    // Validar cada feature
    data.features.forEach((feature, index) => {
      this.validateFeature(feature, index);
    });
  }

  /**
   * Valida un Feature individual
   * @param {Object} feature - Feature a validar
   * @param {number} index - Índice del feature
   * @throws {Error} Si el Feature no es válido
   */
  validateFeature(feature, index) {
    if (feature.type !== 'Feature') {
      throw new Error(`Feature[${index}]: type debe ser "Feature"`);
    }

    // RFC 7946 Sec 3.2: Geometry Object
    if (!feature.geometry || typeof feature.geometry !== 'object') {
      throw new Error(`Feature[${index}]: geometry es requerido`);
    }

    this.validateGeometry(feature.geometry, index);

    // Properties son opcionales pero si existen deben ser objeto
    if (feature.properties && typeof feature.properties !== 'object') {
      throw new Error(`Feature[${index}]: properties debe ser un objeto`);
    }
  }

  /**
   * Valida la geometría de un Feature
   * @param {Object} geometry - Geometría a validar
   * @param {number} featureIndex - Índice del feature padre
   * @throws {Error} Si la geometría no es válida
   */
  validateGeometry(geometry, featureIndex) {
    // RFC 7946 Sec 3.1.2: Point
    if (geometry.type !== 'Point') {
      throw new Error(`Feature[${featureIndex}]: Solo se soporta geometry type "Point"`);
    }

    // RFC 7946 Sec 3.1.1: Position
    if (!Array.isArray(geometry.coordinates)) {
      throw new Error(`Feature[${featureIndex}]: coordinates debe ser un array`);
    }

    if (geometry.coordinates.length < 2) {
      throw new Error(`Feature[${featureIndex}]: coordinates debe tener al menos 2 elementos [lon, lat]`);
    }

    const [lon, lat] = geometry.coordinates;

    // Validar rangos válidos de coordenadas
    if (typeof lon !== 'number' || typeof lat !== 'number') {
      throw new Error(`Feature[${featureIndex}]: coordinates deben ser números`);
    }

    if (lon < -180 || lon > 180) {
      throw new Error(`Feature[${featureIndex}]: longitud debe estar entre -180 y 180`);
    }

    if (lat < -90 || lat > 90) {
      throw new Error(`Feature[${featureIndex}]: latitud debe estar entre -90 y 90`);
    }
  }

  /**
   * Retorna los datos GeoJSON
   * @returns {Object} Datos GeoJSON validados
   */
  getValue() {
    return this.data;
  }

  /**
   * Retorna el número de features
   * @returns {number} Cantidad de features
   */
  getFeatureCount() {
    return this.data.features.length;
  }
}

module.exports = GeoJSONValueObject;