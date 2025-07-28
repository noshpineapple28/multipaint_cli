# multipaint_cli

paint app for the CLI that allows multiple users connecting via websockets

# Running

First, ensure that you initialize the node project as well as make sure that node is installed.

```sh
# Can be run to check if node is installed
node -v

# installs dependencies
npm install
```

To run the application:

```sh
# to run the application
npm run start

# to format (this will check for formatting issues and overwrite them)
npm run format

# to lint run
npm run lint
```

# Pre-Commit Hooks

In order to ensure a high quality of code coverage, there is pre-commit hooks installed that ensures all code is formatted correctly and linted before allowing it to enter any branch.

Part of this process first checks that the code being run is properly formatted, if it isn't it is suggested that you run `npm run format` to correct changes, and then add changed files to your commit. It then runs `eslint` to ensure code is up to standard. If either process fails, your commit will fail.
