<?php

$EM_CONF[$_EXTKEY] = [
    'title' => 'Slug',
    'description' => 'Helps managing the URL slugs of your TYPO3 pages and custom records!',
    'category' => 'module',
    'author' => 'Simon Köhler',
    'author_email' => 'info@simon-koehler.com',
    'company' => 'simon-koehler.com',
    'state' => 'stable',
    'clearCacheOnLoad' => true,
    'version' => '2.0.2',
    'constraints' => [
        'depends' => [
            'typo3' => '9.5.0-10.4.99',
        ],
        'conflicts' => [],
        'suggests' => [],
    ],
];
