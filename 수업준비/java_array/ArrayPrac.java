package java_array;

import java.util.Scanner;

public class ArrayPrac {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.print("배열의 크기를 입력하십시오: ");
		int size = scanner.nextInt();

		if (size <= 0) {
			System.out.println("배열의 크기는 양수여야 합니다.");
			return;
		}

		int[] array = new int[size];

		try {
			System.out.println("배열 요소를 입력하십시오:");
			for (int i = 0; i < size; i++) {
				array[i] = scanner.nextInt();
			}

			// 중복된 숫자 확인 및 출력
			int start = 0;
			int maxLength = 1;
			int currentLength = 1;
			for (int i = 1; i < size; i++) {
				if (array[i] == array[i - 1]) {
					currentLength++;
					if (currentLength > maxLength) {
						maxLength = currentLength;
						start = i - maxLength + 1;
					}
				} else {
					currentLength = 1;
				}
			}

			if (maxLength > 1) {
				System.out.println("가장 긴 중복된 숫자 서브 배열:");
				for (int i = start; i < start + maxLength; i++) {
					System.out.print(array[i] + " ");
				}
				System.out.println();
			} else {
				System.out.println("중복된 숫자가 없습니다.");
			}

			// 소수 개수 계산 및 출력
			int primeCount = 0;
			for (int num : array) {
				if (isPrime(num)) {
					primeCount++;
				}
			}
			System.out.println("소수 숫자 개수: " + primeCount);

			// 각 숫자의 등장 횟수 출력
			System.out.println("각 숫자의 등장 횟수:");
			for (int num : array) {
				int count = 0;
				for (int value : array) {
					if (value == num) {
						count++;
					}
				}
				System.out.println(num + ": " + count);
			}
		} catch (java.util.InputMismatchException e) {
			System.out.println("올바른 숫자를 입력하십시오.");
		}
	}

	public static boolean isPrime(int num) {
		if (num <= 1) {
			return false;
		}
		for (int i = 2; i <= Math.sqrt(num); i++) {
			if (num % i == 0) {
				return false;
			}
		}
		return true;
	}
}
