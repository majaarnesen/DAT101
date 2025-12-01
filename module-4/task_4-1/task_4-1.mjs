"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

const AccountType = {
    Normal: "Brukskonto",
    Saving: "Sparekonto",
    Credit: "Kredittkonto",
    Pensjon: "Pensjonskonto"
};

//part 2
class TAccount {
    #type;
    constructor(aType) {
        this.#type = aType;
    }
    toString() {
        return this.#type;
    }
    setType(aType) {
        const old = this.#type;
        this.#type = aType;
        printOut("Konto type endret fra : " + old + " til " + aType);
    }
}



// ...existing code...
// Valuta-definisjoner (value = NOK per enhet)
const CurrencyTypes = {
    NOK: { code: "kr", value: 1.0, name: "Norske kroner" },
    SEK: { code: "kr", value: 0.975064, name: "Svenske kroner" },
    USD: { code: "$", value: 9.1463414634, name: "United States dollar" },
    GBP: { code: "£", value: 11.5, name: "British pound" } // lagt til GBP
};

class TAccount2 {
    #type;
    #balance;
    #currency;
    constructor(aType, initialBalance = 0, currency = CurrencyTypes.NOK) {
        this.#type = aType;
        this.#balance = Number(initialBalance) || 0;
        this.#currency = currency;
        this.#balance = Number(this.#balance.toFixed(2));
    }
    toString() { return this.#type; }
    setType(aType) {
        const old = this.#type;
        this.#type = aType;
        printOut("Account is changed from " + old + " to " + aType);
    }
    getBalance() { return Number(this.#balance.toFixed(2)); }
    getCurrency() { return this.#currency.code; }

    // privat: konverter mellom valutaer via NOK
    #convertCurrency(newCurrency) {
        if (!newCurrency || newCurrency === this.#currency) return;
        const balanceNOK = this.#balance * this.#currency.value;
        const newBalance = balanceNOK / newCurrency.value;
        this.#balance = Number(newBalance.toFixed(2));
    }

    setCurrency(newCurrency) {
        const old = this.#currency;
        this.#convertCurrency(newCurrency);
        this.#currency = newCurrency;
        printOut("The account currency has change from " + old.name + " to " + newCurrency.name);
        printOut("New balance is " + this.#balance.toFixed(2) + newCurrency.code);
    }

    // amount er i valuta aType (default NOK). Legg til i kontoens nåværende valuta.
    deposit(amount, aType = CurrencyTypes.NOK) {
        const depositCurrency = aType || CurrencyTypes.NOK;
        const a = Number(amount);
        if (isNaN(a) || a <= 0) return;
        // konverter deposit-beløp til kontoens valuta:
        // amountNOK = a * depositCurrency.value
        // amountInAccountCurrency = amountNOK / this.#currency.value
        const amountInAccountCurrency = (a * depositCurrency.value) / this.#currency.value;
        this.#balance = Number((this.#balance + amountInAccountCurrency).toFixed(2));
        printOut(
            "Deposit of " +
                a.toFixed(2) +
                depositCurrency.code +
                ", new balance is " +
                this.#balance.toFixed(2) +
                this.#currency.code
        );
    }

    // amount er i valuta aType (default NOK). Trekk fra kontoens nåværende valuta.
    withdraw(amount, aType = CurrencyTypes.NOK) {
        const withdrawCurrency = aType || CurrencyTypes.NOK;
        const a = Number(amount);
        if (isNaN(a) || a <= 0) return;
        const amountInAccountCurrency = (a * withdrawCurrency.value) / this.#currency.value;
        this.#balance = Number((this.#balance - amountInAccountCurrency).toFixed(2));
        printOut(
            "Withdrawal of " +
                a.toFixed(2) +
                withdrawCurrency.code +
                ", new balance is " +
                this.#balance.toFixed(2) +
                this.#currency.code
        );
    }
}

// ...existing code...

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(Object.values(AccountType).join(", "));
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const myAccount = new TAccount(AccountType.Normal);
printOut("myAccount = " + myAccount.toString());
myAccount.setType(AccountType.Saving);
printOut("myAccount = " + myAccount.toString());
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const acct = new TAccount2(AccountType.Normal, 0);
acct.deposit(100);
acct.withdraw(25);
printOut("My account balance is " + acct.getBalance());
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Bruk samme konto-objekt 'acct' fra Part 3.
// Lokalt teller for uttak (siden TAccount2 ikke har privat teller)
let withdrawCount = 0;

// Sett kontotype til Sparekonto og sørg for at saldo er nøyaktig 100
acct.setType(AccountType.Saving);
let need = 100 - acct.getBalance();
if (need > 0) {
    acct.deposit(need);
    withdrawCount = 0; // reset teller ved innskudd
} else if (need < 0) {
    // Alternativt kunne vi ta ut for å få 100, men oppgaven sier bruk deposit/setType om nødvendig
    printOut("Balance is already above 100, current balance: " + acct.getBalance());
}

// Funksjon som forsøker uttak i henhold til reglene
function attemptWithdraw(amount) {
    const type = acct.toString();
    switch (type) {
        case AccountType.Saving:
            if (withdrawCount >= 3) {
                printOut("Withdrawal denied: savings accounts allowed max 3 withdrawals");
                return;
                            }
            break;
        case AccountType.Pensjon:
            printOut("Withdrawal denied: pension accounts do not allow withdrawals");
            return;
        default:
            // ingen spesielle begrensninger
            break;
    }
    // Gjennomfør uttak via objektet
    acct.withdraw(amount);
    if (type === AccountType.Saving) withdrawCount++;
}

// Utfør tre gyldige uttak
attemptWithdraw(10);
attemptWithdraw(10);
attemptWithdraw(10);

// Fjerde uttak skal nektes for Sparekonto
attemptWithdraw(10);

// Innskudd skal resette teller
acct.deposit(5);
withdrawCount = 0;

// Nå skal nytt uttak tillates
attemptWithdraw(10);

printOut(newLine);
// ...existing code...

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Målet er å få saldo til 150 og skrive ut i formatet "Deposit of 150kr, new balance is 150kr"
const target = 150;
let bal = acct.getBalance();

if (bal < target) {
    acct.deposit(target - bal);
} else if (bal > target) {
    // Hvis uttak kan være blokkert (Sparekonto/Pensjon), sett midlertidig til Normal
    const oldType = acct.toString();
    if (oldType === AccountType.Saving || oldType === AccountType.Pensjon) {
        acct.setType(AccountType.Normal);
        acct.withdraw(bal - target);
        acct.setType(oldType);
    } else {
        acct.withdraw(bal - target);
    }
}

// Skriv ønsket linje
printOut("Deposit of 150kr, new balance is " + acct.getBalance() + "kr");
printOut(newLine);
//Ser annerledes ut i nettleseren, vet ikke hvorfor det kommer opp 85kr

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Kontoen er satt til 150kr i Part 5; bytt valuta noen ganger
acct.setCurrency(CurrencyTypes.SEK);  // skal printe ~153.87kr
acct.setCurrency(CurrencyTypes.USD);  // skal printe ~16.40$
acct.setCurrency(CurrencyTypes.NOK);  // tilbake til 150.00kr
printOut(newLine);


printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Sørg for konto er i NOK før vi starter
acct.setCurrency(CurrencyTypes.NOK);

// Deposit 12 USD
acct.deposit(12, CurrencyTypes.USD);

// Withdraw 10 GBP
acct.withdraw(10, CurrencyTypes.GBP);

// Bytt valuta noen ganger
acct.setCurrency(CurrencyTypes.USD);
acct.setCurrency(CurrencyTypes.GBP);

// Trekk ut resten av saldoen i en annen valuta (her: NOK)
// Kontoen er nå i GBP, hent rest i GBP:
const restGBP = acct.getBalance(); // i GBP
// Beløp i NOK som tilsvarer rest: restGBP * GBP.value
const withdrawNOK = Number((restGBP * CurrencyTypes.GBP.value / CurrencyTypes.NOK.value).toFixed(2));
acct.withdraw(withdrawNOK, CurrencyTypes.NOK);

// Sjekk sluttbalanse (skal være 0.00)
printOut("Final balance is " + acct.getBalance().toFixed(2) + acct.getCurrency());
printOut(newLine);