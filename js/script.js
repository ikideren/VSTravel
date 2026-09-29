const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const mobileNav = document.querySelector(".mobile-nav");

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
  });
}

const filterBtns = document.querySelectorAll(".filter-btn");
const destinationItems = document.querySelectorAll(".destination-item");

if (filterBtns.length > 0) {
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((btn) => btn.classList.remove("active"));

      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      destinationItems.forEach((item) => {
        if (filter === "all" || item.getAttribute("data-category") === filter) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
}

// FAQ
const faqItems = document.querySelectorAll(".faq-item");

if (faqItems.length > 0) {
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });

      item.classList.toggle("active");
    });
  });
}

const destinationSelect = document.getElementById("destination");
const otherDestinationGroup = document.getElementById("otherDestinationGroup");

if (destinationSelect && otherDestinationGroup) {
  destinationSelect.addEventListener("change", () => {
    if (destinationSelect.value === "other") {
      otherDestinationGroup.style.display = "block";
    } else {
      otherDestinationGroup.style.display = "none";
    }
  });
}

// Form Validation
// 1. Validate Name
function validateName(name) {
  if (name.trim() === "") {
    return "Name is required";
  }

  for (let i = 0; i < name.length; i++) {
    const char = name.charAt(i);
    if (!(char === " " || (char >= "A" && char <= "Z") || (char >= "a" && char <= "z"))) {
      return "Name should contain only letters and spaces";
    }
  }

  return "";
}

// 2. Validate Email
function validateEmail(email) {
  if (email.trim() === "") {
    return "Email is required";
  }

  const atIndex = email.indexOf("@");
  if (atIndex === -1 || atIndex === 0 || atIndex === email.length - 1) {
    return "Invalid email format";
  }

  const domainPart = email.substring(atIndex + 1);
  const dotIndex = domainPart.indexOf(".");
  if (dotIndex === -1 || dotIndex === 0 || dotIndex === domainPart.length - 1) {
    return "Invalid email domain";
  }

  return "";
}

// 3. Validate Phone
function validatePhone(phone) {
  if (phone.trim() === "") {
    return "Phone number is required";
  }

  let cleanPhone = "";
  for (let i = 0; i < phone.length; i++) {
    const char = phone.charAt(i);
    if (char !== " " && char !== "-") {
      cleanPhone += char;
    }
  }

  for (let i = 0; i < cleanPhone.length; i++) {
    const digit = cleanPhone.charAt(i);
    if (!(digit >= "0" && digit <= "9")) {
      return "Phone number should contain only digits, spaces, or dashes";
    }
  }

  if (cleanPhone.length < 10) {
    return "Phone number should be at least 10 digits";
  }

  return "";
}

// 4. Validate Date
function validateDate(dateStr, isReturnDate = false, departureDate = null) {
  if (dateStr === "") {
    return "Date is required";
  }

  const selectedDate = new Date(dateStr);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (selectedDate < today) {
    return "Date cannot be in the past";
  }

  if (isReturnDate && departureDate) {
    const depDate = new Date(departureDate);
    if (selectedDate < depDate) {
      return "Return date must be after departure date";
    }
  }

  return "";
}

// 5. Validate Participants
function validateParticipants(participants) {
  if (participants === "") {
    return "Number of participants is required";
  }

  const num = parseInt(participants);
  if (isNaN(num) || num <= 0) {
    return "Number of participants must be a positive number";
  }

  return "";
}

// Contact Form
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    // Validate Name
    const name = document.getElementById("name").value;
    const nameError = validateName(name);
    document.getElementById("nameError").textContent = nameError;
    if (nameError) isValid = false;

    // Validate Email
    const email = document.getElementById("email").value;
    const emailError = validateEmail(email);
    document.getElementById("emailError").textContent = emailError;
    if (emailError) isValid = false;

    // Validate Phone
    const phone = document.getElementById("phone").value;
    const phoneError = validatePhone(phone);
    document.getElementById("phoneError").textContent = phoneError;
    if (phoneError) isValid = false;

    // Validate Subject
    const subject = document.getElementById("subject").value;
    if (subject === "") {
      document.getElementById("subjectError").textContent = "Please select a subject";
      isValid = false;
    } else {
      document.getElementById("subjectError").textContent = "";
    }

    // Validate Message
    const message = document.getElementById("message").value;
    if (message.trim() === "") {
      document.getElementById("messageError").textContent = "Message is required";
      isValid = false;
    } else {
      document.getElementById("messageError").textContent = "";
    }

    if (isValid) {
      alert("Thank you for your message! We will get back to you soon.");
      contactForm.reset();
    }
  });
}

// Booking Form
const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    // Validate Full Name
    const fullName = document.getElementById("fullName").value;
    const fullNameError = validateName(fullName);
    document.getElementById("fullNameError").textContent = fullNameError;
    if (fullNameError) isValid = false;

    // Validate Email
    const email = document.getElementById("email").value;
    const emailError = validateEmail(email);
    document.getElementById("emailError").textContent = emailError;
    if (emailError) isValid = false;

    // Validate Phone
    const phone = document.getElementById("phone").value;
    const phoneError = validatePhone(phone);
    document.getElementById("phoneError").textContent = phoneError;
    if (phoneError) isValid = false;

    // Validate Destination
    const destination = document.getElementById("destination").value;
    if (destination === "") {
      document.getElementById("destinationError").textContent = "Please select a destination";
      isValid = false;
    } else {
      document.getElementById("destinationError").textContent = "";
    }

    // Validate Departure Date
    const departureDate = document.getElementById("departureDate").value;
    const departureDateError = validateDate(departureDate);
    document.getElementById("departureDateError").textContent = departureDateError;
    if (departureDateError) isValid = false;

    // Validate Return Date
    const returnDate = document.getElementById("returnDate").value;
    const returnDateError = validateDate(returnDate, true, departureDate);
    document.getElementById("returnDateError").textContent = returnDateError;
    if (returnDateError) isValid = false;

    // Validate Participants
    const participants = document.getElementById("participants").value;
    const participantsError = validateParticipants(participants);
    document.getElementById("participantsError").textContent = participantsError;
    if (participantsError) isValid = false;

    // Validate Terms Agreement
    const termsAgree = document.getElementById("termsAgree").checked;
    if (!termsAgree) {
      document.getElementById("termsAgreeError").textContent = "You must agree to the terms and conditions";
      isValid = false;
    } else {
      document.getElementById("termsAgreeError").textContent = "";
    }

    if (isValid) {
      alert("Thank you for your booking! We will contact you within 24 hours to confirm your travel details.");
      bookingForm.reset();
    }
  });
}
