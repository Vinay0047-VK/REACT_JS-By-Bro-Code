import profilePic from './assets/img_flow.jpg';
function Card(){
    return(
        <div className="card">
            <img className='card-img' src={profilePic} alt="profile-img" />
            
        </div>

    );
}

export default Card;