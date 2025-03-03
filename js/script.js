// let languageFiles = {
//   en: {
//     greeting: "Hello!",

//     intro: "Welcome to my website.",

//     button: "Switch Language",
//   },

//   fr: {
//     greeting: "Bonjour!",

//     intro: "Bienvenue sur mon site web.",

//     button: "Changer de langue",
//   },
// };
// console.log("Hello!" in languageFiles.en);
// // Define language switcher button

// let languageSwitcher = document.getElementById("language-switcher");

// // Add event listener to button

// languageSwitcher.addEventListener("click", function () {
//   // Get selected language from user input

//   const selectedLanguage = document.getElementById("language-select").value;
//   console.log("log" + ` ${selectedLanguage}`);

//   // Loop through each element on the page

//   document.querySelectorAll("*").forEach(function (element) {
//     // Check if element has text content
//     console.log("1");
//     if (
//       element.childNodes.length === 1 &&
//       element.childNodes[0].nodeType === Node.TEXT_NODE
//     ) {
//       // Get current text content of element

//       let currentText = element.textContent.trim();

//       // Check if current text content exists in language file
//       console.log("end");
//       if (currentText in languageFiles.en) {
//         // Replace current text content with equivalent text in selected language

//         element.textContent = languageFiles[selectedLanguage][currentText];
//       }
//     }
//   });
// });
// Define language files

let languageFiles = {
  en: {
    greeting: "Hello!",

    intro: "Welcome to my website.",

    button: "Switch Language",
  },

  fr: {
    greeting: "Bonjour!",

    intro: "Bienvenue sur mon site web.",

    button: "Changer de langue",
  },
};
console.log("Hello!" in languageFiles.en);
// Define language switcher button

const languageSwitcher = document.getElementById("language-switcher");

// Add event listener to button

languageSwitcher.addEventListener("click", function () {
  // Get selected language from user input

  const selectedLanguage = document.getElementById("language-select").value;

  // Loop through each element on the page

  document.querySelectorAll("*").forEach(function (element) {
    // Check if element has text content

    if (
      element.childNodes.length === 1 &&
      element.childNodes[0].nodeType === Node.TEXT_NODE
    ) {
      // Get current text content of element

      let currentText = element.textContent.trim();
      console.log(currentText);
      // Check if current text content exists in language file

      if (currentText in languageFiles.en) {
        // Replace current text content with equivalent text in selected language

        element.textContent = languageFiles[selectedLanguage][currentText];
      }
    }
  });
});
