/*/ Firebase Settings
var firebaseConfig = {
    apiKey: 'AIzaSyC4Xgvmc_LU-sCGJmCRLILV3mHjuG5yyhs',
    authDomain: 'whaledb.firebaseapp.com',
    databaseURL: 'https://whaledb.firebaseio.com',
    projectId: 'whaledb',
    storageBucket: 'whaledb.appspot.com',
    messagingSenderId: '536005499995',
    appId: '1:536005499995:web:aa1f0eafc130b2915bf37e',
};
var app = firebase.initializeApp(firebaseConfig);

// Google Login
var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(provider).then(function(result) {
    // Firestore Access
    var db = firebase.firestore(app);
    var docRef = db.collection("users").doc(result.user.uid);
    docRef.get().then(function(doc) {
        if (doc.exists) {
            var cam_no = 0;
            var cam_active = 'active';
            for (var cam_name of doc.data().cameras) {
                $('#v-list').append(`<li data-target="#carousel-example" data-slide-to="${cam_no}" class="${cam_active}"></li>`);
                $('#v-item').append(`<div class="carousel-item ${cam_active}">
                    <video-js id="video-${cam_no}" class="embed-responsive embed-responsive-16by9 vjs-default-skin vjs-big-play-centered" data-setup='{"fluid": true}' controls>
                        <source src="http://wj.khunet.net/live/${result.user.uid}${cam_no}.m3u8" type="application/x-mpegURL">
                    </video-js>
                    <div class="carousel-caption">
                        <div class="animated fadeInDown">
                            <h4 class="h4-responsive">${cam_name}</h4>
                        </div>
                    </div>
                </div>`);
                videojs(`video-${cam_no}`, {}, function() { this.reload(); });
                cam_active = '';
                cam_no++;
            }

            if(cam_no==0)
            {
                 $("#no-video").prepend('<div class="text-center"><h3 class="display-5"style="color: #ffffff">No Video Available</h3></div>');
             $("#no-video").prepend('<div class="text-center"><img class="mb-4" src="https://i.ibb.co/pwcXqXT/image.png" alt="" width="250" height="250"></div>');
            console.log('No Document');
            }
            
        } else {
            // 여기는 그냥 카메라가 없다.
            
              $("#no-video").prepend('<div class="text-center"><h3 class="display-5"style="color: #ffffff">No Video Available</h3></div>');
             $("#no-video").prepend('<div class="text-center" style="position: relative;"><img class="mb-4" src="images/눈물웨일.png" alt="" width="250" height="250"></div>');
            console.log('No Document');
        }
    }).catch(function(error) {
        // 
      
        console.log('Error!', error);
    });
}).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.messeag;
    var email = error.email;
    var credential = error.credential;
});*/

