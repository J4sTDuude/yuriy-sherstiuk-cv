let currentLang = "en";

// Функція для оновлення контенту
const loadLanguage = async (lang) => {
  try {
    const response = await fetch(`lang-${lang}.json`);
    const data = await response.json();

    // Оновлення заголовків
    document.getElementById("name").innerText = data.name;
    document.querySelector(".subtitle").innerText = data.role;
    document.getElementById("location").innerText = data.location;
    document.getElementById("phone-number").innerHTML = data.phoneNumber;

    // Оновлення секцій за допомогою data-key атрибутів
    document.querySelectorAll("[data-key]").forEach((element) => {
      const key = element.getAttribute("data-key");
      if (data[key]) {
        element.innerHTML = data[key];
      }
    });

    document.querySelectorAll("[data-key]").forEach((element) => {
      const key = element.getAttribute("data-key");
      if (data[key]) {
        element.innerHTML = data[key];
      }
    });
    // Оновлення списків
    document.getElementById("skillsList").innerHTML = data.skills
      .map((skill) => `<li>${skill}</li>`)
      .join("");

    document.getElementById("experienceList").innerHTML = data.experience
      .map((item) => `<li>${item}</li>`)
      .join("");
    document.getElementById("experienceList2").innerHTML = data.experience2
      .map((item) => `<li>${item}</li>`)
      .join("");

    // Оновлення текстових полів
    document.getElementById("educationText").innerHTML = data.education;
    document.getElementById("qualitiesText").innerText = data.qualities;
    document.getElementById("fitText").innerText = data.fit;

    // Оновлення футера
    document.querySelector("footer p").innerHTML = data.footer;
  } catch (error) {
    console.error("Error loading language file:", error);
  }
};

// Обробники кнопок
document.getElementById("enBtn").addEventListener("click", () => {
  currentLang = "en";
  document.getElementById("enBtn").classList.add("active");
  document.getElementById("uaBtn").classList.remove("active");
  loadLanguage(currentLang);
});

document.getElementById("uaBtn").addEventListener("click", () => {
  currentLang = "ua";
  document.getElementById("uaBtn").classList.add("active");
  document.getElementById("enBtn").classList.remove("active");
  loadLanguage(currentLang);
});

// Завантажити мову за замовчуванням
loadLanguage(currentLang);
