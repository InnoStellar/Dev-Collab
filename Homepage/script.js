        $(function () {
            $('#colors_sketch').sketch();
            $(".tools a").eq(0).attr("style", "color:#000");
            $(".tools a").click(function () {
                $(".tools a").removeAttr("style");
                $(this).attr("style", "color:#000");
            });
        });

      function save(){
        var canvas = document.getElementById('colors_sketch');
        var dataURL = canvas.toDataURL();
        document.getElementById("imgs").innerHTML=dataURL

      }

      function timer(){
        document.getElementById("sve").click();
      }

      $(document).ready(function(){
    myVar = setInterval("timer(), client()", 100);
});


function client(){
  ajaxPostRequest("/wf", JSON.stringify(document.getElementById("imgs").value), temp)

}

function temp(response){

}



function ajaxGetRequest(path, callback) {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
  	  if (this.readyState===4 && this.status ===200) {
	      callback(this.response);
	    }
    }
    request.open("GET", path);
    request.send();
}


function ajaxPostRequest(path, data, callback){
    let request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
            callback(this.response);
        }
    };
    request.open("POST", path);
    request.send(data);
}

