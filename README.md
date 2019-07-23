# Wawa Melon FEC Project
## Proxy Server
This is the **Proxy Server** for team Galadriel's _Wawa Melon_ FEC project.

Note: _This document is currently a work in progress and instructions below are likely to change_.

# Related Modules
- [https://github.com/fec3-galadriel/mike-photo-carousel]
- [https://github.com/fec3-galadriel/matt-item-summary]
- [https://github.com/fec3-galadriel/garrett-related-products]
- [https://github.com/fec3-galadriel/Review-component]

# Usage
To set up, run these from the root directory:
- download each of the related modules above and follow their usage instructions
- when each service is running independently, proceed to the next 3 steps
- `npm install` to install dependencies
- `npm run start` to run the express server
- `npm run build` to generate the webpack bundle and watch for changes

Then navigate to `http://127.0.0.1:3000/1` to see the related-products app.