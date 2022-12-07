import "../css/Form.css"
export const Form = (props) => {
    return (
    <form>
    <label for="sport" className="header">Choose A Sport:</label><br />
    <select name="sport" id="sport" form="sportform" className="select">
      <option value="Football">Football</option>
      <option value="Baseball">Baseball</option>
      <option value="Basketball">Basketball</option>
      <option value="Soccer">Soccer</option>
      <option value="Bowling">Bowling</option>
      <option value="Golf">Golf</option>
      <option value="Volleyball">Volleyball</option>
      <option value="CrossCountry">Cross Country</option>
      <option value="Softball">Softball</option>
      <option value="Swim">Swim</option>
      <option value="Tennis">Tennis</option>
      <option value="Track">Track</option>
      <option value="Wrestling">Wrestling</option>
    </select><br />
      <label for="type" className="header">Which Type?</label><br />
      <input type="radio" id="Mens" name="gender" value="Mens" />
      <label for="Mens">Mens</label><br />
      <input type="radio" id="Womens" name="gender" value="Womens" />
      <label for="Womens">Womens</label><br />
      <input type="radio" id="WontMatter" name="gender" value="Womens" />
      <label for="WontMatter">Doesn't Have Gender Specific Type</label><br />

      <label for="Where" className="header">Where?</label><br />
      <input type="radio" id="Home" name="where" value="Home" />
      <label for="Home">Home</label><br />
      <input type="radio" id="Away" name="where" value="Away" />
      <label for="Away">Away</label><br />
      <input type="radio" id="Other" name="Other" value="Other" />Other: 
      <input type="text" id="Other" name="Other" /><br />

      <label for="Date" className="secsep">Date</label><br />
      <label for="year" className="header">Year:</label><br />
    <select name="year" id="year" form="yearform" className="select">
      <option value="2024">2024</option>
      <option value="2023">2023</option>
      <option value="2022">2022</option>
      <option value="2021">2021</option>
      <option value="2020">2020</option>
    </select><br />

    <label for="Month" className="header">Month:</label><br />
    <select name="Month" id="Month" form="Monthform" className="select">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
      <option value="11">11</option>
      <option value="12">12</option>
    </select><br />

    <label for="Day" className="header">Day:</label><br />
    <select name="Day" id="Day" form="Dayform" className="select">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
      <option value="11">11</option>
      <option value="12">12</option>
      <option value="13">13</option>
      <option value="14">14</option>
      <option value="15">15</option>
      <option value="16">16</option>
      <option value="17">17</option>
      <option value="18">18</option>
      <option value="19">19</option>
      <option value="20">20</option>
      <option value="21">21</option>
      <option value="22">22</option>
      <option value="23">23</option>
      <option value="24">24</option>
      <option value="25">25</option>
      <option value="26">26</option>
      <option value="27">27</option>
      <option value="28">28</option>
      <option value="29">29</option>
      <option value="30">30</option>
      <option value="31">31</option>
    </select><br />
      <label for="Schoolname" className="header">Opposing School:</label><br />
      <input type="text" id="schname" name="schname" /><br />
      <label for="ourscore" className="header">Our score:</label><br />
      <input type="text" id="ourscore" name="ourscore" /><br />
      <label for="oppscore" className="header">Opposing score:</label><br />
      <input type="text" id="oppscore" name="oppscore" /><br />
      <label for="Where" className="header">Win/lose:</label><br />
      <input type="radio" id="win" name="win/lose" value="win" />
      <label for="win">Win</label><br />
      <input type="radio" id="lose" name="win/lose" value="lose" />
      <label for="lose">Lose</label><br />
      <input type="radio" id="Place" name="Place" value="Place" />Place: 
      <input type="text" id="Place" name="Place" /><br />
      <input type="submit" className="submit" value="submit" /><br />
    </form>
    )
}