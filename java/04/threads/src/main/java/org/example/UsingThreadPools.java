package org.example;


import java.util.concurrent.*;

public class UsingThreadPools {

    public static void main(String[] args) throws InterruptedException {

        ThreadPoolExecutor tpl = new ThreadPoolExecutor(
                5,
                5,
                1, TimeUnit.SECONDS,
                new ArrayBlockingQueue<>(5),
                new ThreadFactory() {
                    final String FACTORY_NAME = "scaler-thread";
                    int count = 0;
                    @Override
                    public Thread newThread(Runnable r) {
                        return new Thread(r, FACTORY_NAME + count++);
                    }
                }
        );

        Runnable printThreadName = () -> {
            for (int i = 0; i < 5; i++) {
                System.out.println("count :" + i + " \t" + Thread.currentThread().getName());
            }
        };

        for (int i = 0; i < 20; i++) {
            try {
                tpl.execute(printThreadName);
            } catch (RejectedExecutionException ree) {
                Thread.sleep(50);
                tpl.execute(printThreadName);
            }
        }
        tpl.shutdown();
    }
}
