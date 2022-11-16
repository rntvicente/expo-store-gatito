import { FlatList } from "react-native";
import Chance from "chance";

import Items from "../../components/items"

const chance = new Chance()

const mock = [{
  id: chance.guid(),
  name: chance.company(),
  price: chance.floating({ min: 10, max: 1000, fixed: 2 }),
  description: chance.sentence()
}, {
  id: chance.guid(),
  name: chance.company(),
  price: chance.floating({ min: 10, max: 1000, fixed: 2 }),
  description: chance.sentence()
}, {
  id: chance.guid(),
  name: chance.company(),
  price: chance.floating({ min: 10, max: 1000, fixed: 2 }),
  description: chance.sentence()
}]

function Task() {
  return (
    <>
      <FlatList
        data={mock}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <Items {...item} />}
      />
    </>
  );
}

export default Task;
