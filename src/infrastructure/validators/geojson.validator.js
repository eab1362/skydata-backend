// SwR-ST01: Validación GeoJSON
const GeoJSONValueObject = require('../../domain/value-objects/geojson.vo');

class GeoJSONValidator {
  static validate(data) {
    try {
      new GeoJSONValueObject(data);
      return { valid: true, errors: [] };
    } catch (error) {
      return { valid: false, errors: [error.message] };
    }
  }

  static validateAndThrow(data) {
    return new GeoJSONValueObject(data);
  }

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