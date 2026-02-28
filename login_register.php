<?php

session_start();
require_once 'config.php';

if (isset($_POST['signupSubmit'])) {
    $name = $_POST['loginUsername'];
    $email = $_POST['loginEmail'];
    $password = password_hash($_POST['loginPassword'], PASSWORD_DEFAULT);

    $checkEmail = $conn->query("SELECT email FROM users WHERE email='$email'");
    if ($checkEmail->num_rows > 0) {
          $_SESSION['register_error'] = "Email already exists!";
          $_SESSION['active_form'] = 'signup';
    } else {
        $conn->query("INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$password')");
    }

    header("Location: index.php");
    exit();
}

if (isset($_POST['loginSubmit'])) {
    $email = $_POST['loginEmail'];
    $password = $_POST['loginPassword'];

    $result = $conn->query("SELECT * FROM users WHERE email='$email'");
    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        if (password_verify($password, $user['password'])) {
            $_SESSION['named'] = $user['name'];
            $_SESSION['email'] = $user['email'];
            header("Location: index.php");
            exit();
            
        } else {
            $_SESSION['login_error'] = "Invalid password!";
            $_SESSION['active_form'] = 'login';
        }
    } else {
        $_SESSION['login_error'] = "Email not found!";
        $_SESSION['active_form'] = 'login';
    }

    header("Location: index.php");
    exit();
}
?>







