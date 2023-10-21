package array;

import java.util.ArrayList;

public class ArrList {

	public static void main(String[] args) {
		ArrayList<Integer> arrList1 = new ArrayList<>();
		ArrayList<String> arrList2 = new ArrayList<>();

		arrList1.add(10);
		arrList1.add(8);
		arrList1.add(6);
		arrList1.add(4);
		arrList1.add(0, 1);
		
		// addAll
		ArrayList<Integer> arrList3 = new ArrayList<>();
		arrList3.add(1);
		arrList3.add(2);
		arrList1.addAll(arrList3);
		
		// remove
		arrList1.remove(0);
		
		for(int i = 0; i < arrList1.size(); i++) {
			System.out.println(arrList1.get(i));
		}
		
		// indexOf
		System.out.println(arrList1.indexOf(1));
		System.out.println(arrList1.indexOf(12));
		
		// clear
		System.out.println("clear");
		arrList1.clear();
		System.out.println(arrList1.size());
		
	}

}
