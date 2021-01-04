/*import React, { useState, useEffect } from 'react';
import axios from 'axios';


function MatchCards (props) {
    const [profile, setProfile] = useState ([]);

    

   useEffect(() => {

       axios
       .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:ruth-mendes/person`)
       .then((response) => {
           setProfile(response.data.profile);
       })
       .catch((error) =>{
           console.log(error);
   })
       }, []);

    return(
        <div>
            {profile.map((people) => {
                return (
                    <div>
                        <p>{people.age}</p>
                        <p>{people.name}</p>
                        <p>{people.photo}</p>
                        <p>{people.bio}</p>

                    </div>
                );
            }
            )}
        </div>
    )
    


}
export default MatchCards; */