const events = [
  "Web Development",
  "AI/ML",
  "Competitive Programming",
  "App Development",
  "Cybersecurity",
  "Data Science",
  "Game Development",
  "Cloud Computing",
  "Robotics",
  "UI/UX Design",
  "Open Source Contribution"
];

const eventList = document.getElementById("eventList");

if (eventList) {
  events.forEach(e => {
    const div = document.createElement("div");
    div.textContent = e;
    eventList.appendChild(div);
  });
}

const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");

    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";

    let isValid = true;

    if (name === "") {
      nameError.textContent = "Name is required";
      isValid = false;
    }

    if (!email.includes("@")) {
      emailError.textContent = "Enter a valid email";
      isValid = false;
    }

    if (phone.length < 10 || isNaN(phone)) {
      phoneError.textContent = "Enter valid phone number";
      isValid = false;
    }

    if (isValid) {
      alert("Form submitted successfully!");
      form.reset();
    }
  });
}