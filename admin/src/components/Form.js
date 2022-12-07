export const Form = (props) => {
  return (
  <form>
  <label for="sport">Choose A Sport:</label><br />
  <select name="sport" id="sport" form="sportform">
    <option value="Football">Football</option>
    <option value="Baseball">Baseball</option>
    <option value="Basketball">Basketball</option>
    <option value="Soccer">Soccer</option>
    <option value="Bowling">Bowling</option>
    <option value="Golf">Golf</option>
    <option value="Volleyball">Volleyball</option>
    <option value="Lacrosse">Lacrosse</option>
    <option value=""></option>
    <option value=""></option>
    <option value=""></option>
    <option value=""></option>
    <option value=""></option>
  </select><br />
    <label for="sport">Which Type?</label><br />
    <input type="radio" id="Mens" name="gender" value="Mens" />
    <label for="Mens">Mens</label><br />
    <input type="radio" id="Womens" name="gender" value="Womens" />
    <label for="Womens">Womens</label><br />
    <label for="sport">Where?</label><br />
    <input type="radio" id="Home" name="gender" value="Home" />
    <label for="Home">Home</label><br />
    <input type="radio" id="Away" name="gender" value="Away" />
    <label for="Away">Away</label><br />
  </form>
  )
}