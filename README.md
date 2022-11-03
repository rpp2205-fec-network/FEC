# Project Atelier - Front End Capstone

Project Atelier comprises a complete redesign of our client's retail portal, designed to modernize the site and address any functionality requests.

## Overview

#### Product Overview
This section displays the product information, including its description and price, as well as an image gallery showing off the product's various images. It allows the user to scroll through a thumbnail carasoul and select an image to focus on. This section also displays a list of styles to choose from for the product, allowing users to click on a particular style and have the rest of the section updated with that particular style's images and details. Finally, it allows users to select the size and amount of the current product style that they would like to purchase. 
#### Related Products
This section shows related items based off of the current item and allows the user to click an image and go to a new url with updated components showing that current item. On the top right of the related products there is a button that when clicked it will show the current product compared to the item clicked. There is also a current outfit list that persists through a page refresh. You can add and remove to this list.

#### Questions & Answers

#### Reviews & Ratings
This section allows the viewing of and submission of reviews for the product selected. This component extends the ability to write, read, and browse through all reviews for the current product, including indicating when a review is helpful and the reporting functionality. There's an ability to sort review by 'Relevance', 'Helpful, and 'Newest', and a helpful rating breakdown on the left where you can click to sort reviews by the different star ratings. Submitting a review includes the ability to submit up to 5 photos and write detailed reviews.

## Getting Started
<ul>
<li>Install dependencies: npm install
<br/>
<li>Create a file 'config' and then create a file 'config.js'under the src file. Add the following into the file, with your personal Github token:
<br/>
<blockquote>var API_KEY = 'INSERT YOUR GITHUB TOKEN HERE'

module.exports = API_KEY;</blockquote>
 <li>Start webpack: npm run client-dev
 <li>Start the server: npm run server-dev
 <li>Navigate to http://localhost:3000/
</ul>
