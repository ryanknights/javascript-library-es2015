<?php
	if ($_SERVER['REQUEST_METHOD'] === 'POST')
	{
		$result = ['post' => true];

		foreach ($_POST as $key => $value)
		{
			$result[$key] = $value;
		}

		echo json_encode($result);
		exit;
	}

	if ($_SERVER['REQUEST_METHOD'] === 'GET')
	{
		$result = ['get' => true];

		foreach ($_GET as $key => $value)
		{
			$result[$key] = $value;
		}

		echo json_encode($result);
		exit;		
	}
?>