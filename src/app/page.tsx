"use client";

import { use, useEffect, useState } from "react";

export default function Home() {
  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const [insertionSortArray, setInsertionSortArray] = useState<number[]>([]);
  const [insertionSorting, setInsertionSorting] = useState<boolean>(false);
  const [finishedInsertionSort, setFinishedInsertionSort] = useState<boolean>(false);
  const [insertionComparing, setInsertionComparing] = useState<number>();
  const [insertionKey, setInsertionKey] = useState<number>();

  const [selectionSortArray, setSelectionSortArray] = useState<number[]>([]);
  const [selectionSorting, setSelectionSorting] = useState<boolean>(false);
  const [finishedSelectionSort, setFinishedSelectionSort] = useState<boolean>(false);
  const [selectionComparing, setSelectionComparing] = useState<number>();
  const [selectionIndex, setSelectionIndex] = useState<number>();

  const [bubbleSortArray, setBubbleSortArray] = useState<number[]>([]);
  const [bubbleSorting, setBubbleSorting] = useState<boolean>(false);
  const [finishedBubbleSort, setFinishedBubbleSort] = useState<boolean>(false);
  const [bubbleComparing1, setBubbleComparing1] = useState<number>();
  const [bubbleComparing2, setBubbleComparing2] = useState<number>();

  const [quickSortArray, setQuickSortArray] = useState<number[]>([]);
  const [quickSorting, setQuickSorting] = useState<boolean>(false);
  const [finishedQuickSort, setFinishedQuickSort] = useState<boolean>(false);
  const [quickPivotIndex, setQuickPivotIndex] = useState<number>();
  const [quickComparingIndex, setQuickComparingIndex] = useState<number>();

  const [combSortArray, setCombSortArray] = useState<number[]>([]);
  const [combSorting, setCombSorting] = useState<boolean>(false);
  const [finishedCombSort, setFinishedCombSort] = useState<boolean>(false);
  const [combComparing1, setCombComparing1] = useState<number>();
  const [combComparing2, setCombComparing2] = useState<number>();

  const [bogoSortArray, setBogoSortArray] = useState<number[]>([]);
  const [bogoSorting, setBogoSorting] = useState<boolean>(false);
  const [finishedBogoSort, setFinishedBogoSort] = useState<boolean>(false);

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

  useEffect(() => {
    const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    setSelectionSortArray(numbers);
  }, []);

  useEffect(() => {
    if (selectionSortArray.length === 0 || selectionSorting) return;
    selectionSort();
    setSelectionSorting(true);
  }, [selectionSortArray]);

  useEffect(() => {
    const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    setBubbleSortArray(numbers);
  }, []);

  useEffect(() => {
    if (bubbleSortArray.length === 0 || bubbleSorting) return;
    bubbleSort();
    setBubbleSorting(true);
  }, [bubbleSortArray]);

  useEffect(() => {
    const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    setQuickSortArray(numbers);
  }, []);

  useEffect(() => {
    if (quickSortArray.length === 0 || quickSorting) return;
    setQuickSorting(true);
    quickSort(0, quickSortArray.length - 1).then(() => {
      setFinishedQuickSort(true);
    });
  }, [quickSortArray]);

  useEffect(() => {
    const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    setCombSortArray(numbers);
  }, []);

  useEffect(() => {
    if (combSortArray.length === 0 || combSorting) return;
    combSort();
    setCombSorting(true);
  }, [combSortArray]);

  useEffect(() => {
    const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    setBogoSortArray(numbers);
  }, []);

  useEffect(() => {
    if (bogoSortArray.length === 0 || bogoSorting) return;
    bogoSort();
    setBogoSorting(true);
  }, [bogoSortArray]);

  const insertionSort = async () => {
    if (insertionSortArray.length === 0) return;
    
    for (let i = 1; i < insertionSortArray.length; i++) {
      await sleep(1000);
      let key = insertionSortArray[i];
      setInsertionKey(key);
      let j = i - 1;
      
      while (j >= 0) {
        setInsertionComparing(j);
        await sleep(1000);
        if (insertionSortArray[j] > key) {
          insertionSortArray[j + 1] = insertionSortArray[j];
          j = j - 1;
        } else {
          break;
        }
      }
      setInsertionComparing(undefined);
      insertionSortArray[j + 1] = key;
      setInsertionSortArray([...insertionSortArray]);
    }
    await sleep(1000);
    setInsertionComparing(undefined);
    setInsertionKey(undefined);
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

  const selectionSort = async () => {
    if (selectionSortArray.length === 0) return;

    for (let i = 0; i < selectionSortArray.length; i++) {
      let min = i;
      
      for (let j = i + 1; j < selectionSortArray.length; j++) {
        await sleep(1000);
        setSelectionIndex(selectionSortArray[i]);
        setSelectionComparing(j);
        if (selectionSortArray[j] < selectionSortArray[min]) {
          min = j;
        }
      }
      await sleep(1000);
      [selectionSortArray[i], selectionSortArray[min]] = [selectionSortArray[min], selectionSortArray[i]];
      setSelectionComparing(undefined);
      setSelectionSortArray([...selectionSortArray]);
    }
    setSelectionIndex(undefined);
    setFinishedSelectionSort(true);
  }

  const replaySelectionSort = () => {
    setSelectionSorting(false);
    setFinishedSelectionSort(false);
    const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    setSelectionSortArray(numbers);
  }

  const bubbleSort = async () => {
    if (bubbleSortArray.length === 0) return;

    for (let i = 0; i < bubbleSortArray.length; i++) {
      for (let j = 0; j < bubbleSortArray.length - i - 1; j++) {
        await sleep(1000);
        setBubbleComparing1(j);
        setBubbleComparing2(j + 1);
        if (bubbleSortArray[j] > bubbleSortArray[j + 1]) {
          await sleep(1000);
          [bubbleSortArray[j], bubbleSortArray[j + 1]] = [bubbleSortArray[j + 1], bubbleSortArray[j]];
        }
        setBubbleSortArray([...bubbleSortArray]);
      }
    }
    setBubbleComparing1(undefined);
    setBubbleComparing2(undefined);
    setFinishedBubbleSort(true);
  }

  const replayBubbleSort = () => {
    setBubbleSorting(false);
    setFinishedBubbleSort(false);
    const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    setBubbleSortArray(numbers);
  }

  const quickSort = async (start: number, end: number): Promise<void> => {
    if (start >= end) return;
    
    const pivotIndex = await partition(start, end);

    await quickSort(start, pivotIndex - 1);
    await quickSort(pivotIndex + 1, end);
  }

  const partition = async (start: number, end: number): Promise<number> => {
    const pivot = quickSortArray[end];
    setQuickPivotIndex(pivot);

    let i = start;
    for (let j = start; j < end; j++) {
      setQuickComparingIndex(j);
      await sleep(1000);
      if (quickSortArray[j] < pivot) {
        [quickSortArray[i], quickSortArray[j]] = [quickSortArray[j], quickSortArray[i]];
        i++;
        setQuickSortArray([...quickSortArray]);
      }
    }
    [quickSortArray[i], quickSortArray[end]] = [quickSortArray[end], quickSortArray[i]];
    setQuickSortArray([...quickSortArray]);

    setQuickComparingIndex(undefined);
    await sleep(1000);
    setQuickPivotIndex(undefined);

    return i;
  }

  const replayQuickSort = () => {
    setQuickSorting(false);
    setFinishedQuickSort(false);
    const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    setQuickSortArray(numbers);
  }

  const combSort = async () => {
    let array = [...combSortArray];
    let gap = array.length;
    let swapped = true;

    while (gap > 1 || swapped) {
      gap = Math.floor(gap / 1.3);
      swapped = false;

      for (let i = 0; i + gap < array.length; i++) {
        setCombComparing1(i);
        setCombComparing2(i + gap);
        await sleep(1000);
        if (array[i] > array[i + gap]) {
          [array[i], array[i + gap]] = [array[i + gap], array[i]];
          swapped = true;
          setCombSortArray([...array]);
          await sleep(1000);
        }
        setCombSortArray([...array]);
      }

      setCombComparing1(undefined);
      setCombComparing2(undefined);
    }
    setFinishedCombSort(true);
  }

  const replayCombSort = () => {
    setCombSorting(false);
    setFinishedCombSort(false);
    const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    setCombSortArray(numbers);
  }

  const bogoSort = async () => {
    let array = [...bogoSortArray];
    while (!isSorted(array)) {
      const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
      for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
      }
      array = numbers;
      setBogoSortArray(array);
      await sleep(1000);
    }
    setFinishedBogoSort(true);
  }

  const isSorted = (array: number[]): boolean => {
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        return false;
      }
    }
    return true;
  }

  const replayBogoSort = () => {
    setBogoSorting(false);
    setFinishedBogoSort(false);
    const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    setBogoSortArray(numbers);
  }

  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="flex-grow grid grid-cols-1 xl:grid-cols-3">
        <div className="w-full grid grid-rows-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="bg-teal-500 dark:bg-teal-700">
            <div className="flex justify-center">
              <a target="_blank" href="https://www.geeksforgeeks.org/insertion-sort-algorithm/" className="text-center mt-5 font-bold text-3xl">Insertion Sort</a>
            </div>
            <h2 className="text-center mt-5 text-2xl">Best case: O(n) | Average case: O(n<sup>2</sup>) | Worst case: O(n<sup>2</sup>)</h2>
            <div className="flex flex-row justify-center ml-4 mt-10">
              {insertionSortArray.map((value, index) => 
                (index === insertionComparing) ? (
                  <svg key={index} width="35" height="200">
                    <rect
                      x="0" 
                      y={200 - (value * 20)} 
                      width="35" 
                      height={value * 20} 
                      fill="red" 
                    />
                  </svg>
                ) : ((value === insertionKey) ? (
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
                <button className="w-1/4 h-10 bg-blue-500 dark:bg-blue-700 text-white rounded-lg mt-5 mb-5 flex items-center justify-center" onClick={replayInsertionSort}>
                  Replay
                </button>
              )}
            </div>
          </div>
          <div className="bg-violet-600 dark:bg-violet-800">
            <div className="flex justify-center">
              <a target="_blank" href="https://www.geeksforgeeks.org/selection-sort-algorithm-2/" className="text-center mt-4 font-bold text-3xl">Selection Sort</a>
            </div>
            <h2 className="text-center mt-5 text-2xl">Best case: O(n<sup>2</sup>) | Average case: O(n<sup>2</sup>) | Worst case: O(n<sup>2</sup>)</h2>
            <div className="flex flex-row justify-center ml-4 mt-10">
              {selectionSortArray.map((value, index) => 
                (index === selectionComparing) ? (
                  <svg key={index} width="35" height="200">
                    <rect
                      x="0" 
                      y={200 - (value * 20)} 
                      width="35" 
                      height={value * 20} 
                      fill="red" 
                    />
                  </svg>
                ) : ((value === selectionIndex) ? (
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
                ))
              )}
            </div>
            <div className="flex flex-row justify-center ml-4 mt-5">
              {finishedSelectionSort && (
                <button className="w-1/4 h-10 bg-blue-500 dark:bg-blue-700 text-white rounded-lg mt-5 mb-5 flex items-center justify-center" onClick={replaySelectionSort}>
                  Replay
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="w-full grid grid-rows-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="bg-green-500 dark:bg-green-700">
           <div className="flex justify-center">
              <a target="_blank" href="https://www.geeksforgeeks.org/bubble-sort-algorithm/" className="text-center mt-4 font-bold text-3xl">Bubble Sort</a>
            </div>
            <h2 className="text-center mt-5 text-2xl">Best case: O(n) | Average case: O(n<sup>2</sup>) | Worst case: O(n<sup>2</sup>)</h2>
            <div className="flex flex-row justify-center ml-4 mt-10">
              {bubbleSortArray.map((value, index) => 
                (index === bubbleComparing1 || index === bubbleComparing2) ? (
                  <svg key={index} width="35" height="200">
                    <rect
                      x="0" 
                      y={200 - (value * 20)} 
                      width="35" 
                      height={value * 20} 
                      fill="red" 
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
              )}
            </div>
            <div className="flex flex-row justify-center ml-4 mt-5">
              {finishedBubbleSort && (
                <button className="w-1/4 h-10 bg-blue-500 dark:bg-blue-700 text-white rounded-lg mt-5 mb-5 flex items-center justify-center" onClick={replayBubbleSort}>
                  Replay
                </button>
              )}
            </div>
          </div>
          <div className="bg-orange-500 dark:bg-orange-700">
            <div className="flex justify-center">
              <a target="_blank" href="https://www.geeksforgeeks.org/quick-sort-algorithm/" className="text-center mt-4 font-bold text-3xl">Quick Sort</a>
            </div>
            <h2 className="text-center mt-5 text-2xl">Best case: O(n log n) | Average case: O(n log n) | Worst case: O(n<sup>2</sup>)</h2>
            <div className="flex flex-row justify-center ml-4 mt-10">
              {quickSortArray.map((value, index) => 
                (value === quickPivotIndex) ? (
                  <svg key={index} width="35" height="200">
                    <rect
                      x="0" 
                      y={200 - (value * 20)} 
                      width="35" 
                      height={value * 20} 
                      fill="green" 
                    />
                  </svg>
                ) : ((index === quickComparingIndex) ? (
                  <svg key={index} width="35" height="200">
                    <rect
                      x="0" 
                      y={200 - (value * 20)} 
                      width="35" 
                      height={value * 20} 
                      fill="red" 
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
              {finishedQuickSort && (
                <button className="w-1/4 h-10 bg-blue-500 dark:bg-blue-700 text-white rounded-lg mt-5 mb-5 flex items-center justify-center" onClick={replayQuickSort}>
                  Replay
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="w-full grid grid-rows-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="bg-red-500">
            <div className="flex justify-center">
              <a target="_blank" href="https://www.geeksforgeeks.org/comb-sort/" className="text-center mt-4 font-bold text-3xl">Comb Sort</a>
            </div>
            <h2 className="text-center mt-5 text-2xl">Best case: O(n log n) | Average case: O(n<sup>2</sup>) | Worst case: O(n<sup>2</sup>)</h2>
            <div className="flex flex-row justify-center ml-4 mt-10">
              {combSortArray.map((value, index) => 
                (index === combComparing1 || index === combComparing2) ? (
                  <svg key={index} width="35" height="200">
                    <rect
                      x="0" 
                      y={200 - (value * 20)} 
                      width="35" 
                      height={value * 20} 
                      fill="red" 
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
              )}
            </div>
            <div className="flex flex-row justify-center ml-4 mt-5">
              {finishedCombSort && (
                <button className="w-1/4 h-10 bg-blue-500 dark:bg-blue-700 text-white rounded-lg mt-5 mb-5 flex items-center justify-center" onClick={replayCombSort}>
                  Replay
                </button>
              )}
            </div>
          </div>
          <div className="bg-blue-500">
            <div className="flex justify-center">
              <a target="_blank" href="https://www.geeksforgeeks.org/bogosort-permutation-sort/" className="text-center mt-4 font-bold text-3xl">Bogo Sort</a>
            </div>
            <h2 className="text-center mt-5 text-2xl">Best case: O(n) | Average case: O((n + 1)!) | Worst case: O(∞)</h2>
            <div className="flex flex-row justify-center ml-4 mt-10">
              {bogoSortArray.map((value, index) => 
                <svg key={index} width="35" height="200">
                  <rect
                    x="0" 
                    y={200 - (value * 20)} 
                    width="35" 
                    height={value * 20} 
                    fill="blue" 
                  />
                </svg>
              )}
            </div>
            <div className="flex flex-row justify-center ml-4 mt-5">
              {finishedBogoSort && (
                <button className="w-1/4 h-10 bg-blue-500 dark:bg-blue-700 text-white rounded-lg mt-5 mb-5 flex items-center justify-center" onClick={replayBogoSort}>
                  Replay
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-400 dark:bg-gray-600 p-4">
        © 2025 Arhan Busam. Please note the speed of each graph is not perfectly to scale to the other graphs. Clicking each sorting algorithm heading will open an external site with more information. I do not have any control over the content of the external site.
      </footer>
    </div>
  );
}
