
### Server runing on
 http://localhost:3000

* status 200
```
{
    "status": 200,
    "msg": "SERVER HOME PAGE..."
}
```
---
#### movies get 
 http://localhost:3000/api/movies 
 * status 200
 ```
{
    "status": "ok",
    "msg": "Get all tvshows list",
    "data": [
          {
            "id": 3,
            "title": "as",
            "description": "afasfs",
            "img_url": "imgU11",
            "thumbnail_url": "thumbU11",
            "year": 2020,
            "genreid": 4,
            "rating": 6,
            "created_at": "2024-12-15T11:43:01.150Z",
            "updated_at": "2024-12-15T11:43:01.150Z"
            }...
        ]
},
 ```
* status 500
```
{ status: 'err', 
msg: "Can't get movies data" }
```

#### movies post
http://localhost:3000/api/movies 
* status 200

```
{
    "status": "ok",
    "msg": "Create movie success",
    "data": {
        "title": "reer1",
        "description": "sferfer1",
        "img_url": "asfas1",
        "thumbnail_url": "asfasf1",
        "year": 2025,
        "genreid": 1,
        "rating": 3
    }
}
```
* status 409
```
{
    "status": "err",
    "msg": "field cannot be empty"
}

{
    "status": "err",
    "msg": "year must be number, year must be 1888-2025 digits"
}

{
    "status": "err",
    "msg": "wrong genre"
}

{
    "status": "err",
    "msg": "rating must be number from 1-10"
}

```
#### movies put
http://localhost:3000/api/movies/:id

* status 404
```
{
    status:'err',
    msg:'movie not found'
}
```
* status 200
```
{
    status:'ok',
    msg:'movie updated success'
}
```
#### movies delete
http://localhost:3000/api/movies/:id

* status 200
```
{
    status:'ok',
    msg:'movie deleted success'
}
```
* status 400
```
{
    status:'err', 
    msg:'movie cannot be deleted' 
}
```

---

#### tvshows get 
 http://localhost:3000/api/tvshows 
 * status 200
 ```
{
    "status": "ok",
    "msg": "Get all tvshows list",
    "data": [
          {
            "id": 3,
            "title": "as",
            "description": "afasfs",
            "img_url": "imgU11",
            "thumbnail_url": "thumbU11",
            "year": 2020,
            "genreid": 4,
            "rating": 6,
            "created_at": "2024-12-15T11:43:01.150Z",
            "updated_at": "2024-12-15T11:43:01.150Z"
            }...
        ]
},
 ```

* status 500
```
{ status: 'err', 
msg: "Can't get tvshows data" }
```

#### tvshows post
http://localhost:3000/api/tvshows 
* status 200

```
{
    "status": "ok",
    "msg": "Create tvshow success",
    "data": {
        "title": "reer1",
        "description": "sferfer1",
        "img_url": "asfas1",
        "thumbnail_url": "asfasf1",
        "year": 2025,
        "genreid": 1,
        "rating": 3
    }
}
```
* status 409
```
{
    "status": "err",
    "msg": "field cannot be empty"
}

{
    "status": "err",
    "msg": "year must be number, year must be 1888-2025 digits"
}

{
    "status": "err",
    "msg": "wrong genre"
}

{
    "status": "err",
    "msg": "rating must be number from 1-10"
}

```
#### tvshow put
http://localhost:3000/api/tvshows/:id

* status 404
```
{
    status:'err',
    msg:'tvshow not found'
}
```
* status 200
```
{
    status:'ok',
    msg:'tvshow updated success'
}
```
#### tvshow delete
http://localhost:3000/api/tvshows/:id

* status 200
```
{
    status:'ok',
    msg:'tvshow deleted success'
}
```
* status 400
```
{
    status:'err', 
    msg:'movie cannot be deleted' 
}
```


