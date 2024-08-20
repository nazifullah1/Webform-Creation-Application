const BirthDate = () => {
  return (
    <>
      <label className="birth-date">Birth Date</label>
      <label className="gender">Gender</label>
      <div className="drop-list">
        <select>
          <option></option>
          <option>January</option>
          <option>February</option>
          <option>March</option>
          <option>April</option>
          <option>May</option>
          <option>June</option>
          <option>July</option>
          <option>August</option>
          <option>September</option>
          <option>October</option>
          <option>Novermber</option>
          <option>December</option>
        </select>

        <select>
          <option></option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
        </select>
        <select>
          <option></option>
          <option>2022</option>
          <option>2021</option>
          <option>2020</option>
          <option>2019</option>
          <option>2018</option>
          <option>2017</option>
          <option>2016</option>
          <option>2015</option>
          <option>2014</option>
          <option>2013</option>
          <option>2012</option>
          <option>2011</option>
        </select>
        <select>
          <option>please select</option>
          <option>Male</option>
          <option>Female</option>
          <option>N/A</option>
        </select>
        <label className="birth-date-label">Month</label>
        <label className="birth-date-label">Day</label>
        <label className="birth-date-label">Year</label>
      </div>
      <label className="address-name">Address</label>
      <div className="address">
        <input
          className="address-input input1"
          type="text"
          name="address"
        ></input>
        <label className="street1">Street Address</label>

        <input
          className="address-input input2"
          type="text"
          name="address"
        ></input>
        <label className="street2">Street Address Line 2</label>
        <label></label>
        <input className="address-input" type="text" name="address"></input>

        <input className="address-input" type="text" name="address"></input>
        <label className="city">City</label>
        <label className="state">State / Provice</label>
        <input
          className="address-input input3"
          type="text"
          name="address"
        ></input>
        <label className="postal">Postal / Zip Code</label>
      </div>
      <div className="phone-number">
        <label className="email">Student E-Address</label>
        <label className="mobile-phone">Mobile Number</label>
        <input
          className="email-input"
          type="email"
          placeholder="ex: myname@example.com"
          name="email"
        ></input>
        <input
          className="phone-input"
          type="tel"
          placeholder="(000) 000-0000"
          name="tel"
        ></input>
        <label className="work">Work Number</label>
        <label className="course">Course</label>
        <input
          className="phone-input"
          type="tel"
          placeholder="(000) 000-0000"
          name="tel"
        ></input>
        <select>
          <option>Please Select</option>
          <option>Math 26A</option>
          <option>Math 26B</option>
          <option>CSc 130</option>
          <option>CSc 131</option>
          <option>CSc 133</option>
          <option>CSc 134</option>
          <option>CSc 135</option>
          <option>CSc 137</option>
          <option>CSc 138</option>
          <option>CSc 139</option>
          <option>CSc 190</option>
          <option>CSc 191</option>
          <option>CSc 19</option>
        </select>
      </div>
      <label className="comment">Additional Comments</label>
      <div className="text-area">
        <textarea name="text"></textarea>
      </div>
      <form action="https://formspree.io/f/myybnlqn" method="post">
        <div className="submit">
          <button className="button" type="submit">
            Submit Form
          </button>
        </div>
      </form>
    </>
  );
};

export default BirthDate;
