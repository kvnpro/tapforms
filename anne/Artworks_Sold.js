function recordsLoop() {

    var exhibits_id = 'fld-b8d523e451ce48979888490201bff1b4';
    var exhibitname_id = 'fld-26cf7f7ec155420eb8991715cf310ce6';
    var exhibits = record.getFieldValue(exhibits_id);
    var artsold_id = 'fld-65ae551c799d45dc89e0986d7249c8b6';

    record.setFieldValue(artsold_id, false)

    for (var index = 0, count = exhibits.length; index < count; index++) {
        var exhibitname = exhibits[index].getFieldValue(exhibitname_id);
        var sold = exhibits[index].getFieldValue('fld-817433485dcd42898516cd9749860d2a');


        if (sold) {

            console.log(exhibitname);
            record.setFieldValue(artsold_id, sold);
        }
    }
    return;
}

recordsLoop();