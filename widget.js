let lastOverlayID = null;

function showOverlay() {
 
    let event_id = BWProperties.event_id;
  
    let url = '/events/' + event_id + '/sendOnscreenContent';
  
    let data = {
      'content' : "<h1><i class=\"fas fa-hand-rock\"></i> Hello World!</h1>",
      position : 'top-left',
      onscreen_timer : true
    }
  
    BWAPI.post(url, data).then(function(response){
      
      	if(response.status == 'success') {
         	 lastOverlayID = response.data.id;
        }
    });
  
}

function closeOverlay() {

  if(lastOverlayID) {
    
    	let event_id = BWProperties.event_id;
    
    	let url = '/events/' + event_id + '/closeOverlay';
  
    	let data = {
      		overlay_id : lastOverlayID
    	}
  
  	BWAPI.post(url, data).then(function(response){
      		
    	});
    		
  }
  
}

this.showOverlay = showOverlay;
this.closeOverlay = closeOverlay;
