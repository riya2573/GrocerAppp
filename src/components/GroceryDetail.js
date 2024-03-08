import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from "@mui/material";
import { groceryOptions, fetchData } from "../utils/fetchData";
import Detail from './Detail';

const GroceryDetail = () => {
    const [groceryDetail, setGroceryDetail] = useState({});
    const { id } = useParams();
    useEffect(() => {
        const fetchGroceryData = async () => {
            const groceryUrl = `https://real-time-product-search.p.rapidapi.com`;

            const groceryDetailData = await fetchData(`${groceryUrl}/product-details?product_id=${id}&country=in&language=en`,groceryOptions);

            setGroceryDetail(groceryDetailData);
        };
        fetchGroceryData();
    }, [id]);
    return (
        <Box>
            <Detail groceryDetail={groceryDetail} />
        </Box>
    )
   
}

export default GroceryDetail