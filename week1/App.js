const heading = React.createElement('h1',{}, "Hello from react !!!");
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);

const heading1 = React.createElement('h1',{
  id: "target1"
}, "Heading 1")
const heading2 = React.createElement('h1',{
  id: "target2"
}, "Heading 2")

const container = ReactDOM.createRoot(document.getElementById('container'));
container.render([heading1, heading2]);
root.render(heading);