const rfezLogJSON = (severity, message) => {
    if (process.env?.DEBUG || (!process.env && !/debug/i.test(severity))) {
        switch(true) {
            case /DEBUG|DBG|DEB/i.test(severity): severity = 'DBG'; break;
            case /INFO|INF/i.test(severity): severity = 'INF'; break;
            case /WARNING|WARN|WRN/i.test(severity): severity = 'WRN'; break;
            case /ERROR|ERR/i.test(severity): severity = 'ERR'; break;
            default: type = 'INF';
        }
    }

    console.log(JSON.stringify({
        time: new Date().toISOString(),
        severity: severity.toUpperCase(),
        message: message
    }))
}

module.exports = {
    rfezLogJSON
}