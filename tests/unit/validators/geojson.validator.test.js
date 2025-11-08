const GeoJSONValidator = require('../../../src/infrastructure/validators/geojson.validator');

describe('GeoJSONValidator', () => {
  test('acepta GeoJSON válido', () => {
    const valid = {
      type: 'FeatureCollection',
      features: [{ type: 'Feature', geometry: { type: 'Point', coordinates: [-74, 4] }, properties: {} }]
    };
    const result = GeoJSONValidator.validate(valid);
    expect(result.valid).toBe(true);
  });

  test('rechaza sin type', () => {
    const invalid = { features: [] };
    const result = GeoJSONValidator.validate(invalid);
    expect(result.valid).toBe(false);
  });
});