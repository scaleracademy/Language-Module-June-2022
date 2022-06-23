package org.example;

import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

/**
 * covariance, contravariance and invariance
 *
 * y = f(x) f ->List List<X>
 *          f -> add()
 * A, B; where A extends B
 *
 * covariance
 * f(A) extends f(B)
 *
 * contravariance
 * f(B) extends from f(A)
 *
 */

public class Generics {
    public static void main(String[] args) {

        Truck t = new Truck();
        t.insert(new Cement());
        ArrayList<Sand> sandBags = new ArrayList<>(2);
        sandBags.add(new Sand());
        sandBags.add(new Sand());
        t.insertAll(sandBags);
        t.printStatus();
    }

    static class Goods {}
    static class Cement extends Goods {}
    static class Sand extends Goods {}
    static class Person {}
    static class Student extends Person {}

    static class Vehicle<T> {
        Stack<T> items = new Stack<>();
        int capacity = 10;
        private int filled = 0;
        void printStatus() {
            items.forEach(t -> System.out.println(t));
        }

        void insertAll(List<? extends T> items) {
            filled += items.size(); // check if filled <= capacity
            this.items.addAll(items);
        }

        void insert(T item) {
            filled++; // check if filled <= capacity
            items.add(item);
        }
        T unload () {
            T item = items.pop();
            filled--; // check if filled >= 0
            return item;
        }
    }

    static class SchoolBus extends Vehicle<Person> {}
    static class Truck extends Vehicle<Goods> {}
}

// assignment #02 -> where would we need contravariance ??