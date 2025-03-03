const languageFiles = {
  english: {
    title: "Alexandr Korobeinikov",
    name: "ALEXANDR",
    surname: "KOROBEINIKOV",
    profession: "Front-End developer?",
    contacts: "Contacts",
    education: "Education",
    secondaryProfessionalEducation: "Secondary professional education",
    englishCourses: "English courses",
    languages: "Languages",
    intermediate: "(intermediate+)",
    native: "(native)",
    upperIntermediate: "(upper-intermediate)",
    beginner: "(beginner)",
  interests: "Interests",
    sevenYears: "(7 years+)",
    oneYear: "(1 year)",
    guitar: "(guitar - 200 hours)",
    // : "Hello!",
    // : "Hello!",
    // : "Hello!",
    // : "Hello!",
    // : "Hello!",
    // : "Hello!",
    greeting: "Hello!",
    intro: "Welcome to my website.",
    button: "Switch Language",
  },

  poland: {
    title: "Alexandr Korobeinikov",
    name: "ALEXANDR",
    surname: "KOROBEINIKOV",
    profession: "Front-End developer?",
    greeting: "Hello!",
    greeting: "Hello!",
    greeting: "Bonjour!",
    intro: "Bienvenue sur mon site web.",
    button: "Changer de langue",
  },
};
let currentLanguage = "english";
const languageSwitcher = document.getElementById("language-switcher");
languageSwitcher.addEventListener("click", function () {
  const selectedLanguage = document.getElementById("language-select").value;
  document.querySelectorAll("*").forEach(function (element) {
    if (
      element.childNodes.length === 1 &&
      element.childNodes[0].nodeType === Node.TEXT_NODE
    ) {
      let currentText = element.textContent.trim();

      const currentTextKey = Object.keys(
        languageFiles[selectedLanguage]
      ).filter((k) => languageFiles[currentLanguage][k] === currentText);
      console.log(currentText);
      if (currentTextKey in languageFiles[currentLanguage]) {
        element.textContent = languageFiles[selectedLanguage][currentTextKey];
        // currentLanguage = languageFiles.selectedLanguage;
      }
    }
  });
  currentLanguage = selectedLanguage;
});
