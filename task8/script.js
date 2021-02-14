const DATA_FILE_NAME = {
    FIRST: 'julia_klepitskaia_data.json',
};

function getDataRequest(fileName) {
    let xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'julia_klepitskaia_data.json', true);
    // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = () => {
        console.log('LOH');
        console.log(xobj.readyState);
        if (xobj.readyState === 4 && xobj.status === 200) {
            // Required use of an anonymous callback 
            // as .open() will NOT return a value but simply returns undefined in asynchronous mode
            // callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

getDataRequest(DATA_FILE_NAME.FIRST);