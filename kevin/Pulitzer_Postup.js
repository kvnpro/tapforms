function Script() {

    var title = record.getFieldValue('fld-476097d0ece4469285ce0e283a3a535f');
    var PostUpURL = "http://localhost:8000/" + title + ".jpg"

    record.addPhotoFromUrlToField(url, fieldID);

    var postup_id = 'fld-b514348aad024d0b966816640f00830d';
    record.addPhotoFromUrlToField(PostUpURL, postup_id);


}

Script();