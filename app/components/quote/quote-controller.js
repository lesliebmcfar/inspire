function QuoteController(){
	//var quoteService= new quoteService
	//var qs = new QuoteService()

var quoteService= new QuoteService
	quoteService.getQuote(function(quote){
		console.log('What is the quote', quote)
	var template = ""	
	template +=`
	<div class="div">
	<h2>Think about this today: ${quote.quote} </h2>`
		
	
	document.getElementById("quote").innerHTML= template 

})
}
