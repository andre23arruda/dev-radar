const API_URL = `192.168.0.31:8000`
const baseUrl = `http://${ API_URL }/api/`

async function postApi(route, formData, auth='') {
    return fetch(
        baseUrl + route,
        {
            credentials: 'same-origin',
            method: 'POST',
            body: JSON.stringify(formData),
            headers: new Headers({
                'Authorization': auth,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            })
        }
    )
    .then(response => response.json())
}


async function getApi(route, auth='', base=true) {
    const url =  base ? baseUrl + route : route
    return fetch(
        url,
        {
            headers: new Headers({
                Authorization: auth,
            })
        }
    )
    .then(response => response.json())
}



export { getApi, postApi }