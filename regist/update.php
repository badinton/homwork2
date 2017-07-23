<?php
	mysql_connect("localhost","root","");
	mysql_select_db("login_profile_db");

		
	$id = $_POST["id"];
	$target = "img/".basename($_FILES['uprub']['name']);
		if (move_uploaded_file($_FILES['uprub']['tmp_name'], $target)) {
			echo "<script type='text/javascript'>localStorage.setItem('img','".$_FILES["uprub"]["name"]."');</script>";

		}
	$strSQL = "UPDATE `user` SET `firstname`='".$_POST["firstname"]."',`lastname`='".$_POST["lastname"]."',`email`='".$_POST["email"]."',`phone`='".$_POST["phone"]."',`gender`='".$_POST["gender"]."',`image_url`='".$_FILES["uprub"]["name"]."' WHERE id = ".$id."";
	$objQuery = mysql_query($strSQL);	
	$message = "Edit Completed!";
	echo "<script type='text/javascript'>alert('$message');localStorage.setItem('firstname','".$_POST["firstname"]."');localStorage.setItem('lastname','".$_POST["lastname"]."');localStorage.setItem('address','".$_POST["address"]."');localStorage.setItem('email','".$_POST["email"]."');localStorage.setItem('phone','".$_POST["phone"]."');window.location = 'index.html#profile';</script>";

		
	mysql_close();
?>