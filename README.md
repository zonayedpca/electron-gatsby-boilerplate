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
