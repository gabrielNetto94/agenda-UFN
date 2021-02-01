import React, { useState, useEffect } from 'react';

function Position(props) {

    const [latitude,setLatitude] = useState();
    const [longitude,setlongitude] = useState();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setLatitude(latitude);
            setlongitude(longitude);

        }, (err) => {
            console.log(err);
        }, {
            timeout: 30000,
        });
    }, []);

    return (
        <>
            <h4>LAT: {latitude}</h4>
            <h4>LONG: {longitude}</h4>
        </>
    );
}

export default Position;
