import "./app.css";
import App from "./App.svelte";

console.log("👀");
const app = new App({
  target: document.getElementById("app"),
});

export default app;
