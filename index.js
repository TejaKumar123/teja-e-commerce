
function arrow_scroll(event,n,dist){
	if(n){
		event.target.nextElementSibling.scrollLeft+=dist;
	}
	else{
		event.target.nextElementSibling.nextElementSibling.scrollLeft-=dist;
	}
}

function divs_scroll(event){
	let ele=event.target;
	if(ele.scrollLeft==0){
		ele.parentElement.children[0].style.display="none";
	}
	else{
		ele.parentElement.children[0].style.display="flex";
	}
	if(ele.children[0].offsetWidth<=ele.scrollLeft+ele.offsetWidth){
		ele.parentElement.children[1].style.display="none";
	}
	else{
		ele.parentElement.children[1].style.display="flex";
	}
	
}


var sdiv=document.getElementById("carosal").children[2].children[0];

for(i=1;i<=8;i++){
	let img_path="images/carosal/c"+i+".webp";
	let element='<a href="#"><img src="'+img_path+'"></a>';
	sdiv.innerHTML+=element;
}

function auto_arrow_scroll(event,n,dist){
	let ele=event.target;
	let parent=ele.parentElement;
	let scroll_div=parent.children[2];
	if(n){
		if(scroll_div.scrollLeft+parent.offsetWidth>=scroll_div.children[0].offsetWidth){
			scroll_div.scrollLeft=0;
		}
		else {
			event.target.nextElementSibling.scrollLeft+=dist;
		}
		parent.children[3].children[trav].style.width="6px";
		parent.children[3].children[trav].style.backgroundColor="#A9A9A9";
		trav=(trav+1)%8;
		parent.children[3].children[trav].style.width="12px";
		parent.children[3].children[trav].style.backgroundColor="white";
	}
	else{
		event.target.nextElementSibling.nextElementSibling.scrollLeft-=dist;
		parent.children[3].children[trav].style.width="6px";
		parent.children[3].children[trav].style.backgroundColor="#A9A9A9";
		trav=(trav-1)%8;
		parent.children[3].children[trav].style.width="12px";
		parent.children[3].children[trav].style.backgroundColor="white";
	}
}

var ar=[0,1,2,3,4,5,6,7];
var trav=0;
setInterval(auto_click,3000);
function auto_click(){
	let parent=	document.getElementById("carosal");
	parent.children[1].click();
	
}

