export default function Home() {
  return (
    <div className="dark:bg-slate-900 dark:text-slate-50 p-4 bg-slate-0 text-slate-900 h-screen flex flex-col items-center justify-center text-center">
      <div className="max-w-[700px] mx-auto">
        <h1 className="flex items-center gap-2 before:w-1 before:h-4 before:bg-sky-50">Ola mundo</h1>
        <h2 className="font-bold text-3xl md:text-5xl">Ola tailwind</h2>
        <button disabled className="bg-sky-500 text-white px-4 py-2 rounded mt-4 cursor-pointer enabled:hover:bg-sky-600 disabled:opacity-60  disabled:cursor-not-allowed">Entrar</button>
      </div>
    </div>
  );
}
