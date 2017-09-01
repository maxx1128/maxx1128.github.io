'use strict';

let f = require('./functions.js');
let a11y_toggle = require('a11y-toggle/a11y-toggle.js');
let color_schemes = require('./css-themes.js');
let wisdom = require('./wisdom.js');
let feather = require('feather-icons/dist/feather.min.js');

feather.replace();

wisdom.activate();

color_schemes.firstCheck();
color_schemes.updateTheme();

f.external_links('.ma-c-blogContent a');
f.lazyloading('[data-lazyload]');
