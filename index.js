'use strict';

const nunjucks = require('nunjucks');

module.exports = exports;
module.exports.__cmd = cmd;

/**
 * @param whaler
 */
async function exports (whaler) {}

/**
 * @param whaler
 */
async function cmd (whaler) {

    const cli = (await whaler.fetch('cli')).default;

    cli
        .command('completion')
        .description('Completion functions for bash')
        .action(async (options) => {
            nunjucks.configure(__dirname + '/templates');
            console.log(nunjucks.render('bash_completion', generateCompletionTree(cli)));
        })
    ;

}

// PRIVATE

function generateCompletionTree (node) {
    if (node._noHelp || node._hidden) {
        return;
    }

    const retVal = {
        name: node.name(),
        alias: node.alias()
    };

    retVal.commands = node.commands.map(command => generateCompletionTree(command)).filter(value => !!value);

    retVal.options = node.options.filter(option => !option.hidden).map(option => {
        const flags = [];
        if (option.long) {
            flags.push(option.long);
        }
        if (option.short) {
            flags.push(option.short);
        }
        return {
            flags: flags.join(' '),
            withArg: option.optional || option.required
        };
    }).reduce((options, option) => {
        if (option['withArg']) {
            options['withArgs'].push(option['flags']);
        } else {
            options['boolean'].push(option['flags']);
        }
        return options;
    }, {
        withArgs: [],
        boolean: []
    });

    return retVal;
}
