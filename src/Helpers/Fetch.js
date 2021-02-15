export async function doFetch(url, type, data) {

    let method = type || 'GET';
    let body = data || null;

    const options = {
        method : method,
        body : body,
    }

    try {
        let response = await fetch(url, options);
        let data = await response.json();
    
        return data;
    }
    catch(error) {
        console.log(error);
    }
}

export async function fetch2(url, key, type, data) {

    let method = type || 'GET';
    let body = data || null;

    const options = {
        method : method,
        body : body,
        headers: {
            'authorization': `Bearer ${key}`
        }
    };

    try {
        let response = await fetch(url, options);
        let data = await response.json();
    
        return data;
    }
    catch(error) {
        console.log(error);
    }
}