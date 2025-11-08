// SwR-ST01: GeoJSON RFC 7946 - Value Object

/**
 * Value Object para validar y encapsular datos GeoJSON según RFC 7946.
 * Soporta FeatureCollection con features de tipo Point.
 * 
 * @class GeoJSONValueObject
 */
class GeoJSONValueObject {
  /**
   * Crea una instancia de GeoJSONValueObject.
   * Valida automáticamente los datos al construir.
   * 
   * @param {Object} data - Objeto GeoJSON con type "FeatureCollection"
   * @throws {Error} Si los datos no son válidos según RFC 7946
   */
  constructor(data) {
    this.validate(data);
    this.data = data;
  }

  /**
   * Valida la estructura básica del GeoJSON.
   * 
   * @param {Object} data - Datos GeoJSON a validar
   * @throws {Error} Si la estructura no es válida
   * @private
   */
  validate(data) {
    if (!data || typeof data !== 'object') {
      throw new Error('GeoJSON debe ser un objeto válido');
    }
    if (data.type !== 'FeatureCollection') {
      throw new Error('type debe ser "FeatureCollection"');
    }
    if (!Array.isArray(data.features)) {
      throw new Error('features debe ser un array');
    }
    data.features.forEach((feature, index) => {
      this.validateFeature(feature, index);
    });
  }

  /**
   * Valida una feature individual del GeoJSON.
   * 
   * @param {Object} feature - Feature a validar
   * @param {number} index - Índice de la feature en el array
   * @throws {Error} Si la feature no es válida
   * @private
   */
  validateFeature(feature, index) {
    if (feature.type !== 'Feature') {
      throw new Error(`Feature[${index}]: type debe ser "Feature"`);
    }
    if (!feature.geometry) {
      throw new Error(`Feature[${index}]: geometry requerido`);
    }
    this.validateGeometry(feature.geometry, index);
  }

  /**
   * Valida la geometría de una feature (solo Point soportado).
   * Verifica coordenadas [longitud, latitud] dentro de rangos válidos.
   * 
   * @param {Object} geometry - Geometría a validar
   * @param {number} featureIndex - Índice de la feature
   * @throws {Error} Si la geometría no es válida
   * @private
   */
  validateGeometry(geometry, featureIndex) {
    if (geometry.type !== 'Point') {
      throw new Error(`Feature[${featureIndex}]: Solo Point soportado`);
    }
    if (!Array.isArray(geometry.coordinates)) {
      throw new Error(`Feature[${featureIndex}]: coordinates debe ser array`);
    }
    if (geometry.coordinates.length < 2) {
      throw new Error(`Feature[${featureIndex}]: coordinates [lon, lat]`);
    }
    const [lon, lat] = geometry.coordinates;
    if (typeof lon !== 'number' || typeof lat !== 'number') {
      throw new Error(`Feature[${featureIndex}]: coordinates números`);
    }
    if (lon < -180 || lon > 180 || lat < -90 || lat > 90) {
      throw new Error(`Feature[${featureIndex}]: coordenadas fuera de rango`);
    }
  }

  /**
   * Obtiene los datos GeoJSON validados.
   * 
   * @returns {Object} Datos GeoJSON
   */
  getValue() { return this.data; }
  
  /**
   * Obtiene el número de features en la colección.
   * 
   * @returns {number} Cantidad de features
   */
  getFeatureCount() { return this.data.features.length; }
}

module.exports = GeoJSONValueObject;