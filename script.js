function indexOfIgnoreCase(s1, s2) {
  // write your code here
	for(let i=0;i<s1.length;i++){
		let s = s1.substring(i);
		if(s.length>=s2.length){
			if(s.substring(0,s2.length).toLowerCase()===s2.toLowerCase()){
				return i;
			}
		}
	}
	return -1;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
