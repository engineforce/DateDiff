
const commandLineArgs = require('command-line-args')
const getUsage = require('command-line-usage')
const datediff = require("./index");

const optionDefinitions = [
    { name: 'dates', type: String, multiple: true, defaultOption: true, description: "2 date inputs to be calculated" },
];

const options = commandLineArgs(optionDefinitions);

if (!options.dates || options.dates.length != 2) {
    const usage = getUsage(
        [
            {
                header: 'Date Diff',
                content: 'Compute the difference between the two dates in days.'
            },
            {
                header: 'Options',
                optionList: optionDefinitions
            }
        ]);

    console.log(usage);
}
else {
    try {
        console.log(datediff(options.dates[0], options.dates[1]));
    }
    catch(ex) {
        console.log(ex.message);        
        process.exit(1);
    }
}