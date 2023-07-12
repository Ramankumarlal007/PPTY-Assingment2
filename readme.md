***Q.1 What’s Box Model in CSS ?***
Ans:- CSS Box model describes an element in a rectangular box , which comprises of  content, it's padding, border and margin.

***Q.2 What are the Different Types of Selectors in CSS & what are the advantages of them?***

Ans:- Different types of selectors in CSS are:-
 1.	Universal Selector :- this selects the entire body. it is used to surpass the default configuration of the browser. Denoted by "*". 
 eg:- To select all the descendants of div "div * ".

 2. Individua/Type Selector:- This selector selects individual elements of that group. i.e:- paragraph, div, li span etc. it is simple and easy to understand.
eg:- h1, p, etc.

3. Class selector:- class is given by (.) sign. Same “Class” can be provided to different element. selecting the element by the help of class attribute.
eg:- .red, .black.

4. ID selector:- ID is unique it is given by (#) sign.s selecting the element  through ID attribute. Id is unique to that element it should not be duplicated. 
Eg:-  #red, #white, #bg-red.

5. Attribute Selector:- selecting the element by using their attribute. eg:- href, src.
   eg:- [target="_blank"]

6. Element or Group Selector :- we uses " ," to make a group selector. eg:- h1, p. this is seperated by comma , . this selector matches both h1 and p elements. eg:- Like selecting (p, li, div, .class, #id ,ul)

7. Chained selector:- this selector is used to target the specific element.
li.red.white.green {
            background-color: yellowgreen;
         }
 
Combinators:- Descendant Selectors,  Adjacent sibling selector, General sibling selector

8. Descendant Selectors: Descendant selectors are represented by a space between the selectors.it selects the nodes that are descendent of the first  element.
it is used to apply styling to specific element.
i want to target that h2 only which is part of div
eg:- div h2 {
 background-color: red;
}

9. Child selector :- used to select all direct child which are children of a specified element.
ex:-  div > h2 {
 background-color: red;
}

10. Adjacent sibling selector:- to select an element immediately following an element.
   ex:-  div + p {
 background-color: red;
}

11. Pseudo-classes :- it is used for styling the elemet based on states of the element. it's stated is visted, unvisted link, mouse-hover etc.

 Pseudo-classes (:) and Pseudo-elements (::).

Pseudo-classes are hover,active, link, visited.

example- a:hover {
  color: #FF00FF;
}

//button is selector 

button:hover {
 color: green;
}

input[type=radio]:checked {
 border: 2px solid green;
}

12.  Pseudo-elements :- to style specified part of an element. to insert content before and after or to style element's forst letter, or line of an element.
p::first-line {
  color: #ff0000;
  font-size: xx-large;
}

***Q.3 What is VW/VH ?***
Ans:- vw is viewport width and VH is viewport height. using VW and VHhelps in maing a responsive web design. 60 vw mans 60% of the viewport width.

***Q.4 Whats difference between Inline, Inline Block and block ?***
 it's height and width can be  changed by using CSS.
Ans:- Block elements  occupies the entire available width of the screen. eg:- div, h1, p

      Inline element occupies only the space that is occupied by it's content . eg:- span, anchor tag, strong, <em> emphasis tag.

      Inline Block element:- same as inline that means it occupies the horizontal space as per the content size. by applying CSS it's  width, height, margin, and padding is modified.

***Q.5 How is Border-box different from Content Box?***

Ans:-  box-sizing: content-box it is default value. here, element width and height indicated the content area and doesn't includes padding, border and margin of the element. here when padding and border grows content size remains same. border-box size increases.

box-sizing: border-box . when specifying the width and height of an element , it includes its content, padding and border. 
increasing the padding and border size, it causes decrease in content size and border-box size remains same.

***Q.6 What’s z-index and How does it Function ?***

ans:- Z - index is a CSS property that controls the stacking order of an element. Z-index property applies only to that elements which is having position value of relative, static or fixed but not on static position.

higher the Z-index value, element will be stacked above the other. 
Default z-index value is 0. 
Elements with a negative z-index value appear behind the elements having greater value. 
The element with the higher z-index value will be displayed on top.

***Q.7 What’s Grid & Flex and difference between them?***

Flex:- 
flexbox CSS layout is used for creating one- dimensional layout i.e row or column. single axis
it is used for creating responsive layout , centering the element.
display:flex,  some of the properties are:- flex-direction, flex-wrap, justify-content, align-items, align-content, gap, row-gap, column-gap.

order:- default is 0; flex-grow:- default is 0, flex-shrink:- default is 1.
Flex items with a higher "order" value appear later in the visual order than those with lower values.

Grid  CSS layout : it is used for creating two - dimensional layout. vertical and horizontal axis layout.
display: grid
grid-template-columns and grid-template-rows,  
justify-items (align along row axis), gap, grid-gap, align-items (align along column), justify-content, align-content, justify-self, align-self.

.grid-container {
  grid-template-columns: repeat(3, 1fr);
}

***Q.8 Difference between absolute and relative and sticky and fixed position explain with example.***

Ans:- relative position:- when position relative is applied to an element ,element is positioned relative to its own original/normal position.

absolute:- Element will be positioned relative to the nearest positioned ancestor. it is not positioned relative to the viewport asin the case of fixed.

sticky :-  it will scrolls and get fixed eg. border of the browser 

fixed:- it will be fixed at it’s defined place. scroll has not effect on it. it is positioned relative to viewport. top, right, left, bottom properties are used to position the element.