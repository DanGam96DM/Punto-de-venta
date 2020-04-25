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
    $('#idcategoria').val('');
    $("#nombre").val('');
    $("#descripcion").val('');
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
            url: '../ajax/categoria.php?op=listar',
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

    $.ajax({
        url:"../ajax/categoria.php?op=guardaryeditar",
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
function mostrar(idcategoria){
    $.post("../ajax/categoria.php?op=mostrar", {idcategoria:idcategoria}, function(data, status){
        data=JSON.parse(data);
        mostrarform(true);
        $("#nombre").val(data.nombre);
        $("#descripcion").val(data.descripcion);
        $("#idcategoria").val(data.idcategoria);
    })
}

//funcion desactivar
function desactivar(idcategoria){
    bootbox.confirm("Estas seguro de desactivar la categoria?", function(result){
        if (result) {
            $.post("../ajax/categoria.php?op=desactivar", {idcategoria: idcategoria}, function(e){
                bootbox.alert(e);
                tabla.ajax.reload();
            });
        }
    });
}

//funcion activar
function activar(idcategoria){
    bootbox.confirm("Estas seguro de activar la categoria?", function(result){
        if (result) {
            $.post("../ajax/categoria.php?op=activar", {idcategoria: idcategoria}, function(e){
                bootbox.alert(e);
                tabla.ajax.reload();
            });
        }
    });
}
init();