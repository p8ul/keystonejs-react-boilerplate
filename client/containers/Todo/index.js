import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Joi from 'joi';
import Todo from '../../components/Todo';
import { fetchingTodos, createTodo, deleteTodo } from '../../store/actions/todo';
import { todoValidationSchema } from '../../utils/validations';

export class TodoFormContainer extends Component {
  static propTypes = {
    todos: PropTypes.shape({}).isRequired,
    history: PropTypes.shape({}).isRequired,
    match: PropTypes.shape({}).isRequired,
    addTodo: PropTypes.func.isRequired,
    fetchTodos: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
  }

  state = {
    title: '',
    searchText: '',
    description: '',
    errors: {},
    id: null,
  }

  componentDidMount() {
    const {
      match: { params }, fetchTodos,
    } = this.props;
    fetchTodos({ page: 1 });
    if (params.id) {
      this.setState({ id: params.id });
    }
  }

  handleInputChange = (e) => {
    const { target } = e;
    const { name } = target;
    const { errors } = this.state;
    delete errors[name];

    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
      errors,
    });
  }

  handleSearchChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    const { todos: { data }, fetchTodos } = this.props;
    const { currentPage } = data;
    fetchTodos({ page: currentPage, search: value });
  }

  handlePageChange = (pageNumber) => {
    const { fetchTodos } = this.props;
    fetchTodos({ page: pageNumber });
  }

  handleSubmit = (event) => {
    const {
      id, title, description,
    } = this.state;
    const { addTodo } = this.props;
    event.preventDefault();
    Joi.validate({ title, description }, todoValidationSchema, (err) => {
      if (err) {
        const errors = {};
        err.details.forEach((detail) => {
          errors[detail.path] = detail.message;
        });
        this.setState({ errors });
        return false;
      }

      let data = { title, description };
      if (id) {
        data = { ...data, id };
        return true;
      }
      addTodo(data);
      this.setState({ title: '', description: '' });
    });
  }

  render() {
    const { todos, removeTodo } = this.props;
    const {
      title, description, errors,
    } = this.state;
    return (
      <Todo
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
        removeTodo={removeTodo}
        title={title}
        description={description}
        errors={errors}
        serverError={todos.errors}
        success={todos.success}
        busy={todos.isFetching}
        todos={todos.data}
        handlePageChange={this.handlePageChange}
        handleSearchChange={this.handleSearchChange}
      />
    );
  }
}

export const mapStateToProps = state => ({
  todos: state.todos || [],
});

export const mapDispatchToProps = {
  fetchTodos: fetchingTodos,
  addTodo: createTodo,
  removeTodo: deleteTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoFormContainer);
