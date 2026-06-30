type CardProps = {
  children: React.ReactNode;
};

export default function CardOne({ children }: CardProps) {
  return (
    <div className="bg-yellow-200 shadow-md px-4 py-8 rounded-2xl w-auto h-auto">
      <div className="h-auto w-auto bg-yellow-100 rounded-2xl px-4 py-8 flex flex-col items-center justify-evenly">
        {children}
      </div>
    </div>
  );
}
