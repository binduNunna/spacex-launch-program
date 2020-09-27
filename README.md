# Spacex

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.


## SSR Implementation

Run `ng add @nguniversal/express-engine --clientProject "Project Name"` to add webpack.server.config.js, tsconfig.server.json and server.ts files etc., to the project.

Add the following in scripts of package.json file:
 "build": "ng build --prod --aot --buildOptimizer --commonChunk --vendorChunk --optimization --progress && npm run build:ssr && npm run serve:ssr && node dist/server",
"compile:server": "webpack --config webpack.server.config.js --progress --colors",
"serve:ssr": "node dist/server",
"build:ssr": "npm run build:client-and-server-bundles && npm run compile:server",
"build:client-and-server-bundles": "ng build --prod && ng run spacex:server:production --bundleDependencies all"

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

Navigate to `http://localhost:4000/`. you can find the below image

ie.,/Users/indianic/Desktop/spacex/src/assets/images/image.png

And check the View page source where we can see all the dynamic data coming from API in <app-root> and styleswhich are applied for the screen.please refer the following

/Users/indianic/Desktop/spacex/src/assets/images/image1.png
/Users/indianic/Desktop/spacex/src/assets/images/image2.png





