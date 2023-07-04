import React from "react";

export default function UserProfile({ imageUrl }) {
  return (
    <div>
      <img
        src={imageUrl || "/images/profile.jpg"}
        alt='User Profile'
        className='rounded-full h-28 w-28 border-4 border-gray-200'
      />
    </div>
  );
}
