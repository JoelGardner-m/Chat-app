import React from 'react';

export function SettingWidget(props) {
  const backtoprofile_page = props.profilepage;



  return (<>
    <div>
      <button style={{ borderRadius: 50, backgroundColor: '#469846' }} onClick={() => backtoprofile_page('profile')}> <img src='' alt="ProfilePage" /> </button>
      <div style={{ background: 'white', borderRadius: 50, padding: 20, marginLeft: 50, display: 'flex', justifyContent: 'center', justifyItems: 'center' }}>

        <form action="/api/updateSettings" method="post">

          <label htmlFor="profilePicture">Profile Picture:</label>
          <input style={{ marginLeft: 5, marginBottom: 10 }} type="file" name="profilePicture" id="profilePicture" />
          <br />
          <label htmlFor="status">status:</label>
          <input style={{ marginLeft: 5, marginBottom: 10 }} type="checkbox" name="status" id="status" />
          <br />
          <label htmlFor="username">username:</label>
          <input style={{ marginLeft: 5, marginBottom: 10 }} type="text" name="username" id="username" />
          <br />
          <label htmlFor="email">email:</label>
          <input style={{ marginLeft: 5, marginBottom: 10 }} type="text" name="email" id="email" />
          <br />
          <label htmlFor="password">password:</label>
          <input style={{ marginLeft: 5, marginBottom: 10 }} type="text" name="password" id="password" />
          <br />
          <label htmlFor="bio">bio:</label>
          <textarea style={{ marginLeft: 5, marginBottom: 10, height: 100, width: 300, textAlign: 'start', resize: 'none' }} name="bio" id="bio" />
          <br />

          <label htmlFor="findablity">Findability:</label>
          <input style={{ marginLeft: 5, marginBottom: 20 }} type="checkbox" name="findablity" id="findablity" />
          <br />
          <label htmlFor="interest">Interest:</label>
          <input style={{ marginLeft: 5, marginBottom: 5 }} type="text" name="interest" id="interest" />
          <br />
          <label htmlFor="hobby">Hobby:</label>
          <input style={{ marginLeft: 5, marginBottom: 5 }} type="text" name="hobby" id="hobby" />
          <br />
          <label htmlFor="profession">Profession:</label>
          <input style={{ marginLeft: 5, marginBottom: 20 }} type="text" name="profession" id="profession" />
          <br />
          <label htmlFor="backgroundColor">Background Color:</label>
          <input style={{ marginLeft: 5, marginBottom: 20 }} type="color" name="backgroundColor" id="backgroundColor" />
          <br />

          <button type="submit">submit</button>

        </form>



      </div>



    </div>

  </>


  );
}
