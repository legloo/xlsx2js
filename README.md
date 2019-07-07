# Install

```js
npm i xlsx2js -S
```

#Usage

```js
<input type="file" accept=".xlsx,.xls" onchange="read(file)" />

import xlsx2js from "xlsx2js";


async read(e) {
      let exl = e.target.files[0];
      // input -> e.target.files is an array，Here i chose the first table,If you want transform more tables , I don't care.
      if (!exl) {
        return false;
      } else if (!/\.(xls|xlsx)$/.test(exl.name.toLowerCase())) {
        throw new Error("Please chose the .xlsx or .xlx file");
        return false;
      }
      let output = await xlsx2js(exl);
      console.log(output);
    },

```

 

## License

MIT [@zhuyuhao](https://github.com/zhuyuhaoliar)
