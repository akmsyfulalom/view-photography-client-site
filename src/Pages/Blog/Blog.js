import React from 'react';
import useTitle from '../../Hooks/Hooks';

const Blog = () => {
    useTitle('Blog')
    return (
        <div>
            <div className='text-center my-20'>
                <h3 className='text-5xl font-bold text-red-200'>Blog's</h3>
                <p className='text-xl font-bold my-5'>View Photographer</p>
            </div>
            <div className='grid grid-cols-6 gap-4'>
                <div className='col-start-2 col-span-4 bg-slate-700 p-5 rounded-md shadow-md'>
                    <h1 className='text-xl font-bold'>1. Difference between SQL and NoSQL?</h1>
                    <p><span className='font-bold'>Ans:</span> SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL</p>
                </div>
                <div className='col-start-2 col-span-4 bg-slate-700 p-5 rounded-md shadow-md'>
                    <h1 className='text-xl font-bold'>2. What is JWT, and how does it work?</h1>
                    <p><span className='font-bold'>Ans:</span> What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). </p>
                </div>
                <div className='col-start-2 col-span-4 bg-slate-700 p-5 rounded-md shadow-md'>
                    <h1 className='text-xl font-bold'>3. What is the difference between javascript and NodeJS?</h1>
                    <p><span className='font-bold'>Ans:</span> JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
                </div>
                <div className='col-start-2 col-span-4 bg-slate-700 p-5 rounded-md shadow-md'>
                    <h1 className='text-xl font-bold'>4. How does NodeJS handle multiple requests at the same time?</h1>
                    <p><span className='font-bold'>Ans:</span> How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;