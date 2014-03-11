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

Modify the following line in your *Gruntfile.js*. This will point to the Sencha Touch SDK downloaded above.

```javascript
SENCHA_SDK: '~/touch-2.3.1',
```

This generator uses the `name` specified in the package.json as the default app name. This is `FeedHenrySenchaBuild` by default, so you may want to change it.

Usage
------------

To generate an app:

```
$ grunt generate
```

To build the app:

```
    $ grunt build <--environment=[testing,package,production,native]> <--package=<default>>
```


*The defaults for environment and package are* **testing** *and* **default** *respectively*