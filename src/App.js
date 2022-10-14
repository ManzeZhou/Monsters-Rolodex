import {useEffect, useState} from "react";
import './App.css';
import SearchBox from "./components/search-box/searchbox-component";
import CardList from "./components/card-list/card-list.component";

const App = () => {
    console.log('render')
    const [searchField, setSearchField] = useState('')
    const [monsters, setMonsters] = useState([])
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);


    //trigger this every first time app mount
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((users) => setMonsters(users));
    }, []);

    useEffect(() => {
        const newFilteredMonsters = monsters.filter((monster) =>  {
            return monster.name.toLocaleLowerCase().includes(searchField)
        });

        setFilteredMonsters(newFilteredMonsters);
    }, [monsters, searchField])


    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase()
        setSearchField(searchFieldString)
    }






  return (
      <div className='App'>
          <h1 className='app-title'>Monsters Rolodex</h1>

          <SearchBox className='monsters-search-box' onChangeHandler={onSearchChange} placeholders='search monsters'/>

          <CardList monsters={filteredMonsters}/>
      </div>
  )
}

// class App extends Component {
//   constructor() {
//     super();
//
//     this.state = {
//       monsters: [],
//         searchField: ''
//     };
//   }
//
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then((response) => response.json())
//         .then((users) => this.setState(() => {
//           return {monsters: users}
//         }
//         ))
//   }
//
//     onSearchChange = (event) => {
//
//         const searchField = event.target.value.toLocaleLowerCase()
//         this.setState(() => {
//             return { searchField };
//         })}
//
//   render() {
//       console.log('render from app')
//
//       //解构
//       const {monsters, searchField} = this.state;
//       const { onSearchChange } = this;
//
//       const filteredMonsters = monsters.filter((monster) =>  {
//           return monster.name.toLocaleLowerCase().includes(searchField)
//       });
//
//     return (
//       <div className="App">
//         {/*{filteredMonsters.map((monsters) => {*/}
//         {/*    return (*/}
//         {/*        <div key={monsters.name}>*/}
//         {/*            <h1>{monsters.name}</h1>*/}
//         {/*        </div>*/}
//
//         {/*    )*/}
//         {/*})}*/}
//           <h1 className='app-title'>Monsters Rolodex</h1>
//           <SearchBox className='monsters-search-box' onChangeHandler={onSearchChange} placeholders='search monsters'/>
//           <CardList monsters={filteredMonsters}/>
//       </div>
//   );
//   }
//
//
// }

export default App;
