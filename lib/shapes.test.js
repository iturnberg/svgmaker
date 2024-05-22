const main = require('./index');

describe('getText', () => {
  it('should return a string with a length of 3 or less', () => {
    const text = main.getText();
    expect(typeof text).toBe('string');
    expect(text.length).toBeLessThanOrEqual(3);
  });
});

describe('getTextColor', () => {
  it('should return a string', () => {
    const textColor = main.getTextColor();
    expect(typeof textColor).toBe('string');
  });
});

describe('getShape', () => {
  it('should return a string that is one of "circle", "triangle", or "square"', () => {
    const shape = main.getShape();
    expect(typeof shape).toBe('string');
    expect(['circle', 'triangle', 'square']).toContain(shape);
  });
});

describe('getShapeColor', () => {
  it('should return a string', () => {
    const shapeColor = main.getShapeColor();
    expect(typeof shapeColor).toBe('string');
  });
});