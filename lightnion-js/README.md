## lightnion-js

The Lightnion Javascript client, using ES6 modules and npm dependencies.

### Dependencies

Requires:
    - sjcl `./vendor/sjlc.js` built with `./configure --with-codecBytes --with-sha1`, as explained [here](https://github.com/bitwiseshiftleft/sjcl/blob/master/README/INSTALL) (sjcl does not ship with all codecs enabled). Could be pushed as a npm module and imported as such if needed.
    Add this line to the end of `./vendor/sjcl.js`:
    
        ```export { sjcl };```


### Building


> install dependencies and development dependencies, and build bundle  
> this will output dist/lnn.bundle.js that can be imported in html files (see [index.html example](public/index.html))

```bash
make all
```

### Testing

TODO

## TODO

- documentation to match js-client
- license: only [sjcl](https://github.com/bitwiseshiftleft/sjcl/blob/master/LICENSE.txt) is included in project as-is, other dependencies are from npm.
- testing: most importantly test imports and usability, functionality should be tested as well...