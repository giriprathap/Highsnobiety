// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';

// import Tabs from 'react-native-tabs';

// class TabBar extends Component {
//   constructor(props){
//     super(props);
//     this.state = {page:'second'};
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <Tabs selected={this.state.page} style={{backgroundColor:'white'}}
//               selectedStyle={{color:'red'}} onSelect={el=>this.setState({page:el.props.name})}>
//             <Text name="Fan Shop">Fan Shop</Text>
//             <Text name="Tickets" selectedIconStyle={{borderTopWidth:2,borderTopColor:'red'}}>Tickets</Text>
//             <Text name="Matches">Matches</Text>
//             <Text name="News" selectedStyle={{color:'green'}}>News</Text>
//         </Tabs>
//           <Text style={styles.welcome}>
//               Welcome to OFC Kickers user dashboard
//           </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 50,
//     textAlign: 'center',
//     margin: 10,
//     color: 'red',

//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// export default TabBar