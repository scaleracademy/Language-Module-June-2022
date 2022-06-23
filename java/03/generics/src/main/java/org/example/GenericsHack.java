package org.example;

import java.util.ArrayList;
import java.util.List;

public class GenericsHack {

    public static void main(String[] args) {

        ArrayList<String> strList = new ArrayList<>();
        strList.add("asdsa");
        strList.add("gdndgn");
        ArrayList<Object> objList = new ArrayList<>();
        objList.add(10);
        objList.add(true);
        objList.add(new MyClass());

        strList.addAll((List)objList);

        System.out.println(strList.size());
    }

    static class MyClass {

    }
}
