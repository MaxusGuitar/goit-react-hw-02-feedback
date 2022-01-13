import Counter from "./components/feedback/counter";

export default function App() {
  return (
    <div>
      <Counter good={0} neutral={0} bad={0} />
    </div>
  );
}
