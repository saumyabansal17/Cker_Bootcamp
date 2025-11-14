class test{
    static int count;

    test(){
        count++;
    }

    static int getCount(){
        return count;
    }  
}

public class Q1 {
    public static void main(String[] args) {
        test obj1 = new test();
        test obj2 = new test();
        test obj3 = new test();
        test obj4 = new test();
        System.out.println(test.getCount());
    }
}
