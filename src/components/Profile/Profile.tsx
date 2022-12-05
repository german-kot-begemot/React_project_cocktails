import React from 'react';
import './Profile.scss';

const Profile = () => {
  return (
    <div className="profile-content">
      <div className="profile-top-pic">
        <img src="images/whisky-3638148_960_720.jpg" alt="" />
      </div>

      <div className="cocktail">
        <div className="cocktail-pic">
          <img src="images/cuba-libre-1184268_960_720.jpg" alt="" />
        </div>
        <div className="cocktail-description">
          <h2>Cuba Libre</h2>
          <ul>
            <li>5 cl of white rum</li>
            <li>10 cl of cola (not Coke)</li>
            <li>1 cl of lime juice</li>
            <li>lime wedge</li>
          </ul>
          <p>
            The recipe is basic and the drink is prepared directly in a highball
            glass, so you won’t need any particular equipment or skill. Squeeze
            a lime and strain juice. Fill a glass with ice and pour rum and lime
            juice. Add cola, cut a wedge of lime, decorate with a slice.
          </p>
        </div>
      </div>

      <div className="сomments">
        <h2>Comments</h2>
        <label>
          <input type="textarea"></input>
          <button>Send</button>
        </label>
        <div>Klingt gut!</div>
      </div>
    </div>
  );
};

export default Profile;
