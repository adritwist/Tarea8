import * as dBusiness from "./data-business";
import * as cBusiness from "./client-business";

function printClientsAccounts() {
  const clients = dBusiness.getClients();
  const ul = document.createElement("ul");
  for (let client of clients) {
    const element = cBusiness.getClientElement(client);
    ul.appendChild(element);
  }

  document.getElementById("root").appendChild(ul);
}

export { printClientsAccounts };
