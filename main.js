import { countdown, rsvpForm } from "./script";

countdown();

rsvpForm();

const down = document.getElementById("downarrow");

down.addEventListener("click", () => {
  down.style.display = "none";
  down.href = "/#hero";
});
