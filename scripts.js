async function predictDiagnosis() {
    const mean_radius = parseFloat(document.getElementById("mean_radius").value);
    const mean_texture = parseFloat(document.getElementById("mean_texture").value);
    const mean_perimeter = parseFloat(document.getElementById("mean_perimeter").value);
    const mean_area = parseFloat(document.getElementById("mean_area").value);
    const mean_smoothness = parseFloat(document.getElementById("mean_smoothness").value);

    const data = {
        mean_radius,
        mean_texture,
        mean_perimeter,
        mean_area,
        mean_smoothness
    };

    try {
        const response = await fetch('/predict', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        document.getElementById("resultMessage").textContent = `Prediction: ${result.prediction}`;
    } catch (error) {
        document.getElementById("resultMessage").textContent = "Error connecting to the server.";
    }
}


  