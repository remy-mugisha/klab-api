const getAllBlogs = {
    tags:['Blog'],
    description:"List all Blogs",
    responses:{
        200:{
            description:"OK",
            content:{
                 "application/json":{
                    type:'object',
                    example:{
                        status:"success",
                        data:[]
                    }
                 }
            }
        }
    }
}

const getBlogById = {
    tags:['Blog'],
    description:"Get blog by id",
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of the blog",
            type:"string",
            example:"63caaf3527b29e1d399896da"
        }
    ],
    responses:{
        200:{
            description:"OK",
            content:{
                 "application/json":{
                    type:'object',
                    example:{
                        status:"success",
                        data:[]
                    }
                 }
            }
        }
    }
}

const createBlog = {
    tags:['Blog'],
    description:"Create a Blog post",
    requestBody:{
        content:{
            "multipart/form-data":{
                schema:{
                    type:"object",
                    properties:{
                        title:{
                            type:"string",
                        },
                        desc:{
                            type:"string",
                        },
                        image:{
                            type:"file",
                            description:"the image of the blog post"
                        }
                    }
                }
            }
        }
    },
    security: [
        {
          token: [],
        },
      ],
    responses:{
        201:{
            description:"OK",
            content:{
                "application/json":{
                    type:"object",
                    example:{
                        status:"success",
                        data:[]
                    }
                }
            }
        }
    }
}

const deleteBlog = {
    tags:['Blog'],
    description:"Delete the blog post by id",
    security: [
        {
          token: [],
        },
      ],
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of the blog",
            type:"string"
        }
    ],

    responses:{
        200:{
            description:"OK",
            content:{
                 "application/json":{
                    type:'object',
                    example:{
                        status:"success",
                        data:[]
                    }
                 }
            }
        }
    }
}

const updateBlog = {
    tags:['Blog'],
    description:"Update a Blog post",
    security: [
        {
          token: [],
        },
      ],
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of the blog",
            type:"string"
        }
    ],
    requestBody:{
        content:{
            "multipart/form-data":{
                schema:{
                    type:"object",
                    properties:{
                        title:{
                            type:"string",
                        },
                        desc:{
                            type:"string",
                        },
                        image:{
                            type:"file",
                            description:"the image of the blog post"
                        }
                    }
                }
            }
        }
    },
    security: [
        {
          token: [],
        },
      ],
    responses:{
        201:{
            description:"OK",
            content:{
                "application/json":{
                    type:"object",
                    example:{
                        status:"success",
                        data:[]
                    }
                }
            }
        }
    }
}

 const blogRouteDocs = {
    "/api/blog":{
        get:getAllBlogs
    },
    "/api/blog/{id}":{
        get:getBlogById
    },
    "/api/blog/create":{
        post:createBlog
    },
    "/api/blog/delete/{id}":{
        delete:deleteBlog
    },
    "/api/blog/{id}":{
        put:updateBlog
    }
}

module.exports = blogRouteDocs;