<?php
	$result = [];

	foreach ($_POST as $key => $value)
	{
		$result[$key] = $value;
	}

	echo json_encode($_POST);
	exit;
?>