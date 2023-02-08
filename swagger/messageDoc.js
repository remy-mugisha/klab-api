const getAllMessages = {
    tags:['Contact'],
    description:"List all contacts",
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

const messageById = {
    tags:['Contact'],
    description:"get the contact/message by id",
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of message",
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

const sendMessage = {
    tags:['Contact'],
    description:"Send message",
    requestBody:{
        content:{
            "application/json":{
                schema:{
                    type:"object",
                    properties:{
                        fullName:{
                            type:"string",
                            description:"Your name",
                            example:"Edwin Rugira"
                        },
                        email:{
                            type:"string",
                            description:"your email",
                            example:"edwin@gmail.com"
                        },
                        subject:{
                            type:"string",
                            description:"content of message",
                            example:"apply for job"
                        },
                        message:{
                            type:"string",
                            description:"the message you want to send",
                            example:"hi, i want to give you a job"
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

const deleteMessageById = {
    tags:['Contact'],
    description:"Delete the contact/message by id",
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of message",
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


 const contactRouteDocs = {
    "/api/messages":{
        get:getAllMessages
    },
    "/api/messages/{id}":{
        get:messageById
    },
    "/api/messages/create":{
        post:sendMessage,
    },
    "/api/messages/delete/{id}":{
        delete:deleteMessageById
    }
}

module.exports = contactRouteDocs;
