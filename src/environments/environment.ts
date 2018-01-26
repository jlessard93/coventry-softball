// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBh9wcYBsinr0TicpqSpThWYld57U67i6M",
    authDomain: "coventry-softball.firebaseapp.com",
    databaseURL: "https://coventry-softball.firebaseio.com",
    projectId: "coventry-softball",
    storageBucket: "coventry-softball.appspot.com",
    messagingSenderId: "1001621265110"
  }
};
