# Introduction

This is the backend for team Functional Expressionism's orbital project.

# Installation Guide

1. Clone this repo.
2. Navigate into the root directory.
3. Run `npm install` or `yarn` to install dependencies
4. Run `npm start` or `yarn start` to start the server.

# API

### `GET: /locations`
Returns an array of location objects in NUS

Usage:
`functional-expressionism-api.herokuapp.com/locations`
<details>
<summary>
    Sample Response:
</summary>

```
[
    {
        "locationDesc": null,
        "rating": null,
        "_id": "60d8b3f874a7da3964d89608",
        "locationName": "Fine Food",
        "locationCoords": {
            "lat": 1.3039243264208893,
            "lon": 103.77358221163944
        },
        "locationImage": "https://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Fine-Food-1-1024x684.jpg"
    },
    {
        "locationDesc": null,
        "rating": null,
        "_id": "60d8b3f874a7da3964d89609",
        "locationName": "Yusof Ishak House",
        "locationCoords": {
            "lat": 1.2980876775587555,
            "lon": 103.77357597666753
        },
        "locationImage": "https://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Central-Square-Edited-1024x684.jpg"
    },
    ...//more location objects
]
```
</details>

### `GET: /locations/{LocationID}` 

Returns details of a particular location.

Usage:

`functional-expressionism-api.herokuapp.com/locations/60d8b3f874a7da3964d89608`
<details>
<summary>
Sample Response:
</summary>

```
[
    {
        "locationDesc": null,
        "rating": null,
        "_id": "60d8b3f874a7da3964d89608",
        "locationName": "Fine Food",
        "locationCoords": {
            "lat": 1.3039243264208893,
            "lon": 103.77358221163944
        },
        "locationImage": "https://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Fine-Food-1-1024x684.jpg"
    }
]
```
</details>


### `GET: /locations/{LocationID}/stalls` 

Returns a list of stalls at the location

Query options:
Option|Default| Description
---------|--------|------------
`verbose`| true | if true, return the full details of each stall, else return just the stall's ID

Usage: 
`functional-expressionism-api.herokuapp.com/locations/60d8b3f874a7da3964d89608/stalls/?verbose=false`
<details>
<summary>
Sample Response:
</summary>

With `verbose=true`:
```
[
    {
        "stallImage": ["https://i.imgur.com/k7mENNo.jpg"],
        "menuImage": ["https://i.imgur.com/SG57G3o.jpg"],
        "isHalal": false,
        "rating": null,
        "_id": "60d8b3f874a7da3964d8960e",
        "stallName": "Taiwan Cuisine",
        "location": "60d8b3f874a7da3964d89608"
    },
    {
        "stallImage": ["https://i.imgur.com/agPUJwn.jpg"],
        "menuImage": [
            "https://i.imgur.com/x3NOHwv.jpg",
            "https://i.imgur.com/IJ2Pmfx.jpg"
        ],
        "isHalal": false,
        "rating": null,
        "_id": "60d8b3f874a7da3964d89613",
        "stallName": "Five Grains Bee Hoon",
        "location": "60d8b3f874a7da3964d89608"
    },
    //... more stall objects
]
```
With `verbose=false`
```
[
    {
        "_id": "60d8b3f874a7da3964d8960e"
    },
    {
        "_id": "60d8b3f874a7da3964d8960f"
    },
    {
        "_id": "60d8b3f874a7da3964d89610"
    },
    {
        "_id": "60d8b3f874a7da3964d89611"
    },
    {
        "_id": "60d8b3f874a7da3964d89612"
    },
    {
        "_id": "60d8b3f874a7da3964d89613"
    },
    {
        "_id": "60d8b3f874a7da3964d89614"
    }
]
```
</details>

### `GET: /stalls/{stallID}`
Returns the details about a particular stall.

Usage: 
`functional-expressionism-api.herokuapp.com/stalls/60d8b3f874a7da3964d89608`

<details>
<summary>
Sample Response:
</summary>

```
[
    {
        "stallImage": [
            "https://i.imgur.com/k7mENNo.jpg"
        ],
        "menuImage": [
            "https://i.imgur.com/SG57G3o.jpg"
        ],
        "isHalal": false,
        "rating": null,
        "_id": "60d8b3f874a7da3964d8960e",
        "stallName": "Taiwan Cuisine",
        "location": "60d8b3f874a7da3964d89608",
        "__v": 0
    }
]
```
</details>

### `GET: /stalls/{stallID}/menu` 

Returns the menu at a particular stall

Query options:
Option|Default| Description
---------|--------|------------
`verbose`| true | if true, return the full details of each dish in the menu, else return just the dish's ID

Usage:

`functional-expressionism-api.herokuapp.com/stalls/60d8b3f874a7da3964d8960e/menu/?verbose=false`

<details>
<summary>
Sample Response:
</summary>

With `verbose=true`:
```
[
    {
        "_id": "60d8b3f874a7da3964d89643",
        "name": "Salted Crispy Chicken",
        "price": {
            "small": 3,
            "medium": 4,
            "large": 5
        },
        "displayImage": null,
        "rating": null,
        "desc": null,
        "stall": "60d8b3f874a7da3964d8960e"
    },
    {
        "_id": "60d8b3f874a7da3964d89642",
        "name": "X-Large Chicken Chop",
        "price": {
            "public": 4
        },
        "displayImage": null,
        "rating": null,
        "desc": null,
        "stall": "60d8b3f874a7da3964d8960e"
    },
    //... more dish objects
]
```
With `verbose=false`
```
[
    {
        "_id": "60d8b3f874a7da3964d8960e"
    },
    {
        "_id": "60d8b3f874a7da3964d8960f"
    },
    {
        "_id": "60d8b3f874a7da3964d89610"
    },
    {
        "_id": "60d8b3f874a7da3964d89611"
    },
    {
        "_id": "60d8b3f874a7da3964d89612"
    },
    {
        "_id": "60d8b3f874a7da3964d89613"
    },
    {
        "_id": "60d8b3f874a7da3964d89614"
    }
]
```
</details>


### `GET: /dishes/random`

Returns a random array of dishes.

Query options:
Option|Default| Description
---------|--------|------------
`verbose`| true | if true, return the full details of each dish, else return just the dish's ID
`number`| 5 | The number of dishes to return in the array, accepts any integer between 1 - 30

Usage:

`functional-expressionism-api.herokuapp.com/dishes/random/?number=2&verbose=false`

<details>
<summary>
Sample Response:
</summary>

With `verbose=true`:
```
[
    {
        "_id": "60d8b3f874a7da3964d89648",
        "name": "Crispy Sweet Potato Fries",
        "price": {
            "public": 2.5
        },
        "displayImage": null,
        "rating": null,
        "desc": null,
        "stall": [
            {
                "_id": "60d8b3f874a7da3964d8960e",
                "stallImage": [
                    "https://i.imgur.com/k7mENNo.jpg"
                ],
                "menuImage": [
                    "https://i.imgur.com/SG57G3o.jpg"
                ],
                "rating": null,
                "stallName": "Taiwan Cuisine",
                "location": "60d8b3f874a7da3964d89608",
                "__v": 0
            }
        ]
    },
    {
        "_id": "60d8b3f874a7da3964d8961d",
        "name": "Char Siew & Roasted Pork Rice",
        "price": {
            "student": 4.5,
            "public": 5.5
        },
        "displayImage": null,
        "rating": null,
        "desc": null,
        "stall": [
            {
                "_id": "60d8b3f874a7da3964d8960f",
                "stallImage": [
                    "https://i.imgur.com/GhxA9Ds.jpg"
                ],
                "menuImage": [
                    "https://i.imgur.com/qC7nzgF.jpg"
                ],
                "rating": null,
                "stallName": "Duck and Chicken Rice",
                "location": "60d8b3f874a7da3964d89608",
                "__v": 0
            }
        ]
    },
]
```
</details>
