     {        
  "install": {   
    "include": [          
      "^\\.env$" 
                                                                      
    ]                                                                       
  },                             
    "restart": {                                                                                  
     "exclude": [                                                                                               
          "^public/",                                                                                                         
       ":dist/"                                                                                                    
       ],                                                                                                                     
       "include": [                                                                                                                                           
      "\\.js$",                                                                                                                                                             
      "\\.json",                                                                           
       "\\.html",                                                                  
         "\\.txt"                                         
      ]                                                            
   },                                
    "throttle": 8640000                      
}                             
