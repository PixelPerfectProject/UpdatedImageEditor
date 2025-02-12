let display = document.querySelector('.display');
let moveLeft = document.getElementById('moveLeft');
let moveRight = document.getElementById('moveRight');

let leftPercent = 50; // ডিফল্ট অবস্থান 0%

moveLeft.addEventListener('click', function() {
    if (leftPercent > 0) { // সীমা নির্ধারণ
        leftPercent -= 1; // ১% কমবে
        display.style.left = `${leftPercent}%`;
    }
});

moveRight.addEventListener('click', function() {
    if (leftPercent < 100) { // সীমা নির্ধারণ
        leftPercent += 1; // ১% বাড়বে
        display.style.left = `${leftPercent}%`;
    }
});

function updateDate() {
    const dateElement = document.querySelector('.Date');
    const now = new Date();

    // Date format: DD-MM-YYYY
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // মাস 0 থেকে শুরু হয়, তাই +1
    const year = now.getFullYear();

    dateElement.textContent = `${day}-${month}-${year}`;
}
updateDate();


document.getElementById('imageUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];

    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const displayDiv = document.querySelector('.display');
            
            // আগের ইমেজ মুছে ফেলা
            displayDiv.innerHTML = '';

            // নতুন ইমেজ ট্যাগ তৈরি করা
            const newImage = document.createElement('img');
            newImage.src = e.target.result;
            newImage.classList.add('uploadedImage'); // CSS এর জন্য ক্লাস
            
            // display ডিভের মধ্যে ইমেজ যোগ করা
            displayDiv.appendChild(newImage);
        }

        reader.readAsDataURL(file);
    } else {
        alert('Please upload a valid image file.');
    }
});
// Title Color Change
document.getElementById('colorInput').addEventListener('input', function (event) {
    const titleElement = document.querySelector('.redBackground .title h2');
    titleElement.style.color = event.target.value;
});

// Font Size Modify
const titleElement = document.querySelector('.redBackground .title h2');

document.getElementById('increaseFont').addEventListener('click', function () {
    const currentSize = parseFloat(window.getComputedStyle(titleElement).fontSize);
    titleElement.style.fontSize = `${currentSize + 2}px`;
});

document.getElementById('decreaseFont').addEventListener('click', function () {
    const currentSize = parseFloat(window.getComputedStyle(titleElement).fontSize);
    if (currentSize > 10) {
        titleElement.style.fontSize = `${currentSize - 2}px`;
    }
});
// টাইটেলের টেক্সট ডাইনামিকভাবে আপডেট করার জন্য Event Listener
document.querySelector('input[type="text"]').addEventListener('input', function (event) {
    const titleElement = document.querySelector('.redBackground .title h2');
    titleElement.textContent = event.target.value;
});

// লাইব্রেরি লোড করার জন্য
// <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>

document.getElementById('downloadBtn').addEventListener('click', function () {
    const container = document.querySelector('.container');
    html2canvas(container, { scale: 3, useCORS: true }).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/jpeg', 1.0); 
        link.download = 'container-high-quality.jpg';
        link.click();
    });
});
