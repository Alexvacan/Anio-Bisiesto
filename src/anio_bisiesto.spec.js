import EsAnioBisiesto from "./anio_bisiesto";

describe("Bisiesto", () => {
  it("deberia verificar si el numero 2000 es bisiesto", () => {
    expect(EsAnioBisiesto(2000)).toEqual(true);
  });
  it("deberia verificar si el numero 1700 es bisiesto", () => {
    expect(EsAnioBisiesto(1700)).toEqual(true);
  });
  it("deberia verificar si el numero 1800 es bisiesto", () => {
    expect(EsAnioBisiesto(1800)).toEqual(true);
  });
  it("deberia verificar si el numero 1900 es bisiesto", () => {
    expect(EsAnioBisiesto(1900)).toEqual(true);
  });
  it("deberia verificar si el numero 2100 es bisiesto", () => {
    expect(EsAnioBisiesto(2100)).toEqual(true);
  });
  it("deberia verificar si el numero 2008 es bisiesto", () => {
    expect(EsAnioBisiesto(2008)).toEqual(true);
  });
  it("deberia verificar si el numero 2012 es bisiesto", () => {
    expect(EsAnioBisiesto(2012)).toEqual(true);
  });
  it("deberia verificar si el numero 2016 es bisiesto", () => {
    expect(EsAnioBisiesto(2016)).toEqual(true);
  });
  it("deberia verificar si el numero 2017 es bisiesto", () => {
    expect(EsAnioBisiesto(2017)).toEqual(false);
  });
  it("deberia verificar si el numero 2018 es bisiesto", () => {
    expect(EsAnioBisiesto(2018)).toEqual(false);
  });
  it("deberia verificar si el numero 2019 es bisiesto", () => {
    expect(EsAnioBisiesto(2019)).toEqual(false);
  });
});
