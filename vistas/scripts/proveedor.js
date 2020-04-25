var tabla;
//funcion que se ejecuta al inicio
function init(){
    mostrarform(false);
    listar();
    $("#formulario").on("submit", function(e){
        guardaryeditar(e);
    });
}
//Funcion limpiar
function limpiar(){
    $('#nombre').val('');
    $("#num_documento").val('');
    $("#direccion").val('');
    $('#telefono').val('');
    $("#email").val('');
    $("#idpersona").val('');
    
}
// funcion mostrar formulario
function mostrarform(flag){
    limpiar();
    if (flag) {
        $('#listadoregistros').hide();
        $('#formularioregistros').show();
        $('#btnGuardar').prop("disabled", false);
    }else{
        $('#listadoregistros').show();
        $('#formularioregistros').hide();
    }
}
//funcion cancelarform
function cancelarform(){
    limpiar();
    mostrarform(false);
}

//funcion listar
function listar(){
    tabla=$('#tbllistado').dataTable({
        "aProcessing": true,
        "aServerSide": true,
        dom: 'Bfrtip',
        buttons: [
            'copyHtml5',
            'excelHtml5',
            'csvHtml5',
            'pdf'
        ],
        "ajax": 
        {
            url: '../ajax/persona.php?op=listarp',
            type: "get",
            dataType: "json",
            error: function(e){
                console.log(e.responseText);
            }
        },
        "bDestroy":true,
        "iDisplayLength": 5,
        "order": [[0, "desc"]]
    }).DataTable();
}
//funcion para guardar y editar
function guardaryeditar(e){
    e.preventDefault(); //no se activa la accion predeterminada del evento
    $('#btnGuardar').prop("disabled", true);
    var formData=new FormData($('#formulario')[0]);
    console.log($('#idpersona').val(), $('#tipo_persona').val(), $('#nombre').val(), $('#tipo_documento').val(), $('#num_documento').val(), $('#direccion').val(), $('#telefono').val(), $('#email').val());
    $.ajax({
        url:"../ajax/persona.php?op=guardaryeditar",
        type: "POST",
        data: formData,
        contentType: false,
        processData: false,
        success: function(datos){
            bootbox.alert(datos);
            mostrarform(false);
            tabla.ajax.reload();
        }
    });
    limpiar();
}

//funcion mostrar
function mostrar(idpersona){
    $.post("../ajax/persona.php?op=mostrar", {idpersona:idpersona}, function(data, status){
        data=JSON.parse(data);
        mostrarform(true);
        $("#nombre").val(data.nombre);
        $("#tipo_documento").val(data.tipo_documento);
        $("#tipo_documento").selectpicker('refresh');
        $("#num_documento").val(data.num_documento);
        $("#direccion").val(data.direccion);
        $("#telefono").val(data.telefono);
        $("#email").val(data.email);
        $("#idpersona").val(data.idpersona);
    })
}

//funcion desactivar
function eliminar(idpersona){
    bootbox.confirm("Estas seguro de eliminar la persona?", function(result){
        if (result) {
            $.post("../ajax/persona.php?op=eliminar", {idpersona: idpersona}, function(e){
                bootbox.alert(e);
                tabla.ajax.reload();
            });
        }
    });
}
init();