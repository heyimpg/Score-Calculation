//global variables
var numberPerson;
var person;

//after load done document
$(()=> {
    const urlParams = new URLSearchParams(window.location.search);

    numberPerson = urlParams.get('numberPerson')
    console.log(numberPerson);

    if (!numberPerson || numberPerson < 1) {
        alert('Please enter a number person valid');
        window.location.href = '/index.html';
        return;
    } else {
        person = new Array(numberPerson);

        for (let i = 0  ; i < numberPerson; i++) {
            person[i] = urlParams.get('person'+i+'');
        }

        console.log('person info: ', person);
        renderHtml();

    }

    function renderHtml() {
        $('.formInfoPerson').empty();

        for (let i = 0  ; i < numberPerson; i++) {
            // $('.formInfoPerson').empty();
            $('.formInfoPerson').append(`
                    <div class="bg-primary p-2 mt-5">
                        <label style="font-weight: bold">${person[i]}</label>
                        <form name="formInfo">`);

            for (let j = 0  ; j < numberPerson; j++) {
                if (i == j) continue;
                $('.formInfoPerson').append(`
                            <div class="form-group formInfoGroup row mt-3 ml-1 text-center">
                                <input type="number" class="form-control col-6 score" placeholder="0">
                                <div class="col-6">${person[j]}</div>
                            </div>
                `);
        }

        $('.formInfoPerson').append(`
                        </form>
                    </div>`);
    }
}
})


//before load document
function resetAll() {
    $('.score').each((index, element) => {
        element.value = "0"
    });
}