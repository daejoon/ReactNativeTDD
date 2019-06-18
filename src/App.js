/**
 * Sample React Native App
 * https://github.com/fa cebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import AddToDo from './AddToDo';
import ToDoList from './ToDoList';

export default class App extends Component {
    render() {
        return (
            <View testID="welcome">
                <Text>ToDo TDD</Text>
                <AddToDo></AddToDo>
                <ToDoList></ToDoList>
            </View>
        );
    }
}
