document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('form').forEach(function(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(form);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(json => {
                localStorage.setItem('respuesta_configuracion', JSON.stringify(json));
                alert('¡Formulario enviado y respuesta guardada en localStorage!');
            })
            .catch(error => {
                alert('Error al enviar el formulario');
                console.error(error);
            });
        });
    });
});