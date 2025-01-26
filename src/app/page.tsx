"use client";

import { use, useEffect, useState } from "react";

export default function Home() {
  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const [insertionSortArray, setInsertionSortArray] = useState<number[]>([]);
  const [insertionSorting, setInsertionSorting] = useState<boolean>(false);
  const [finishedInsertionSort, setFinishedInsertionSort] =
    useState<boolean>(false);
  const [insertionComparing, setInsertionComparing] = useState<number>();
  const [insertionKey, setInsertionKey] = useState<number>();

  const [selectionSortArray, setSelectionSortArray] = useState<number[]>([]);
  const [selectionSorting, setSelectionSorting] = useState<boolean>(false);
  const [finishedSelectionSort, setFinishedSelectionSort] =
    useState<boolean>(false);
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
  };

  const replayInsertionSort = () => {
    setInsertionSorting(false);
    setFinishedInsertionSort(false);
    const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    setInsertionSortArray(numbers);
  };

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
      [selectionSortArray[i], selectionSortArray[min]] = [
        selectionSortArray[min],
        selectionSortArray[i],
      ];
      setSelectionComparing(undefined);
      setSelectionSortArray([...selectionSortArray]);
    }
    setSelectionIndex(undefined);
    setFinishedSelectionSort(true);
  };

  const replaySelectionSort = () => {
    setSelectionSorting(false);
    setFinishedSelectionSort(false);
    const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    setSelectionSortArray(numbers);
  };

  const bubbleSort = async () => {
    if (bubbleSortArray.length === 0) return;

    for (let i = 0; i < bubbleSortArray.length; i++) {
      for (let j = 0; j < bubbleSortArray.length - i - 1; j++) {
        await sleep(1000);
        setBubbleComparing1(j);
        setBubbleComparing2(j + 1);
        if (bubbleSortArray[j] > bubbleSortArray[j + 1]) {
          await sleep(1000);
          [bubbleSortArray[j], bubbleSortArray[j + 1]] = [
            bubbleSortArray[j + 1],
            bubbleSortArray[j],
          ];
        }
        setBubbleSortArray([...bubbleSortArray]);
      }
    }
    setBubbleComparing1(undefined);
    setBubbleComparing2(undefined);
    setFinishedBubbleSort(true);
  };

  const replayBubbleSort = () => {
    setBubbleSorting(false);
    setFinishedBubbleSort(false);
    const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    setBubbleSortArray(numbers);
  };

  const quickSort = async (start: number, end: number): Promise<void> => {
    if (start >= end) return;

    const pivotIndex = await partition(start, end);

    await quickSort(start, pivotIndex - 1);
    await quickSort(pivotIndex + 1, end);
  };

  const partition = async (start: number, end: number): Promise<number> => {
    const pivot = quickSortArray[end];
    setQuickPivotIndex(pivot);

    let i = start;
    for (let j = start; j < end; j++) {
      setQuickComparingIndex(j);
      await sleep(1000);
      if (quickSortArray[j] < pivot) {
        [quickSortArray[i], quickSortArray[j]] = [
          quickSortArray[j],
          quickSortArray[i],
        ];
        i++;
        setQuickSortArray([...quickSortArray]);
      }
    }
    [quickSortArray[i], quickSortArray[end]] = [
      quickSortArray[end],
      quickSortArray[i],
    ];
    setQuickSortArray([...quickSortArray]);

    setQuickComparingIndex(undefined);
    await sleep(1000);
    setQuickPivotIndex(undefined);

    return i;
  };

  const replayQuickSort = () => {
    setQuickSorting(false);
    setFinishedQuickSort(false);
    const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    setQuickSortArray(numbers);
  };

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
  };

  const replayCombSort = () => {
    setCombSorting(false);
    setFinishedCombSort(false);
    const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    setCombSortArray(numbers);
  };

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
  };

  const isSorted = (array: number[]): boolean => {
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        return false;
      }
    }
    return true;
  };

  const replayBogoSort = () => {
    setBogoSorting(false);
    setFinishedBogoSort(false);
    const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    setBogoSortArray(numbers);
  };

  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="flex-grow grid grid-cols-1 xl:grid-cols-3">
        <div className="w-full grid grid-rows-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="bg-teal-500 dark:bg-teal-700">
            <div className="flex justify-center">
              <a
                target="_blank"
                href="https://www.geeksforgeeks.org/insertion-sort-algorithm/"
                className="text-center mt-5 font-bold text-3xl"
              >
                Insertion Sort
              </a>
            </div>
            <h2 className="text-center mt-5 text-2xl">
              Best case: O(n) | Average case: O(n<sup>2</sup>) | Worst case: O(n
              <sup>2</sup>)
            </h2>
            <div className="flex flex-row justify-center ml-4 mt-10">
              {insertionSortArray.map((value, index) =>
                index === insertionComparing ? (
                  <svg key={index} width="35" height="200">
                    <rect
                      x="0"
                      y={200 - value * 20}
                      width="35"
                      height={value * 20}
                      fill="red"
                    />
                  </svg>
                ) : value === insertionKey ? (
                  <svg key={index} width="35" height="200">
                    <rect
                      x="0"
                      y={200 - value * 20}
                      width="35"
                      height={value * 20}
                      fill="green"
                    />
                  </svg>
                ) : (
                  <svg key={index} width="35" height="200">
                    <rect
                      x="0"
                      y={200 - value * 20}
                      width="35"
                      height={value * 20}
                      fill="blue"
                    />
                  </svg>
                ),
              )}
            </div>
            <div className="flex flex-row justify-center ml-4 mt-5">
              {finishedInsertionSort && (
                <button
                  className="w-1/4 h-10 bg-blue-500 dark:bg-blue-700 text-white rounded-lg mt-5 mb-5 flex items-center justify-center"
                  onClick={replayInsertionSort}
                >
                  Replay
                </button>
              )}
            </div>
          </div>
          <div className="bg-violet-600 dark:bg-violet-800">
            <div className="flex justify-center">
              <a
                target="_blank"
                href="https://www.geeksforgeeks.org/selection-sort-algorithm-2/"
                className="text-center mt-4 font-bold text-3xl"
              >
                Selection Sort
              </a>
            </div>
            <h2 className="text-center mt-5 text-2xl">
              Best case: O(n<sup>2</sup>) | Average case: O(n<sup>2</sup>) |
              Worst case: O(n<sup>2</sup>)
            </h2>
            <div className="flex flex-row justify-center ml-4 mt-10">
              {selectionSortArray.map((value, index) =>
                index === selectionComparing ? (
                  <svg key={index} width="35" height="200">
                    <rect
                      x="0"
                      y={200 - value * 20}
                      width="35"
                      height={value * 20}
                      fill="red"
                    />
                  </svg>
                ) : value === selectionIndex ? (
                  <svg key={index} width="35" height="200">
                    <rect
                      x="0"
                      y={200 - value * 20}
                      width="35"
                      height={value * 20}
                      fill="green"
                    />
                  </svg>
                ) : (
                  <svg key={index} width="35" height="200">
                    <rect
                      x="0"
                      y={200 - value * 20}
                      width="35"
                      height={value * 20}
                      fill="blue"
                    />
                  </svg>
                ),
              )}
            </div>
            <div className="flex flex-row justify-center ml-4 mt-5">
              {finishedSelectionSort && (
                <button
                  className="w-1/4 h-10 bg-blue-500 dark:bg-blue-700 text-white rounded-lg mt-5 mb-5 flex items-center justify-center"
                  onClick={replaySelectionSort}
                >
                  Replay
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="w-full grid grid-rows-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="bg-green-500 dark:bg-green-700">
            <div className="flex justify-center">
              <a
                target="_blank"
                href="https://www.geeksforgeeks.org/bubble-sort-algorithm/"
                className="text-center mt-4 font-bold text-3xl"
              >
                Bubble Sort
              </a>
            </div>
            <h2 className="text-center mt-5 text-2xl">
              Best case: O(n) | Average case: O(n<sup>2</sup>) | Worst case: O(n
              <sup>2</sup>)
            </h2>
            <div className="flex flex-row justify-center ml-4 mt-10">
              {bubbleSortArray.map((value, index) =>
                index === bubbleComparing1 || index === bubbleComparing2 ? (
                  <svg key={index} width="35" height="200">
                    <rect
                      x="0"
                      y={200 - value * 20}
                      width="35"
                      height={value * 20}
                      fill="red"
                    />
                  </svg>
                ) : (
                  <svg key={index} width="35" height="200">
                    <rect
                      x="0"
                      y={200 - value * 20}
                      width="35"
                      height={value * 20}
                      fill="blue"
                    />
                  </svg>
                ),
              )}
            </div>
            <div className="flex flex-row justify-center ml-4 mt-5">
              {finishedBubbleSort && (
                <button
                  className="w-1/4 h-10 bg-blue-500 dark:bg-blue-700 text-white rounded-lg mt-5 mb-5 flex items-center justify-center"
                  onClick={replayBubbleSort}
                >
                  Replay
                </button>
              )}
            </div>
          </div>
          <div className="bg-orange-500 dark:bg-orange-700">
            <div className="flex justify-center">
              <a
                target="_blank"
                href="https://www.geeksforgeeks.org/quick-sort-algorithm/"
                className="text-center mt-4 font-bold text-3xl"
              >
                Quick Sort
              </a>
            </div>
            <h2 className="text-center mt-5 text-2xl">
              Best case: O(n log n) | Average case: O(n log n) | Worst case: O(n
              <sup>2</sup>)
            </h2>
            <div className="flex flex-row justify-center ml-4 mt-10">
              {quickSortArray.map((value, index) =>
                value === quickPivotIndex ? (
                  <svg key={index} width="35" height="200">
                    <rect
                      x="0"
                      y={200 - value * 20}
                      width="35"
                      height={value * 20}
                      fill="green"
                    />
                  </svg>
                ) : index === quickComparingIndex ? (
                  <svg key={index} width="35" height="200">
                    <rect
                      x="0"
                      y={200 - value * 20}
                      width="35"
                      height={value * 20}
                      fill="red"
                    />
                  </svg>
                ) : (
                  <svg key={index} width="35" height="200">
                    <rect
                      x="0"
                      y={200 - value * 20}
                      width="35"
                      height={value * 20}
                      fill="blue"
                    />
                  </svg>
                ),
              )}
            </div>
            <div className="flex flex-row justify-center ml-4 mt-5">
              {finishedQuickSort && (
                <button
                  className="w-1/4 h-10 bg-blue-500 dark:bg-blue-700 text-white rounded-lg mt-5 mb-5 flex items-center justify-center"
                  onClick={replayQuickSort}
                >
                  Replay
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="w-full grid grid-rows-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="bg-red-500">
            <div className="flex justify-center">
              <a
                target="_blank"
                href="https://www.geeksforgeeks.org/comb-sort/"
                className="text-center mt-4 font-bold text-3xl"
              >
                Comb Sort
              </a>
            </div>
            <h2 className="text-center mt-5 text-2xl">
              Best case: O(n log n) | Average case: O(n<sup>2</sup>) | Worst
              case: O(n<sup>2</sup>)
            </h2>
            <div className="flex flex-row justify-center ml-4 mt-10">
              {combSortArray.map((value, index) =>
                index === combComparing1 || index === combComparing2 ? (
                  <svg key={index} width="35" height="200">
                    <rect
                      x="0"
                      y={200 - value * 20}
                      width="35"
                      height={value * 20}
                      fill="red"
                    />
                  </svg>
                ) : (
                  <svg key={index} width="35" height="200">
                    <rect
                      x="0"
                      y={200 - value * 20}
                      width="35"
                      height={value * 20}
                      fill="blue"
                    />
                  </svg>
                ),
              )}
            </div>
            <div className="flex flex-row justify-center ml-4 mt-5">
              {finishedCombSort && (
                <button
                  className="w-1/4 h-10 bg-blue-500 dark:bg-blue-700 text-white rounded-lg mt-5 mb-5 flex items-center justify-center"
                  onClick={replayCombSort}
                >
                  Replay
                </button>
              )}
            </div>
          </div>
          <div className="bg-blue-500">
            <div className="flex justify-center">
              <a
                target="_blank"
                href="https://www.geeksforgeeks.org/bogosort-permutation-sort/"
                className="text-center mt-4 font-bold text-3xl"
              >
                Bogo Sort
              </a>
            </div>
            <h2 className="text-center mt-5 text-2xl">
              Best case: O(n) | Average case: O((n + 1)!) | Worst case: O(∞)
            </h2>
            <div className="flex flex-row justify-center ml-4 mt-10">
              {bogoSortArray.map((value, index) => (
                <svg key={index} width="35" height="200">
                  <rect
                    x="0"
                    y={200 - value * 20}
                    width="35"
                    height={value * 20}
                    fill="blue"
                  />
                </svg>
              ))}
            </div>
            <div className="flex flex-row justify-center ml-4 mt-5">
              {finishedBogoSort && (
                <button
                  className="w-1/4 h-10 bg-blue-500 dark:bg-blue-700 text-white rounded-lg mt-5 mb-5 flex items-center justify-center"
                  onClick={replayBogoSort}
                >
                  Replay
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-400 dark:bg-gray-600 p-4">
        <div className="flex justify-between items-center">
          <div>
            © 2025 Arhan Busam. Please note the speed of each graph is not
            perfectly to scale to the other graphs. Clicking each sorting
            algorithm heading will open an external site with more information.
            I do not have any control over the content of the external site.
          </div>
          <div className="flex space-x-5 rtl:space-x-reverse">
            <a
              href="https://github.com/arbusam/sorting-algorithms/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="h-4 w-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub account</span>
            </a>
            <a
              href="https://bsky.app/profile/arhan.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="h-4 w-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 568 501"
              >
                <path
                  fill="currentColor"
                  d="M123.121 33.664C188.241 82.553 258.281 181.68 284 234.873c25.719-53.192 95.759-152.32 160.879-201.21C491.866-1.611 568-28.906 568 57.947c0 17.346-9.945 145.713-15.778 166.555-20.275 72.453-94.155 90.933-159.875 79.748C507.222 323.8 536.444 388.56 473.333 453.32c-119.86 122.992-172.272-30.859-185.702-70.281-2.462-7.227-3.614-10.608-3.631-7.733-.017-2.875-1.169.506-3.631 7.733-13.43 39.422-65.842 193.273-185.702 70.281-63.111-64.76-33.89-129.52 80.986-149.071-65.72 11.185-139.6-7.295-159.875-79.748C9.945 203.659 0 75.291 0 57.946 0-28.906 76.135-1.612 123.121 33.664Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
