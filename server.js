const express = require('express')
const server = express()

const ideias = [
    {
        img: "https://image.flaticon.com/icons/svg/2716/2716612.svg",
        title: "Curso de Programação",
        category: "Estudo",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi repudiandae facilis illum expedita itaque, ipsa totam fugiat dolorem molestias, iusto atque. Illo esse modi, unde quaerat aspernatur soluta quis cum.",
        url: "#"
    },
    {
        img: "https://image.flaticon.com/icons/svg/1754/1754634.svg",
        title: "Meditacao",
        category: "Mentalidade",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi repudiandae facilis illum expedita itaque, ipsa totam fugiat dolorem molestias, iusto atque. Illo esse modi, unde quaerat aspernatur soluta quis cum.",
        url: "#"
    },
    {
        img: "https://image.flaticon.com/icons/svg/753/753024.svg",
        title: "Exercícios",
        category: "Saúde",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi repudiandae facilis illum expedita itaque, ipsa totam fugiat dolorem molestias, iusto atque. Illo esse modi, unde quaerat aspernatur soluta quis cum.",
        url: "#"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2716/2716612.svg",
        title: "Curso de Programação",
        category: "Estudo",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi repudiandae facilis illum expedita itaque, ipsa totam fugiat dolorem molestias, iusto atque. Illo esse modi, unde quaerat aspernatur soluta quis cum.",
        url: "#"
    },
]

//Config static files
server.use(express.static("public"))

//Config nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("src/pages", {
    express: server,
    noCache: true,
})

server.get("/", (req, res) => {

    const reverseIdeia = [...ideias].reverse()

    const lastIdeias = []
    for (let ideia of reverseIdeia) {
        if(lastIdeias.length < 2) {
            lastIdeias.push(ideia)
        }
    }

    return res.render("index.html", { ideias: lastIdeias })
})

server.get("/ideias", (req, res) => {

    const reverseIdeia = [...ideias].reverse()

    return res.render("ideias.html", { ideias: reverseIdeia })
})

server.listen(3000)
