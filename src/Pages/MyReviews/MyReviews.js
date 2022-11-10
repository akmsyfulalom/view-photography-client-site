import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email$${user.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data));
    }, [user?.email])
    return (
        <div>

        </div>
    );
};

export default MyReviews;