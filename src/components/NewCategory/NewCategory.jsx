import { Button, TextField } from '@material-ui/core';
import React from 'react';

import './newCategory.scss';

const NewCategory = () => {
  return (
    <>
      <div className="new_category_container">
        <div className="fields">
          <h4>Add New Category</h4>
          <TextField
            className="text_field"
            fullWidth
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            fullWidth
            className="text_field"
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={3}
            variant="outlined"
          />
          <TextField
            type="file"
            className="text_field"
            fullWidth
            id="outlined-basic"
            variant="outlined"
          />
          <Button variant="contained" color="primary">
            Save
          </Button>
        </div>
      </div>
    </>
  );
};

export default NewCategory;
