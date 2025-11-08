// SwR-ST01: GeoJSON RFC 7946 - Value Object
class GeoJSONValueObject {
  constructor(data) {
    this.validate(data);
    this.data = data;
  }

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

  validateFeature(feature, index) {
    if (feature.type !== 'Feature') {
      throw new Error(`Feature[${index}]: type debe ser "Feature"`);
    }
    if (!feature.geometry) {
      throw new Error(`Feature[${index}]: geometry requerido`);
    }
    this.validateGeometry(feature.geometry, index);
  }

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

  getValue() { return this.data; }
  getFeatureCount() { return this.data.features.length; }
}

module.exports = GeoJSONValueObject;