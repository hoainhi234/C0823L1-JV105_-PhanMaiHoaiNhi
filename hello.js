import java.util.Scanner;

public class hello {

    public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.println("nhap he so: ");
    int a = sc.nextInt();
    int b = sc.nextInt();
    int c = sc.nextInt();
    double D, x1, x2;
    if (a == 0) {
    if (b == 0) {
    if (c == 0) {
    System.out.println("phuong trinh vo so nghiem!!");
} else {
    System.out.println("pt vo nghiem");
}
} else {
    double xk = (-(double) c) / b;
    System.out.println("phuong trinh co nghiem x = " + xk);
}
} else {
    D = Math.pow(b, 2) - (4 * a * c);
    if (D < 0) {
        System.out.println("phuong trinh vo nghiem!!");
    } else {
        if (D == 0) {
            System.out.println("phuong trinh co nghiem kep x = " + (-b / (2 * a)));
        } else {
            x1 = (-b + Math.sqrt(D)) / (2 * a);
            x2 = (-b - Math.sqrt(D)) / (2 * a);
            System.out.println("phuong trinh co 2 nghiem : \nx1 = " + x1 + "\nx2 = " + x2);
        }
    }
}
}
}