<?php

namespace SIMONKOEHLER\Slug\Domain\Repository;

interface GenericRepositoryInterface {

    /**
     * @param string $object
     * @param string $id
     * @param array $routeFieldResultNames
     * @param string $routeFieldResult
     * @return string
     */
    public static function getRouteFieldResult(string $object, string $id, array $routeFieldResultNames, string $routeFieldResult): string;

}