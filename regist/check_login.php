<?php  
	session_start();
	mysql_connect("localhost","root","");
	mysql_select_db("login_profile_db");
	$strSQL = "SELECT * FROM user WHERE username = '".mysql_real_escape_string($_POST['username'])."'and password = '".mysql_real_escape_string($_POST['password'])."'";
	// echo $strSQL;
	$objQuery = mysql_query($strSQL);
	$objResult = mysql_fetch_array($objQuery);

	if(!$objResult)
	{
			$message = "Username and Password Incorrect!";
			echo "<script type='text/javascript'>alert('$message');window.location = 'index.html';</script>";
	}
	else{
	
			echo "<script type='text/javascript'>localStorage.setItem('firstname','".$objResult['firstname']."');localStorage.setItem('lastname','".$objResult['lastname']."');localStorage.setItem('phone','".$objResult['phone']."');localStorage.setItem('gender','".$objResult['gender']."');localStorage.setItem('email','".$objResult['email']."');localStorage.setItem('id','".$objResult['id']."');localStorage.setItem('address','".$objResult['address']."');localStorage.setItem('img','".$objResult['image_url']."');window.location = 'index.html#profile';</script>";
			 
			session_write_close();
			
	}
	mysql_close();
?>

