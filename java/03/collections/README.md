
# Java Collection Framework 

Set of common Data Structures available in Java out of the box 

4 most common collection primitives 

- List 
- Set 
- Queue 
- Map


- Map 
  - **HashMap**
    - simplest way to store key-value pairs
  - **LinkedHashMap**
    - ordering of keys
- Iterable
    - Collection 
        - List 
            - **ArrayList**
              - simplest way to create a list
              - indexed access
            - **LinkedList**
              - if direct access to index not needed 
              - faster insert
            - **Vector**
              - thread safe access to all methods 
              - slower than array list
              - **Stack**
                  - thread safe push/pop
        - Queue
            - **LinkedList**
            - **ArrayDeque** 
              - insert/remove on both ends
              - not thread safe
            - **PriorityQueue**
              - for making a heap 
              - ordered queueing
        - Set
            - **HashSet**
              - store unique elements and search them
            - **TreeSet**
              - thread safe 
              - order by comparator/natural
            - **LinkedHashSet**
              - if we need ordering (insertion) of the items in a set
