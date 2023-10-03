function Script() {

    var cover = record.getFieldValue('fld-6a23c7e47adf41c782b832541d5f5766');

    console.log(cover.length);
    if (cover.length > 0) {
        console.log('already have a cover photo')
        return
    }

    var coverurl = record.getFieldValue('fld-d240d18651ce4a28ae9ab1776e877dfc');

    var cover_id = 'fld-6a23c7e47adf41c782b832541d5f5766';

    record.addPhotoFromUrlToField(coverurl, cover_id);

}

Script();