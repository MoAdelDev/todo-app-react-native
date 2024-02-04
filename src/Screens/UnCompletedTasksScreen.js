import { FontAwesome5 } from '@expo/vector-icons';
import React, { useEffect } from 'react'
import { View ,Text, FlatList, TouchableOpacity} from 'react-native'
import { todoSlice } from '../Redux/slices/todo_slice';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from '../Utils/Styles';

function UnCompletedTasksScreen() {
  const completedTodos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  return (
    <View>
       <FlatList
        data={completedTodos.filter((item)=> !item.isCompleted)}
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
                    onPress={ ()=>{
                      dispatch(todoSlice.actions.completeTodo({id: item.id, isComplete:true}));
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
  )
}

export default UnCompletedTasksScreen;