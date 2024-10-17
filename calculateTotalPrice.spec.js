const calculateTotalPrice = require("./calculateTotalPrice")

describe("CalculateTotalPrice", () => {

  it("Köp av 1 produkt", () => {
    cost = calculateTotalPrice(10, "any", 1)
    expect(cost).toBe(10)
  })

  it("Köp av 2 produkt", () => {
    cost = calculateTotalPrice(10, "any", 2)
    expect(cost).toBe(20)
  })

  it("Köp av any customer", () => {
    cost = calculateTotalPrice(10, "any", 2)
    expect(cost).toBe(20)
  })

  it("Köp av member customer", () => {
    cost = calculateTotalPrice(0, "member", 0)
    expect(cost).toBe(0)
  })

  it("Köp av vip customer", () => {
    cost = calculateTotalPrice(0, "vip", 0)
    expect(cost).toBe(0)
  })

  it("Köp av unknown customer", () => {
    cost = calculateTotalPrice(10, "unknown", 2)
    expect(cost).toBeFalsy()
  })

  it("Kontroll att member får 10% rabatt", () => {
    cost = calculateTotalPrice(10, "member", 2)
    expect(cost).toBe(18)
  })

  it("Kontroll att vip får 20% rabatt", () => {
    cost = calculateTotalPrice(10, "vip", 2)
    expect(cost).toBe(16)
  })

  it("Kontroll att any får mängdrabatt", () => {
    cost = calculateTotalPrice(10, "any", 3)
    expect(cost).toBe(30 * 0.95)
  })

  it("Kontroll att any får mängdrabatt", () => {
    cost = calculateTotalPrice(10, "any", 5)
    expect(cost).toBe(50 * 0.95)
  })

  it("Kontroll att member får mängdrabatt", () => {
    cost = calculateTotalPrice(10, "member", 5)
    expect(cost).toBe(50 * 0.90 * 0.95)
  })

  it("Kontroll att vip får mängdrabatt", () => {
    cost = calculateTotalPrice(10, "vip", 5)
    expect(cost).toBe(50 * 0.80 * 0.95)
  })



})