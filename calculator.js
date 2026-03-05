let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let themeBtn = document.getElementById('themeBtn');

let string = "";
let isDarkMode = true;

// Theme toggle functionality
themeBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  isDarkMode = !isDarkMode;
  document.body.classList.toggle('light-mode');
  themeBtn.textContent = isDarkMode ? '🌙' : '☀️';
});

// Calculator functionality
buttons.forEach(button => {
  if (button.id !== 'themeBtn') {
    button.addEventListener('click', (e) => {
      let buttonText = e.target.textContent.trim();

      switch (buttonText) {
        case '=':
          try {
            string = string.replace(/÷/g, '/').replace(/×/g, '*');
            string = eval(string).toString();
            input.value = string;
          } catch {
            input.value = "Error";
            string = "";
          }
          break;
        case 'AC':
          string = "";
          input.value = "0";
          break;
        case '⌫':
          string = string.slice(0, -1);
          input.value = string || "0";
          break;
        default:
          string += buttonText;
          input.value = string;
      }
    });
  }
});

input.value = "0";
