$(()=>{
    $('form[name=formNumber]').submit(e=> {
        e.preventDefault(); 
    })

    $('.formInfoPerson').hide();
})



function submitFormNumber() {
    var numberPerson = $('#numberPerson').val();

    if (!numberPerson || numberPerson < 2) {
        alert('Number person must be positive number & more than 1');
        return;
    }

    $('#numberPersonResult').text('Number person: ' + numberPerson);

    var formInfoGroup = $('.formInfoGroup');
    $(formInfoGroup).empty();

    formInfoGroup.append('<input type="hidden" value="'+numberPerson+'" name="numberPerson"></input>');
    for (index = 0; index < numberPerson; index++) {
        formInfoGroup.append('<input type="text" class="form-control mt-3" name="person'+index+'" placeholder="Person name '+(index+1)+'" required>');
    }

    $('.formInfoPerson').show();
}