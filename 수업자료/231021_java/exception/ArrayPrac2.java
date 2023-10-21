package exception;

import java.util.Scanner;
import java.util.ArrayList;

public class ArrayPrac2 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int size;
		while (true) {

			System.out.print("배열의 크기를 입력하십시오: ");
			size = scanner.nextInt();

			if (size < 0) {
				System.out.println("배열의 크기는 음수일 수 없습니다.");
			} else
				break;
		}

		int[] array = new int[size];

		try {
			System.out.println("배열 요소를 입력하십시오:");
			for (int i = 0; i < size; i++) {
				array[i] = scanner.nextInt();
			}

			// 중복된 숫자 확인 및 출력
			ArrayList<ArrayList<Integer>> duplicateSubArrays = new ArrayList<>();
			ArrayList<Integer> currentSubArray = new ArrayList<>();
			for (int i = 1; i < size; i++) {
				if (array[i] == array[i - 1]) {
					currentSubArray.add(array[i]);
				} else if (!currentSubArray.isEmpty()) {
					currentSubArray.add(array[i - 1]);
					duplicateSubArrays.add(new ArrayList<>(currentSubArray));
					currentSubArray.clear();
				}
			}
			if (!currentSubArray.isEmpty()) {
				currentSubArray.add(array[size - 1]);
				duplicateSubArrays.add(new ArrayList<>(currentSubArray));
			}

			if (!duplicateSubArrays.isEmpty()) {
				System.out.println("중복된 숫자 서브 배열:");
				for (ArrayList<Integer> subArray : duplicateSubArrays) {
					System.out.print(subArray + " ");
				}
				System.out.println();
			} else {
				System.out.println("중복된 숫자가 없습니다.");
			}

		} catch (java.util.InputMismatchException e) {
			System.out.println("올바른 숫자를 입력하십시오.");
		}
		scanner.close();
	}
}
