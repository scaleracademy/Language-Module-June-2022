In Browser Console this happens 

```javascript
[] + {}
"[object Object]"
{} + []
0 
```

Explain Why ? 

For second expression => 
'{' denotes opening of a block which can have 0 or more lines of code. Am empty block returns 0 value.
                         Also due to + operator and one of the operand is a number, here 0, [] is also got typecasted, Number([]) is also 0 in JS as its coerced to empty string and it has value 0. therefore 0+0 = 0.


For First expression => 
[] coerces to empty string, and {} returns [Object Object] which are typecasted to string, so returns '[Object Objects]'                


