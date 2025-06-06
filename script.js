// Language data
const languageData = {
    english: {
        alphabet: {
            'A': 'images/english/A.png',
            'B': 'images/english/B.png',
            'C': 'images/english/C.png',
            'D': 'images/english/D.png',
            'E': 'images/english/E.png',
            'F': 'images/english/F.png',
            'G': 'images/english/G.png',
            'H': 'images/english/H.png',
            'I': 'images/english/I.png',
            'J': 'images/english/J.png',
            'K': 'images/english/K.png',
            'L': 'images/english/L.png',
            'M': 'images/english/M.png',
            'N': 'images/english/N.png',
            'O': 'images/english/O.png',
            'P': 'images/english/P.png',
            'Q': 'images/english/Q.png',
            'R': 'images/english/R.png',
            'S': 'images/english/S.png',
            'T': 'images/english/T.png',
            'U': 'images/english/U.png',
            'V': 'images/english/V.png',
            'W': 'images/english/W.png',
            'X': 'images/english/X.png',
            'Y': 'images/english/Y.png',
            'Z': 'images/english/Z.png'
        }
    },
    hindi: {
        alphabet: {
            'अ': 'images/hindi/अ.png',
            'आ': 'images/hindi/आ.png',
            'इ': 'images/hindi/इ.png',
            'ई': 'images/hindi/ई.png',
            'उ': 'images/hindi/उ.png',
            'ऊ': 'images/hindi/ऊ.png',
            'ए': 'images/hindi/ए.png',
            'ऐ': 'images/hindi/ऐ.png',
            'ओ': 'images/hindi/ओ.png',
            'औ': 'images/hindi/औ.png',
            'क': 'images/hindi/क.png',
            'ख': 'images/hindi/ख.png',
            'ग': 'images/hindi/ग.png',
            'घ': 'images/hindi/घ.png',
            'च': 'images/hindi/च.png',
            'छ': 'images/hindi/छ.png',
            'ज': 'images/hindi/ज.png',
            'झ': 'images/hindi/झ.png',
            'ट': 'images/hindi/ट.png',
            'ठ': 'images/hindi/ठ.png',
            'ड': 'images/hindi/ड.png',
            'ढ': 'images/hindi/ढ.png',
            'त': 'images/hindi/त.png',
            'थ': 'images/hindi/थ.png',
            'द': 'images/hindi/द.png',
            'ध': 'images/hindi/ध.png',
            'न': 'images/hindi/न.png',
            'प': 'images/hindi/प.png',
            'फ': 'images/hindi/फ.png',
            'ब': 'images/hindi/ब.png',
            'भ': 'images/hindi/भ.png',
            'म': 'images/hindi/म.png',
            'य': 'images/hindi/य.png',
            'र': 'images/hindi/र.png',
            'ल': 'images/hindi/ल.png',
            'व': 'images/hindi/व.png',
            'श': 'images/hindi/श.png',
            'ष': 'images/hindi/ष.png',
            'स': 'images/hindi/स.png',
            'ह': 'images/hindi/ह.png'
        }
    },
    bengali: {
        alphabet: {
            'অ': 'images/bengali/অ.png',
            'আ': 'images/bengali/আ.png',
            'ই': 'images/bengali/ই.png',
            'ঈ': 'images/bengali/ঈ.png',
            'উ': 'images/bengali/উ.png',
            'ঊ': 'images/bengali/ঊ.png',
            'এ': 'images/bengali/এ.png',
            'ঐ': 'images/bengali/ঐ.png',
            'ও': 'images/bengali/ও.png',
            'ঔ': 'images/bengali/ঔ.png',
            'ক': 'images/bengali/ক.png',
            'খ': 'images/bengali/খ.png',
            'গ': 'images/bengali/গ.png',
            'ঘ': 'images/bengali/ঘ.png',
            'চ': 'images/bengali/চ.png',
            'ছ': 'images/bengali/ছ.png',
            'জ': 'images/bengali/জ.png',
            'ঝ': 'images/bengali/ঝ.png',
            'ট': 'images/bengali/ট.png',
            'ঠ': 'images/bengali/ঠ.png',
            'ড': 'images/bengali/ড.png',
            'ঢ': 'images/bengali/ঢ.png',
            'ত': 'images/bengali/ত.png',
            'থ': 'images/bengali/থ.png',
            'দ': 'images/bengali/দ.png',
            'ধ': 'images/bengali/ধ.png',
            'ন': 'images/bengali/ন.png',
            'প': 'images/bengali/প.png',
            'ফ': 'images/bengali/ফ.png',
            'ব': 'images/bengali/ব.png',
            'ভ': 'images/bengali/ভ.png',
            'ম': 'images/bengali/ম.png',
            'য': 'images/bengali/য.png',
            'র': 'images/bengali/র.png',
            'ল': 'images/bengali/ল.png',
            'শ': 'images/bengali/শ.png',
            'ষ': 'images/bengali/ষ.png',
            'স': 'images/bengali/স.png',
            'হ': 'images/bengali/হ.png'
        }
    }
};

// Initialize variables
let currentLanguage = localStorage.getItem('currentLanguage') || 'english';
let currentIndex = parseInt(localStorage.getItem('currentIndex')) || 0;

// Function to start learning a specific language
function startLearning(language) {
    currentLanguage = language;
    localStorage.setItem('currentLanguage', language);
    localStorage.setItem('currentIndex', 0);
    window.location.href = 'learning.html';
}

// Function to update progress
function updateProgress() {
    const progressFill = document.getElementById('progress-fill');
    const currentProgress = document.getElementById('current-progress');
    const signsCompleted = document.getElementById('signs-completed');
    const totalSigns = Object.keys(languageData[currentLanguage].alphabet).length;
    const percentage = ((currentIndex + 1) / totalSigns) * 100;
    
    progressFill.style.width = `${percentage}%`;
    currentProgress.textContent = `${Math.round(percentage)}%`;
    signsCompleted.textContent = `${currentIndex + 1}/${totalSigns} signs completed`;
}

// Function to load the current sign
function loadCurrentSign() {
    const language = localStorage.getItem('currentLanguage');
    if (!language) {
        window.location.href = 'index.html';
        return;
    }

    const data = languageData[language];
    const alphabetElement = document.getElementById('current-alphabet');
    const signImage = document.getElementById('sign-image');
    const signCounter = document.getElementById('sign-counter');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const languageTitle = document.getElementById('language-title');

    if (alphabetElement && signImage && signCounter) {
        const letters = Object.keys(data.alphabet);
        alphabetElement.textContent = letters[currentIndex];
        
        // Load the image with error handling
        const img = new Image();
        img.onload = function() {
            signImage.src = this.src;
        };
        img.onerror = function() {
            signImage.src = 'data:image/svg+xml;base64,' + btoa(`
                <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <rect width="200" height="200" fill="#f0f2f5"/>
                    <text x="100" y="100" font-family="Arial" font-size="24" fill="#666" text-anchor="middle">
                        Image not available
                    </text>
                </svg>
            `);
        };
        img.src = data.alphabet[letters[currentIndex]];
        
        signCounter.textContent = `Sign ${currentIndex + 1} of ${letters.length}`;
        
        // Update button states
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === letters.length - 1;
        
        // Update language title
        const languageNames = {
            'english': 'English Sign Language',
            'hindi': 'Hindi Sign Language',
            'bengali': 'Bengali Sign Language'
        };
        languageTitle.textContent = languageNames[language];
        
        // Update progress
        updateProgress();
    }
}

// Function to go to the next sign
function nextSign() {
    const language = localStorage.getItem('currentLanguage');
    const data = languageData[language];
    if (currentIndex < Object.keys(data.alphabet).length - 1) {
        currentIndex++;
        localStorage.setItem('currentIndex', currentIndex);
        loadCurrentSign();
    }
}

// Function to go to the previous sign
function previousSign() {
    if (currentIndex > 0) {
        currentIndex--;
        localStorage.setItem('currentIndex', currentIndex);
        loadCurrentSign();
    }
}

// Function to start practice
function startPractice(type) {
    window.location.href = 'practice.html';
}

// Function to start quiz
function startQuiz(type) {
    window.location.href = 'quiz.html';
}

// Initialize the page when it loads
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners for language selection buttons
    const englishBtn = document.getElementById('english-btn');
    const hindiBtn = document.getElementById('hindi-btn');
    const bengaliBtn = document.getElementById('bengali-btn');

    if (englishBtn) englishBtn.addEventListener('click', () => startLearning('english'));
    if (hindiBtn) hindiBtn.addEventListener('click', () => startLearning('hindi'));
    if (bengaliBtn) bengaliBtn.addEventListener('click', () => startLearning('bengali'));

    // Add event listeners for practice buttons
    const wordPracticeBtn = document.querySelector('[onclick="startPractice(\'word\')"]');
    const sentencePracticeBtn = document.querySelector('[onclick="startPractice(\'sentence\')"]');
    
    if (wordPracticeBtn) wordPracticeBtn.addEventListener('click', () => startPractice('word'));
    if (sentencePracticeBtn) sentencePracticeBtn.addEventListener('click', () => startPractice('sentence'));

    // Add event listeners for quiz buttons
    const basicQuizBtn = document.querySelector('[onclick="startQuiz(\'basic\')"]');
    const advancedQuizBtn = document.querySelector('[onclick="startQuiz(\'advanced\')"]');
    
    if (basicQuizBtn) basicQuizBtn.addEventListener('click', () => startQuiz('basic'));
    if (advancedQuizBtn) advancedQuizBtn.addEventListener('click', () => startQuiz('advanced'));

    // Check if we're on the learning page
    if (window.location.pathname.includes('learning.html')) {
        loadCurrentSign();
    }

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
});
