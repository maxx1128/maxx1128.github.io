'use strict';

const f = {
  colorLighten: function(hex, lum) {

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
  }
};

// Large construction function, just add the base values and make more specific overrides optional?
  // Make all the essentials parameters, group all the optional overrides into an object that lists the property and the new value. Can loop through it and reassign them as needed.
// Functions here for creating additional values?

const css_props = function(
    color_primary, color_secondary, color_action, color_mono,
    spacing_base,
    fontFamily_base, fontFamily_header, fontFamily_mono,
    settings,
    overrides
  ) {

  let set = {
    colLight: 0.25,
    colLighter: 0.5,
    colDark: -0.25,
    colDarker: -0.5,

    spaceUnit: 'rem',

    modularScale: 1.3
  };

  if (settings) {
    Object
      .entries(settings)
      .forEach(([key, value]) => set[key] = value );
  }

  var properties = {
    '--color-primary-base': color_primary,
    '--color-secondary-base': color_secondary,
    '--color-action-base': color_action,
    '--color-mono-base': color_mono,
    
    '--color-primary-lighter': f.colorLighten(color_primary, set.colLighter),
    '--color-primary-light': f.colorLighten(color_primary, set.colLight),
    '--color-primary-dark': f.colorLighten(color_primary, set.colDark),
    '--color-primary-darker': f.colorLighten(color_primary, set.colDarker),
    '--color-secondary-lighter': f.colorLighten(color_secondary, set.colLighter),
    '--color-secondary-light': f.colorLighten(color_secondary, set.colLight),
    '--color-secondary-dark': f.colorLighten(color_secondary, set.colDark),
    '--color-secondary-darker': f.colorLighten(color_secondary, set.colDarker),
    '--color-action-lighter': f.colorLighten(color_action, set.colLighter),
    '--color-action-light': f.colorLighten(color_action, set.colLight),
    '--color-action-dark': f.colorLighten(color_action, set.colDark),
    '--color-action-darker': f.colorLighten(color_action, set.colDarker),
    '--color-mono-blank': f.colorLighten(color_mono, set.colLighter),
    '--color-mono-light': f.colorLighten(color_mono, set.colLight),
    '--color-mono-dark': f.colorLighten(color_mono, set.colDark),
    '--color-mono-darkest': f.colorLighten(color_mono, set.colDarker),

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

    '--type-line-height-h1': spacing_base * Math.pow(set.modularScale, 1),
    '--type-line-height-h2': spacing_base * Math.pow(set.modularScale, 1),
    '--type-line-height-h3': spacing_base * Math.pow(set.modularScale, 1),
    '--type-line-height-h4': spacing_base * Math.pow(set.modularScale, 1),
    '--type-line-height-h5': spacing_base * Math.pow(set.modularScale, 2),
    '--type-line-height-h6': spacing_base * Math.pow(set.modularScale, 2),
    '--type-line-height-p': spacing_base * Math.pow(set.modularScale, 2),
    '--type-line-height-ol': spacing_base * Math.pow(set.modularScale, 2),
    '--type-line-height-ul': spacing_base * Math.pow(set.modularScale, 2),
    '--type-line-height-small': spacing_base * Math.pow(set.modularScale, 1),
    '--type-line-height-tiny': spacing_base * Math.pow(set.modularScale, 1),

    '--type-margin-h1': (spacing_base * 3) + set.spaceUnit + ' 0 ' + (spacing_base * 2) + set.spaceUnit,
    '--type-margin-h2': (spacing_base * 3) + set.spaceUnit + ' 0 ' + (spacing_base * 2) + set.spaceUnit,
    '--type-margin-h3': (spacing_base * 3) + set.spaceUnit + ' 0 ' + (spacing_base * 2) + set.spaceUnit,
    '--type-margin-h4': (spacing_base * 3) + set.spaceUnit + ' 0 ' + (spacing_base * 2) + set.spaceUnit,
    '--type-margin-h5': (spacing_base * 2) + set.spaceUnit + ' 0 ' + (spacing_base * 2) + set.spaceUnit,
    '--type-margin-h6': (spacing_base * 2) + set.spaceUnit + ' 0 ' + (spacing_base * 2) + set.spaceUnit,
    '--type-margin-p': '0 0 ' + (spacing_base * 2) + set.spaceUnit + ' 0',
    '--type-margin-ul': '0 0 ' + (spacing_base * 2) + set.spaceUnit + ' 0',
    '--type-margin-ol': '0 0 ' + (spacing_base * 2) + set.spaceUnit + ' 0',
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

    '--container-box-shadow-base': '0 0 ' + (spacing_base * 0.25) + set.spaceUnit + ' ' + color_mono,
    '--container-box-shadow-light': '0 0 ' + (spacing_base * 0.5) + set.spaceUnit + ' ' + f.colorLighten(color_primary, set.colDark),
    '--container-box-shadow-heavy': '0 0 ' + (spacing_base) + set.spaceUnit + ' ' + f.colorLighten(color_primary, set.colDark)
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
  'porygon-z': css_props(
    '#1e456e', '#5ab46a', '#ff826e', '#373737',
    1,
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    '"Raleway", Futura, Helvetica, Arial, sans-serif',
    'sans-serif',
    null,
    { '--color-mono-darkest': '#080401' }
  )
}; // Object of constructed themes here

const updateTheme = (theme) => {
  Object
    .entries(theme)
    .forEach(([key, value]) => document.body.style.setProperty(key, value));
};

updateTheme(themes['porygon-z']);
