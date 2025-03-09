export default function Button({
    children,
    onClick,
    className = "",
  }: {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
  }) {
    return (
      <button
        onClick={onClick}
        className={`bg-[#1C2833] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#2C3E50] transition ${className}`}
      >
        {children}
      </button>
    );
  }
  