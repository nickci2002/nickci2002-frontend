import PageLayout from "./PageLayout";


export default function Projects() {
  return (
    <PageLayout>
      <h1>My Projects</h1>
      <p>
        This is the projects page of your application. You can customize it as needed.
      </p>
      <button onClick={() => alert('Project button clicked!')}>
        Click Me
      </button>
    </PageLayout>
  );
}