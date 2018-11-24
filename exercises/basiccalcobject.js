
class Calculator{
	constructor(){
		//takes in nothing
		//make storage for the operator and the numbers
		this.operator = null;
		this.lhs = null;
		this.rhs = null;
	}
	loadOperator( op ){
		//adds the operator to the next calculation
		//takes in the operator
		const validOps = {
			'+': '+',
			'-': '-',
			'x': '*',
			'X': '*',
			'×': '*',
			'*': '*',
			'/': '/',
			'÷': '/'
		}
		//checks if it is a valid operation (+-*/)
			//save the op to the constructor storage
			//return true
		//or return false if not the right operator
		if(validOps[op]){
			this.operator = validOps[op];
			return true;
		}
		return false;
	}
	loadNumber( number ){
		//takes in a number and stores it as one of the numbers to perform math on
		//takes in 1 number
		//checks if it is actually a number and if we have fewer than 2 numbers
		if(isNaN(number)){
			return false;
		}
		//if it is a number, and we have 2 or fewer numbers, store it
		if(!this.lhs){
			this.lhs = parseFloat(number);
			return 1;
		}else if (!this.rhs){
			this.rhs = parseFloat(number);
			return 2;
		}
		return false;
			//return the number of numbers stored
		//otherwise return false (too many numbers stored)
	}
	calculate(){
		//calculate the result of the stored numbers and operator
		//takes in nothing
		//calculates with the operator and 2 numbers
		if (!this.lhs || !this.rhs || !this.operator){
			return;
		}
		const calcs = {
			'+': this.lhs + this.rhs,
			'-': this.lhs - this.rhs,
			'*': this.lhs * this.rhs,
			'/': this.lhs / this.rhs
		}
		let result = calcs[this.operator];
		this.lhs = null;
		this.rhs = null;
		return result;
		//clears out the stored numbers
		//returns the calculated result
	}
}