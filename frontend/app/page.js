import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-center sm:text-left">
        <h1 className="text-5xl font-bold">Welcome to GoPratle</h1>
        <p className="text-xl text-gray-600">The best place to find event professionals.</p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-indigo-600 text-white gap-2 hover:bg-indigo-700 text-lg sm:text-base h-12 sm:h-14 px-8"
            href="/post-requirement"
          >
            Post a Requirement
          </Link>
        </div>
      </main>
    </div>
  );
}
