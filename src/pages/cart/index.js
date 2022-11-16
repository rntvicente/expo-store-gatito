import { useCallback, useEffect, useState } from "react";
import { FlatList } from "react-native";
import Chance from "chance";

import Items from "../../components/detailsCart"
import StatusCart from "../../components/statusCart";

const chance = new Chance();

const mock = [{
  id: chance.guid(),
  name: chance.company(),
  price: chance.floating({ min: 10, max: 1000, fixed: 2 }),
  description: chance.sentence(),
  amount: chance.integer({ min: 1, max: 10 })
}, {
  id: chance.guid(),
  name: chance.company(),
  price: chance.floating({ min: 10, max: 1000, fixed: 2 }),
  description: chance.sentence(),
  amount: chance.integer({ min: 1, max: 10 })
}, {
  id: chance.guid(),
  name: chance.company(),
  price: chance.floating({ min: 10, max: 1000, fixed: 2 }),
  description: chance.sentence(),
  amount: chance.integer({ min: 1, max: 10 })
}];

const TOTAL_INITIAL = 0;

function Cart() {
  const [total, setTotal] = useState(TOTAL_INITIAL);

  const calculateTotal = useCallback(() => {
    return mock.reduce((sum, { price, amount }) => {
      return sum + (price * amount)
    }, TOTAL_INITIAL);
  })

  useEffect(() => {
    const total = calculateTotal();
    setTotal(total);
  }, [calculateTotal, setTotal]);

  return (
    <>
      <StatusCart total={total}/>
      <FlatList
        data={mock}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <Items {...item} />}
      />
    </>
  );
}

export default Cart;
