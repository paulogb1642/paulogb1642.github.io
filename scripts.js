document.getElementById('gasLawForm').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateGasLaw();
});

function calculateGasLaw() {
    var pressure = parseFloat(document.getElementById('pressure').value);
    var volume = parseFloat(document.getElementById('volume').value);
    var temperature = parseFloat(document.getElementById('temperature').value);

    var pressureUnit = document.getElementById('pressureUnit').value;
    var volumeUnit = document.getElementById('volumeUnit').value;
    var temperatureUnit = document.getElementById('temperatureUnit').value;

    var result;
    var resultExplanation;

    if (!isNaN(pressure) && !isNaN(volume) && !isNaN(temperature)) {
        // Perform calculation based on selected units
        // For simplicity, assuming ideal gas law (PV = nRT)
        result = (pressure * volume) / (temperature + (temperatureUnit === '°C' ? 273.15 : 0)); // Convert Celsius to Kelvin if needed
        resultExplanation = `Según la ley de los gases ideales, el resultado es ${result.toFixed(2)} ${pressureUnit}/${volumeUnit}/${temperatureUnit}.`;
    } else {
        resultExplanation = "Por favor, introduce valores numéricos válidos para presión, volumen y temperatura.";
    }

    document.getElementById('resultExplanation').textContent = resultExplanation;
}

function updateGasLawDescription() {
    var gasLawSelect = document.getElementById('gasLawSelect');
    var selectedLaw = gasLawSelect.value;

    var laws = {
        'boyle': {
            title: 'Ley de Boyle-Mariotte (Ley de Boyle)',
            description: 'La ley de Boyle establece que, a temperatura constante, el volumen de una cantidad fija de gas es inversamente proporcional a la presión a la que se encuentra el gas.'
        },
        'charles': {
            title: 'Ley de Charles',
            description: 'La ley de Charles afirma que, a presión constante, el volumen de una cantidad fija de gas es directamente proporcional a su temperatura absoluta (en Kelvin).'
        },
        'gay-lussac': {
            title: 'Ley de Gay-Lussac',
            description: 'La ley de Gay-Lussac indica que, a volumen constante, la presión de una cantidad fija de gas es directamente proporcional a su temperatura absoluta.'
        },
        'avogadro': {
            title: 'Ley de los Gases Ideales (Ley de Avogadro)',
            description: 'La ley de los gases ideales establece que, a condiciones normales de presión y temperatura, un mol de cualquier gas ideal ocupa el mismo volumen.'
        }
    };

    var selectedLawInfo = laws[selectedLaw];
    var gasLawDescription = `<h3>${selectedLawInfo.title}</h3>`;
    gasLawDescription += `<p>${selectedLawInfo.description}</p>`;

    document.getElementById('gasLawDescription').innerHTML = gasLawDescription;
}

