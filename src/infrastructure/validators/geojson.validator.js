// SwR-ST01: Validación GeoJSON
const GeoJSONValueObject = require('../../domain/value-objects/geojson.vo');

/**
 * Validador para datos GeoJSON y propiedades específicas de Skydata.
 * Proporciona métodos estáticos para validar estructura y campos requeridos.
 * 
 * @class GeoJSONValidator
 */
class GeoJSONValidator {
  /**
   * Valida datos GeoJSON sin lanzar excepciones.
   * 
   * @param {Object} data - Datos GeoJSON a validar
   * @returns {{valid: boolean, errors: string[]}} Resultado de la validación
   */
  static validate(data) {
    try {
      new GeoJSONValueObject(data);
      return { valid: true, errors: [] };
    } catch (error) {
      return { valid: false, errors: [error.message] };
    }
  }

  /**
   * Valida datos GeoJSON y lanza excepción si no son válidos.
   * 
   * @param {Object} data - Datos GeoJSON a validar
   * @returns {GeoJSONValueObject} Instancia de GeoJSONValueObject si es válido
   * @throws {Error} Si los datos no son válidos
   */
  static validateAndThrow(data) {
    return new GeoJSONValueObject(data);
  }

  /**
   * Valida las propiedades requeridas para datos Skydata.
   * 
   * @param {Object} properties - Propiedades a validar
   * @returns {{valid: boolean, errors: string[]}} Resultado de la validación
   */
  static validateSkydataProperties(properties) {
    const errors = [];
    const requiredFields = ['estacion', 'temperatura', 'humedad', 'calidad_aire', 'ruido', 'timestamp'];

    if (!properties) {
      errors.push('Properties requerido');
      return { valid: false, errors };
    }

    requiredFields.forEach(field => {
      if (properties[field] === undefined) {
        errors.push(`Campo faltante: ${field}`);
      }
    });

    return { valid: errors.length === 0, errors };
  }
}

module.exports = GeoJSONValidator;