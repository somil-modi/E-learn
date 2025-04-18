// Initialize variables
let currentLanguage = localStorage.getItem('currentLanguage') || 'english';
let currentPracticeType = '';
let currentPracticeWord = '';
let practiceWords = [];

// Function to start practice
function startPractice(type) {
    currentPracticeType = type;
    document.querySelector('.practice-grid').style.display = 'none';
    document.getElementById('exercise-section').style.display = 'block';
    
    if (type === 'word') {
        practiceWords = Object.keys(languageData[currentLanguage].alphabet);
        showNextPracticeWord();
    } else if (type === 'sentence') {
        showNextPracticeSentence();
    }
}

// Function to show next practice word
function showNextPracticeWord() {
    if (practiceWords.length === 0) {
        practiceWords = Object.keys(languageData[currentLanguage].alphabet);
    }
    
    const randomIndex = Math.floor(Math.random() * practiceWords.length);
    currentPracticeWord = practiceWords[randomIndex];
    practiceWords.splice(randomIndex, 1);
    
    document.getElementById('exercise-text').textContent = `What is the sign for "${currentPracticeWord}"?`;
    document.getElementById('sign-image').src = languageData[currentLanguage].alphabet[currentPracticeWord];
    document.getElementById('user-input').value = '';
    document.getElementById('feedback').className = 'feedback';
    document.getElementById('feedback').textContent = '';
}

// Function to show next practice sentence
function showNextPracticeSentence() {
    const sentences = {
        english: ['Hello', 'Thank you', 'Please', 'Good morning', 'How are you'],
        hindi: ['नमस्ते', 'धन्यवाद', 'कृपया', 'सुप्रभात', 'आप कैसे हैं'],
        bengali: ['হ্যালো', 'ধন্যবাদ', 'দয়া করে', 'সুপ্রভাত', 'আপনি কেমন আছেন']
    };

    const randomIndex = Math.floor(Math.random() * sentences[currentLanguage].length);
    currentPracticeWord = sentences[currentLanguage][randomIndex];
    
    document.getElementById('exercise-text').textContent = `What is the sign for "${currentPracticeWord}"?`;
    document.getElementById('sign-image').src = `images/${currentLanguage}/phrases/${currentPracticeWord}.png`;
    document.getElementById('user-input').value = '';
    document.getElementById('feedback').className = 'feedback';
    document.getElementById('feedback').textContent = '';
}

// Function to check practice answer
function checkPracticeAnswer() {
    const userInput = document.getElementById('user-input').value.toLowerCase();
    const feedback = document.getElementById('feedback');
    
    if (userInput === currentPracticeWord.toLowerCase()) {
        feedback.className = 'feedback correct';
        feedback.textContent = 'Correct! Well done!';
        setTimeout(() => {
            if (currentPracticeType === 'word') {
                showNextPracticeWord();
            } else {
                showNextPracticeSentence();
            }
        }, 1500);
    } else {
        feedback.className = 'feedback incorrect';
        feedback.textContent = `Incorrect. The correct answer is "${currentPracticeWord}".`;
    }
}

// Initialize the page when it loads
document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            const icon = themeToggle.querySelector('i');
            icon.classList.toggle('fa-moon');
            icon.classList.toggle('fa-sun');
        });
    }

    // Add event listeners for practice buttons
    const wordPracticeBtn = document.querySelector('[onclick="startPractice(\'word\')"]');
    const sentencePracticeBtn = document.querySelector('[onclick="startPractice(\'sentence\')"]');
    
    if (wordPracticeBtn) wordPracticeBtn.addEventListener('click', () => startPractice('word'));
    if (sentencePracticeBtn) sentencePracticeBtn.addEventListener('click', () => startPractice('sentence'));
}); 