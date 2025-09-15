import Aura from '@primeuix/themes/aura'
import { definePreset } from '@primeuix/themes'

export const MyPreset = definePreset(Aura, {
  semantic: {
    surface: {
      0: '#ffffff',
      50: '{Rose.50}',
      100: '{Rose.100}',
      200: '{Rose.200}',
      300: '{Rose.300}',
      400: '{Rose.400}',
      500: '{Rose.500}',
      600: '{Rose.600}',
      700: '{Rose.700}',
      800: '{Rose.800}',
      900: '{Rose.900}',
      950: '{Rose.950}',
    },
    primary: {
      50: '{Gray.50}',
      100: '{Gray.100}',
      200: '{Gray.200}',
      300: '{Gray.300}',
      400: '{Gray.400}',
      500: '{Gray.500}',
      600: '{Gray.600}',
      700: '{Gray.700}',
      800: '{Gray.800}',
      900: '{Gray.900}',
      950: '{Gray.950}',
    },
  },
  css: ({ dt }) => `
  .theme-color {
    color: ${dt('primary.400')};
    fill: ${dt('primary.400')};
  }
  a {
    color: ${dt('primary.900')};
  }

  `,
})
