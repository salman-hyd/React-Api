import axios from "axios";
import React, { useEffect, useState } from 'react';

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});


//get method
export const getPOST = () =>{
    return api.get('/posts');
}
//postapi.jsx