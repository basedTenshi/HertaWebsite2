function validateName(name) {
    let dataType = typeof name;
    let charLen = String(name).length;
    if (dataType === 'string' && charLen > 2) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    email = email.split('');
    // domain_concatenate =  // incomplete line in original Python; keeping it commented

    if (email.length < 10) {
        return false;
    }

    for (let i = 0; i < email.length; i++) {
        if (email.includes('@')) {
            // email['@'] += 1 // invalid logic in original Python
            // No direct JS equivalent; this line does nothing meaningful
        }
    }

    return true; // Original code ends with this implicitly
}
