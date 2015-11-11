function cd (pwd, path) {
	
	pwd = pwd.split('/');
	path =  path.split('/');
	var tmpPath=[],  tmpPwd=[], level=0, index=0;
	if(path.length <pwd.length){

	   for(var i=0; i<path.length; i++){
	   	 	if(path[i]=='..'){
	   	 		level++;
	   	 		index=i;
	   	 		delete path[i];
	   	 	} else {
	   	 		tmpPath.push(path[i]);
	   	 	}
	   }
	for( i=0; i<pwd.length-level; i++){
		   	 	tmpPwd.push(pwd[i]);
		   }

	        pwd= tmpPwd.join('/');


	} else {

		for(var i=0; i<path.length; i++){
	   	 	if(path[i]=='..'){
	   	 		level++;
	   	 		index=i;
	   	 		delete path[i];
	   	 	} else {
	   	 		tmpPath.push(path[i]);
	   	 	}
	   }

		return '/'+tmpPath.join('/');

	}
	  
	return  tmpPwd.join('/')+'/'+tmpPath.join('/')


}



console.log(cd('/home/kbouzidi', '../'))
console.log(cd('/home/kbouzidi', '../foo'))
console.log(cd('/home/kbouzidi', 'foo'))
console.log(cd('/home/kbouzidi', '../../../a/b/c'))
console.log(cd('/home/kbouzidi', '../../a/b/c'))