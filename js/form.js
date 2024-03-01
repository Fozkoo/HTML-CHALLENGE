const $form = document.querySelector('#asd');
    
if ($form) {
    $form.addEventListener('submit', handleSubmit);
}

async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const response = await fetch(event.currentTarget.action, {
        method: event.currentTarget.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    });
    if (response.ok && $form) {
        $form.reset();
        alert('¡Gracias por contactarte!');
    }
}