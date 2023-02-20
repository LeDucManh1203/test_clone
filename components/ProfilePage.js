import React from 'react'

const ProfilePage = () => {
    return `
    <div class="profile-page">
    <div class="wrapper">
      <div class="page-header page-header-small" filter-color="green">
        <div class="page-header-image" data-parallax="true" style="background-image: url('images/cc-bg-1.jpg')">
        </div>
        <div class="container">
          <div class="content-center">
            <div class="cc-profile-image"><a href="#"><img src="images/anhthe1.jpg" alt="Image" /></a></div>
            <div class="h2 title">Lê Đức Mạnh</div>
            <p class="category text-white m-5">Web Developer</p>
          </div>
        </div>
        <div class="section">
          <div class="container">
            <div class="button-container"><a class="btn btn-primary btn-round btn-lg btn-icon" href="#"
                rel="tooltip" title="Follow me on Facebook"><i class="fa fa-facebook"></i></a><a
                class="btn btn-primary btn-round btn-lg btn-icon" href="#" rel="tooltip"
                title="Follow me on Twitter"><i class="fa fa-twitter"></i></a><a
                class="btn btn-primary btn-round btn-lg btn-icon" href="#" rel="tooltip"
                title="Follow me on Google+"><i class="fa fa-google-plus"></i></a><a
                class="btn btn-primary btn-round btn-lg btn-icon" href="#" rel="tooltip"
                title="Follow me on Instagram"><i class="fa fa-instagram"></i></a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
};

export default ProfilePage;