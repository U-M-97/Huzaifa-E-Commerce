import React from 'react';

const CategoryForm = ({ name, setname, handleSubmit }) => (
  <form action="" onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="">Name</label>
      <input
        type="text"
        className="form-control"
        value={name}
        onChange={(e) => setname(e.target.value)}
        autoFocus
        required
      />
      <br />
      <button className="btn btn-outline-primary">Save</button>
    </div>
  </form>
);

export default CategoryForm;
