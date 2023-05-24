//This is a mock db for tutorial purpose. Connect it to any DB so that Data persist

const users = [
    {
    email : "mahedi@gmail.com",
    password: "12343"
},
    {
        email : "mahedi345@gmail.com",
        password: "12343344"

    },

];

const publicPost = [
    {
    title : "free tips on Developnent",
    content : "These are some post"
}]



const privatePost = [
    {
        title : "private tips on Developnent",
        content : "These are some private post"
    }

]


module.exports = {users, privatePost, publicPost}