<?php

session_start();

$errors = [
    'loginn_error' => $_SESSION['login_error'] ?? '',
    'register_error' => $_SESSION['register_error'] ?? '',
];
$activeForm = $_SESSION['active_form'] ?? 'login';

session_unset();

function showError($error) {
   return !empty($error) ? "<p class='error-message'>$error</p>" : "";
}

function isActiveForm($formName, $activeForm) {
  return $formName === $activeForm ? 'active' : '';
}

?>

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Website</title>
    <link rel="stylesheet" href="styles.css" type="text/css" />
    <link
      href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
      rel="stylesheet"
    />
  </head>
  <body class="index-page">
    <div id="aboutPage" class="about-page">
      <div class="about-content">
        <h2>About Game Cube</h2>
        <p>
          Game Cube is a modern, interactive game search UI designed to help
          players quickly find information about their favorite video games.
          With a clean, retro-inspired interface, users can browse through an
          extensive library of games spanning genres from RPGs and strategy
          titles to action and racing adventures.
        </p>

        <p>
          The platform offers a live search feature that instantly filters games
          as you type, making it easy to discover new favorites or locate
          specific titles. Its minimalistic design, inspired by classic gaming
          aesthetics, provides a nostalgic experience while maintaining modern
          usability standards.
        </p>

        <p>
          Whether you're a casual gamer looking for your next play session or a
          hardcore enthusiast keeping track of the latest releases, Game Cube
          combines simplicity, speed, and style to bring you a seamless way to
          explore the gaming world. Dive in and start exploring your favorite
          games today!
        </p>
      </div>
    </div>

    <div class="top-bar" id="topBar">
      <div class="title"><h1>GAME CUBE</h1></div>
      <div class="right-section">
      <div class="login">
        <div class="log-in"><a href="#" id="loginBtn">login</a></div>
        <div class="sign-up"><a href="#" id="signupBtn">/ sign up</a></div>
      </div>
      <div class="menuBTN">
        <div class="circle small" id="menuBtn">☰</div>
      </div>
    </div>
  </div>

    <div class="main-container" id="mainContainer">
      <div class="fronttext">
        <img
          src="img/game_cube_pixel_text-removebg-preview.png"
          id="frontText"
          alt="GAME CUBE"
        />
      </div>
        <div id="resultContainer" class="resultContainer"></div>

      <div class="search-container" id="searchContainer">
        <input type="text" placeholder="Search..." id="searchBar" />
      </div>
    </div>
    
  <div class="form-box <?= isActiveForm('login', $activeForm); ?>" id="login-form">
    <form action="login_register.php" method="post">
      <button type="button" class="close-btn">&times;</button>
      <h2>Login</h2>
      <?= showError($errors['login']); ?>
      <input type="text" placeholder="Username" id="loginUsername" />
      <input type="email" placeholder="Email" id="loginEmail" />
      <input type="password" placeholder="Password" id="loginPassword" />
      <button type="submit" id="loginSubmit">Login</button>
      <p>Don't have an account? <a href="#" id="signupLink">Sign up</a> </p>
    </form>
  </div>
 
    <div class="form-box" id="signup-form">
      <form action="login_register.php" method="post">
        <button type="button" class="close-btn">&times;</button>
        <h2>Sign Up</h2>
        <?= showError($errors['signup']); ?>
        <input type="text" placeholder="Username" id="signupUsername" />
        <input type="email" placeholder="Email" id="signupEmail" />
        <input type="password" placeholder="Password" id="signupPassword" />
        <button type="submit" id="signupSubmit">Sign Up</button>
        <p>Already have an account? <a href="#" id="loginLink">Login</a> </p>
      </form>

    </div>
    <div id="commentBar">
      <input type="text" id="commentInput" placeholder="Write a comment..." />
    </div>

    <div class="footer">
      <div class="bottom-bar" id="bottomBar">
        <div class="circle large active-circle" id="homeBtn">🏠</div>
        <div class="circle small" id="mainCircle">🔍</div>
        <div class="circle small" id="aboutBtn">⚠</div>
        <div class="circle small" id="commentBtn">💬</div>
      </div>
    </div>
    <script src="script.js" type="text/javascript"></script>
  </body>
</html>
