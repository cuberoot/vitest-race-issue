import { describe, it, expect } from "vitest";
import { insertionSort } from "./insertionsort";

describe("insertionSort", () => {
  it("should sort an array of numbers in ascending order", () => {
    // Arrange
    const arr = [4, 2, 7, 1, 5];

    // Act
    const sortedArr = insertionSort(arr);

    // Assert
    expect(sortedArr).toEqual([1, 2, 4, 5, 7]);
  });

  it("should return an empty array if the input array is empty", () => {
    // Arrange
    const arr: number[] = [];

    // Act
    const sortedArr = insertionSort(arr);

    // Assert
    expect(sortedArr).toEqual([]);
  });

  it("should return the same array if it is already sorted", () => {
    // Arrange
    const arr = [1, 2, 3, 4, 5];

    // Act
    const sortedArr = insertionSort(arr);

    // Assert
    expect(sortedArr).toEqual([1, 2, 3, 4, 5]);
  });
});
