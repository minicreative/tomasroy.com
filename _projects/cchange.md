---
title: "¢Change"
position: 2
description: A social sharing prototype which aims to encourage people to publicly
  support the causes they care about and nudge their friends to do the same.
screens:
- image: "/uploads/cchange1.png"
  caption: Visitors and users can browse for charities and specific charity campaigns
    which they can donate to or support with a post
- image: "/uploads/cchange2.png"
  caption: Charities can manage their profile and post updates for users who follow
    them
- image: "/uploads/cchange3.png"
  caption: Users have a public donation profile
buttons:
- name: View GitHub project
  url: https://github.com/comp523-602
- name: View project overview & documentation
  url: https://comp523-602.github.io/project/home.html
bullets:
- title: Frameworks & Languages
  icon: fas fa-code
  description: Javascript (ReactJS, NodeJS), MongoDB, Apache
- title: Development Tools
  icon: fas fa-tools
  description: Github
layout: page
---

¢Change was completed for a software engineering lab during my senior year at UNC. Two other students and I were paired with a client from the Chapel Hill community who wanted an application prototype built. Our client wanted to create a social network that would encourage micro-donations by allowing users to post photos featuring an overlay of a charity campaign of their choice. "Likes" received by the photo would take the form of 5 cent donations to the charity running the campaign. The network hoped to transform the consumption of social media from a passive process to an active one, encouraging people to be vocal about the causes they care about and to learn more about new charitable causes via the platform. 

My primary focus during this project was back-end development. I created an API using NodeJS and MongoDB which provided endpoints for user authentication, post and campaign creation, and model object queries. I was also in charge of deployment, which I accomplished by setting up an Apache server using an Ubuntu VM from DigitalOcean and deploying our interface as well as our server from this machine. I played a significant role in the development of our front-end interface as well, which was built on React.