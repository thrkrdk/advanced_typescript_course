import axios from "axios"

axios.get("/api/users/1").then(res=> console.log(res.data));
 