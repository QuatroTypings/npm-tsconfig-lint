import * as lint from 'tsconfig-lint';


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