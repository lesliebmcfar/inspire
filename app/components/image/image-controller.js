function ImageController() {
	
	//Your ImageService is a global constructor function what can you do here if you new it up?
var imageService = new ImageService


		var img = new ImageService()
	
		imageService.getImage(function(image){	
			document.body.style.backgroundImage = `url("${image.url}")` //"https://splashbase.s3.amazonaws.com/skitterphoto/regular/Tree-and-colorful-sky-free-license-CC0.jpg";
			console.log("this url",image.url)
		})
	}
	

