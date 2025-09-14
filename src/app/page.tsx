export default function Home() {
  console.log('test');
  const renderName = () => {
    const name = 'Amin';
    return <span>{name}</span>;
  };
  return (
    <div>
      <h1 className="font-bold text-blue-600">Hi</h1>
      {renderName()}
    </div>
  );
}
