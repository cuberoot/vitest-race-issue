import { describe, it, expect } from "vitest";
import { bubbleSort } from "./bubblesort";

describe("bubbleSort", () => {
  it("should sort an empty array", () => {
    const arr: number[] = [];
    const sortedArr = bubbleSort(arr);
    expect(sortedArr).toEqual([]);
  });

  it("should sort an array with one element", () => {
    const arr = [5];
    const sortedArr = bubbleSort(arr);
    expect(sortedArr).toEqual([5]);
  });

  it("should sort an array with multiple elements in ascending order", () => {
    const arr = [4, 2, 7, 1, 5];
    const sortedArr = bubbleSort(arr);
    expect(sortedArr).toEqual([1, 2, 4, 5, 7]);
  });

  it("should sort an array with multiple elements in descending order", () => {
    const arr = [9, 6, 3, 2, 1];
    const sortedArr = bubbleSort(arr);
    expect(sortedArr).toEqual([1, 2, 3, 6, 9]);
  });

  it("should sort an array with duplicate elements", () => {
    const arr = [3, 2, 4, 2, 1];
    const sortedArr = bubbleSort(arr);
    expect(sortedArr).toEqual([1, 2, 2, 3, 4]);
  });
});
