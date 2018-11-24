

class Account{
	constructor(){
		//store the amount of money in the account
		this.total = 0;
	}
	add( amount ){
		//add money to the amount stored in the account
		//takes in an amount
		if (isNaN(amount)){
			return;
		}
		//adds it to the existing amount
		this.total += parseFloat(amount);
		//returns the new amount in the account
		return this.total;
	}
	remove( amount ){
		//removes funds from an account
		if (isNaN(amount)){
			return;
		}
		//check if the amount to withdraw is more than the account
		//if more, only withdraw the amount in the account, not more
		//if less, withdraw the amount specified
		let debit = parseFloat(amount);
		if(debit > this.total){
			debit = this.total;
			this.total = 0;
			return debit;
		}else{
			this.total -= debit;
			return debit;
		}
	}
	getAmount(){
		//returns the amount in the account
		return this.total;
	}
}