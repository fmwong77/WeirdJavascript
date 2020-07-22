const myPromise = new Promise((resolve, reject) => {
	if (false) {
		setTimeout(resolve('I succeeded'), 1000);
	} else {
		reject('I failed');
	}
});

myPromise
	.then((value) => console.log(value))
	.catch((rejectValue) => console.log(rejectValue));
