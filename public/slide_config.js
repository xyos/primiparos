var SLIDE_CONFIG = {
  // Slide settings
  settings: {
    title: 'Titulo presentación',
    subtitle: 'subtitulo',
    useBuilds: true, // Default: true. False will turn off slide animation builds.
    usePrettify: true, // Default: true
    enableSlideAreas: true, // Default: true. False turns off the click areas on either slide of the slides.
    enableTouch: true, // Default: true. If touch support should enabled. Note: the device must support touch.
    //analytics: 'UA-XXXXXXXX-1', // TODO: Using this breaks GA for some reason (probably requirejs). Update your tracking code in template.html instead.
    favIcon: 'images/google_developers_logo_tiny.png',
    fonts: [
      'Open Sans:regular,semibold,italic,italicsemibold',
      'Inconsolata'
    ],
    //theme: ['mytheme'], // Add your own custom themes or styles in /theme/css. Leave off the .css extension.
  },

  // Author information
  presenters: [{
    name: 'Jairo Suarez',
    company: 'Estudiante, Universidad Nacional de Colombia',
    gplus: 'http://plus.google.com/108312320671958221430',
    twitter: '@xyos',
    www: 'http://www.jairosuarez.com',
    github: 'http://github.com/xyos'
  }]
};

