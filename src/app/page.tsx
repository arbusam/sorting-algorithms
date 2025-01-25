export default function Home() {
  return (
    <div className="w-screen h-screen grid grid-cols-3">
      <div className="w-full grid grid-rows-2">
        <div className="bg-red-500">
          <h1 className="text-center mt-4 font-bold text-3xl">Insertion Sort</h1>
        </div>
        <div className="bg-blue-500">
          <h1 className="text-center mt-4 font-bold text-3xl">Selection Sort</h1>
        </div>
      </div>
      <div className="w-full grid grid-rows-2">
        <div className="bg-green-500">
          <h1 className="text-center mt-4 font-bold text-3xl">Bubble Sort</h1>
        </div>
        <div className="bg-orange-500">
          <h1 className="text-center mt-4 font-bold text-3xl">Quick Sort</h1>
        </div>
      </div>
      <div className="w-full grid grid-rows-2">
        <div className="bg-red-500">
          <h1 className="text-center mt-4 font-bold text-3xl">Comb Sort</h1>
        </div>
        <div className="bg-blue-500">
          <h1 className="text-center mt-4 font-bold text-3xl">Bogo Sort</h1>
        </div>
      </div>
    </div>
  );
}
