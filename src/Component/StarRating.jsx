import React, { useState } from "react";
import { FaStar } from "react-icons/fa";


function StarRating() {
  const [rating, setRating] = useState(null);
  return (
    <div>
      {[...Array(5)].map((Star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar classname="star" 
            color={ratingValue <= rating ?"black":"gray"}
            size={50} />
          </label>
        );
      })}
    </div>
  );
}

export default StarRating;
