describe("Weather API", () => {
  it("displays current weather for London", () => {
   
    cy.intercept("GET", /weather\?q=London.*appid=.*/).as("getCurrentWeather");

   
    cy.visit("http://localhost:3000");

 
    cy.contains("Get Current Weather").click();

    
    cy.wait("@getCurrentWeather").then((interception) => {
      const response = interception.response.body;
      const condition = response.weather[0].main;
      cy.get("#weatherData").should(
        "have.text",
        `Current weather in London: ${condition}`
      );
    });
  });
});
