   
   var PORT = process.env.PORT || 3001;

   app.listen(PORT, function() {
       console.log("App listening on PORT" + PORT);
   });   
    app.get("/", function(req, res) {
        res.json(path.join(__dirname, "public/index.html"));
      });

    app.get("/yoda", function(req, res) {
        res.json(yoda);
    });  
    
