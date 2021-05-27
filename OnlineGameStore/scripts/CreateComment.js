let comments = [];

document.getElementById('add-comment').onclick = function(){
    let clientName = document.Username == undefined ? document.getElementById('user-name') : document.Username;
    let commentBody = document.getElementById('comment-body');

    let comment = {
        name : clientName.value,
        body : commentBody.value,
        time : Date.now()/1000
    }
    
    if(comment.body != '' && comment.name != '')
        comments.unshift(comment);

    console.log(clientName);
    showComments(clientName, commentBody);
    commentBody.value = '';
}
function showComments(clientName, commentBody)
{
    if(!commentBody.value && !clientName.value)       
        alert("Please, enter your name and your comment");
    else if(!clientName.value)
        alert("Please, enter your name");
    else if(!commentBody.value)
        alert("Please, enter your comment");
    else
    {
        let commentField = document.getElementById('all-comments');
        let out = '';
        comments.forEach(function(item){
            out +=` <div class="comment-data">
                        <div class="username"><strong>${item.name}</strong></div>
                        <div class="date-time">${timeConverter(item.time)}</div>
                    </div> `;
            out +=` <div class="comment-content">${item.body}</div>
            `;
        });
        
        commentField.innerHTML = out;
    }
}
function timeConverter(UNIX_timestam){
    var a = new Date(UNIX_timestam * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var time = date + ' ' + month + ' ' + year + ', ' + hour + ':' + min;
    return time;
}