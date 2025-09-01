import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";

const date = dayjs().add(1, "months");
const dateString = date.format("MMMM D")
console.log(dateString);