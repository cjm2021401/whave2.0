document.getElementById("createForm").addEventListener("submit", createItem);
document.getElementById("clearAll").addEventListener("click", clearAll);
//document.getElementById("clearOne").addEventListener("click", function() { clearOne(this.parentNode.parentNode);} );


function createItem(){
    console.log('aaa');
    whale.storage.sync.set({key: value}, function() {
        console.log('Value is set to ' + value);
    });

    var nickname = document.forms["myForm"]["fname"].value;
    if (nickname == "") {
        alert("카메라 이름을 입력하세요");
        return false;
    }

    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        if(value==nickname)
        {
            alert("중복된 이름의 카메라가 있습니다. \n다른 카메라 이름을 입력하여 주세요.");
            return false;
        }

    }

    var password = Date.now();
    var random = Math.floor(Math.random() * 900) + 100;
    var timestamp = String(random) + String(password);
    localStorage.setItem(timestamp, nickname);

    alert("카메라 생성이 완료되었습니다. \n패스워드는 "+timestamp+" 입니다. \n카메라 연결하기를 눌러 설정을 완료해주세요!");

}


function clearAll() {
    var len=localStorage.length;
    if(len==0)
    {
        alert("현재존재 하는 카메라가 없습니다.");

    }
    localStorage.clear();
    alert("삭제가 완료되었습니다.");
    window.location.reload();



}

function clearOne(idx){

    var arr = Array.from(idx.cells);
    var key = arr[0].innerHTML;
    localStorage.removeItem(key);
    alert("삭제가 완료되었습니다.");
    window.location.reload();
}
var hst = document.getElementById("result");
var len=localStorage.length;
if(len==0)
{
    hst.innerHTML += "<tr><td>" + "no camera" + "</td><td>" + "no camera"+ "</td><td>"+"no camera";
}
else{
    for (var i = 0; i < localStorage.length; i++) {
        // set iteration key name
        var key = localStorage.key(i);
        // use key name to retrieve the corresponding value
        var value = localStorage.getItem(key);

        hst.innerHTML += "<tr><td>" + key + "</td><td>" + value + "</td><td></td></tr>";
    }}

if(localStorage.length!=0) {
    var cam_no = 0;
    var cam_active = 'active';

    for (var j = 0; j < localStorage.length; j++) {
        var ke=localStorage.key(j);
        var name=localStorage.getItem(ke);
        $('#v-list').append(`<li data-target="#carousel-example" data-slide-to="${j}" class="${cam_active}"></li>`);
        $('#v-item').append(`<div class="carousel-item ${cam_active}">
                    <video-js id="video-${j}" class="embed-responsive embed-responsive-16by9 vjs-default-skin vjs-big-play-centered" data-setup='{"fluid": true}' controls>
                        <source src="http://wj.khunet.net/live/${ke}.m3u8" type="application/x-mpegURL">
                    </video-js>

                    <div class="carousel-caption">
                        <div class="animated fadeInDown">
                            <h4 class="h4-responsive">${name}</h4>
                        </div>
                    </div>
                </div>`);
        videojs(`video-${cam_no}`, {}, function() { });
        cam_active = '';
        cam_no++;
    }






}