import {orderByProps} from "./app.js"

test("Функция сортирует массив, name и level сверху, далее сортировка по алфавиту", () => {
  const input = {
    name: "мечник",
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  const received = orderByProps(input, ["name", "level"]);
  const expected = [
    { key: "name", value: "мечник" },
    { key: "level", value: 2 },
    { key: "attack", value: 80 },
    { key: "defence", value: 40 },
    { key: "health", value: 10 },
  ];
  expect(received).toEqual(expected);
});
