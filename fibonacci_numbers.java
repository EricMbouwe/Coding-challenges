import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int t = in.nextInt();
        for(int a0 = 0; a0 < t; a0++){
            long n = in.nextLong();
            int result = evenValueSum(n);
            System.out.println(result);
        }
    }
  
    static int evenValueSum(long n){
      int sum = 0;
      for(int i = 0; i < n; i++){
        if((fib(i) < n) && (fib(i)%2 == 0)){
          sum += fib(i);
        }
        else if (fib(i) > n){
          break;
        }
      }
      return sum;
    }
  
    static int fib(int n){
      if((n == 0) || (n == 1)){
        return 1;
      }
      else{
        return fib(n - 1) + fib(n - 2);
      }
    }
}