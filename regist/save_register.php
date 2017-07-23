<?php
	mysql_connect("localhost","root","");
	mysql_select_db("login_profile_db");

	$strSQL = "SELECT * FROM user WHERE username = '".trim($_POST['username'])."' ";
	$objQuery = mysql_query($strSQL);
	$objResult = mysql_fetch_array($objQuery);
	if($objResult)
	{		$message = "Username already exists";
			echo "<script type='text/javascript'>alert('$message');window.location = 'index.html#regist';</script>";
	}
	else
	{	$target = "img/".basename($_FILES['uprub']['name']);
		if (move_uploaded_file($_FILES['uprub']['tmp_name'], $target)) {
			
		}
		$strSQL = "INSERT INTO user (username,password,firstname,lastname,email,phone,address,gender,image_url) VALUES ('".$_POST["username"]."', 
		'".$_POST["password"]."','".$_POST["firstname"]."','".$_POST["lastname"]."','".$_POST["email"]."','".$_POST["phone"]."','".$_POST["address"]."','".$_POST["gender"]."','".$_FILES["uprub"]['name']."')";
		$objQuery = mysql_query($strSQL);
		$message = "Register Completed!";
		echo "<script type='text/javascript'>alert('$message');window.location = 'index.html';</script>";
			
	}
	mysql_close();
?>