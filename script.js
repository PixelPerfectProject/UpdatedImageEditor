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
            displayDiv.style.background = `url('${e.target.result}') blueviolet no-repeat center`;
            displayDiv.style.backgroundSize = "cover";
            displayDiv.textContent = ''; // টেক্সট মুছে ফেলব যাতে ইমেজ দেখতে ভালো লাগে
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
    html2canvas(container).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/jpeg'); // JPG ফরম্যাটে সেভ করার জন্য
        link.download = 'container-snapshot.jpg'; 
        link.click();
    });
});
