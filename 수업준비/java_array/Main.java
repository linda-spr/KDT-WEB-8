package java_array;

import java.util.Arrays;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		int[] intArray;
		char[] charArray;
		
		int[] intArray2 = new int[10];
		
		char[] charArray2 = {1,2,3,4,5};
		
//		배열 출력
		for(int i=0; i < intArray2.length; i++) {
			System.out.println(intArray2[i] + " ");
		}
		System.out.println(Arrays.toString(intArray2));
		
//		2차원 배열
		int[][] intDoubleArray;
		char[][] charDoubleArray;
		
		int[][] intDoubleArray2 = new int[2][5];
		
	}

}
