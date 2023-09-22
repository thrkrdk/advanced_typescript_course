import axios from "axios"

console.log("aa")
axios.get("/api/users/1").then(res=> console.log(res.data));
 