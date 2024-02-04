import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import { TODO_DETAILS_SCREEN } from "../Utils/RoutesConst";
import { styles } from "../Utils/Styles";
import { useDispatch, useSelector } from "react-redux";
import { todoSlice } from "../Redux/slices/todo_slice";
import { store } from "../Redux/store";
import { FontAwesome5 } from "@expo/vector-icons";

function HomeScreen({ navigation }) {
  const todos = useSelector((state) => state.todo.todos);
  const title = useSelector((state) => state.todo.title);
  const description = useSelector((state) => state.todo.description);
  const dispatch = useDispatch();

  const addTask = () => {
    if (!title) alert("Please enter title");
    if (!description) alert("Please enter description");
    else {
      if (todos.map((item) => item.title).includes(title))
        alert("Task already exists");
      else {
        dispatch(
          todoSlice.actions.addTodo({
            title: title,
            description: description,
            id: Date.now().toString(),
            isCompleted: false,
          })
        );
        dispatch(todoSlice.actions.setTitle(""));
        dispatch(todoSlice.actions.setDescription(""));
      }
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TODO APP</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={(value) => dispatch(todoSlice.actions.setTitle(value))}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={(value) =>
          dispatch(todoSlice.actions.setDescription(value))
        }
      />
      <Button title="Add" onPress={addTask} />
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(TODO_DETAILS_SCREEN, { item })}
          >
            <View style={styles.task}>
              <View>
                <Text style={styles.taskTitle}>{item.title}</Text>
                <Text>{item.description}</Text>
              </View>
              <View>
                <View style={styles.taskEvents}>
                  <TouchableOpacity
                    style={styles.taskEvent}
                    onPress={() => {
                      dispatch(todoSlice.actions.deleteTodo(item.id));
                    }}
                  >
                    <FontAwesome5 name="trash" size={24} color="blue" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.taskEvent}
                    onPress={() => {
                      dispatch(
                        todoSlice.actions.completeTodo({
                          id: item.id,
                          isComplete: true,
                        })
                      );
                    }}
                  >
                    <FontAwesome5 name="check" size={24} color="blue" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

export default HomeScreen;
