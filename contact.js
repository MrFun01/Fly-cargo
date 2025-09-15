// (function(){
//   emailjs.init("YOUR_PUBLIC_KEY"); // Public Key
// })();

// document.getElementById("rate-form").addEventListener("submit", function(event) {
//   event.preventDefault();
//   const status = document.getElementById("status");
//   status.innerHTML = "⏳ Отправка...";

//   emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
//     .then(() => {
//       status.innerHTML = "✅ Заявка успешно отправлена!";
//       this.reset();
//     }, (err) => {
//       status.innerHTML = "❌ Ошибка: " + JSON.stringify(err);
//     });
// });


// Form send to EmailJS
(function () {
  emailjs.init("FY7kuZHBPZmXMC29P"); // Your EmailJS Public Key
})();

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("rate-form");
  const status = document.getElementById("status");
  const langSelect = document.getElementById("language");

  // Messages in different languages
  const messages = {
    ru: {
      sending: "⏳ Отправка...",
      success: "✅ Заявка успешно отправлена!",
      error: "❌ Ошибка при отправке. Попробуйте снова."
    },
    en: {
      sending: "⏳ Sending...",
      success: "✅ Request sent successfully!",
      error: "❌ Failed to send. Please try again."
    },
    uz: {
      sending: "⏳ Jo‘natilmoqda...",
      success: "✅ So‘rov muvaffaqiyatli yuborildi!",
      error: "❌ Jo‘natishda xatolik. Qayta urinib ko‘ring."
    }
  };

  // Function to get selected language (fallback to RU)
  function getLang() {
    return langSelect ? langSelect.value : "ru";
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const lang = getLang();
    status.style.color = "#333";
    status.innerHTML = messages[lang].sending;

    emailjs.sendForm("service_g1ugnll", "template_7wzts27", this)
      .then(() => {
        status.style.color = "green";
        status.innerHTML = messages[lang].success;
        this.reset();
      }, () => {
        status.style.color = "red";
        status.innerHTML = messages[lang].error;
      });
  });
});



// validation.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("rate-form");
  const status = document.getElementById("status");
  const submitBtn = document.getElementById("formSubmit");

  const inputs = form.querySelectorAll("input[required], select[required]");

  // Disable button initially
  submitBtn.disabled = true;
  submitBtn.style.opacity = "0.6";
  submitBtn.style.cursor = "not-allowed";

  function checkFormValidity() {
    let valid = true;

    inputs.forEach(input => {
      if (input.value.trim() === "") {
        valid = false;
      }
    });

    if (valid) {
      submitBtn.disabled = false;
      submitBtn.style.opacity = "1";
      submitBtn.style.cursor = "pointer";
    } else {
      submitBtn.disabled = true;
      submitBtn.style.opacity = "0.6";
      submitBtn.style.cursor = "not-allowed";
    }
  }

  // Validate on input change
  inputs.forEach(input => {
    input.addEventListener("input", () => {
      input.value = input.value.trimStart(); // trim left spaces while typing
      checkFormValidity();
    });
  });

  // Final check before submit
  form.addEventListener("submit", function (e) {
    let valid = true;
    inputs.forEach(input => {
      if (input.value.trim() === "") {
        valid = false;
        input.style.borderColor = "red";
      } else {
        input.style.borderColor = "#ccc";
        input.value = input.value.trim();
      }
    });

    if (!valid) {
      e.preventDefault();
      status.innerText = "❌ Заполните все обязательные поля!";
      status.style.color = "red";
      submitBtn.disabled = true;
      return false;
    }
  });
});





