import React, { useState } from 'react';
export default function Like() {
   const [like, setLike] = useState(0);
   return (
      <button onClick={() => setLike(like + 1)}>
         {like} Likes
      </button>
   );
}