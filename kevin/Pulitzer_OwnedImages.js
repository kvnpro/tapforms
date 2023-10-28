function Script() {

    var title = record.getFieldValue('fld-476097d0ece4469285ce0e283a3a535f');

    console.log('Updating Owned Book photos: ' + title)

    var CoverURL = "http://localhost:8000/covers/" + title + ".jpg"
    var SpineURL = "http://localhost:8000/spines/" + title + ".jpg"
    var TitleURL = "http://localhost:8000/titles/" + title + ".jpg"

    var owned_cover_id = 'fld-910b3c7238004a3a8c25d79f259796ef';
    var owned_titlepage_id = 'fld-bd4aa38290bf43908012a94e97f6af7f';
    var owned_spine_id = 'fld-400821edc59a4bf6a829e2da2febac15';

    record.addPhotoFromUrlToField(CoverURL, owned_cover_id);
    record.addPhotoFromUrlToField(SpineURL, owned_spine_id);
    record.addPhotoFromUrlToField(TitleURL, owned_titlepage_id);

}

Script();