# electron-gatsby-boilerplate
Just another Electron boilerplate with Gatsby.

# Quick start
Make sure you have Node.js installed:
```
node -v
```
If you don't have Node.js installed into your system. Get it from [here](https://nodejs.org)
Once you're done with the installation, then type the following commands:
```
git clone https://github.com/zonayedpca/electron-gatsby-boilerplate.git
cd electron-gatsby-boilerplate
npm install
npm start
```
And now you'll see a running desktop application on your screen:
![screenshot](https://user-images.githubusercontent.com/18544717/80925067-b8a70180-8dae-11ea-98bc-e5b459a846f8.png)

# Structure of the project
This app has two main directory:
- app (Electron Side)
- client (Gatsby Side)

## app (Electron Side)
Here you will put all of your logic related to Electron itself
## client (Gatsby Side)
Here you will put all of you logic for the UI. Inside this directory, you will find another directory called **screens**. You can create new screens from here. Just give it a name, and you will able to create new [BrowserWindow](https://www.electronjs.org/docs/api/browser-window) using the name. This boilerplate has also included a helper util function called **getWindowURL** which will help you to create new BrowserWindow for both production and development mode without any trouble. Just take a look at the given examples with the boilerplate.

# Automatic Deployment
This project has also included a very basic configuration for TravisCI to build and deploy the production files to the GitHub release. But you must set an environment variable inside TravisCI's settings:
Generate a new personal access token from your [GitHub account](https://github.com/settings/tokens) with **scope** of **repo**(All Selected). And then set ```GH_TOKEN``` environemt variable inside TravisCI to work it properly.

You can also configure [np](https://www.npmjs.com/package/np) inside ```package.json``` to personalize your deployment:
```
...
"np": {
		"publish": true,
		"releaseDraft": true
},
...
```

# Development
You are welcome to make a PR for any kind of improvement of this project. If you find any issue, [let us know](https://github.com/zonayedpca/electron-gatsby-boilerplate/issues/new). Thank You!
