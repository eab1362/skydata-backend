// SwR-ST01: Validación de GeoJSON RFC 7946
// Clean Architecture: Infrastructure Layer - Validators
// ISO/IEC 5055:2021: Reliability - Input Validation

const GeoJSONValueObject = require('../../domain/value-objects/geojson.vo');

/**
 * Validador de GeoJSON
 * 
 * Trazabilidad:
 * - SwR-ST01: GeoJSON RFC 7946
 * - SwR-DB01: Estructura de Datos Mock
 * - ISO/IEC 5055:2021: Reliability
 * 
 * Cumplimiento:
 * - RFC 7946: The GeoJSON Format
 * - Valida estructura completa de GeoJSON
 * - Valida tipos de datos y rangos
 * - Proporciona mensajes de error descriptivos
 */
class GeoJSONValidator {
  /**
   * Valida un objeto GeoJSON
   * @param {Object} data - Datos a validar
   * @returns {Object} Resultado de validación {valid: boolean, errors: string[]}
   */
  static validate(data) {
    const errors = [];

    try {
      // Usar Value Object para validación
      new GeoJSONValueObject(data);
      return { valid: true, errors: [] };
    } catch (error) {
      errors.push(error.message);
      return { valid: false, errors };
    }
  }

  /**
   * Valida y lanza excepción si no es válido
   * @param {Object} data - Datos a validar
   * @throws {Error} Si la validación falla
   * @returns {GeoJSONValueObject} Value object validado
   */
  static validateAndThrow(data) {
    return new GeoJSONValueObject(data);
  }

  /**
   * Valida properties específicas requeridas para SKYDATA
   * SwR-DB01: Estructura de datos mock
   * @param {Object} properties - Properties del Feature
   * @returns {Object} Resultado de validación
   */
  static validateSkydataProperties(properties) {
    const errors = [];
    const requiredFields = ['estacion', 'temperatura', 'humedad', 'calidad_aire', 'ruido', 'timestamp'];

    if (!properties) {
      errors.push('Properties es requerido para datos SKYDATA');
      return { valid: false, errors };
    }

    // Validar campos requeridos
    requiredFields.forEach(field => {
      if (properties[field] === undefined) {
        errors.push(`Campo requerido faltante: ${field}`);
      }
    });

    // Validar tipos de datos
    if (properties.temperatura !== undefined && typeof properties.temperatura !== 'number') {
      errors.push('temperatura debe ser un número');
    }

    if (properties.humedad !== undefined && typeof properties.humedad !== 'number') {
      errors.push('humedad debe ser un número');
    }

    if (properties.calidad_aire !== undefined && typeof properties.calidad_aire !== 'number') {
      errors.push('calidad_aire debe ser un número');
    }

    if (properties.ruido !== undefined && typeof properties.ruido !== 'number') {
      errors.push('ruido debe ser un número');
    }

    return {
      valid: errors.length === 0,
      errors
    };
  }
}

module.exports = GeoJSONValidator;