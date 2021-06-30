<?php

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptConstants(
    '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:slug/Configuration/TypoScript/constants.ts">'
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptSetup(
    '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:slug/Configuration/TypoScript/setup.ts">'
);

$GLOBALS['TYPO3_CONF_VARS']['SYS']['routing']['aspects']['GenericMapper'] =
    \SIMONKOEHLER\Slug\Routing\Aspect\GenericMapper::class;
