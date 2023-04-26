const app = require("./src/app.js");
require("./src/db.js");
const port = 3001;

app.listen(port, () => {
  console.log(`%s listening at ${port}`); // eslint-disable-line no-console
});
