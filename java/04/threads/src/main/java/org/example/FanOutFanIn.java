package org.example;

import java.util.ArrayList;

public class FanOutFanIn {

    /**
     * We have an array of 50 objects
     * Print 1-10 objects sequentially in 1 thread,
     * then print 11-40 objects using N parallel threads,
     * then print 41-50 objects sequentially in 1 thread
     * <p>
     * -> do this using only threads (no executor, no forkjoinpool etc)
     */

    public static void main(String[] args) {
        new FanOutFanInJob(50, 4).run();
    }

    static class FanOutFanInJob {
        ArrayList<Integer> items;
        ArrayList<Thread> threads;

        public FanOutFanInJob(int count, int threads) {
            this.items = new ArrayList<Integer>(count);
            this.threads = new ArrayList<>(threads);

            for (int i = 1; i <= count; i++) {
                this.items.add(i);
            }
            for (int i = 0; i < threads; i++) {
                this.threads.add(new Thread());
            }
        }

        private void printItem(int index) {
            System.out.println(Thread.currentThread().getName() + "  :  " + index);
        }

        void run() {
            for (int i = 0; i < 10; i++) {
                printItem(i);
            }
            // print 11 to 40 using 4 threads

            // print 41-50 using single thread again
        }
    }


}
