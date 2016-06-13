import * as lint from 'tsconfig-lint';

let options: lint.Options = {};

lint(undefined, (err) => {
    //...
});

lint({
	configPath: '.',
	useGlob: true,
	tsconfigOptions: {
		indent: 2
	}
}, (err) => {
    //...
});