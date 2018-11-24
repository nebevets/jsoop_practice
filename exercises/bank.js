

class Bank{
	constructor( bankName ){
		//takes in the name of the bank.
		this.bankName = bankName;
		//makes an object to store all accounts into
		this.accounts = {};
	}
	makeAccount( accountNumber ){
		//makes an account
		//takes in the account number of an account
		if(this.checkForAccount(accountNumber)){
			return false;
		}
		//checks if the account number already exists in the account storage object in the constructor
			//if already exists, returns false
		this.accounts[accountNumber] = new Account();
		//otherwise makes an new Account object
		//returns the Account object that was constructed
		return this.accounts[accountNumber];
	}
	checkForAccount( accountNumber ){
		//checks if an account exists or not
		//takes in the account number of an account
		if(this.accounts[accountNumber]){
			return true;
		}
		return false;
	}
	removeAccount( accountNumber ){
		//removes an account
		//takes in an account number
		if(!this.checkForAccount(accountNumber)){
			return `account ${accountNumber} does not exist`;
		}
		//if the account doesn't exist, returns
			//"account <accountNumber> does not exist" where accountNumber is the account number
		//if the account is not empty, returns
			//'account is not empty'
		if(this.accounts[accountNumber].getAmount()){
			return `account is not empty`;
		}
		//otherwise deletes the account from the constructor storage
		//returns
		delete this.accounts[accountNumber];
		return `account ${accountNumber} deleted`;
	}
	deposit( accountNumber, amount ){
		//deposits money into an account
		//takes in an account number and a numeric amount
		if (isNaN(amount)){
			return `invalid amount: ${amount}`;
		}
		//if the account doesn't exist, returns
			//'account does not exist'
		if(!this.checkForAccount(accountNumber)){
			return `account does not exist`; 
		}
		//otherwise uses the account's add method and adds to the account
			//returns
			//"account <accountNumber> now has <new account amount>
		this.accounts[accountNumber].add(amount);
		return `account ${accountNumber} now has ${this.accounts[accountNumber].getAmount()}`;
	}
	withdraw( accountNumber, amount ){
		//removes money from an account
		//takes in an account number and an amount
		if (isNaN(amount)){
			return `invalid amount: ${amount}`;
		}
		//checks if the account exists, if not
			//return 'account does not exist'
		if(!this.checkForAccount(accountNumber)){
			return `account does not exist`; 
		}
		//uses the Account's remove method to withdraw funds from the account
		let amountRemoved = this.accounts[accountNumber].remove(amount);
		//returns "removed <amount withdrawn> from account <account number>. It now has <remaining amount in account>"
		return `removed ${amountRemoved} from account ${accountNumber}. It now has ${this.accounts[accountNumber].getAmount()}`;
	}
}