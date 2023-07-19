import { createStore } from 'vuex'
import auth from "@/store/modules/auth";
import team from "@/store/modules/team";

export default createStore({
  modules: {
    auth,
    team
  }
})
