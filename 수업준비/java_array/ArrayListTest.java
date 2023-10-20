package java_array;

import java.util.ArrayList;

public class ArrayListTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ArrayList<Integer> arrayList1 = new ArrayList<>();
		ArrayList<String> arrayList2 = new ArrayList<>();
		ArrayList<Double> arrayList3 = new ArrayList<>();
		
		ArrayList<Integer> arrayList = new ArrayList<>();
		arrayList.add(10);
		arrayList.add(8);
		arrayList.add(6);
		arrayList.add(4);
		  
		for(int i = 0; i < arrayList.size(); i++) {
			System.out.println( "arrayList 값 : " + arrayList.get(i) );
		}
		
		
		arrayList.add(0, 0);
		System.out.println(arrayList);
		Object[] arr = arrayList.toArray();
		System.out.println(arr.getClass());
		
		
		arrayList1.add(1);
		arrayList1.add(2);
		arrayList1.add(3);
		arrayList.addAll(arrayList1);
		for(int i = 0; i < arrayList.size(); i++) {
			System.out.println( "arrayList 값 : " + arrayList.get(i) );
		}
	}

}
