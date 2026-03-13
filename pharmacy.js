export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }




  updateBenefitValue() {
    for (const drug of this.drugs) {
      this.updateDrug(drug);
    }
    return this.drugs;
  }

  updateDrug(drug) {
    switch (drug.name) {
      case "Herbal Tea":
        this.updateHerbalTea(drug);
        break;
      case "Fervex":
        this.updateFervex(drug);
        break;
      case "Magic Pill":
        this.updateMagicPill(drug);
        break;
      default:
        this.updateDefault(drug);
        break;
    }
  }

  updateHerbalTea(drug) {
    drug.expiresIn -= 1;
    const increment = drug.expiresIn < 0 ? 2 : 1;
    drug.benefit = Math.min(50, drug.benefit + increment);
  }

  updateFervex(drug) {
    drug.expiresIn -= 1;
    // if expired, set benefit to 0
    if (drug.expiresIn < 0) {
      drug.benefit = 0;
      return;
    }

    const increment = drug.expiresIn < 6 ? 3 : drug.expiresIn < 11 ? 2 : 1;
    drug.benefit = Math.min(50, drug.benefit + increment);
  }

  updateMagicPill(drug) {
    // Magic Pill does not change
  }

  updateDefault(drug) {
    drug.expiresIn -= 1;
    const decrement = drug.expiresIn < 0 ? 2 : 1;
    drug.benefit = Math.max(0, drug.benefit - decrement);
  }
}
