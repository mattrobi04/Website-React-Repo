// import profilePic from './assets/EnterpriseWorkdayPicture.jpg'


function Card() {

    return(
        <div className="card">
            {/* <img src={profilePic} alt="profile picture"></img> */}
            <img className="card-image" src="https://via.placeholder.com/150" alt="profile picture"></img>
            <h2 className="card-title">Matthew's React</h2>
            <p className="card-text">I am studying Computer Science and enjoy watching sports</p>
        </div>
    );

}

export default Card;