export default function PhoneFrame({ children, className = '', size = 'default' }) {
  const dims = size === 'small' ? 'w-[180px] h-[368px]' : 'w-[260px] h-[530px] sm:w-[280px] sm:h-[572px]';

  return (
    <div className={`relative ${dims} ${className}`}>
      <div className="absolute inset-0 rounded-[2.6rem] bg-gradient-to-b from-white/10 to-white/[0.02] p-[3px] shadow-glass">
        <div className="relative h-full w-full overflow-hidden rounded-[2.4rem] bg-base-900 border border-white/10">
          {/* Notch */}
          <div className="absolute left-1/2 top-2.5 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-base-950/90" />
          {/* Screen content */}
          <div className="relative h-full w-full">{children}</div>
          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 z-20 h-1 w-24 -translate-x-1/2 rounded-full bg-white/25" />
        </div>
      </div>
    </div>
  );
}
