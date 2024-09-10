document.addEventListener("DOMContentLoaded", function () {
    const phoneInput = document.getElementById("phone");

    phoneInput.addEventListener("input", function (e) {
        let value = e.target.value;
        value = value.replace(/\D/g, "");

        if (value.length > 3 && value.length <= 6) {
            value = value.replace(/^(\d{3})(\d+)/, "+38 ($1) $2");
        } else if (value.length > 6 && value.length <= 8) {
            value = value.replace(/^(\d{3})(\d{3})(\d+)/, "+38 ($1) $2-$3");
        } else if (value.length > 8) {
            value = value.replace(/^(\d{3})(\d{3})(\d{2})(\d+)/, "+38 ($1) $2-$3-$4");
        } else {
            value = value.replace(/^(\d*)/, "+38 $1");
        }

        e.target.value = value;
    });
});

