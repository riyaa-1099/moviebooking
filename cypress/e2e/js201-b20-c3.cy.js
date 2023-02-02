import "cypress-localstorage-commands";
import data from "../../submissionData.json"; // do not create this file
// let data = [{ submission_link: "http://localhost:8080/", id: 67890 }];

describe("Test", function () {
  let acc_score = 1;
  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  data.map(({ submission_link: url, id }) => {
    if (url.charAt(url.length - 1) != "/") {
      url = url + "/";
    }

    it(`Adding money should add money to wallet in localstorage with key "amount"`, () => {
      cy.visit(url);
      cy.get("#amount").type(200);
      cy.get("#add_to_wallet").click();
      cy.wait(200);
      cy.getLocalStorage("amount").should("equal", "200");

      cy.then(() => {
        acc_score += 1;
      });
    });

    it(`Adding more Wallet amount should be added to existing one and reflect on dom`, () => {
      cy.get("#amount").clear();
      cy.get("#amount").type(200);
      cy.get("#add_to_wallet").click();
      cy.get("#wallet").should("have.text", "400");

      cy.then(() => {
        acc_score += 2;
      });
    });

    it(`Should be able to search movies on movies.html using debouncing`, () => {
      cy.visit(`${url}movies.html`);
      cy.get("#wallet").should("have.text", "400");
      cy.get("#movies").children().should("have.length", 0);
      cy.get("#search").type("avengers");
      cy.get("#movies").children().should("have.length", 0);
      cy.wait(1500);
      cy.get("#movies").children().should("have.length.greaterThan", 5);

      cy.then(() => {
        acc_score += 3;
      });
    });

    it(`Clicking book now should redirect to checkout.html and show the movie detail `, () => {
      cy.get(".book_now").first().click();
      cy.wait(2000);
      cy.url().should("include", "/checkout.html");
      cy.get("#movie").children().should("exist");
      cy.then(() => {
        acc_score += 1;
      });
    });

    it(`On booking more ticket than wallet balance should show Insufficient Balance!`, () => {
      cy.visit(`${url}/checkout.html`);
      cy.get("#wallet").should("have.text", "400");
      cy.get("#user_name").type("Pablo");
      cy.get("#number_of_seats").type(5);
      cy.get("#confirm").click();
      cy.get("#booking_status").should("have.text", "Insufficient Balance!");

      cy.then(() => {
        acc_score += 2;
      });
    });

    it(`On booking ticket within wallet balance limit should show Booking successful!`, () => {
      cy.get("#user_name").clear();
      cy.get("#user_name").type("Pablo");
      cy.get("#number_of_seats").clear();
      cy.get("#number_of_seats").type(2);
      cy.get("#confirm").click();

      cy.get("#booking_status").should("have.text", "Booking Successful!");

      cy.then(() => {
        acc_score += 2;
      });
    });

    it(`After booking wallet should be updated`, () => {
      cy.get("#wallet").should("have.text", "200");
      cy.getLocalStorage("amount").should("equal", "200");

      cy.then(() => {
        acc_score += 2;
      });
    });

    it(`generate score`, () => {
      //////////////
      let result = {
        id,
        marks: acc_score,
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
