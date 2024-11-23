export function Ping() {
  return (
    <div className="relative">
      <div className="absolute -left-4 top-1">
        <span className="flex h-[20px] w-[20px]">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-vercel-pink opacity-100"></span>
          <span className="relative inline-flex h-[11px] w-[11px] rounded-full bg-vercel-pink"></span>
        </span>
      </div>
    </div>
  );
}
