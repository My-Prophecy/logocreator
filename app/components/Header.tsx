export default function Header({ className }: { className: string }) {
  return (
    <header className={`relative w-full ${className}`}>
      <div className="flex items-center justify-center bg-[#343434] px-4 py-2 md:mt-4">
        <h1 className="text-xl font-bold text-white md:text-2xl">
          MedAI Logo Generator
        </h1>
      </div>
    </header>
  );
}
