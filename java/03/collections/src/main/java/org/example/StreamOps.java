package org.example;

import java.util.Arrays;

public class StreamOps {

    public static void main(String[] args) {

        var intList = Arrays.asList(2435, 435, 347, 35735, 6345, 6345, 4353, 454, 35435, 345123, 56, 67, 24, 13, 4, 4567, 24, 23, 4245, 357, 34, 68, 92, 34);

        intList.stream()
                .filter(integer -> integer > 100)
                .forEach(System.out::println);

        intList.stream()
                .map(Math::sqrt)
                .forEach(System.out::println);

        var sum = intList.stream()
                .reduce(Integer::sum);

        System.out.println("===============");

        System.out.println("===============");
        System.out.println("===============");

//        intList.stream().parallel()
//                .forEach(i -> System.out.println(Thread.currentThread().getName() + " " + i));
//        System.out.println("===============");
//        intList.stream().parallel()
//                .forEach(i -> System.out.println(Thread.currentThread().getName() + " " + i));

        intList.stream().parallel()
                .map(i -> {
                    System.out.println(Thread.currentThread().getName() + " " + i);
                    return i;
                })
                .sequential()
                .map(i -> {
                    System.out.println(Thread.currentThread().getName() + " " + i);
                    return i;
                })
                .forEach(i -> {
                    System.out.println(Thread.currentThread().getName() + " " + i);
                });


        System.out.println(sum.get());
    }
}
