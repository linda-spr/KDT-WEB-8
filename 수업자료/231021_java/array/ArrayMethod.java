package array;

import java.util.Arrays;
import java.util.Comparator;

public class ArrayMethod {

	public static void main(String[] args) {
		int[] arr = {0,1,2,3,4};
		
		// copyOf(arr, copy length)
		int[] newArr1 = Arrays.copyOf(arr, arr.length);
		int[] newArr2 = Arrays.copyOf(arr, 3);
		int[] newArr3 = Arrays.copyOf(arr, arr.length+3);
		
		System.out.println(Arrays.toString(newArr1));
		System.out.println(Arrays.toString(newArr2));
		System.out.println(Arrays.toString(newArr3));
		
//		copyOfRange
		int[] newArr4 = Arrays.copyOfRange(newArr3, 1, 4);
		System.out.println(Arrays.toString(newArr4));
		
//		fill
		int[] fillArr1 = new int[5];
		Arrays.fill(fillArr1, 1);
		System.out.println(Arrays.toString(fillArr1));
		
		int[] fillArr2 = new int[5];
		fillArr2[0] = 1;
		fillArr2[1] = 2;
		fillArr2[2] = 3;
		Arrays.fill(fillArr2, 3, fillArr2.length, 100);
		System.out.println(Arrays.toString(fillArr2));
		
//		sort
		int[] sortArr1 = {0,100, 1,2,3,4};
		Arrays.sort(sortArr1);
		System.out.println(Arrays.toString(sortArr1));

		Integer[] sortArr2 = {0,1,2,3,4};
		Arrays.sort(sortArr2, Comparator.reverseOrder());
		System.out.println(Arrays.toString(sortArr2));
		
		
//		equals
		int[] equalArr1 = {1,2,3,4};
		int[] equalArr2 = {1,2,3,4};
		int[] equalArr3 = {1,3,2,4};
		int[] equalArr4 = {1,2,3,4,5};
		
		System.out.println(Arrays.equals(equalArr1, equalArr2));
		System.out.println(Arrays.equals(equalArr1, equalArr3));
		System.out.println(Arrays.equals(equalArr1, equalArr4));
		
//		deepEquals
		int doubleArr1[][] = {{1,2}, {3,4}, {5,6}};
		int doubleArr2[][] = {{1,2}, {3,4}, {5,6}};
		int doubleArr3[][] = {{1,3}, {5,4}, {7,6}};
		
		System.out.println(Arrays.deepEquals(doubleArr1, doubleArr2));
		System.out.println(Arrays.deepEquals(doubleArr1, doubleArr3));
		
//		binarySearch
		System.out.println(Arrays.binarySearch(equalArr4, 3));
	}

}
