package array;

import java.util.ArrayList;
import java.util.Scanner;

public class ArrListPrac1 {

	public static void main(String[] args) {
		ArrayList<String> arr = new ArrayList<String>();
		
		Scanner sc = new Scanner(System.in);
		
		while(true) {
			System.out.println("문자를 입력하세요 : ");
			String str = sc.nextLine();
			if(str.equals("exit")) break;
			arr.add(str);
		}
		
		for(int i=0; i < arr.size(); i++) {
			System.out.println(arr.get(i));
		}
		sc.close();
	}

}
