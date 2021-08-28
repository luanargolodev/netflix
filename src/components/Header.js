import React from 'react';
import './Header.css';

export default () => {
  return(
    <header className="black">
      <div className="header--logo">
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix" />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img src="https://www.demsoc.org/uploads/store/mediaupload/20/image/square_400-DS_Avatar_Emoji_1.png" alt="Perfil" />
        </a>
      </div>
    </header>
  );
}