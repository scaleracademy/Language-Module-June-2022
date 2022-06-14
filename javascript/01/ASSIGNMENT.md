In Browser Console this happens 

```javascript
[] + {}
"[object Object]"
{} + []
0 
```

Explain Why ? 


typeOf(+[]) is a number so empty +number is 0 
