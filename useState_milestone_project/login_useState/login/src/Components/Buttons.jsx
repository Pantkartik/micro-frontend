const Button=({likes,setLikes})=>{
    const LikesInc=()=>{
        setLikes(likes+1);
    }
    const LikesDec=()=>{
        if(likes>0){
            setLikes(likes-1);
        }
    }
    return(
        <>
            <button onClick={LikesInc}>Likes</button>
            <button onClick={LikesDec}>Unlike</button>
        </>
    )
}

export default Button;