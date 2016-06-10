// Type definitions for tsconfig-lint 0.11.0
// Project: https://github.com/wjohnsto/tsconfig-lint
// Definitions by: Giedrius Grabauskas <https://github.com/GiedriusGrabauskas>

declare namespace tsconfigLint {
    interface Options {
        /**
         * A relative path from cwd to the directory containing a tsconfig.json. If not specified, the '.' is used.
         */
        configPath?: string;

        /**
         * The current working directory, defaults to `process.cwd()`
         */
        cwd?: string;

        /**
         * Whether or not `filesGlob` should be used in place of `files` for determining the files to lint.
         */
        useGlob?: boolean;

        tsconfigOptions?: {
            /**
             * The number of spaces to indent the tsconfig.json
             */
            indent?: number;
        };

        /**
         * A relative path from the configPath to the tslint configuration file.
         */
        tsLintConfigFilePath?: string;

    }

    interface CallBack {
        (err: any): void;
    }

    export interface tsConfig {
        (options: Options, errorCallback: CallBack): void;
    }
}

export = tsconfigLint;