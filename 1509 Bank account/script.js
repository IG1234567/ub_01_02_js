// Bank object constructor
function Bank(name, country, numberOfClients) {
    this.name = name;
    this.country = country;
    this.numberOfClients = numberOfClients;
  }
  
  // BankAccount object constructor
  function BankAccount(bank, balance) {
    this.bank = bank;
    this.balance = balance;
  }
  
  // Person object constructor
  function Person(name, lastName, dateOfBirth) {
    this.name = name;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.bankAccounts = [];
  
    // Function to deposit money into a bank account
    this.deposit = function (bankName, amount) {
      const bankAccount = this.bankAccounts.find((acc) => acc.bank.name === bankName);
      if (bankAccount) {
        bankAccount.balance += amount;
        console.log(`Deposited $${amount} into ${bankName} account.`);
      } else {
        console.log(`Bank account (${bankName}) not found.`);
      }
    };
  
    // Function to withdraw money from a bank account
    this.withdraw = function (bankName, amount) {
      const bankAccount = this.bankAccounts.find((acc) => acc.bank.name === bankName);
      if (bankAccount) {
        if (bankAccount.balance >= amount) {
          bankAccount.balance -= amount;
          console.log(`Withdrew $${amount} from ${bankName} account.`);
        } else {
          console.log(`Insufficient funds in ${bankName} account.`);
        }
      } else {
        console.log(`Bank account (${bankName}) not found.`);
      }
    };
  
    // Function to calculate the age of the person
    this.getAge = function () {
      const today = new Date();
      const birthDate = new Date(this.dateOfBirth);
      const age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        return age - 1;
      }
      return age;
    };
  }
  
  // Prompt the user for input
  const personName = prompt("Enter person's name:");
  const personLastName = prompt("Enter person's last name:");
  const personDateOfBirth = prompt("Enter person's date of birth (YYYY-MM-DD):");
  
  // Create a person object
  const person = new Person(personName, personLastName, personDateOfBirth);
  
  // Prompt the user to add bank accounts
  while (true) {
    const bankName = prompt("Enter bank name (or 'exit' to finish adding banks):");
    if (bankName.toLowerCase() === 'exit') {
      break;
    }
  
    const bankCountry = prompt(`Enter country for ${bankName}:`);
    const bankClients = parseInt(prompt(`Enter number of clients for ${bankName}:`));
    const bank = new Bank(bankName, bankCountry, bankClients);
  
    const initialBalance = parseFloat(prompt(`Enter initial balance for ${bankName} account:`));
    const bankAccount = new BankAccount(bank, initialBalance);
  
    person.bankAccounts.push(bankAccount);
  }
  
  // Test deposit and withdraw functions
  person.deposit("Bank A", 500);
  person.withdraw("Bank B", 200);
  
  // Calculate and display the person's age
  const age = person.getAge();
  console.log(`${person.name} is ${age} years old.`);
  