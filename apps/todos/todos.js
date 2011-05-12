// ==========================================================================
// Project:   Todos
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Todos */

Todos = SC.Application.create();

Todos.Todo = SC.Object.extend({ 
  title: null, 
  isDone: false
});

Todos.CreateTodoView = SC.TextField.extend({ 
  insertNewline: function() { 
    var value = this.get('value');

    if (value) { 
      Todos.todoListController.createTodo(value);
      this.set('value', '');
    }
  }
});

Todos.MarkDoneView = SC.Checkbox.extend({ 
  titleBinding: '.parentView.content.title', 
  valueBinding: '.parentView.content.isDone'
});

SC.ready(function() {
  Todos.mainPane = SC.TemplatePane.append({
    layerId: 'todos',
    templateName: 'todos'
  });
});

Todos.todoListController = SC.ArrayController.create({
  content: [],

  createTodo: function(title) { 
    var todo = Todos.Todo.create({ title: title });
    this.pushObject(todo);
  }
});
