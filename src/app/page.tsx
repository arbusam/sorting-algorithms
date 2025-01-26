"use client";

import { use, useEffect, useState } from "react";

export default function Home() {
  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const [insertionSortArray, setInsertionSortArray] = useState<number[]>([]);
  
  const [insertionSorting, setInsertionSorting] = useState<boolean>(false);

  const [finishedInsertionSort, setFinishedInsertionSort] = useState<boolean>(false);

  const [comparing, setComparing] = useState<number>();

  const [key, setKey] = useState<number>();

  useEffect(() => {
    const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    setInsertionSortArray(numbers);
  }, []);

  useEffect(() => {
    if (insertionSortArray.length === 0 || insertionSorting) return;
    insertionSort();
    setInsertionSorting(true);
  }, [insertionSortArray]);

  const insertionSort = async () => {
    if (insertionSortArray.length === 0) return;
    
    for (let i = 1; i < insertionSortArray.length; i++) {
      await sleep(1000);
      let key = insertionSortArray[i];
      setKey(key);
      let j = i - 1;
      
      while (j >= 0) {
        setComparing(j);
        await sleep(1000);
        if (insertionSortArray[j] > key) {
          insertionSortArray[j + 1] = insertionSortArray[j];
          j = j - 1;
        } else {
          break;
        }
      }
      setComparing(undefined);
      insertionSortArray[j + 1] = key;
      setInsertionSortArray([...insertionSortArray]);
    }
    setComparing(undefined);
    setKey(undefined);
    setFinishedInsertionSort(true);
  }

  const replayInsertionSort = () => {
    setInsertionSorting(false);
    setFinishedInsertionSort(false);
    const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    setInsertionSortArray(numbers);
  }

  return (
    <div className="w-screen h-screen grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      <div className="w-full grid grid-rows-2">
        <div className="bg-red-500">
          <h1 className="text-center mt-5 font-bold text-3xl">Insertion Sort</h1>
          <h2 className="text-center mt-5 text-2xl">Best case: O(n) | Average case: O(n<sup>2</sup>) | Worst case: O(n<sup>2</sup>)</h2>
          <div className="flex flex-row justify-center ml-4 mt-10">
            {insertionSortArray.map((value, index) => 
              (index === comparing) ? (
                <svg key={index} width="35" height="200">
                  <rect 
                    x="0" 
                    y={200 - (value * 20)} 
                    width="35" 
                    height={value * 20} 
                    fill="red" 
                  />
                </svg>
              ) : ((value === key) ? (
                <svg key={index} width="35" height="200">
                  <rect 
                    x="0" 
                    y={200 - (value * 20)} 
                    width="35" 
                    height={value * 20} 
                    fill="green" 
                  />
                </svg>
              ) : (
                <svg key={index} width="35" height="200">
                  <rect 
                    x="0" 
                    y={200 - (value * 20)} 
                    width="35" 
                    height={value * 20} 
                    fill="blue" 
                  />
                </svg>
              )
            ))}
          </div>
            <div className="flex flex-row justify-center ml-4 mt-5">
            {finishedInsertionSort && (
              <button className="w-1/4 h-10 bg-blue-500 text-white rounded-lg mt-5 mb-5 flex items-center justify-center" onClick={replayInsertionSort}>
                Replay
              </button>
            )}
          </div>
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
