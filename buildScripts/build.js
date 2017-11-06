/* eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minified bundle for production'));

webpack(webpackConfig).run((err, stats) => {
    if (err) {
        console.log(chalk.red(err));
        return 1;
    }

    const jsonStats = stats.toJson();

    if (jsonStats.hasErrors) {
        return jsonStats.errors.map(e => console.log(chalk.red(e)));
    }
    if (jsonStats.hasWarnings) {
        return jsonStats.warnings.map(w => console.log(chalk.yellow(w)));
    }

    console.log(`webpack stats: ${stats}`);

    return 0;
});