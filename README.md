# Fruit-Search-Project
Autofill Search Bar

I like how this look
https://ih1.redbubble.net/image.1818447611.1869/st,small,507x507-pad,600x600,f8f8f8.jpg


1. Create a Search Bar On Screen
2. Add Placeholder Text Into The Search Bar
3. Add An Event Listener For Key Strokes - Create an event listener in JavaScript that will trigger when a user types.
4. Filter The List Based On User Input
- Write a function called search(), which will trigger based on the event listener you created in the last step. This function will return a list called results. This function will filter the fruit list based on whatever user input is in the search box. If the string in the user input appears ANYWHERE in the fruit name, it should be added to results list. It also should not matter if a user types upper or lower case letters. That means that if a user types “ap” both “Apple” and “Grape” will appear in the results list. 
5. Display The Results List As A Drop Down 
6. Highlight the suggestion below a user’s cursor
- Add an event listener to trigger whenever a user hovers over one of the suggestions in the drop down list. Write a function which highlights the suggestion. Attach this function to the event listener.
7. Populate the search box with a user’s selected suggestion
- When a user clicks on a suggestion, that string should fill the Search Bar. Add an event listener which triggers when a user clicks. Write a function useSuggestion() to populate the Search Bar with the suggestion. Add this function to the event listener.
8. Style the Page