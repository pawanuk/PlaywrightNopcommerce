const { exec } = require('child_process');

// Function to run a shell command
function runCommand(command) {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${error.message}`);
                reject(error);
                return;
            }
            if (stderr) {
                console.error(`Stderr: ${stderr}`);
                return;
            }
            console.log(`Stdout: ${stdout}`);
            resolve();
        });
    });
}

// Function to run tests and show report
async function runTestsAndShowReport() {
    try {
        // Capture all command line arguments after the script name
        const args = process.argv.slice(2); // Remove 'node' and 'runTests.js'
        const testCommand = `npx playwright test ${args.join(' ')}`;

        // Run Playwright tests
        console.log(`Running Playwright tests with command: ${testCommand}`);
        await runCommand(testCommand);

        // Open Playwright report
        console.log('Opening Playwright report...');
        await runCommand('npx playwright show-report');
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

runTestsAndShowReport();
