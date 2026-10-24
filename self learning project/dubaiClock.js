let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime() {
    let date = new Date();

    let formatter = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Dubai',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });

    let parts = formatter.formatToParts(date);

    let hour = Number(parts.find(p => p.type === 'hour').value) % 24;
    let minute = Number(parts.find(p => p.type === 'minute').value);
    let second = Number(parts.find(p => p.type === 'second').value);

    let hourRotation = 30 * (hour % 12) + minute / 2;
    let minRotation = 6 * minute;
    let secondRotation = 6 * second;
    
    hr.style.transform = `rotate(${hourRotation}deg)`;
    min.style.transform = `rotate(${minRotation}deg)`;
    sec.style.transform = `rotate(${secondRotation}deg)`;
}
setInterval(displayTime, 1000);