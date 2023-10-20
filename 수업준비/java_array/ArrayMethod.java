package java_array;

import java.util.Arrays;

public class ArrayMethod {

	public static void main(String[] args) {
		int[] arr = {0, 1, 2, 3, 4};

		// 동일한 배열을 복사합니다.
		int[] newArray1 = Arrays.copyOf(arr, arr.length);         // [0, 1, 2, 3, 4]
		int[] newArray2 = Arrays.copyOf(arr, 3);                  // [0, 1, 2]
		int[] newArray3 = Arrays.copyOf(arr, arr.length + 3);     // [0, 1, 2, 3, 4, 0, 0, 0]
		
		int[] copyArrIdx = Arrays.copyOfRange(arr, 0, arr.length + 2);  // [0, 1, 2, 3, 4, 0, 0]
		
		int[] arr1 = {1, 2, 3, 4};
		int[] arr2 = {1, 2, 3, 4};
		int[] arr3 = {1, 2, 4, 3};
		int[] arr4 = {1, 1, 1, 1};
		int[] arr5 = {1, 1, 1, 1, 1};

		boolean isEquals1 = Arrays.equals(arr1, arr2);      // true
		boolean isEquals2 = Arrays.equals(arr1, arr3);      // false
		System.out.println(Arrays.equals(arr4, arr5));
		
		System.out.println(arr1.equals(arr2));
		System.out.println(System.identityHashCode(arr1));
		System.out.println(System.identityHashCode(arr2));
		
	}

}
