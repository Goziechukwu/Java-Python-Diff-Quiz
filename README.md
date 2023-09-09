# Java-Python-Diff-Quiz

Java-Python-Diff-Quiz is an online-quiz site that hopes to help people clearly know the differences between JavaScript and Python in terms of their features and applications, through testing the user in a short-quiz about their differences. The site will be targeted towards all kinds of people, but especially towards software developers and computer scientists who would want to know what language (JavaScript or Python) would be more appropriate for use in a particular design target. Java-Python-Diff-Quiz will be useful in making the user get a good grasp of the features, ecosystems, libraries and strengths of both languages which will aid the user in making an informed decision on what language to use for the specific targeted of design.

## Using Java-Python-Diff-Quiz

Upon visiting Java-Python-Diff-Quiz's website, the user will see a prompt to input a username for the quiz in a form at the top left of the screen. Below the prompt, at the center of the page, the user sees the first quiz question. The website is a single page and is responsive to all device sizes and works effectively on all types of browsers.

<img src="./assets/images/responsiveness-screenshot.png" alt="Responsiveness Screenshot">

Source: [Responsivity measurement](https://ui.dev/amiresponsive?url=%20https://goziechukwu.github.io/Java-Python-Diff-Quiz/)

## Features

### SignUp Form

The SignUp Form is located at the top left of the website page, and contains a field for the user to register a username for the quiz.

### Question Section

The Question Section is located at the center of the page, just below the title head of the page. It contains the question serial number, the question and the options (choices) to select from. The options are placed in buttons below the question.

When the user hovers the mouse around an option button, it turns yellow in color. When the user then clicks the button, a prompt immediately shows at the top of the website page, telling the user if the chosen option was correct or wrong; at the same time, the score of the user for the quiz question is saved.

After the user finishes answering the last question, the website page then shows the user's username and the obtained score.

## Technologies Used

The website was designed using the following programming languages:

- HTML5

- CSS3
  
- JAVASCRIPT

The Codeanywhere workspace was used to write the code. 

• All the codes, README and the commits were pushed to GitHub repository

• The fonts used were obtained from the Font Awesome library in google

## Validation Testing

The author has tested the website's user interface and has found out that it looks the same on the browsers- Google Chrome, Mozilla Firefox and Microsoft.

The HTML and CSS codes have been tested for validation in the w3C HTML Validator and the w3C (Jigsaw) CSS Validator respectively, and no errors were returned.

<img src="./assets/images/validation-testing-screenshot-1.png" alt="First Validation Testing">

<img src="./assets/images/validation-testing-screenshot-2.png" alt="Second Validation Testing">

The JavaScript code has been tested for validation in the ESLint

## Accessibility Requirements

Decor Awesome has been tested using Lighthouse on Google and found to completely meet Accessibility Requirements, in addition to having Best Practices, and more, as indicated in the screenshot below:

<img src="./assets/images/accessibility-requirements-score-screenshot.png" alt="Accessibility Requirements Score">

## Bugs, and How I Fixed Them

I had a challenge with my social media icons. The code syntax I used made my icons within the footer to be clickable beyond the perimeter of each icon. I solved this by copying out the class names from the scripts of the downloaded social media icon tags and putting the class names in the anchor element tags, thus giving the anchor elements the class of the icon elements and taking out the icon tags from the code.

This worked, but then the icons changed to their default blue colors, and I wanted them to be black colour in the website, I then had to create a new css rule for the icons, having the class names “fa-brands” and setting a color property of black. This gave me what I desired, the black-colored icons.

## File Structure

Folders and Files in the workspace are created as follows:

Folders: - Assets folder

Contents: - CSS folder and Images folder

Files: - index.html, gallery.html, signup.html and style.css files (in the CSS folder)

Other files are photo files in the images folder, like the hero-image, mood-center-image, services-background image, signup-background-image, and others in the gallery.

## Deployment

The site was deployed to GitHub pages by the following steps:
Navigating in the GitHub repository to the Settings tab,
Clicking the drop-down menu under the source section and selecting 'Master Branch', and finally waiting for the page to refresh and display a detailed ribbon sign indicating that deployment was successful.

This brought forth, under the Pages section under Settings, Decor Awesome's live link which is as follows:

<https://goziechukwu.github.io/decor-awesome/>

## Contact information

The website developer's contact details are as follows:

Email: inekwegoziechukwu@gmail.com

## Acknowledgements and References

- _Love-Running Project_- from Code Institute: Some of the Love-Running Project's style of naming was used in naming some of the ids and classes in Decor Awesome's website; also a few of Love-Running Project's css style rules were used in Decor Awesome's 'style.css' file.

- _Unsplash website_: All photos in the website were obtained from the [Unsplash website](unsplash.com) website.

- _Font Awesome_: All icons used in the 'enhanced-mood' section and in the footer section were gotten from the [Font Awesome](https://fontawesome.com/) website.

- _Google Fonts_: The two fonts, Oswald and Lato used in the website design were obtained from [Google Fonts](https://fonts.google.com/).

- _Code Institute Form Dump Url_: The [Code Institute's Form Dump url](https://formdump.codeinstitute.net/) was used in my code for the posting of the form in the 'signup.html'.