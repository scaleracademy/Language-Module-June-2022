package org.example;

public class Synchronisation {

    static class SyncTasks {
        int id;

        public SyncTasks(int id) {
            this.id = id;
        }
        //        final Object lock1 = new Object();
//        final Object lock2 = new Object();

        void syncWait1() {
            synchronized (this) {
                System.out.println(Thread.currentThread().getName() + "  start1 : obj" + id);
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
                System.out.println(Thread.currentThread().getName() + "  end1 : obj" + id);
            }
        }
        synchronized void syncWait2() {
            synchronized (this) {
                System.out.println(Thread.currentThread().getName() + "  start2 : obj" + id);
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
                System.out.println(Thread.currentThread().getName() + "  end2 : obj" + id);
            }
        }

        void doTask () {

            Thread t1 = new Thread(this::syncWait1);
            Thread t2 = new Thread(this::syncWait2);

            t1.start();
            t2.start();

        }

    }

    public static void main(String[] args) {
        SyncTasks tasks1 = new SyncTasks(1);
        SyncTasks tasks2 = new SyncTasks(2);
        tasks1.doTask();
        tasks2.doTask();

    }
}
