# JS-Debouncing-Bookmovie

## Submission Instructions [Please note]

## Maximum Marks - 14

- The Submission should not contain spaces, for example,/js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Adding money should add money to your wallet in local storage with key "amount" 1 mark
 ✅ Adding more Wallet amount should be added to the existing one and reflect on the dom - 2 mark
 ✅ Should be able to search movies on movies.html using debouncing - 3 mark
 ✅ Clicking book now should redirect to checkout.html and show the movie detail - 1 mark
 ✅ On booking more tickets than wallet balance should show Insufficient Balance! -2 marks
 ✅ On booking a ticket within the wallet balance limit should show Booking successful! - 2 mark
 ✅ After booking wallet should be updated - 2 marks
```

## Installation

- you can use any node version that works for you ( 14+ )
- please make sure you do not push package-lock.json
- Download and unzip the boilerplate
- Navigate to the correct path

## Folder structure

- index.html
- movies.html
- checkout.html
- src
  - scripts
    - index.js
    - checkout.js
    - movies.js
- styles
  - index.css
  - checkout.css
  - movies.css
- README.md
- package.json
- cypress (ignore the file under cypress)

### You haven't taught cypress to run the test cases locally, you can see the passed/ failed test cases and test errors on CP itself.

## For API use OMDB API
Use search endpoint to search the movies 
   - `https://www.omdbapi.com/?s=${searchquery}&page=1&apikey={your api key}`
   - search query is the input entered by you
   - Use your api key 
    

## Description

Create a mini-movie booking app where users would be able to search for movies and book their tickets using their wallet balance.
The cost of one ticket is Rs. 100 (fixed)

- Index.html

  - Here you will add money to your wallet.
  - It will have an input box to accept the amount and a button “add to wallet” on clicking, the amount will be added to the wallet.
  - If user adds some amount again, it should be added to the existing wallet amount. 
  - Use local storage as your wallet. The wallet amount should be reflected on each page in the top right corner.
  - On “index.html” provide a link to the “movies.html”.

  - Things to follow:-

  ```
  1. Wallet amount should be in the H1 tag with the id as “wallet”.
  - (Note: Do not add any extra text to wallet amount only number should be there)
  2. Input box for accepting amount with id as “amount”.
  3. Add to wallet button with id as “add_to_wallet”.
  4. Add the wallet amount to local storage as the key “amount”.
  5. Link or button to go to “movies.html” should have the id as “book_movies”.
  ```

  <img width="1719" alt="Screenshot 2022-10-28 at 10 32 10 AM" src="https://user-images.githubusercontent.com/74458714/198507225-f667b08f-cb5d-432b-aa48-864e2afb954d.png">

- Movies.html

  - create a search bar where users can search for movies.
  - Apply debouncing on search functionality. Use OMDB API to get the movie data. Also, show the wallet amount in the top right corner.
  - While typing, users should see relevant movies on the dom itself. There should not be any search button.
  - Show the image, title and a “book now” button for every movie on the dom.
  - On clicking on the “book now” button, redirect the user to the “checkout.html” page and show that particular movie detail there. 

  - Things to follow

  ```
  1. Input box for searching movies will have an id as “search”.
  2. Append all searched movies inside the div with id as “movies”
  3. All the movie cards will have a class as "movie_tab".
  4. Book now buttons will have class as “book_now”.
  5. Wallet amount should be in the H1 tag with the id as “wallet”.
  ```

  <img width="1705" alt="Screenshot 2022-10-28 at 10 33 17 AM" src="https://user-images.githubusercontent.com/74458714/198507262-21dfd16e-ed0a-4c26-aff9-766e35eb6e50.png">

- Checkout.html

  - Here user will see the movie info which he is going to book. He will enter his name and the number of tickets.
  - On clicking on “Confirm Booking”, if the wallet doesn't have sufficient balance show messege “Insufficient Balance !”
  - Else deduct the appropriate amount from the wallet and update the wallet and the local storage as well.
  - At the end show messege to the user “Booking Successful!”.

  - Things to follow:-

  ```
  1. Show the movie details inside the div with the id as "movie".
  2. Inside checkout.html name input box id will be “user_name”.
  3. The number of seat input box will have the id as “number_of_seats”.
  4. A submit button to confirm the booking with id as “confirm”.
  5. Show messege as: -
      - “Insufficient Balance!”  in case of insufficient wallet balance.
      - “Booking Successful!”  in case of successful booking.
  6. Use h1 tag with id as "booking_status" to show the above messeges.
  ```

![](https://i.imgur.com/KvUZZMa.png)

<img width="1706" alt="Screenshot 2022-10-28 at 1 33 39 PM" src="https://user-images.githubusercontent.com/74458714/198537022-8fc01672-54f3-4180-a3b3-f8db27d9a174.png">



- you can add styling under the `styles` folder

**Note:- Do not use any other names for the Ids, Classes and local storage key other than those mentioned.**

####

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not submit it last minute
- try to keep one submission at a time
