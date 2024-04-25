import { useEffect, useState } from "react";
import useAxios from "../useAxios/useAxios";

const useManue = () => {
    const [ manue, setManue ] = useState([]);
    const axiosSecure = useAxios();
    const url = '/getManues';

    useEffect( () => {
        axiosSecure.get(url)
            .then(res => setManue(res.data))
    }, [axiosSecure, url])

    return manue;
};

export default useManue;