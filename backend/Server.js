require("dotenv").config();
const app = require("./App");
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server successfully started at ${PORT}`));
