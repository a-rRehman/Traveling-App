export default function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((items) => items.packed).length;
  const percentage = (numPacked / numItems) * 100;

  if (items.length == 0) {
    return (
      <footer className="stats ">
        {" "}
        <em>Start Adding Some Items To Your Packing List.</em>
      </footer>
    );
  }

  return (
    <footer className="stats ">
      <em>
        {percentage === 100
          ? "You Got EveryThing.You Are Now Ready To Go."
          : `You have ${numItems} items on your list ,and you already packed
          ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
