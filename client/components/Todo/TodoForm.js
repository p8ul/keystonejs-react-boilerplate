import React from 'react';
import PropTypes from 'prop-types';
import {
  Form, Input, TextArea, Button,
} from 'semantic-ui-react';

const TodoForm = ({
  title, description, handleInputChange, handleSubmit, errors, busy,
}) => (
  <Form loading={busy} className="animated fadeIn">
    <Form.Field
      id="form-input-control-title"
      control={Input}
      label="Title"
      placeholder="Title"
      name="title"
      value={title}
      onChange={handleInputChange}
      error={errors.title !== undefined}
    />
    {errors.title
            && <div className="ui pointing red basic label animated fadeIn">{errors.title}</div>
      }

    <Form.Field
      id="form-textarea-control-opinion"
      control={TextArea}
      label="Description"
      placeholder="Description"
      value={description}
      name="description"
      onChange={handleInputChange}
      error={errors.description !== undefined}
    />
    {errors.description
            && <div className="ui pointing red basic label animated fadeIn">{errors.description}</div>
      }
    <Form.Field
      id="form-button-control-public"
      control={Button}
      content="Submit"
      label=""
      color="yellow"
      onClick={handleSubmit}
    />
  </Form>
);
TodoForm.propTypes = {
  busy: PropTypes.bool.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  errors: PropTypes.shape({}).isRequired,
};
export default TodoForm;
