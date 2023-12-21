document.getElementById('loginButton').addEventListener('click', function() {
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('loginScreen').style.display = 'block';
    document.getElementById('mainButton').style.display = 'block';
});

document.getElementById('guestButton').addEventListener('click', function() {
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('serviceSelectionScreen').style.display = 'block';
    document.getElementById('mainButton').style.display = 'block';
});

document.getElementById('submitLogin').addEventListener('click', function() {
    var ssn = document.getElementById('ssn').value;
    var password = document.getElementById('password').value;

    // example
    if (ssn === '123' && password === 'abc') {
        document.getElementById('loginScreen').style.display = 'none';
        document.getElementById('serviceSelectionScreen').style.display = 'block';
    } else {
        document.getElementById('loginError').style.display = 'block';
    }
});

document.getElementById('serviceSelection').addEventListener('change', function() {
    var selection = this.value;
    var inputFields = document.getElementById('inputFields');
    inputFields.innerHTML = '';

    var placeholders = {
        'KidneyDisease': ['1', '2', '3', '4', '5'],
        'Obesity': ['Height(cm)', 'Weight(kg)', 'Body Fat(%)'],
        'HeartRate': ['Heart Rate']
    };

    var fieldCount = placeholders[selection] || [];

    for (var i = 0; i < fieldCount.length; i++) {
        var input = document.createElement('input');
        input.type = 'text';
        input.placeholder = fieldCount[i];
        input.id = 'input' + selection + i; //Each input have a unique id
        inputFields.appendChild(input);
    }

    if (fieldCount.length > 0) {
        var submitButton = document.createElement('button');
        submitButton.textContent = 'Submit';
        submitButton.onclick = function() {
            validateInputs(fieldCount, selection);
        };
        inputFields.appendChild(submitButton);
    }
});

function validateInputs(fieldCount, selection) {
    for (var i = 0; i < fieldCount.length; i++) {
        var input = document.getElementById('input' + selection + i);
        if (!input || !input.value.trim()) {
            alert('Fill out all the inputs');
            return;
        }
        
        if (input.placeholder === 'Body Fat(%)' && !validateBodyFat(input.value)) {
            alert('Invalid Body Fat');
            return;
        }
    }
    alert('Processing');
}

function validateBodyFat(bodyFat) {
    if (bodyFat > 0 && bodyFat < 100){return bodyFat;}
}

document.getElementById('mainButton').addEventListener('click', function() {
    document.getElementById('welcomeScreen').style.display = 'block';
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('serviceSelectionScreen').style.display = 'none';
    document.getElementById('mainButton').style.display = 'none';
});

