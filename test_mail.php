<?php
echo phpinfo();

// the message
$msg = "test mail test mail test mail ";

// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);

// send email
if( mail("datahernandez@gmail.com","test mail ",$msg))
{
	echo 'Sucusses';
}
else
{
	echo 'Error';
}

//HXINN#RKf7%~
?> 