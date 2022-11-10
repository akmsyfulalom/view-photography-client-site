import React from 'react';
import { useLoaderData } from 'react-router-dom';



const ViewService = () => {


    const viewService = useLoaderData();
    console.log(viewService)




    return (
        <div>

            <h1 className='text-8xl font-bold'>tui jaibe ni</h1>

        </div >
    );
};

export default ViewService;