import java.util.*;

class InvalidEmailException extends Exception{
    InvalidEmailException(String msg){
        super(msg);
    }
}

class Validate{
        void valid(String email)throws InvalidEmailException{
            if(!email.contains("@")){
                throw new InvalidEmailException("Invalid email");
            }else{
                System.out.println("Valid Email.");
            }
        }
    }
class Q4{
    
    public static void main(String[] args){
        try{
            new Validate().valid("saumyabsan@gmail.com");
        }catch(InvalidEmailException e){
            System.out.println(e.getMessage());
        }finally{
            System.out.println("Process completed");
        }

    }
}

