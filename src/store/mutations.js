function changeCity(state,data) {
  state.city = data
  try {
    localStorage.city = data
  }catch(e){}
} 
export default {
  changeCity
}