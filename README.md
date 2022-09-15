# TIP-Calculator
Alex often went out for dinner, but he used to have difficulty calculating the right tip since he is not good with Maths. He always googles "Tip calculator" and ends up using the internet to calculate the tip for him. But every time he googles, he finds different apps with different tipping standards which confuses him even more. He has decided upon his own tipping standard (how much to tip and when) and wants to create his own "Tip Calculator". The problem is, he doesn't know Javascript either. Since you are learning Javascript and looking for a project to upkill yourself, do help Alex out by creating the app for him.

Make sure you have the following elements in your app:

"Bill amount" Input tag id="billamt"

Number of people input tag id="peopleamt"

Calculate button id = "calculate"
. It should have the label Calculate
Select tag id="serviceQual"

Select tag with 6 different values ​​for option tags. The values should be {"0.05", "0.1", "0.15", "0.2", "0.25", "0.3"} corresponding to { 5%, 10%, 15%, 20%, 25%, 30%} Note: values ​​should exactly match

You should 'alert' when nothing is entered in bill amount and user try to calculate tip with message Please Enter Bill Amount


Tip calculation:

Calculate the tip on the basis of the selected option. The tip can be 5%, 10%, 15%, 20%, 25% or 30% based on the quality of service.

Round Tip amount up to two decimal places. Example: 2.48, 23.50, 3:00 (Hint: Math.round () or toFixed (2) )

The calculated tip is shared among all the people mentioned in the number of people to calculate the final share. If the count of people is not mentioned, we can assume that Alex ate alone
