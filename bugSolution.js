```javascript
// pages/index.js
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'

export default function Home() {
  const { data, isLoading, error } = useQuery(['todos'], () =>
    fetch('/api/todos').then((res) => res.json())
  );

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error.message;

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

// pages/api/todos.js

export default async function handler(req, res) {
  // Simulate fetching a large amount of data
  const todos = Array.from({ length: 1000 }).map((_, i) => ({ id: i + 1, title: `Todo ${i + 1}` }));

  res.status(200).json(todos);
}
```