package org.example;

public class Main {

    public static void main(String[] args) {
        System.out.println("Hello world!");

        final int[] x = {10}; // assignment #01 -> why final ?

        Runnable r = new Runnable() {
            @Override
            public void run() {
                x[0]++;
            }
        };
        r.run();

    }

    static void mod (int[] a) {
        a[0]++;
    }

}