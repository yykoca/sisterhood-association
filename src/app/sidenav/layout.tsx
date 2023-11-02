export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-col md:overflow-hidden">
      <div className="w-full flex-none md:w-64">{children}</div>
    </div>
  );
}