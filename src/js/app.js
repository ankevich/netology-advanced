const object = {
  name: "мечник",
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

const orderByProps = (obj, sortKeys) => {
  var keys = [];
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      keys.push(prop);
    }
  }
  const tail = keys.filter((el) => !sortKeys.includes(el)).sort();
  const result = sortKeys.concat(tail).map((prop) => {
    return {
      key: prop,
      value: obj[prop],
    };
  });
  return result;
};

export { orderByProps };

//const result = orderByProps(object, ["name", "level"]);
//console.log(result); // ->
//  [
//    {key: "name", value: "мечник"}, // порядок взят из массива с ключами
//    {key: "level", value: 2}, // порядок взят из массива с ключами
//    {key: "attack", value: 80}, // порядок по алфавиту (т.к. в массиве с ключами нет значения "attack")
//    {key: "defence", value: 40}, // порядок по алфавиту (т.к. в массиве с ключами нет значения "defence")
//    {key: "health", value: 10} // порядок по алфавиту (т.к. в массиве с ключами нет значения "health")
//  ]
