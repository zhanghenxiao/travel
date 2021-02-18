function change(state,data) {
  state.city = data
  try {
    localStorage.city = data
  }catch(e){}
} 
export default {
  change
}