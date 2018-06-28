# Lotus

Lotus is an open source website creator. It is fast, lightweight, easily customizable and easily extendable. Lotus websites are broken up into highly customizable components which can be reused to keep load times short.

## TODO
 - We need to create a `default_components` folder, which will include a `components.jsx` which will reference each component in that directory e.g `{'carousel': Carousel}` (you'll need to include the import at the top too).
 - A `user_components` folder will site next to `default_components` and will take presidence, this is where poeple will create their own.
 - Each component MUST export a `render` and `form` component which will draw the component on the site and the form in the admin section.
 - The Admin Dash will include analytics about the website, page hits per page, etc.
 - An easy to use Media manager