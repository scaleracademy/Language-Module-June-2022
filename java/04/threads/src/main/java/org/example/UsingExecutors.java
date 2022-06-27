package org.example;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

public class UsingExecutors {

    public static void main(String[] args) throws InterruptedException {
        ExecutorService executor = Executors.newWorkStealingPool(5);

        Runnable printThreadName = () -> {
            for (int i = 0; i < 5; i++) {
                System.out.println("count :" + i + " \t" + Thread.currentThread().getName());
            }
        };

        for (int i = 0; i < 20; i++) {
            executor.submit(printThreadName);
        }
        executor.awaitTermination(2, TimeUnit.SECONDS);
    }
}
