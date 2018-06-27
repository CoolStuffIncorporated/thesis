/* global describe, it, browser */
const expect = require("chai").expect;

describe("Wanderer App", () => {
  it("Should load with the right title", () => {
    browser.url("http://localhost:3000/");
    const actualTitle = browser.getTitle();
    expect(actualTitle).to.eql("Wanderer");
  });
});
