function Script() {

    // Replace with your own code

    var exhName = record.getFieldValue();
    //var name = record.getFieldValue('fld-f16d61e5ea884c7c82d82fb98dca09a8');

    var exhibits = record.getFieldValue('fld-001bcb2ac8464fb682fc942b3765d38c');


    var name = exhibits.getFieldValue('fld-f675a412c988409fa6aef7815b1a09e5');



    var hello_world = "Hello World!";
    return name;

}
