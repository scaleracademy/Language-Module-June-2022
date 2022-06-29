package org.example;

import com.google.gson.Gson;

import java.lang.reflect.Field;

public class Main {
    static Gson g = new Gson();

    public static void main(String[] args) throws IllegalAccessException {
        System.out.println("Hello world!");

        Person p = new Person(25, "Ashok");
        String data = g.toJson(p);

        Person p2 = g.fromJson("{\"age\":34,\"name\":\"Neha\"}", Person.class);

        System.out.println(p2.age);
        System.out.println(p2.name);

        System.out.println(data);

        Vehicle car = new Vehicle(4, "red");

        Fruit mango = new Fruit(1, "sweet");

        printObject(car);
        printObject(p);
        printObject(mango);


    }


    static void printObject(Object o) throws IllegalAccessException {
        Class objClass = o.getClass();
        System.out.println("Class: " + objClass.getSimpleName());
        for (Field field : objClass.getDeclaredFields()) {
            String value = "";
            if (field.getType().equals(int.class)) {
                value = String.valueOf(field.getInt(o));
            }

            if (field.getType().equals(String.class)) {
                value = field.get(o).toString();
            }

            System.out.println("\t Field: " + field.getName() + " value: " + value);
        }
    }

}