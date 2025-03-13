function indexOfIgnoreCase(s1, s2) {
  // write your code here
	for(int i=0;i<s1.length;i++){
		string s = s1.substring(i);
		if(s.length>=s2.length){
			if(s.substring(i,i+s2.length-1)===s2.substr(0)){
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
