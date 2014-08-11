fb_graph
========

Use d3.js to visualize facebook friend connections

1.  I used Netvizz to grab Facebook friend data in .gdf format. https://apps.facebook.com/netvizz/
2.  I split that into two csv files: nodes.csv and edges.csv
3.  I parsed the csv files using Papaparse, I kind of doubt it was necessary but it did the job. http://papaparse.com/
4.  In order to create the links that d3 needs to draw the links between nodes on the graph, I replace the fbids with their positions in the node array using a map
5.  I realized that d3.js doesn't work too well when you try to label hundreds of nodes that want to occupy the same general spot (mitigated by a large graph, higher link distance, and a high negative charge)

Here are some screen shots and my own observations:

UC Berkeley students clump together, especially my friends through Hackers@Berkeley and CS classes
![Alt text](/screenshots/fb_graph_uc_berkeley.png?raw=true "UC Berkeley/CS/Hackers@Berkeley")

High School is a Clusterfuck or Why My Link Distance Had to be so Large
![Alt text](/screenshots/fb_graph_high_school.png?raw=true "High School is a Clusterfuck")

Music Performance is really spread out because I have friends from music in elementary/middle/highschool, SCYSO, PSYO, UCBSO, All-state, Colburn, and double bass meetups, so a lot of them know each other but are potentially part of a larger grouping (High School or UC Berkeley)
![Alt text](/screenshots/fb_graph_music.png?raw=true "Music Performance")

Facebook, and you can see sub-groups like Pages Mobile and FBU
![Alt text](/screenshots/fb_graph_facebook.png?raw=true "Facebook")

My friends from swing dancing are part of the larger UC Berkeley group, but are all next together because they have a lot of shared connections
![Alt text](/screenshots/fb_graph_swing_dancing.png?raw=true "Swing Dancing")
