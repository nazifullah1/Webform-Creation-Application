const CreateInput = () => {
  return (
    <form>
      <div className="student-name">Student Name</div>
      <div className="container">
        <input
          className="input"
          type="text"
          placeholder="First name"
          name="name"
        ></input>
        <input
          className="input"
          type="text"
          placeholder="Middle name"
          name="name"
        ></input>
        <input
          className="input"
          type="text"
          placeholder="Last name"
          name="name"
        ></input>
        <label className="label">First Name</label>
        <label className="label">Middle Name</label>
        <label className="label">Last Name</label>
      </div>
    </form>
  );
};
export default CreateInput;
