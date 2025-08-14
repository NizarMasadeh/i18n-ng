const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const required = fs.readFileSync('.nvmrc', 'utf8').trim();
const current = process.version.replace('v', '');

const colors = {
    reset: "\x1b[0m",
    red: "\x1b[91m",
    green: "\x1b[92m",
    blue: "\x1b[94m",
    gray: "\x1b[90m",
    bold: "\x1b[1m",
    dim: "\x1b[2m"
};

if (current !== required) {
    const nodeModulesPath = path.join(process.cwd(), 'node_modules');
    if (fs.existsSync(nodeModulesPath)) {
        console.log(`${colors.dim}Cleaning up node_modules due to Node version mismatch...${colors.reset}`);
        try {
            fs.rmSync(nodeModulesPath, { recursive: true, force: true });
            console.log(`${colors.dim}✓ node_modules removed${colors.reset}\n`);
        } catch (error) {
            console.warn(`${colors.dim}⚠ Could not remove node_modules: ${error.message}${colors.reset}\n`);
        }
    }

    console.error(
        `${colors.red}${colors.bold}✗ Node.js version mismatch detected${colors.reset}\n` +
        `${colors.gray}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}\n` +
        `  ${colors.dim}Current version:${colors.reset}  ${colors.red}${current}${colors.reset}\n` +
        `  ${colors.dim}Required version:${colors.reset} ${colors.green}${required}${colors.reset}\n\n` +
        `${colors.blue}${colors.bold}Solution:${colors.reset}\n` +
        `  ${colors.dim}${colors.reset} nvm install ${required} && nvm use ${required}\n` +
        `  ${colors.dim}${colors.reset} npm install\n\n` +
        `${colors.red}Installation aborted.${colors.reset}`
    );
    process.exit(1);
}

try {
    execSync(`nvm use ${required}`, { stdio: 'inherit', shell: true });
} catch {
    console.warn(`${colors.dim}⚠${colors.reset} Could not auto-switch Node version. Please ensure nvm is installed.`);
}