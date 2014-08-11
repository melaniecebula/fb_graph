fb_graph
========

Use d3.js to visualize facebook friend connections

1.  I used Netvizz to grab Facebook friend data in .gdf format. https://apps.facebook.com/netvizz/
2.  I split that into two csv files: nodes.csv and edges.csv
3.  I parsed the csv files using Papaparse, I kind of doubt it was necessary but it did the job. http://papaparse.com/
4.  In order to create the links that d3 needs to draw the links between nodes on the graph, I replace the fbids with their positions in the node array using a map
5.  I realized that d3.js doesn't work too well when you try to label hundreds of nodes that want to occupy the same general spot (mitigated by a large graph, higher link distance, and a high negative charge)


![Alt text](/screenshots/fb_graph_family_music_outliers.png?raw=true "Family, Music, Outliers")
![Alt text](fb_graph_pics_berkeley_and_facebook.png?raw=true "UC Berkeley, Facebook")
![Alt text](/screenshots/fb_graph_high_school.png?raw=true "High School is a Clusterfuck")
