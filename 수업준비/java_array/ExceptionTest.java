package java_array;

import java.util.Scanner;

public class ExceptionTest {

	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);
		System.out.print("배열의 크기를 입력하십시오: ");
		int size = scanner.nextInt();

		if (size < 0) {
			System.out.println("배열의 크기는 음수일 수 없습니다.");
			return;
		}

		int[] array = new int[size];

		try {
			System.out.println("배열 요소를 입력하십시오:");
			for (int i = 0; i < size; i++) {
				array[i] = scanner.nextInt();
			}

			double average = calculateAverage(array);
			System.out.println("배열 요소의 평균은 " + average + "입니다.");
		} catch (java.util.InputMismatchException e) {
			System.out.println("올바른 숫자를 입력하십시오.");
		} catch (ArithmeticException e) {
			System.out.println("0으로 나누는 것을 피하십시오.");
		}
	}

	public static double calculateAverage(int[] array) {
		if (array.length == 0) {
			throw new ArithmeticException("배열의 길이는 0일 수 없습니다.");
		}

		int sum = 0;
		for (int value : array) {
			sum += value;
		}

		return (double) sum / array.length;
	}

}
