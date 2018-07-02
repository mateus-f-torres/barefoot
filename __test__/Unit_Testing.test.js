// Basic Testing Structure
// __test__/FileName.test.js

describe('Unit Tests', () => {
  
  describe("Basic Assertions", () => {
    
    test('#toBeNull, #not.toBeNull', () => {
      expect(null).toBeNull();
      expect(1).not.toBeNull();   
    });
    
    test('#toBeDefined, #toBeUndefined', () => {
      expect('hi').toBeDefined();
      expect(undefined).toBeUndefined();
    });
    test('#toBeTruthy, #toBeFalsy', () => {
      expect(true).toBeTruthy();
      expect(false).toBeFalsy();
      expect(5).toBeTruthy();
      expect(0).toBeFalsy();
    })
  });
  
  describe("Equality", () => {
  // there is no == matcher
    test('#toEqual, deep equal each value', () => {
      expect(2 + 3).toEqual(5);
      expect("5").not.toEqual(5);
      expect({a: 5, b: "name"}).toEqual({b: "name", a: 5});
    });
    test('#toBe, use Object.is to check reference', () => {
      expect(7 - 2).toBe(5);
      expect(2 * "6").toBe(12);
      expect(5 + "5").not.toBe(10);
      expect({a: 5}).not.toBe({a: 5});
    });
    test('#toStrictEqual, all keys and object type itself', () => {
      
    });
  });
  describe("Comparisons", () => {});
  
  describe("Strings", () => {});
  
  describe("Arrays", () => {});
  
  describe("Objects", () => {});
  
});

describe("Functional Tests", () => {});