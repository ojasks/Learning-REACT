import React from 'react'
function Card(username,btntext = "visit me"){
    // console.log("props", props);
    console.log(username);
    return(
        <div className="flex flex-col rounded-xl  p-4"
        style={{
          border: '0.88px solid',
  
          backdropFilter: 'saturate(180%) blur(14px)',
          background: ' #ffffff0d',
        }}
      >
        <div>
          <img
            src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
            alt="nft-gif"
            width="400"
            height="400"
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col  rounded-b-xl py-4 ">
          <div className="flex justify-between">
            <h1 className="font-RubikBold ">Bored ape nft accidental</h1>
            <h1>{username}</h1>
            <h1 className="font-bold font-RubikBold">Price {btntext || "visit me"}</h1>
          </div>
          <div className="flex  justify-between font-mono">
            <p>#345</p>
            <p>0.01</p>
          </div>
        </div>
      </div>
    )
}
export default Card 

// visit me being the default value if someone forgets to insert the btntext
// in place what you can do is give the default to this value in start only

// ab iss card waale component ko mai apne app.jsx me load karne ki koshish karta hu
