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
    state = {
        items: []
    }

    onAdded = (text) => {
        this.setState({
            items: [
                {text, completed: false},
                ...this.state.items
            ]
        })
    }


    render() {
        const {items} = this.state;

        return (
            <View testID="welcome">
                <Text>ToDo TDD</Text>
                <AddToDo onAdded={this.onAdded}></AddToDo>
                <ToDoList items={items}></ToDoList>
            </View>
        );
    }
};
