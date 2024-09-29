const connect = require("../database/conect/connection.js");

module.exports = {
  async Login(request, response) {
    const { adm, pass } = request.body;
    var cAdm = await connect("user").select("adm").where("adm", adm);
    var cPass = await connect("user").where("adm", adm).select("pass");
    console.log(cPass[0].pass);
    if (pass === cPass[0].pass) {
      var token = await connect("user").where("adm", adm).select("token");
      return response.json("token");
    } else {
      return response.json("Senha invalida!");
    }
  },

  async Register(request, response) {
    const { adm, pass } = request.body;
    var token = 1234;
    var Data = { adm, pass, token };
    await connect("user").insert(Data);

    return response.json("Cadastrado!");
  },
};
