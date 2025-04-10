
export function NotFoundState() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Competitor not found</h2>
        <p className="text-muted-foreground">The requested competitor does not exist.</p>
      </div>
    </div>
  );
}
