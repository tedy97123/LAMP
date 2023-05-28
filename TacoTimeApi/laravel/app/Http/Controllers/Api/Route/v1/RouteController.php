<?php

namespace App\Http\Controllers\Api\Route\v1;

use App\Http\Controllers\Controller;
use App\Models\Route;
use Illuminate\Http\Request;

class RouteController extends Controller
{
    /**
     * Display a listing of the resource.

     */

    /**
     * Store a newly created resource in storage.
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        try {
            $route = new Route;

            $route->name = $request->get('name');
            $route->from = $request->get('from');
            $route->To = $request->get('To');
            $route->range = $request->get('range');
            $route->distance= $request->get('distance');

            $route->save();

            return response()->json([ 'message' => 'Route created successfully','route' => $route], 201); //201 = created

        } catch (\Exception $e) {
            return response()->json(['error' => 'Error getting routes' ], 400);
        }

    }

    /**
     * Display the specified resource.
     */
    public function show(Route $route)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Route $route)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Route $route)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Route $route)
    {
        //
    }
}
