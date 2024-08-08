import React from "react";

const SignUpForm = ({ handleShowSignup }) => {
  /* const yearArray = [
    1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958,
    1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970,
    1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982,
    1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994,
    1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006,
    2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018,
    2019, 2020, 2021, 2022, 2023, 2024,
  ]; */

  /* const handleYears = () => {
    const years = document.getElementById("year");
    for (let i = yearArray.length - 1; i >= 0; i--) {
      const option = document.createElement("option");
      option.value = yearArray[i];
      option.textContent = yearArray[i];

      if (yearArray[i] === 2024) {
        option.selected = true;
      }
      years.appendChild(option);
    }
  }; */

  return (
    <div className="signupForm_wrapper">
      <div className="signUp_content">
        <div className="upper_portion">
          <div>
            <h1>Sign Up</h1>
            <p>It's quick and easy</p>
          </div>
          <p className="close" onClick={handleShowSignup}>
            X
          </p>
        </div>
        <form>
          {/* Name, Email and Password */}
          <div className="name">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Surname" />
          </div>
          <input type="text" placeholder="Email address or phone number" />
          <input type="Password" placeholder="New Password" />

          {/* Date */}
          <p
            className="tag"
            title="Providing your birthday helps make sure that you get the right Facebook experience for your age. If you want to change who sees this, go to the About section of your profile"
          >
            Date of Birth
          </p>
          <div className="selectWrapper">
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8" selected>
                8
              </option>
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
            </select>

            <select>
              <option value="jan">Jan</option>
              <option value="feb">Feb</option>
              <option value="mar">Mar</option>
              <option value="apr">Apr</option>
              <option value="may">May</option>
              <option value="jun">Jun</option>
              <option value="jul">Jul</option>
              <option value="aug" selected>
                Aug
              </option>
              <option value="sep">Sep</option>
              <option value="oct">Oct</option>
              <option value="nov">Nov</option>
              <option value="dec">Dec</option>
            </select>

            <select>
              <option value="2024" selected>
                2024
              </option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2022">2020</option>
              <option value="">2019</option>
              <option value="">2018</option>
              <option value="">2017</option>
              <option value="">2016</option>
              <option value="">2015</option>
              <option value="">2014</option>
              <option value="">2013</option>
              <option value="">2012</option>
              <option value="">2011</option>
              <option value="">2010</option>
              <option value="">2009</option>
              <option value="">2008</option>
              <option value="">2007</option>
              <option value="">2006</option>
              <option value="">2005</option>
              <option value="">2004</option>
              <option value="">2003</option>
              <option value="">2002</option>
              <option value="">2001</option>
              <option value="">2000</option>
              <option value="">1999</option>
              <option value="">1998</option>
              <option value="">1997</option>
              <option value="">1996</option>
              <option value="">1995</option>
              <option value="">1994</option>
              <option value="">1993</option>
              <option value="">1992</option>
              <option value="">1991</option>
              <option value="">1990</option>
              <option value="">1989</option>
              <option value="">1988</option>
              <option value="">1987</option>
              <option value="">1986</option>
              <option value="">1985</option>
              <option value="">1984</option>
              <option value="">1983</option>
              <option value="">1982</option>
              <option value="">1981</option>
              <option value="">1980</option>
              <option value="">1979</option>
              <option value="">1978</option>
              <option value="">1977</option>
              <option value="">1976</option>
              <option value="">1975</option>
              <option value="">1974</option>
              <option value="">1973</option>
              <option value="">1972</option>
              <option value="">1971</option>
              <option value="">1970</option>
              <option value="">1969</option>
              <option value="">1968</option>
              <option value="">1967</option>
              <option value="">1966</option>
              <option value="">1965</option>
              <option value="">1964</option>
              <option value="">1963</option>
              <option value="">1962</option>
              <option value="">1961</option>
              <option value="">1960</option>
            </select>
          </div>

          {/* Gender */}
          <p
            className="tag"
            title="You can change who sees your gender on your profile later. Select Custom to choose another gender, or if you'd rather not say."
          >
            Gender
          </p>
          <div className="gender_wrapper">
            <label htmlFor="male">
              <span>Male</span> <input type="radio" name="gender" id="male" />
            </label>
            <label htmlFor="female">
              <span>Female</span>{" "}
              <input type="radio" name="gender" id="female" />
            </label>
            <label htmlFor="custom">
              <span>Custom</span>{" "}
              <input type="radio" name="gender" id="custom" />
            </label>
          </div>

          {/* Text */}
          <p className="text">
            People who use our service may have uploaded your contact
            information to Facebook. <span>Learn more.</span>
            <br />
            By clicking Sign Up, you agree to our <span>Terms</span>,{" "}
            <span>Privacy Policy</span> and <span>Cookies Policy.</span> You may
            receive SMS notifications from us and can opt out at any time.
          </p>

          <button type="submit" className="signup_btn">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
