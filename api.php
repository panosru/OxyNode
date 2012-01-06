<?php

require_once __DIR__.'/silex.phar';

$app = new Silex\Application();

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\ParameterBag;

// definitions
$app['debug'] = true;

//Filters
$app->before(function (Request $request) {
	//if ('application/json' === strstr($request->headers->get('Content-Type'), ';', true)) {
	if (false !== strpos($request->headers->get('Content-Type'), 'application/json')) {
		$data = json_decode($request->getContent(), true);
		$request->request = new ParameterBag(is_array($data) ? $data : array());
	}
});

//Commands
$app->post('/api/user', function (Request $request) {
	$param = $request->get('country');
	print_r($param['title']);
});

$app->put('/api/user', function (Request $request) {
	$param = $request->get('name');
	print_r($param);
});

$app->put('/api/user/{id}', function (Request $request, $id) {
	print_r($id);
});

$app->get('/api/user', function (Request $request) {
	$return = array(
		array(
			'id'			=> 23,
			'name'			=> 'Doe',
			'email_address'	=> 'john@doe.com',
			'country'		=> array('code' => 'en', 'title' => 'USA'),
			'language'		=> array('code' => 'en', 'title' => 'English')
		),
		
		array(
			'id'			=> 25,
			'name'			=> 'Panagiotis',
			'email_address'	=> 'info@aviant.av',
			'country'		=> array('code' => 'el', 'title' => 'Hellas'),
			'language'		=> array('code' => 'gr', 'title' => 'Greek')
		),

		array(
			'id'			=> 24,
			'name'			=> 'John',
			'email_address'	=> 'info@aviant.av',
			'country'		=> array('code' => 'el', 'title' => 'Hellas'),
			'language'		=> array('code' => 'gr', 'title' => 'Greek')
		)
	);
	return new Response(
		json_encode($return),
		200,
		array('Content-Type' => 'application/json')
	);
});

$app->get('/api/user/{id}', function (Request $request, $id) {
	switch ($id) {
		case 23:
			$return = array(
				'id'			=> 23,
				'name'			=> 'Doe',
				'email_address'	=> 'john@doe.com',
				'country'		=> array('code' => 'en', 'title' => 'USA'),
				'language'		=> array('code' => 'en', 'title' => 'English')
			);
			break;
			
		case 24:
			$return = array(
				'name'		=> 'John',
				'country'	=> array('code' => 'el', 'title' => 'Hellas')
			);
			break;
	}
	return new Response(
		json_encode($return),
		200,
		array('Content-Type' => 'application/json')
	);
});

$app->run();