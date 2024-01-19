import React, { useState, useEffect } from 'react';

const RatingBadge = ({ review , fromOverAllRating ,overallRating}) => {
    const [bgColor, setBgColor] = useState('');

console.log(overallRating);
    useEffect(() => {
        // Use a switch statement to set bgColor based on review.rating
       if(review){
        switch (review.rating) {
            case 0:
                setBgColor('gray')
                break;
            case 1:
                setBgColor('red');
                break;
            case 2:
                setBgColor('rgb(255, 174, 0)');
                break;
            case 3:
                setBgColor('orange');
                break;
            default:
                setBgColor('green');
        }
       }
    }, [bgColor]); // Only re-run the effect if review.rating changes

    if(fromOverAllRating){
        return <span className={`px-2 mr-2 bg-${bgColor}-600 rounded-full`}>{overallRating} ★ </span>
    }
    return (
        <>
        {review.rating === 0 ? <span className={`px-2 mr-2 rounded-full`} style={{backgroundColor: 'gray'}}>No rating</span> :
            <span className={`px-2 mr-2 rounded-full`}
                style={{backgroundColor: `${bgColor}` }}
            >{review.rating} ★ </span>
        }
        </>
    );
};

export default RatingBadge;
