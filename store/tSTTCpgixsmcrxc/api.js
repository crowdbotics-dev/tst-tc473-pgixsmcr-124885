import axios from "axios"
import {
  TST_TC473_PGIXSMCRXC_PASSWORD,
  TST_TC473_PGIXSMCRXC_USERNAME
} from "react-native-dotenv"
const tSTTCpgixsmcrxc = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC473_PGIXSMCRXC_PASSWORD,
    password: TST_TC473_PGIXSMCRXC_USERNAME
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function tsttc473pgixsmcrxc_get_getUserDetails_read(payload) {
  return tSTTCpgixsmcrxc.get(`/getUser${payload.Details}`)
}
export const apiService = { tsttc473pgixsmcrxc_get_getUserDetails_read }
