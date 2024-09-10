document.addEventListener("DOMContentLoaded", function () {
    // Обчислення кількості годин до початку літа
    function hoursUntilSummer() {
        const now = new Date();
        const summerStart = new Date(now.getFullYear(), 5, 1); // 1 червня
        if (now > summerStart) {
            summerStart.setFullYear(summerStart.getFullYear() + 1);
        }
        const diff = summerStart - now;
        return Math.floor(diff / (1000 * 60 * 60));
    }

    // Встановлення обробників подій для кнопок
    document.getElementById("okButton").addEventListener("click", function () {
        const inputField = document.getElementById("inputField");
        inputField.value = hoursUntilSummer() + " годин до початку літа";
    });

    document.getElementById("cancelButton").addEventListener("click", function () {
        document.getElementById("inputForm").reset();
    });

    // Підрахунок днів до весняного та осіннього рівнодення
    function daysUntilEquinox(date) {
        const now = new Date();
        const year = now.getFullYear();
        const equinox = new Date(year, date.getMonth(), date.getDate());
        if (now > equinox) {
            equinox.setFullYear(year + 1);
        }
        const diff = equinox - now;
        return Math.ceil(diff / (1000 * 60 * 60 * 24));
    }

    const springEquinox = new Date(new Date().getFullYear(), 2, 22); // 22 березня
    const autumnEquinox = new Date(new Date().getFullYear(), 8, 22); // 22 вересня

    const springDays = daysUntilEquinox(springEquinox);
    const autumnDays = daysUntilEquinox(autumnEquinox);

    alert(`До весняного рівнодення залишилось ${springDays} діб.\nДо осіннього рівнодення залишилось ${autumnDays} діб.`);

    // Підрахунок кількості спрацьовувань обробника подій
    let eventCounter = 0;
    document.getElementById("infoLink").addEventListener("click", function (e) {
        e.preventDefault();
        eventCounter++;
        alert(`Ця подія спрацювала ${eventCounter} разів у поточну хвилину.`);
    });

    // Додати поточну дату на сторінку
    const dateTimeElement = document.getElementById("dateTime");

    function updateDate() {
        const now = new Date();
        const dateString = now.toLocaleDateString('uk-UA', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        dateTimeElement.textContent = dateString;
    }

    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('uk-UA');
        dateTimeElement.textContent = timeString;
    }

    updateDate();

    let timeInterval;
    dateTimeElement.addEventListener("mouseenter", function () {
        updateTime();
        timeInterval = setInterval(updateTime, 1000);
    });

    dateTimeElement.addEventListener("mouseleave", function () {
        clearInterval(timeInterval);
        updateDate();
    });

    // Заміна логотипів при наведенні курсора
    document.getElementById("logoPart1").addEventListener("mouseenter", function () {
        this.src = "./Images/Anti-LGBT11.png";
    });
    document.getElementById("logoPart1").addEventListener("mouseleave", function () {
        this.src = "./Images/Anti-LGBT11.png";
    });

    document.getElementById("logoPart2").addEventListener("mouseenter", function () {
        this.src = "logo-part2-hover.jpg";
    });
    document.getElementById("logoPart2").addEventListener("mouseleave", function () {
        this.src = "logo-part2.jpg";
    });

    document.getElementById("logoPart3").addEventListener("mouseenter", function () {
        this.src = "logo-part3-hover.jpg";
    });
    document.getElementById("logoPart3").addEventListener("mouseleave", function () {
        this.src = "logo-part3.jpg";
    });
});

