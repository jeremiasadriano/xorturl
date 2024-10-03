export default function Main() {
  return (
    <main className="flex flex-col items-center">
      <h1 className="text-3xl">Short your url in just one click!</h1>
      <h2 className="text-2xl">Create a short url was never easy like it!</h2>
      <div className="input-group flex items-center gap-2">
        <input
          type="text"
          placeholder="Enter your url here"
          className="h-10 w-96 rounded-md border-2 border-slate-500 pl-2 outline-none active:border-slate-900"
        />
        <button className="h-10 w-32 rounded-md bg-slate-400">Short</button>
      </div>
    </main>
  );
}
