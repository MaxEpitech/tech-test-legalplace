import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)],
    );
  });


  it("should decrease twice the benefit after expiration date", () => {
    expect(new Pharmacy([new Drug("test", 0, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", -1, 1)],
    );
  });

  it("should the benefit never negative", () => {
    expect(new Pharmacy([new Drug("test", 1, 0)]).updateBenefitValue()).toEqual(
      [new Drug("test", 0, 0)],
    );
  });

  it("Herbal Tea increases in benefit the older it gets", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 1, 4)],
    );
  });

  it("Herbal Tea increases twice in benefit after expiration date", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 0, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -1, 5)],
    );
  });

  it("should benefit never exceed 50", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", -17, 49)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -18, 50)],
    );
  });

  it("Magic pill never expires nor decreases in benefit", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", 2, 3)],
    );
  });

  it("Fervex increases in benefit the older it gets", () => {
    expect(new Pharmacy([new Drug("Fervex", 12, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 11, 4)],
    );
  });

  it("Fervex increases twice the benefit when expiresIn is less than 11 days", () => {
    expect(new Pharmacy([new Drug("Fervex", 10, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 9, 5)],
    );
  });

  it("Fervex increases three times the benefit when expiresIn is less than 6 days", () => {
    expect(new Pharmacy([new Drug("Fervex", 5, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 4, 6)],
    );
  });

  it("Fervex benefit is 0 after expiration date", () => {
    expect(new Pharmacy([new Drug("Fervex", 0, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", -1, 0)],
    );
  });
});