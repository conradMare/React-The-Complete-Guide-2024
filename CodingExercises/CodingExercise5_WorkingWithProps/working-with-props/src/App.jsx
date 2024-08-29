export function CourseGoal(props) {
  return (
    <li>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div id="app" data-testid="app">
      <h1>Time to Practice</h1>
      <p>One course, many goals! 🎯</p>
      <ul>
        {/* OUTPUT AT LEAST TWO CourseGoal components here */}
        {/* One of them should have a title of “Learn React” and a description of “In-depth” */}
        <CourseGoal
          title="Learn React"
          description="In-depth"
        />
        <CourseGoal
          title="Learn Next.js"
          description="Get the what's what"
        />
        <CourseGoal
          title="Learn Tailwind"
          description="Keep up to date with new tech"
        />
      </ul>
    </div>
  );
}

export default App;