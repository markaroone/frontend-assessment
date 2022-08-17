# Frontend Assessment

**Frontend Assessment for Frontend Developer Position**

This is a website created for completing the frontend technical assessment for the frontend developer position at Filta.

## Installation and Setup Instructions

For installation, clone down the repository or download the zip file and extract the contents to your machine. Make sure that `node` and `npm` are globally installed in your machine.

**Installation**:
`npm install`

**Start application**:
`npm start`

**Open Application**
`localhost:3000/`

## Technologies Used

- HTML
- CSS
- JavaScript
- React

## Answer to banana string question

Logging `('b' + 'a' + + 'a' + 'a').toLowerCase()` to the console results in: `banana`.

Adding string with another string using `+` operator will result in the concatenation of the two strings.  
This is because JavaScript checks the datatype of the data on both the left and right hand side  
 of the `+` and then automatically convert and apply proper operations depending on the datatype.  
In the case of the code above, `+ 'a'` happened first because the `+` results in a unary operation.  
The unary `+` operation is carried out first before addition `+` operation because of operator precedence.  
`+ a` can also be written like this `(+'a')`.
This results in `NaN` because JavaScript tried to convert the `a` into a number.

After the unary operation of `+a` which resulted in a string of `NaN`, the state of the operation is now  
`'b' + 'a' + 'NaN' + 'a'`. JavaScript now proceeds to add the remaining strings as no other datatype of operations are found. The result is `baNaNa`.  
The `toLowerCase()` string method modifies the string transforming all the string characters into lowercase  
and thus the string resulting in `banana`.
