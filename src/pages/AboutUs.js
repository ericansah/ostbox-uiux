import React from 'react';
import './AboutUs.css';


const AboutUs = () => {
    return (

      <> 
 <section className="aboutus-section">

      <div className="container">

          <h1>About Us</h1>


          <div>
            <h1>1. Turing Machine (Computer)</h1>
            <p>
              A computer is a peice of tape that holds 1s and 0s, along with a device 
              that can read and write to it, it's called a Turing Machine, and in theory it
              can compute anything like a youtube video graphics, or an algorithm that 
              can recommend that you watch a video on youtube. 
            </p>
          </div>


          <div>
            <h1>2. Central Processing Unit (CPU)</h1>
            <p>
            At the core of modern computers, we have the cental processing unit, if we crack it open
            we will find a peice of silicon that contains billons of tiny transistors. 
            </p>
          </div>



          <div>
            <h1>3. Transistors</h1>
            <p>
            Transistors are like microscopic ON and OFF switches, the value at one of these swtiches is called a bit. 
            </p>
          </div>


          <div>
            <h1>4. Bit</h1>
            <p>
            A bit is the smallest peice of information a computer can use, however one bit by itself is not very 
            useful so they come in a pack of eight (11110000) called a Byte.
            </p>
          </div>






          <div>
            <h1>5. Byte</h1>
            <p>
              One byte can represent 256 different values, like all the characters that you type on your
              keyboard.
            </p>
          </div>


          
          <div>
            <h1>6. ASCII CHARACTER ENCODING</h1>
            In fact, when you type into your keyboard, the character produced is actually mapped to a binary value
            (A. 01000001, B. 01000010, C.01000011, D. 01000100, E. 01000101, F. 01000110) in a character encoding 
            like ASCII or utf-8.
            <p>

            </p>
          </div>


          
          <div>
            <h1>7. Binary</h1>
            <p>
            Binary is just a system for counting, like the base 10 system we normally use when counting on 
            your fingers, but binary has only two characters 1 and 0. Humans have a hard time reading binary so
            most often it's represented in a hexadecimal.

            </p>
          </div>


          
          <div>
            <h1>8. Hexidecimal</h1>
            <p>
              Hexidecimal uses base 16 format in counting, where numbers and six letters can represent a 4 bit 
              group called a Nibble.

            </p>
          </div>

          
          <div>
            <h1>9. Nibble</h1>
            <p>
              A nibbld is 4 bit group (1011).
              
            </p>
          </div>


          
          <div>
            <h1>10. Machine Code</h1>
            <p>
            As a developer, when you write code in a programming language, it will eventually be
            converted into a machine code which is a binary format that can be decoded and executed by
            the cpu, what it doesn't do though is store data for your applications.

            </p>
          </div>



                    
          <div>
            <h1>11. Random Access Memory (RAM)</h1>
            <p>
              To store data for application processing, computers have random access memory or ram, it's
              like a neighborhood, and inside every house lives a byte (010110001) (01101110) (01110110) (11001100) 
              (10010011) (11110010). 
            </p>
          </div>


                       
          <div>
            <h1>12 Memory Address</h1>
            <p>
            Every byte location has a memory address which the cpu can read from and write to. 
             (010110001) = 0x00, (01101110) = 0x01, (01110110) = 0x02, 
              (11001100) = 0xFD, (10010011) = 0xFE,  (11110010) = 0xFF.
              You can think of the cpu and ram as the brain of the computer but in order for a computer to needs to 
              handle Input and Output.
            </p>
          </div>


                       
          <div>
            <h1>13. Input / Output</h1>
            <p>
              An input device might be the keyboard and mouse, while an output device might be 
              a monitor, luckly most developers don't need to worry about how this hardware fits and 
              work together, because we have operating system kernels.
              
            </p>
          </div>


                       
          <div>
            <h1>14. KERNEL</h1>
            <p>
              Operating stystem kernels like Linux, Mac and Windows controls all hardware resources
              via device drivers, now to hacking on the operating system your first entry point is the shell.
              
            </p>
          </div>


                       
          <div>
            <h1>15. Shell</h1>
            <p>
              The shell is a program that exposes operating system to the end user, it's called a shell
              because it wraps the kernel, it takes a line of text as input and produces an output, this is called 
              command line interface. 
              
            </p>
          </div>


                       
          <div>
            <h1>16. Command line Interface</h1>
            <p>
            The command line interface connect to your own computer.
              
            </p>
          </div>


                       
          <div>
            <h1>17. Secure Shell Protocol (SSL)</h1>
            <p>
              With secure shell protocol, the shell can also connect to remote computers over a 
              network. 
            </p>
          </div>


                       
          <div>
            <h1>18. Mainframe</h1>
            <p>
              Now that you have access to the mainframe, it's time to pick a programming language.
            </p>
          </div>


                       
          <div>
            <h1>19. Programming Language</h1>
            <p>
              A programming languague is a tool that uses the abstraction principles.
            </p>
          </div>


                       
          <div>
            <h1>20.  Abstraction Principles</h1>
            <p>
              The abstraction principle make computers practical to work with for humans by simplifying 
              different systems layer by layer, some languages like Python, are interpreted.
            </p>
          </div>


                       
          <div>
            <h1>21. Interpreted Programming Language</h1>
            <p>
             An interpreted programming language means that there's a program called an interpretor
             that will execute each line of code line by line or one by one. Other languages like C++ are 
             compiled.
            </p>
          </div>


                       
          <div>
            <h1>22. Compiled Programming Languages</h1>
            <p>
              Programming languages such as C++ uses a compiler to convert entire program into machine code in 
              advance before the cpu attempts to execute it. This result in an executable file.
              
            </p>
          </div>



          <div>
            <h1>23. Executable</h1>
            <p>
              Executable is a program file that can be run by the operating system
              without any extra dependencies.
              
            </p>
          </div>



          <div>
            <h1>24. Data Types</h1>
            <p>
              Every programming language has a variety of built in data  types (string, bitmap, bitfield, 
              hash, list, set, sorted set, geospatial, hyperlog, stream) to represent 
              the data we are working with in our code instead of bytes, we work with more human friendly
              data types like a string of characters ("Hi") and numbers (123).
            </p>
          </div>



          <div>
            <h1>25. Variables</h1>
            <p>
                The most fundamental way to use data in your application is to declear a variable. Variable 
                declearation attaches a name to a data point, allowing you to reuse it somewhere else in your 
                code.
            </p>
          </div>

          
          <div>
            <h1>26. Dynamically Typed</h1>
            <p>
              Python is a dynamically typed language which means we don't need to tell the program
              exactly which data type is assigned to a variable, it just figures it out automatically.

              
            </p>
          </div>

          

          <div>
            <h1>27. Statically Typed</h1>
            <p>
              Other languages like C are statically typed, and that means you need to specify 
              the data type of a variable in your code. When you define a variable, it value is stored
              somewhere in memory on the hardware and you may need to allocate and free up memory throughout 
              the program.
              
            </p>
          </div>


          <div>
            <h1>28. Pointer</h1>
            <p>
              A pointer is variable, whose value is the memory address of another variable, which can be 
              used for low level memory control. Many languages don't want to deal with low level memory management
              and instead implement a garbage collection system.
              
            </p>
          </div>


          <div>
            <h1>29. Garbage Collector</h1>
            <p>
              Garbage collector automatically allocate and de-allocate memory when an object 
              is no longer referenced in the program. 
              
            </p>
          </div>


          <div>
            <h1>30. INT data type (Interger)</h1>
            <p>
              Int data type represent whole numbers.
              
            </p>
          </div>


          <div>
            <h1>31. Signed</h1>
            <p>
              Int data type (whole number) may be signed or unsigned to represent negative numbers as well.
              
            </p>
          </div>



          <div>
            <h1>32. Floating Point</h1>
            <p>
              When numbers require a decimal point they typically use the floating point type, it's called 
              a float because there is only enough memory to represent a certain range of numbers at a certain
              precision and is basically a form of scientific notation to make computers faster if you need more 
              range or precision. 
              
            </p>
          </div>

  
          <div>
            <h1>33. Double</h1>
            <p>
              Many languages also have a double data type, that doubles the amount of memory used for 
              the number.
              
            </p>
          </div>

          <div>
            <h1>34. Char</h1>
            <p>
                When it comes chatracters, you will typically find the char data type
                to represent a single character "A".
            </p>
          </div>



          <div>
            <h1>35. String</h1>
            <p>
              A string represent a string of multiple characters "ABCDEFG".  Ultimately
              the charaters get stored in a memory address somewhere, but they need to be stored 
              in a certain order. 
              
            </p>
          </div>




          

          <div>
            <h1>36. Big Endian</h1>
            <p>
            Big endian is when the order of stored characters starts with the most significant byte and the smallest
            memory address.
              
            </p>
          </div>



          <div>
            <h1>37. Little Endian</h1>
            <p>
            Little endian is when the order of stored characters starts with the least significant byte and the smallest
            memory address.
              
            </p>
          </div>



          <div>
            <h1>38. Data Structures</h1>
            <p>
              When it comes to practical software engineering, one of the most fundamental things to do 
              is to organise data into data structures. 
              
            </p>
          </div>

          
          <div>
            <h1>39. Array or List</h1>
            <p>
              The most useful data structure is probably the array or list, just like a shopping list
              it organises multiple data points in order, however it also maintains an index of intergers
              that starts at zero and goes up for every new item in the list. That can be useful but you don't 
              actually need an index to create a list of items, another option is linked list.
            </p>
          </div>

          

          <div>
            <h1>40. Linked List</h1>
            <p>
              With linked list, each item has a pointer to the next item in front of it. Another option is a stack. 
              
            </p>
          </div>


          <div>
            <h1>41. Stack</h1>
            <p>
              Stack follows the last in first out principle, is like stacking a set of plates on top of each Other
              and when you want access the data you pop the last one off the top.
            </p>
          </div>


          <div>
            <h1>42. Queue</h1>
            <p>
              A queue is the inverse option to stack, which is first in first out.
              
            </p>
          </div>


          <div>
            <h1>43. Hash</h1>
            <p>
              Another extremely useful data structure is the hash, which might also be called a map or dictionary, 
              it's like an array but instead of an index of intergers, you define the keys that point to each individual
              item, giving you a collection of key value pairs. In many cases though it's not efficient to organise data 
              in a linear way, to address that problem we have trees.
              
            </p>
          </div>


          <div>
            <h1>44. Trees</h1>
            <p>
              Trees organise nodes together in a hierarchy that can of ten be traversed more quickly. this can sometimes
              be too rigid of a data structure though, so instead a graph can be created.
            </p>
          </div>



          <div>
            <h1>45. Graph</h1>
            <p>
             A graph connect multiple nodes together in a virtually unlimited number of ways, and it has a node
            for the data and an edge for the relationship between the data points. Data structures are essential
            but they do anything by themselves.

            </p>
          </div>

  
          <div>
            <h1>46. Graph Node and Edge</h1>
            <p>
              A graph has a node for the data and an edge for the relationship between the data points.
              
            </p>
          </div>

          <div>
            <h1>47. Algorithm</h1>
            <p>
              Data structures are essential but they do anything by themselves, to some useful with data 
              structures, you will need to code up an algorithm, which is just code that solve a problem.
            </p>
          </div>



          <div>
            <h1>48. Function</h1>
            <p>
              In a code we have several mechanisms for inplementing algarithm, the most fundamental of which
              is a function, which is a block of code that takes an input then does something. and returns an 
              output. 
              
            </p>
          </div>

    

         

          <div>
            <h1>49. Return</h1>
            <p>

            Returns an output of fucntion input data process.
              
            </p>
          </div>



          <div>
            <h1>50. Argument</h1>
            <p>
            Like a variable, a function has name and it can be called from other parts of your code
            with different input parameters inside parenthesis wihich are mapped to value clled argument,
            provided in the function call/invokation/execution statement within parenthesis. 
            </p>
          </div>



          <div>
            <h1>51. Operators</h1>
            <p>
            One thing you might do in a function body is to compare one value to another. Every 
            programming language has a variety of built-in operators like equallity comparison, greater 
            than or less than that you can use to compare two values, if a is greater than b then it forms 
            value of true, but if b is greater than a then it forms a value of false.
            </p>
          </div>

          
          <div>
            <h1>52. Boolean data type</h1>
            <p>
              True or False is what is known as a boolean data type.
              
            </p>
          </div>

          

          <div>
            <h1>53. Expression</h1>
            <p>
              Whenever your code produces a value like true or false, it's known as an expression.
              
              
            </p>
          </div>


          <div>
            <h1>54. Statement</h1>
            <p>
            Not all code produce a value, sometimes your code will simply do something which is known as 
              statement.
            </p>
          </div>


          <div>
            <h1>55. Conditional Logic</h1>
            <p>
              A good example of a statement is the if statement, which handles conditional Logic,
              for example if the conditon is true, it will execute/run this code, and otherwise if the condition 
              is false, it will short circut and run the code inside of the else block.
              
            </p>
          </div>


          <div>
            <h1>56. While Loop</h1>
            <p>
              Another common type of statement is a loop. A while loop will run this block of code
              over and over again until the condition in the parentheses becomes false, that can be useful
              but more often than not you want to loop over iterable data.
            </p>
          </div>


          <div>
            <h1>57. Iterable data type</h1>
            <p>
              An array is an iterable data type. 
            </p>
          </div>



          <div>
            <h1>58. For Loop</h1>
            <p>
            Most programming languages have a for loop that can run
              some code for every object in the array or iterable data structure. 
              For each item in the array or iterable data do something.
            </p>
          </div>

  
          <div>
            <h1>59. Void</h1>
            <p>
              In some cases a function may not have an ouput, which is generally called a Void
              function. In simplest terms, in a void function there is no return value.
            </p>
          </div>

          <div>
            <h1>60. Recurssion</h1>
            <p>
              An interesting thing about functions is that they call themselves, when a fucntion call itself, 
              it is called recurssion, because when a function call itself it will recurse forever creating an
              infinite loop. Infinite loop happens because when you call a function the programming language will
              put it into short term memory on what is known as the call stack.

            </p>
          </div>



          <div>
            <h1>61. Call Stack</h1>
            <p>
             The call stack is a short term chunk of memory for executing code. 
            </p>
          </div>



       

          <div>
            <h1>62. Stack Overflow Error</h1>
            <p>
            When a function keep calling itself the language will keep pushing frames onto the call stack until you get 
             stack overflow error. 
            </p>
          </div>



          <div>
            <h1>63. Base Condition</h1>
            <p>
            To avoid stack overflow error, your algorithm needs a base condition so it 
             knows when to terminate the loop.
            </p>
          </div>



          <div>
            <h1>64. Big-O Notation</h1>
            <p>
              When you write an algarithm, you will need to determine if it's any good and system for doing that
              is called big-O notation, it's a standard format for approximating the performance of an algorithm
              at scale. 
            </p>
          </div>


          <div>
            <h1>65. Time Complexity</h1>
            <p>
              The big-O notation scale may reference time complexity which is how fast your algorithm will run 
            </p>
          </div>


          
          <div>
            <h1>66. Space Complexity</h1>
            <p>
              The big-O notation may also reference space complexity
              which deal with how much memory is required to run your algoritm.
            </p>
          </div>




          
          <div>
            <h1>67. Brute Force</h1>
            <p>
              Developers have many deferent algorithm types at their disposal, the most crude option is 
              brute force, where you might loop over evry possible combination to hack into some other network
              system or computer password or pin.
            </p>
          </div>

          

          <div>
            <h1>68. Divide and Conquer</h1>
            <p>
              Divide and conquer is a more sophisticated approach to algarithm, like binary search where you
              cut the problem in half multiple times until you find what you are looking for.
              
            </p>
          </div>


          <div>
            <h1>69. Dynamic Programming</h1>
            <p>
              Dynamic programming is another algarithm option, where a problem is broken down into
              multiple smaller sub-problems and the result of each computation is stored for later use.
            </p>
          </div>


          <div>
            <h1>70. Memorisation</h1>
            <p>
              Memorisation is a technique for accesing a store program in the computer memory. This means
              if a function has already been called, it will use the existing value instead of recomputing
              it again from scratch.
            </p>
          </div>


          <div>
            <h1>71. Greedy</h1>
            <p>
            We have greedy algorithms that will make the choice that is most benefitial in the short term
            without considering the problem as a whole.
            </p>
          </div>


          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>



          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>

  
          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>

          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>



          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>

  

         

          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>



          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>



          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>

          
          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>

          

          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>


          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>


          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>


          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>


          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>



          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>

  
          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>

          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>



          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>



        

          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>



          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>



          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>

          
          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>

          

          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>


          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>


          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>


          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>


          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>



          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>

  
          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>

          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>



          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>


         

          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>



          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>



          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>

          
          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>

          

          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>


          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>


          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>


          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>


          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>



          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>

  
          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>

          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>



          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>


         

          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>



          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>



          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>

          
          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>

          

          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>


          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>


          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>


          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>


          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>



          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>

  
          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>

          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>



          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>

   
          

          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>



          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>



          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>

          
          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>

          

          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>


          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>


          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>


          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>


          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>



          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>

  
          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>

          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>



          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>

 
         

          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>



          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>



          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>

          
          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>

          

          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>


          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>


          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>


          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>


          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>



          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>

  
          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>

          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>



          <div>
            <h1></h1>
            <p>
              
            </p>
          </div>


















      </div>
    </section>
         </>

    );
  }
  
  export default AboutUs;