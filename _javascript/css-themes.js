'use strict';

// Large construction function, just add the base values and make more specific overrides optional?
  // Make all the essentials parameters, group all the optional overrides into an object that lists the property and the new value. Can loop through it and reassign them as needed.
// Functions here for creating additional values?

const css_props = function(
    color_primary, color_secondary, color_action, color_mono,
    spacing_base,
    lineHeight_base,
    fontFamily_base, fontFamily_header, fontFamily_mono,
    settings,
    overrides
  ) {

  let set = {
    colLight: 0.25,
    colLighter: 0.65,
    colLightest: 0.9,
    colDark: -0.35,
    colDarker: -0.65,
    colDarkest: -0.9,

    spaceUnit: 'rem',

    modularScale: 1.3
  };

  const colorLighten = function(hex, lum) {

    // validate hex string
    hex = String(hex).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
      hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
    }
    lum = lum || 0;

    // convert to decimal and change luminosity
    var rgb = "#", c, i;
    for (i = 0; i < 3; i++) {
      c = parseInt(hex.substr(i*2,2), 16);
      c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
      rgb += ("00"+c).substr(c.length);
    }

    return rgb;
  };

  if (settings) {
    Object
      .entries(settings)
      .forEach(([key, value]) => set[key] = value );
  }

  let properties = {
    '--color-primary-base': color_primary,
    '--color-secondary-base': color_secondary,
    '--color-action-base': color_action,
    '--color-mono-base': color_mono,
    
    '--color-primary-lightest': colorLighten(color_primary, set.colLightest),
    '--color-primary-lighter': colorLighten(color_primary, set.colLighter),
    '--color-primary-light': colorLighten(color_primary, set.colLight),
    '--color-primary-dark': colorLighten(color_primary, set.colDark),
    '--color-primary-darker': colorLighten(color_primary, set.colDarker),
    '--color-primary-darkest': colorLighten(color_primary, set.colDarkest),
    '--color-secondary-lightest': colorLighten(color_secondary, set.colLightest),
    '--color-secondary-lighter': colorLighten(color_secondary, set.colLighter),
    '--color-secondary-light': colorLighten(color_secondary, set.colLight),
    '--color-secondary-dark': colorLighten(color_secondary, set.colDark),
    '--color-secondary-darker': colorLighten(color_secondary, set.colDarker),
    '--color-secondary-darkest': colorLighten(color_secondary, set.colDarkest),
    '--color-action-lightest': colorLighten(color_action, set.colLightest),
    '--color-action-lighter': colorLighten(color_action, set.colLighter),
    '--color-action-light': colorLighten(color_action, set.colLight),
    '--color-action-dark': colorLighten(color_action, set.colDark),
    '--color-action-darker': colorLighten(color_action, set.colDarker),
    '--color-action-darkest': colorLighten(color_action, set.colDarkest),
    '--color-mono-blank': colorLighten(color_mono, set.colLightest),
    '--color-mono-lighter': colorLighten(color_mono, set.colLighter),
    '--color-mono-light': colorLighten(color_mono, set.colLight),
    '--color-mono-dark': colorLighten(color_mono, set.colDark),
    '--color-mono-darker': colorLighten(color_mono, set.colDarker),
    '--color-mono-darkest': colorLighten(color_mono, set.colDarkest),

    '--spacing-quad': (spacing_base * 4) + set.spaceUnit,
    '--spacing-triple': (spacing_base * 3) + set.spaceUnit,
    '--spacing-double': (spacing_base * 2) + set.spaceUnit,
    '--spacing-base': spacing_base + set.spaceUnit,
    '--spacing-half': (spacing_base * 0.5) + set.spaceUnit,
    '--spacing-third': (spacing_base * 0.33) + set.spaceUnit,
    '--spacing-quart': (spacing_base * 0.25) + set.spaceUnit,

    '--type-font-family-base': fontFamily_base,
    '--type-font-family-header': fontFamily_header,
    '--type-font-family-mono': fontFamily_mono,

    '--type-font-size-h1': spacing_base * Math.pow(set.modularScale, 6) + set.spaceUnit,
    '--type-font-size-h2': spacing_base * Math.pow(set.modularScale, 5) + set.spaceUnit,
    '--type-font-size-h3': spacing_base * Math.pow(set.modularScale, 4) + set.spaceUnit,
    '--type-font-size-h4': spacing_base * Math.pow(set.modularScale, 3) + set.spaceUnit,
    '--type-font-size-h5': spacing_base * Math.pow(set.modularScale, 2) + set.spaceUnit,
    '--type-font-size-h6': spacing_base * Math.pow(set.modularScale, 1) + set.spaceUnit,
    '--type-font-size-large': spacing_base * Math.pow(set.modularScale, 1) + set.spaceUnit,
    '--type-font-size-p': spacing_base * Math.pow(set.modularScale, 0) + set.spaceUnit,
    '--type-font-size-ol': spacing_base * Math.pow(set.modularScale, 0) + set.spaceUnit,
    '--type-font-size-ul': spacing_base * Math.pow(set.modularScale, 0) + set.spaceUnit,
    '--type-font-size-a': spacing_base * Math.pow(set.modularScale, 0) + set.spaceUnit,
    '--type-font-size-small': spacing_base * Math.pow(set.modularScale, -1) + set.spaceUnit,
    '--type-font-size-tiny': spacing_base * Math.pow(set.modularScale, -2) + set.spaceUnit,

    '--type-font-weight-bold': 700,
    '--type-font-weight-semibold': 600,
    '--type-font-weight-base': 300,
    '--type-font-weight-light': 100,

    '--type-line-height-h1': lineHeight_base * Math.pow(set.modularScale, 1),
    '--type-line-height-h2': lineHeight_base * Math.pow(set.modularScale, 1),
    '--type-line-height-h3': lineHeight_base * Math.pow(set.modularScale, 1),
    '--type-line-height-h4': lineHeight_base * Math.pow(set.modularScale, 1),
    '--type-line-height-h5': lineHeight_base * Math.pow(set.modularScale, 1),
    '--type-line-height-h6': lineHeight_base * Math.pow(set.modularScale, 1),
    '--type-line-height-p': lineHeight_base * Math.pow(set.modularScale, 2),
    '--type-line-height-ol': lineHeight_base * Math.pow(set.modularScale, 2),
    '--type-line-height-ul': lineHeight_base * Math.pow(set.modularScale, 2),
    '--type-line-height-small': lineHeight_base * Math.pow(set.modularScale, 1),
    '--type-line-height-tiny': lineHeight_base * Math.pow(set.modularScale, 1),

    '--type-margin-h1': (spacing_base * 3) + set.spaceUnit + ' 0 ' + (spacing_base) + set.spaceUnit,
    '--type-margin-h2': (spacing_base * 3) + set.spaceUnit + ' 0 ' + (spacing_base) + set.spaceUnit,
    '--type-margin-h3': (spacing_base * 3) + set.spaceUnit + ' 0 ' + (spacing_base) + set.spaceUnit,
    '--type-margin-h4': (spacing_base * 2) + set.spaceUnit + ' 0 ' + (spacing_base) + set.spaceUnit,
    '--type-margin-h5': (spacing_base * 2) + set.spaceUnit + ' 0 ' + (spacing_base) + set.spaceUnit,
    '--type-margin-h6': (spacing_base * 2) + set.spaceUnit + ' 0 ' + (spacing_base) + set.spaceUnit,
    '--type-margin-p': '0 0 ' + (spacing_base) + set.spaceUnit + ' 0',
    '--type-margin-ul': '0 0 ' + (spacing_base) + set.spaceUnit + ' 0',
    '--type-margin-ol': '0 0 ' + (spacing_base) + set.spaceUnit + ' 0',
    '--type-margin-small': '0 0 ' + (spacing_base) + set.spaceUnit,
    '--type-margin-tiny': '0 0 ' + (spacing_base) + set.spaceUnit,

    '--z-layer-bottomless': -9999,
    '--z-layer-base': 1,
    '--z-layer-dropdown': 3000,
    '--z-layer-overlay': 4000,
    '--z-layer-modal': 4001,
    
    '--container-border-radius-small': (spacing_base * 0.5) + set.spaceUnit,
    '--container-border-radius-base': (spacing_base) + set.spaceUnit,
    '--container-border-radius-large': (spacing_base * 2) + set.spaceUnit,
    '--container-border-radius-full': '100%',

    '--container-box-shadow-base': '0 0 ' + (spacing_base * 0.5) + set.spaceUnit + ' ' + colorLighten(color_mono, set.colDark),
    '--container-box-shadow-light': '0 0 ' + (spacing_base * 0.25) + set.spaceUnit + ' ' + colorLighten(color_mono, set.colDark),
    '--container-box-shadow-heavy': '0 0 ' + (spacing_base) + set.spaceUnit + ' ' + colorLighten(color_mono, set.colDark)
  };

  if (overrides) {
    Object
      .entries(overrides)
      .forEach(([key, value]) => properties[key] = value );
  }

  return properties;
};

/*
color_primary, color_secondary, color_action, color_mono,
spacing_base,
fontFamily_base, fontFamily_header, fontFamily_mono,
settings,
overrides
*/

let themes = {
  gallade: css_props(
    '#5ab46a', '#7b8bac', '#eb7560', '#373737',
    (17/16),
    (18/16),
    'Skia, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    'Futura, Helvetica, Arial, sans-serif',
    'Andale Mono, sans serif',
    null,
    { '--type-font-weight-base': 400,
      '--color-mono-darkest': '#080401',
      '--color-mono-lighter': '#a4b4cd',
      '--color-mono-blank': '#eef' }
  ),

  typhlosion: css_props(
    '#415a94', '#20416a', '#e24444', '#d5c573',
    (17.5/16),
    1,
    'Verdana, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    'Rockwell, Helvetica, Futura, Arial, sans-serif',
    'Andale Mono, sans serif',
    {
      modularScale: 1.28
    }, {
      '--color-mono-blank': '#fffff8'
    }
  ),

  espeon: css_props(
    '#b47bb4', '#4a73b4', '#e2507c', '#8c8c8c',
    (17/16),
    (18/16),
    'Avenir, Arial, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    'Optima, Helvetica, Futura, Arial, sans-serif',
    'Andale Mono, sans serif',
    {
      modularScale: 1.275
    },
    {
      '--type-font-weight-base': 400
    }
  ),

  reshiram: css_props(
    '#737b9c', '#4a4a6a', '#39b4f6', '#7373a5',
    1,
    (17/16),
    'Lucida Grande, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    'Lucida Fax, Helvetica, Futura, Arial, sans-serif',
    'Lucida Console, Andale Mono, sans serif',
    {
      modularScale: 1.3
    },
    {
      '--color-mono-darkest': '#393941',
      '--color-mono-blank': '#fff'
    }
  ),

  porygonZ: css_props(
    '#4a9cd5', '#ee5a62', '#b4944a', '#779',
    (17/16),
    (19/16),
    'Avenir Book, Calibri, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    '"Raleway", Futura, Helvetica, Arial, sans-serif',
    'Andale Mono, sans serif',
    {
      modularScale: 1.2444
    },
    {
      '--color-mono-darkest': '#002',
      '--color-mono-blank': '#fbfcf7'
    }
  )
}; // Object of constructed themes here


const addThemeProperties = (themeObject) => {
  Object
    .entries(themeObject)
    .forEach(([key, value]) => document.body.style.setProperty(key, value));
}

const updateSelectedTheme = (theme) => {
  $('.js-update-css-scheme').removeClass('ma-c-footer__scheme--active');
  $('.js-update-css-scheme[js-scheme="' + theme + '"]').addClass('ma-c-footer__scheme--active');
}

const checkTheme = () => {

  let stored_theme = localStorage.storedTheme;

  if (typeof stored_theme === 'string' || stored_theme instanceof String) {
    addThemeProperties(themes[stored_theme]);
    updateSelectedTheme(stored_theme);
  } else {
    addThemeProperties(themes['porygonZ']);
    localStorage.storedTheme = 'porygonZ';
    updateSelectedTheme('porygonZ');
  }
};

module.exports = {
  firstCheck: function(){
    checkTheme();
  },

  updateTheme: function(){
    $('.js-update-css-scheme').on('click', function(){
      let newScheme = $(this).attr('js-scheme');

      addThemeProperties(themes[newScheme]);
      localStorage.storedTheme = newScheme;
      updateSelectedTheme(newScheme);
    });
  }
};
