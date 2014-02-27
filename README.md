FeedHenrySenchaBuild
==========

A starting point for building apps with Sencha Touch and the Feedhenry Platform

Installation
------------

Clone this repository wherever you want your app to live

Install dependancies

```
$ npm install .
```

Download and unzip the [Sencha Touch SDK](http://www.sencha.com/products/touch/download/) and save it somewhere on your filesystem (it can be anywhere as long as you know the location)

Download and install the [Sencha CMD](http://www.sencha.com/products/sencha-cmd/download) tool

Modify the following lines in your *Gruntfile.js*. This will point to the Sencha Touch SDK downloaded above, as well as give a name to your application.

```javascript
SENCHA_SDK: '~/touch-2.3.1',
```

```javascript
APP_NAME: 'fhsencha',
```

Usage
------------

To generate an app:

```
$ grunt generate
```

To build the app:

```
$ grunt build
```

*This will build the app using sencha cmd with the environment option of* **testing** *to run a* **production** *build:*

```
$ grunt build --target=production
```