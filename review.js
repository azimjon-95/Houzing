// 1-dars
// ➤ Project Yasash
// ➤ Projectni strukturalash (pattern)
// ➤ react-router-dom@6 ni konfiguratsiya qilish
// ➤ Generic Navbar yasash
// ➤ useID()
// ➤ Netlify ga deploy qilishni o'rganasiz

// 2-dars
// ➤ Netlify auto deploy via github branch
// ➤ Generic components yasash -> Button, Input
// ➤ Signin Singup pages
// ➤ Hidden page larni routeda konfiguratsiya qilish
// ➤ Filter menu
// ➤ Antd orqali dropdown menu yasash
// ➤ forwardRef()

// 3-dars
// ➤ Carousel
// ➤ Generic House Card
//

// 4-dars
// https
// costum hooks
// useHttps

// BUG FIX
// 1440px bug fixed
// Carousel height fixed
// lazy load
// place to center
// Change flex to grid
























// import { useNavigate } from "react-router-dom";
// const { REACT_APP_BASE_URL} = process.env;

// export const useRequest = () =>{
//     const navigate = useNavigate()
//     const request = async ({
//         url,
//         method = 'GET',
//         body,
//         token,
//         headers = {},
//     })=>{
//         headers['Content-Type'] = 'application/json';
//         if (token) headers.Authorization = `Bearer ${token}`;
        
//         return fetch(`${REACT_APP_BASE_URL}${url}`,{
//             method,
//             headers,
//             body: JSON.stringify(body),
//         })
//         .then((res)=> res.json())
//         .then((res)=> {
//             if(res){
//                 navigate('/singin')
//             }else return res;
//         })

//     }
//     return request;
// }

// export default useRequest;