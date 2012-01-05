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

$app->run();