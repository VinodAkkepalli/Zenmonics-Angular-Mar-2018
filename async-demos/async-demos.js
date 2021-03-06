var pgm = (function(){


	/* sync */
	function addSync(x,y){
		console.log(`	[@Service] - processing ${x} and ${y}`);
		var result = x + y;
		console.log(`	[@Service] - returning the result`);
		return result;
	}
	function addSyncClient(x,y){
		console.log(`[@Client] - triggering addSync`);
		var result = addSync(x,y);
		console.log(`[@Client] - result = ${result}`);
	}

	function addAsync(x,y, callback){
		console.log(`	[@Service] - processing ${x} and ${y}`);
		setTimeout(function(){
			var result = x + y;
			console.log(`	[@Service] - returning the result`);
			if (typeof callback === 'function')
				callback(result);
		}, 3000);
	}
	function addAsyncClient(x,y){
		console.log(`[@Client] - triggering addAsync`);
		addAsync(x,y, function(result){
			console.log(`[@Client] - result = ${result}`);
		});
		
	}

	var addAsyncEvents = (function(){
		var _callbacks = [];
		function addAsyncEvents(x,y){
			console.log(`	[@Service] - processing ${x} and ${y}`);
			setTimeout(function(){
				var result = x + y;
				console.log(`	[@Service] - returning the result`);
				_callbacks.forEach(callback => callback(result));
			}, 3000);
		}
		addAsyncEvents.subscribe = function(callback){
			_callbacks.push(callback);
		}
		return addAsyncEvents;
	})();

	function addAsyncPromise(x,y){
		var promise = new Promise(function(resolve, reject){
			console.log(`	[@Service] - processing ${x} and ${y}`);
			setTimeout(function(){
				var result = x + y;
				console.log(`	[@Service] - returning the result`);
				resolve(result);
			}, 3000);
		});
		return promise;
	}
	
	return {
		addSyncClient : addSyncClient,
		addAsyncClient : addAsyncClient,
		addAsyncEvents : addAsyncEvents,
		addAsyncPromise : addAsyncPromise
	};
})();