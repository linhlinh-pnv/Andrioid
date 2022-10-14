import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const FlexDirectionBasics = () => {
  const [flexDirection, setflexDirection] = useState('column');

  return (
    <PreviewLayout
      label="flexDirection"
      values={['column', 'row', 'row-reverse', 'column-reverse']}
      selectedValue={flexDirection}
      setSelectedValue={setflexDirection}>
      <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
      <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
      <View style={[styles.box, {backgroundColor: 'steelblue'}]} />
    </PreviewLayout>
  );
};

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{padding: 10, flex: 1}}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map(value => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[styles.button, selectedValue === value && styles.selected]}>
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}>
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, {[label]: selectedValue}]}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: 'aliceblue',
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'coral',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
});

export default FlexDirectionBasics;

// import {useState} from 'react';
// import {
//   View,
//   Text,
//   Button,
//   RefreshControl,
//   ScrollView,
//   StyleSheet,
//   TextInput,
// } from 'react-native';
// import {StatusBar} from 'react-native';

// export default function App() {
//   const [count, setCount] = useState(0);

//   const increaseCount = () => {
//     setCount(count + 1);
//   };
//   return (
//     <View style={styles.container}>
//       <Text>Mở máy lên đi nào!</Text>
//       <Text style={styles.text}>Hello Linh Linh</Text>
//       <Button onPress={increaseCount} title="Count"></Button>
//       <Text style={styles.count}>Count: {count}</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     color: '#FF0000', // Red color
//     fontSize: 50,
//     fontStyle: 'italic',
//   },
//   count: {
//     fontSize: 30,
//   },
// });
// import {StatusBar} from 'react-native';

// // import Task from '/components/Task';
// import Task from './components/Task';

// export default function App() {
//   const [name, setName] = useState('');

//   return (
//     <View style={styles.container}>
//       <View style={styles.taskWrapper}>
//         <Text style={styles.sectionTitle}>Today's tasks</Text>
//         <View style={styles.items}>
//           <Task />
//           <Task />
//           <Task />
//           <Task />
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#E8EAED',
//   },
//   taskWrapper: {
//     paddingTop: 80,
//     paddingHorizontal: 20,
//   },
//   items: {},
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
// });
// export default function App() {
//   const [name, setName] = useState('');

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Text Input</Text>
//       <TextInput
//         onChangeText={value => setName(value)}
//         style={styles.input}
//         placeholder="Enter your Name"
//       />
//       <Text style={styles.text}>Name: {name}</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     color: '#FF0000', // Red color
//     fontSize: 50,
//     fontStyle: 'italic',
//     alignItems: 'center',
//   },
//   item: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   input: {
//     width: 300,
//     height: 50,
//     borderWidth: 2,
//     borderRadius: 20,
//     borderColor: '#FF0000',
//     textAlign: 'center',
//   },
// });

// export default function App() {
//   const [items, setItems] = useState([
//     {key: 1, item: 'item 1'},
//     {key: 2, item: 'item 2'},
//     {key: 3, item: 'item 3'},
//     {key: 4, item: 'item 4'},
//     {key: 5, item: 'item 5'},
//     {key: 6, item: 'item 6'},
//     {key: 7, item: 'item 7'},
//     {key: 8, item: 'item 8'},
//     {key: 9, item: 'item 9'},
//     {key: 10, item: 'item 10'},
//     {key: 11, item: 'item 11'},
//     {key: 12, item: 'item 12'},
//     {key: 13, item: 'item 13'},
//   ]);

//   const [refreshing, setRefreshing] = useState(false);

//   const onRefresh = () => {
//     setRefreshing(true);
//     setItems([...items, {key: 14, item: 'item 14'}]);
//     setRefreshing(false);
//   };

//   return (
//     <ScrollView
//       refreshControl={
//         <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
//       }
//       style={styles.container}>
//       {items.map(item => {
//         return (
//           <View style={styles.item} key={item.key}>
//             <Text style={styles.text}>{item.item}</Text>
//           </View>
//         );
//       })}
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   text: {
//     color: '#FF0000', // Red color
//     fontSize: 50,
//     fontStyle: 'italic',
//   },
//   item: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// export default function App() {
//   const [count, setCount] = useState(0);

//   const increaseCount = () => {
//     setCount(count + 1);
//   };
//   return (
//     <View style={styles.container}>
//       <Text>Mở máy lên đi nào!</Text>
//       <Text style={styles.text}>Hello PNV23-React Native</Text>
//       <Button onPress={increaseCount} title="Increase Count"></Button>
//       <Text style={styles.count}>Count: {count}</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     color: '#FF0000', // Red color
//     fontSize: 50,
//     fontStyle: 'italic',
//   },
//   count: {
//     fontSize: 30,
//   },
// });
// import {useState} from 'react';
// import {StyleSheet, Text, View} from 'react-native';
// import Task from './components/Task';

// export default function App() {
//   const [name, setName] = useState('');

//   return (
//     <View style={styles.container}>
//       <View style={styles.taskWrapper}>
//         <Text style={styles.sectionTitle}>Today's tasks</Text>
//         <View style={styles.items}>
//           <Task text="Task 1" />
//           <Task text="Task 2" />
//           <Task text="Task 3" />
//           <Task text="Task 4" />
//           <Task text="Task 5" />
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#E8EAED',
//   },
//   taskWrapper: {
//     paddingTop: 80,
//     paddingHorizontal: 20,
//   },
//   items: {
//     marginTop: 20,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
// });
