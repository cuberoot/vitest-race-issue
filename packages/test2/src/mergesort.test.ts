import { describe, it, expect } from "vitest";
import { mergeSort } from "./mergesort";

describe("mergeSort", () => {
  it("should return an empty array when given an empty array", () => {
    const arr: number[] = [];
    const sortedArr = mergeSort(arr);
    expect(sortedArr).toEqual([]);
  });

  it("should return the same array when given an array with a single element", () => {
    const arr: number[] = [5];
    const sortedArr = mergeSort(arr);
    expect(sortedArr).toEqual([5]);
  });

  it("should sort the array in ascending order", () => {
    const arr: number[] = [4, 2, 7, 1, 5];
    const sortedArr = mergeSort(arr);
    expect(sortedArr).toEqual([1, 2, 4, 5, 7]);
  });

  it("should handle arrays with duplicate elements", () => {
    const arr: number[] = [3, 1, 2, 1, 4, 2, 3];
    const sortedArr = mergeSort(arr);
    expect(sortedArr).toEqual([1, 1, 2, 2, 3, 3, 4]);
  });

  it("should handle large arrays", () => {
    const arr: number[] = [];
    for (let i = 10000; i > 0; i--) {
      arr.push(i);
    }
    const sortedArr = mergeSort(arr);
    expect(sortedArr).toEqual([...arr].sort((a, b) => a - b));
  });
});
