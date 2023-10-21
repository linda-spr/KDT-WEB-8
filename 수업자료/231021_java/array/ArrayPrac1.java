package array;

import java.util.Scanner;

public class ArrayPrac1 {

	public static void main(String[] args) {
//		int intArray[] = new int[5];
//		int sum = 0;
//		
//		Scanner sc = new Scanner(System.in);
//		System.out.println(intArray.length + "개의 정수를 입력해주세요.");
//		
//		for(int i=0; i <intArray.length; i++) {
//			intArray[i] = sc.nextInt();
//		}
//		for(int i=0; i <intArray.length; i++) {
//			sum += intArray[i];
//		}
//		System.out.println("평균은 " + (double)sum/intArray.length);
//		sc.close();
		
//		2차원 배열 평균 구하기
		double[][] score = {
				{3.3, 3.4},
				{3.5, 3.6},
				{3.7, 4.0},
				{4.1, 4.2}
		};
		double sum = 0;
		
//		이중 for문
		for(int year=0; year<score.length; year++) {
			for(int term=0; term<score[year].length; term++) {
				sum += score[year][term];
			}
		}
		
		int n = score.length;
		int m = score[0].length;
		System.out.println("4년 전체 평점 평균은 "+ sum/(n*m));
		
		

	}

}
