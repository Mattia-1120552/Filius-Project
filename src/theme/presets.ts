import Aura from '@primeuix/themes/aura';
import { definePreset } from '@primeuix/themes';

export const MyPreset = definePreset(Aura, {
  semantic: {
    surface: {
      0: '#ffffff',
      50: '{rose.50}',
      100: '{rose.100}',
      200: '{rose.200}',
      300: '{rose.300}',
      400: '{rose.400}',
      500: '{rose.500}',
      600: '{rose.600}',
      700: '{rose.700}',
      800: '{rose.800}',
      900: '{rose.900}',
      950: '{rose.950}',
    },
    primary: {
      50: '{gray.50}',
      100: '{gray.100}',
      200: '{gray.200}',
      300: '{gray.300}',
      400: '{gray.400}',
      500: '{gray.500}',
      600: '{gray.600}',
      700: '{gray.700}',
      800: '{gray.800}',
      900: '{gray.900}',
      950: '{gray.950}',
    },
  },

  css: (options) => {
    if (!options) return '';

    const { dt } = options;

    return `
      .theme-color {
        color: ${dt('primary.400')};
        fill: ${dt('primary.400')};
      }


    `;
  },
});
