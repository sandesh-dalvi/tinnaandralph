//popup
const popup = document.querySelector(".popup");
const popupclose = document.querySelector(".popupclose");
const popupcontinue = document.querySelector(".popupcontinue");

popupclose.addEventListener("click", () => {
  popup.style.display = "none";
});
popupcontinue.addEventListener("click", () => {
  popup.style.display = "none";
});

setTimeout(() => {
  popup.style.display = "flex";
}, 900);

// countdown timer
export function countdown() {
  const countDownDate = new Date("Jan 27, 2024 12:00:00").getTime();
  let x = setInterval(() => {
    const now = new Date().getTime();
    const duration = countDownDate - now;

    const days = Math.floor(duration / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((duration % (1000 * 60)) / 1000);

    document.getElementById(
      "countdown"
    ).innerHTML = `<div>${days} <span class="countspan">DAYS</span></div> <div>${hours} <span class="countspan">HOURS</span></div><div>${minutes} <span class="countspan">MINUTES</span></div><div>${seconds} <span class="countspan">SECONDS</span></div>`;

    if (duration < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "EXPIRED";
    }
  }, 1000);
}

// RSVP FORM

export function rsvpForm() {
  const rsvpButton = document.getElementById("rsvpbutton");
  // const rsvpButtons = document.getElementById("rsvpbuttons");
  const rsvpModal = document.getElementById("rsvpmodal");
  const rsvpForm = document.getElementById("rsvpform");
  const rsvpSuccessModal = document.getElementById("rsvpsuccess");
  const rsvpSuccessMessage = document.getElementById("successmessage");
  const rsvpCloseButton = document.getElementById("closersvp");
  const rsvpSuccessCloseButton = document.getElementById("closesuccess");

  rsvpButton.addEventListener("click", () => {
    rsvpModal.showModal();
  });
  // rsvpButtons.addEventListener("click", () => {
  //   rsvpModal.showModal();
  // });
  rsvpCloseButton.addEventListener("click", (e) => {
    e.preventDefault();

    rsvpModal.close();
  });
  rsvpSuccessCloseButton.addEventListener("click", () => {
    rsvpSuccessModal.close();
    rsvpModal.close();
  });

  rsvpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const scriptUrl =
      "https://script.google.com/macros/s/AKfycbyTRhD40iiqUwHnubCoKuD5vxjamTKwHUQDElmQuXEiftFpBWmSzqRWSCQGPlBvsJ3O/exec";

    const formData = new FormData(rsvpForm);
    console.log(formData.entries);

    fetch(scriptUrl, {
      method: "POST",
      body: formData,
      // mode: "no-cors",
    })
      .then((res) => {
        rsvpSuccessModal.showModal();
        // console.log(res);
        rsvpSuccessMessage.innerText = "Thank You for Your RSVP!!";
      })

      .catch((err) => {
        rsvpSuccessModal.showModal();
        // console.log(err);
        rsvpSuccessMessage.innerText =
          "Something went wrong! Please try again.";
      });
  });

  rsvpModal.addEventListener("click", (e) => {
    const dialogDimensions = rsvpModal.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      rsvpModal.close();
    }
  });
}
