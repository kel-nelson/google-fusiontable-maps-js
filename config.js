var config = {
	"app_title": "North Dakota - County Map Data",
	"default_coords": [47.593986, -100.346211],
	"default_zoom": 7,
	"years": [2007,2012,2025],
	"map_colors":["#ff0000","#00ff00","#0000ff"],
	"gdocs":[
			{
				"doc_id":"1XGfTtjUQaCiAIBcR4VjryomxB1LN5St5rrC-BNCm",
				"data_sets":[
					{
						"name":"beef",
						"title":"Beef",
						"chart_col_name":"cattle_cows_beef_inventory_2012",
						"map_col_name":"cattle_cows_beef_inventory_sqmi_2012",
						"map_tooltip_description":"Moooo!",
						"map_tooltip_image_url":"https://189535be0f7cd1123e6f2c1523cde527d6c638f7.googledrive.com/host/0B_EJHkG1A5KKYlhyNkZrTDNuZVE/Hereford_.png",
						"map_color":"#00FF00",
						"map_value_min":0,
						"map_value_max":30
					},
					{
						"name":"hogs",
						"title":"Hogs",
						"chart_col_name":"hogs_inventory_2012",
						"map_col_name":"hogs_inventory_sqmi_2012",
						"map_tooltip_description":"Ooooink!",
						"map_tooltip_image_url":"https://189535be0f7cd1123e6f2c1523cde527d6c638f7.googledrive.com/host/0B_EJHkG1A5KKYlhyNkZrTDNuZVE/johnny_automatic_hog_2.png",
						"map_color":"#FF0000",
						"map_value_min":0,
						"map_value_max":20				
					},
					{
						"name":"horses",
						"title":"Horses",
						"chart_col_name":"equine_horses_ponies_inventory_2012",
						"map_col_name":"equine_horses_ponies_inventory_sqmi_2012",
						"map_tooltip_description":"eeeE!",
						"map_tooltip_image_url":"https://189535be0f7cd1123e6f2c1523cde527d6c638f7.googledrive.com/host/0B_EJHkG1A5KKYlhyNkZrTDNuZVE/Horse_.png",
						"map_color":"#FF0000",
						"map_value_min":0,
						"map_value_max":3				
					}					
									
				]
			}
	]
	
}
