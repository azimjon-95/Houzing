const { REACT_APP_BASE_URL} = process.env;

export const useRequest = () =>{
    const request = async ({
        url,
        method = 'GET',
        body,
        token,
        headers = {},
    })=>{
        console.log(url,
            method,
            body,
            token,
            headers,)
        headers['Content-Type'] = 'application/json';
        if (token) headers.Authorization = `Bearer ${token}`;
        
        return fetch(`${REACT_APP_BASE_URL}${url}`,{
            method,
            headers,
            body: JSON.stringify(body),
        })
        .then((res)=> res.json())
        .then((res)=> {
            console.log(res);
            return res;
        })

    }
    return request;
}

export default useRequest;