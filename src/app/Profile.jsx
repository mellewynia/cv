
import React from 'react';

import styles from './Profile.css';

class Profile extends React.Component {

  render() {
    return <aside className="profile">
        <div className="profile-center">
          <div className="profile-left">
            <img src={this.props.profile.image} alt="Melle Wynia" />
            <p>{this.props.profile.tags.join(' ')}</p>
          </div>
          <div className="profile-right">
            <small>{this.props.profile.meta.join(' — ')}</small>
            <ul>
              {this.props.profile.details.map((detail, i) => {
                return <li key={i}>
                  {detail.type}: {detail.content}
                </li>
              })}
            </ul>
            <p>{this.props.profile.intro}</p>
            <p>{this.props.profile.story}</p>
          </div>
        </div>
    </aside>;
  };
}

export default Profile;
