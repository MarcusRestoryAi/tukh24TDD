// rectangle.test.js

const Rektangel = require('./rektangel'); // Anpassa till filnamnet där din klass finns

describe('Rektangel', () => {
  // Testar konstruktorn
  describe('constructor', () => {
    test('should create a rectangle with valid length and width', () => {
      const rect = new Rektangel(5, 3);
      expect(rect.length).toBe(5);
      expect(rect.width).toBe(3);
    });
/*
    test('should return null for invalid size where width is larger than length', () => {
      const rect = new Rektangel(3, 5);
      expect(rect).toBe();
    });

    test('should return null for negative dimensions', () => {
      const rect = new Rektangel(-3, 5);
      expect(rect).toBeFalsy();
    });

    test('should return null for zero dimensions', () => {
      const rect = new Rektangel(0, 0);
      expect(rect).toBeFalsy();
    });
    */
  });

  // Testar setSize-metoden
  describe('setSize', () => {
    test('should set valid dimensions', () => {
      const rect = new Rektangel(5, 3);
      rect.setSize(4, 2);
      expect(rect.length).toBe(4);
      expect(rect.width).toBe(2);
    });

    test('should return "Felaktig storlek" for invalid size where width is larger than length', () => {
      const rect = new Rektangel(5, 3);
      expect(rect.setSize(3, 5)).toBe('Felaktig storlek');
    });

    test('should return "Felaktig storlek" for negative dimensions', () => {
      const rect = new Rektangel(5, 3);
      expect(rect.setSize(-3, 2)).toBe('Felaktig storlek');
    });

    test('should return "Felaktig storlek" for zero dimensions', () => {
      const rect = new Rektangel(5, 3);
      expect(rect.setSize(0, 0)).toBe('Felaktig storlek');
    });
  });

  // Testar getArea-metoden
  describe('getArea', () => {
    test('should return the correct area for a rectangle', () => {
      const rect = new Rektangel(5, 3);
      expect(rect.getArea()).toBe(15);
    });

    test('should return the correct area for a square', () => {
      const rect = new Rektangel(4, 4);
      expect(rect.getArea()).toBe(16);
    });
  });

  // Testar isSquare-metoden
  describe('isSquare', () => {
    test('should return true for a square', () => {
      const rect = new Rektangel(4, 4);
      expect(rect.isSquare()).toBe(true);
    });

    test('should return false for a rectangle', () => {
      const rect = new Rektangel(5, 3);
      expect(rect.isSquare()).toBe(false);
    });
  });

  // Testar wrongSize-metoden
  describe('wrongSize', () => {
    test('should return true for negative dimensions', () => {
      const rect = new Rektangel(5, 3);
      expect(rect.wrongSize(-1, 3)).toBe(true);
    });

    test('should return true for width larger than length', () => {
      const rect = new Rektangel(5, 3);
      expect(rect.wrongSize(3, 5)).toBe(true);
    });

    test('should return true for zero dimensions', () => {
      const rect = new Rektangel(5, 3);
      expect(rect.wrongSize(0, 0)).toBe(true);
    });

    test('should return false for valid dimensions', () => {
      const rect = new Rektangel(5, 3);
      expect(rect.wrongSize(5, 3)).toBe(false);
    });
  });
});
