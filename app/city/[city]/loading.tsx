export default function Loading() {
  return (
    <div className="min-h-screen bg-white animate-pulse">
      <div className="h-[60vh] bg-gray-200" />
      <div className="container mx-auto px-4 py-10 space-y-4 max-w-4xl">
        <div className="h-8 bg-gray-200 rounded w-1/3" />
        <div className="h-4 bg-gray-100 rounded w-2/3" />
        <div className="h-4 bg-gray-100 rounded w-1/2" />
      </div>
    </div>
  );
}
