const listAllUsers = {
    tags:['User'],
    description:"Get all users",
    security: [
        {
          token: [],
        },
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

const createUser = {
tags:['User'],
description:"Create a User",
requestBody:{
    content:{
        "application/json":{
            schema:{
                type:"object",
                properties:{
                    username:{
                        type:"string",
                        description:"the user name",
                        example:"Edwin"
                    },
                    email:{
                        type:"string",
                        description:"the user email",
                        example:"edwin@gmail.com"
                    },
                    password:{
                        type:"string",
                        description:"the user password",
                        example:"edwin"
                    },
                }
            }
        }
    }
},
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

const login = {
tags:['User'],
description:"Login",
requestBody:{
    content:{
        "application/json":{
            schema:{
                type:"object",
                properties:{
                    email:{
                        type:"string",
                        description:"Your email",
                        example:"edwin@gmail.com"
                    },
                    password:{
                        type:"string",
                        description:"your password",
                        example:"edwin"
                    },
                }
            }
        }
    }
},
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

const getUserById = {
tags:['User'],
description:"Get the user by id",
parameters:[
    {
        name:"id",
        in:"path",
        description:"id of user",
        type:"string",
        example:"63caaf3527b29e1d399896da"
    }
],
security: [
    {
      token: [],
    },
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

const deleteUserById = {
tags:['User'],
description:"Delete the user by id",
parameters:[
    {
        name:"id",
        in:"path",
        description:"id of user",
        type:"string",
        example:"63caaf3527b29e1d399896da"
    }
],
security: [
    {
      token: [],
    },
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

const updateUserById = {
tags:['User'],
description:"Update user by id",
security: [
    {
      token: [],
    },
  ],
  parameters:[
    {
        name:"id",
        in:"path",
        description:"id of user",
        type:"string",
        example:"63caaf3527b29e1d399896da"
    }
],
requestBody:{
    content:{
        "application/json":{
            schema:{
                type:"object",
                properties:{
                    email:{
                        type:"string",
                        description:"Your email",
                        example:"edwin@gmail.com"
                    },
                    password:{
                        type:"string",
                        description:"your password",
                        example:"edwin"
                    },
                    role:{
                        type:"string",
                        description:"role of the user",
                        example:"admin"
                    }
                }
            }
        }
    }
},
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

 const userRouteDocs = {
"/api/user/all":{
    get:listAllUsers,
},
"/api/user/register":{
    post:createUser,
},
"/api/user/login":{
    post:login,
},
"/api/user/{id}":{
    get:getUserById,
},
"/api/user/delete/{id}":{
    delete:deleteUserById
},
"/api/user/{id}":{
    put:updateUserById
}
};

module.exports = userRouteDocs;