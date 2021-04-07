# MappingForGood | SACHACKS '21

![Project Banner](https://github.com/samderanova/MappingForGood/blob/master/assets/SacHacks%20Banner%20Updated.jpg)

## 📖 About

*Poverty is a persisting problem throughout the United States with over 46.2 million Americans living in poverty according to the US Census and with the emergence of COVID-19, the number has only grown*

In hope of reducing the economic inequity within **Sacramento**, our group has created a map that displays the various regions that face poverty within the region of Sacramento. 

### ❓ How it all started?

One of our Community college student from Sacramento noticed the economic inequality while living in Sacramento such as large amount of homeless camps and the differences in living conditions that span across various neighbourhoods within Sacramento. This lead to the motivation to create a web app that aims to solve some of these problems by marking the areas within Sacramento that needs aid by directing government agencies and Non-Profit Organizations towards those areas. The rest of the members were overjoyed to collaborate on a project that focuses on a fulfilling goal of improving the living conditions of the people of Sacramento, CA.

### 🤔 What is a Food Desert?

Food deserts are regions where people have limited access to healthful and affordable food. This may be due to having a low income or having to travel farther to find healthful food options.

Without access to healthful foods, people living in food deserts may be at higher risk of diet-related conditions, such as obesity, diabetes, and cardiovascular disease.

Several government bodies are now funding projects to prevent areas from becoming food deserts and to improve people’s access to food in existing food deserts.

## 💡 Our Solution To The Problem 

Our team used several metrics to decide whether a region in Sacramento needed aid or not. One of the metrics we used was **income** since areas of low income often lack the resources necessary to provide people a better living. 

We also used the metric of determining whether an area is a **Food Desert**. An area is classified as a food desert if there are no supermarkets present within a 1-mile radius of the area. *These areas are often overlooked by supermarket companies as the consumer base is unable to afford food and thus, leading to loss of access to healthy meals.*

### Methodology:
- Out of all the counties in Sacramento, the ones which were food deserts based on the metrics discussed above were found.
- K-Means Clustering was used to cluster the food deserts based on their proximities to each other thus providing an efficient way for the logistics department of the Government or the NGOs to prepare distribution of aids in these areas.
- These clusters were plotted on the map of Sacramento with interactive features included like depicting the **Pie Chart** distribution of the ethnic proportion and an interactive slider feature which allows the user to assess the threshold for an area to be determined as a food desert or not based on the **median family income** for the residents of that area and the total count of the white population in that area.
- The web app also has the functionality of filling out a message form by its users who wish to submit concerns and are looking out for help for their neighbours and the neighbourhood along with a message board for display.

### Tools & Technologies Used

|The Project Made Use Of The Following Tools & Technologies |
|---------|
|<a><img align="left" alt="Python" width="50px" src="https://github.com/edent/SuperTinyIcons/blob/master/images/svg/python.svg" /></a><a><img align="left" alt="React" width="50px" src="https://github.com/edent/SuperTinyIcons/blob/master/images/svg/react.svg" /></a><a><img align="left" alt="HTML" width="50px" src="https://github.com/edent/SuperTinyIcons/blob/master/images/svg/html5.svg" /></a><a><img align="left" alt="CSS" width="50px" src="https://github.com/samderanova/MappingForGood/blob/master/assets/CSS%20logo.png" /></a><a><img align="left" alt="Github" width="50px" src="https://github.com/edent/SuperTinyIcons/blob/master/images/svg/github.svg" /></a><a><img align="left" alt="Git" width="50px" src="https://github.com/edent/SuperTinyIcons/blob/master/images/svg/git.svg" /></a><a><img align="left" alt="Jupyter" width="50px" src="https://github.com/samderanova/MappingForGood/blob/master/assets/jupyter.jpg" /></a><a><img align="left" alt="Folium" width="50px" src="https://github.com/samderanova/MappingForGood/blob/master/assets/Folium%20Logo.png" /></a><a><img align="left" alt="Flask" width="50px" src="https://github.com/samderanova/MappingForGood/blob/master/assets/flask%20logo.png" /></a><a><img align="left" alt="GCP" width="50px" src="https://github.com/samderanova/MappingForGood/blob/master/assets/GoogleCloudPlatform.jpg" /></a><a><img align="left" alt="Domain.com" width="60px" src="https://github.com/samderanova/MappingForGood/blob/master/assets/Domain.com-Logo.png" /></a><a><img align="left" alt="Scikit" width="50px" src="https://github.com/samderanova/MappingForGood/blob/master/assets/scikit%20logo.png" /></a>


### Link To Web App & Dataset

|WebApp Is Live Here ⬇️|Dataset|
|---|---|
|<a href="http://mappingforgood.online/">Click To View</a>|<a href="https://drive.google.com/drive/folders/1cbMdwkRPjvSdDhE4XZZ_t1yEX_jyq5ub?usp=sharing">Link To Dataset</a>|

|About the Dataset|
|-----------------|
|The dataset used is a modified version of the Economic Research Service (ERS) and U.S. Department of Agriculture (USDA). After performing intensive feature engineering and dimensionality reduction the custom dataset was used for the project.|

### Meet The Team

|.|Name|College|Location|
|---|---|---|---|
|⭐|Sam Der|UC Irvine|San Francisco, CA|
|⭐|Ishan Meher|Folsom Lake College|Sacramento, CA|
|⭐|Grace Foo|Monash University|Selangor, Malaysia|
|⭐|Arya Shah|NMIMS University|Mumbai, India|

## Project Demonstration

Here, we give a quick glimpse of the web app demonstrating all of its functionalities.

### Main Homepage

![Homepage](https://github.com/samderanova/MappingForGood/blob/master/assets/HomepageRecording.gif)

### Interactive Map of Sacramento Food Desert Clusters

![Map](https://github.com/samderanova/MappingForGood/blob/master/assets/Map.gif)

### Message Board for Submitting Concerns

![MessageBoard](https://github.com/samderanova/MappingForGood/blob/master/assets/MessageBoard.gif)

# We Hope You Liked Our Project ❗ Show Some ❤️ By Giving A ⭐ To This Repository ❗
 



