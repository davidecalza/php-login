function ModifyUser(name, email, divmod) {
    $(".active").removeClass('active');
    $('.btn-outline-light').removeClass('btn-outline-light').addClass('btn-outline-info');
    $('#item-' + name).addClass('active');
    $('#btn-' + name).removeClass('btn-outline-info').addClass('btn-outline-light');

    const str =
        "<form id='form-modify-user'>" +
        "  <div class='form-group'>" +
        "    <label for='lbl-username'>Username</label>" +
        "    <input type='text' class='form-control' id='txt-username' placeholder='Enter Username' value='"+name+"'>" + 
        "  </div>" +
        "  <div class='form-group'>" +
        "    <label for='lbl-email'>Email</label>" +
        "    <input type='email' class='form-control' id='txt-email' name='txt-email' placeholder='Enter Email' value='"+email+"'>" +
        "  </div>" +
        "  <br />" +
        "  <div class='form-group'>" +
        "    <label for='lbl-newpwd'>New Password</label>" +
        "    <input type='password' class='form-control' id='txt-newpwd' placeholder='Enter New Password'>" +
        "  </div>" +
        "  <div class='form-group'>" +
        "    <label for='lbl-retpwd'>Retype New Password</label>" +
        "    <input type='password' class='form-control' id='txt-retpwd' placeholder='Retype New Password' onkeyup='CheckNewPasswordRetype(\"txt-newpwd\", \"txt-retpwd\")'>" +
        "  </div>" +
        "  <br />" +
        "  <div class='form-group'>" +
        "    <label for='lbl-oldpwd'>Password</label>" +
        "    <input type='password' class='form-control' name='txt-pwd' id='txt-pwd' placeholder='Enter your current Password'>" +
        "  </div>" +
        "  <div id='div-modify-user-btns'> " +
        "    <button type='submit' class='btn btn-outline-success my-3 my-sm-0 mr-sm-3' id='btn-update' name='btn-update' value='" + name + "' formmethod='post'>Update User</button>" +
        "    <button type='submit' class='btn btn-outline-danger my-3 my-sm-0 mr-sm-3' name='btn-delete'>Delete User</button>" +
        "    <button type='button' class='btn btn-outline-info' name='btn-cancel' onclick='CancelButton(\"" + divmod + "\")'>Cancel</button>" +
        "  </div>" +
        "</form>";

    $('#' + divmod).html(str);
}

function CheckNewPasswordRetype(id1, id2){
    pw1 = $("#"+id1).val();
    pw2 = $("#"+id2).val();

    $("#"+id2).removeClass("is-invalid").removeClass("is-valid");
    if(pw2==="" || pw2===null){}
    else if(pw1===pw2){ $("#"+id2).addClass("is-valid"); }
    else{ $("#"+id2).addClass("is-invalid"); }
}

function CancelButton(id){
    $("#"+id).html(" ");
    $(".active").removeClass('active');
    $('.btn-outline-light').removeClass('btn-outline-light').addClass('btn-outline-info');
}

function ErrorAlert(form_id, msg, txt_id){
    str='<div id="alert-mod-user-error" class="alert alert-danger alert-dismissible fade show" role="alert">' +
        '  <strong>Error!</strong> ' + msg +
        '  <button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
        '    <span aria-hidden="true">&times;</span>' +
        '  </button>' +
        '</div>';
    $('#'+form_id).prepend(str);
    $('#'+txt_id).addClass("is-invalid");
}