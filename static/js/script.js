document.addEventListener('DOMContentLoaded', () => {
    const root1 = document.getElementById('root1');
    const root2 = document.getElementById('root2');
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        try {
            const a = parseFloat(document.getElementById('a').value);
            const b = parseFloat(document.getElementById('b').value);
            const c = parseFloat(document.getElementById('c').value);
            const res = await calculate({ a, b, c });
            if(res.root1){
                root1.value = res.root1;
                root2.value = res.root2;
            }else{
                const errorEl = document.getElementById('error');
                errorEl.textContent = 'Error: ' + res.error;
            }     
        } catch (error) {
            console.error('Error:', error);
            
        }

    })
});

async function calculate(ecuationData) {
    const data = await fetch('/cuadratic', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ecuationData)
    })
    return data.json()
}
