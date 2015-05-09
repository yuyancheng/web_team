var sum = 0;
self.onmessage = function(e){
	console.log(e.data);
	for(var i=0; i<100000000; i++){
		sum += i;
	}
	self.postMessage(sum);
};