# @logic-pad/core

The core API of Logic Pad. This library is not bundled, so you need to import each `js` file individually.

## Developing Logic Core

[Bun >=v1.1.0](https://bun.sh/) is required for this project.

```bash
# 1. Clone this repository
git clone https://github.com/hlysine/logic-core.git

# 2. Restore dependencies
cd logic-core
bun install

# 3. Build the library
bun build
```

To test your changes in Logic Pad, you need to clone both projects in the same folder and set things up using `bun link`

```bash
# 1. Clone both repositories
git clone https://github.com/hlysine/logic-core.git
git clone https://github.com/hlysine/logic-pad.git

# 2. Restore dependencies
cd logic-pad
bun install
cd ../logic-core
bun install

# 3. Build logic-core
bun build

# 4. Set up bun link
bun link
cd ../logic-pad
bun remove @logic-pad/core
bun link @logic-pad/core
```

You can now run Logic Pad locally with changes in your logic-core repository
