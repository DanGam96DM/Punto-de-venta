var tabla;
//funcion que se ejecuta al inicio
function init(){
    mostrarform(false);
    listar();
    $("#formulario").on("submit", function(e){
        guardaryeditar(e);
    });
    //se cargan los items del select categoria
    $.post("../ajax/articulo.php?op=selectCategoria", function(r){
        $("#idcategoria").html(r);
        $("#idcategoria").selectpicker('refresh');
    });
    $('#imagenmuestra').hide();
}
//Funcion limpiar
function limpiar(){
    $('#codigo').val('');
    $("#nombre").val('');
    $("#descripcion").val('');
    $("#stock").val('');
    $("#imagenactual").val('');
    $('#imagenmuestra').attr("src", "");
    $("#idarticulo").val('');
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
            url: '../ajax/articulo.php?op=listar',
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
    $("#imagen").val('');
    e.preventDefault(); //no se activa la accion predeterminada del evento
    $('#btnGuardar').prop("disabled", true);
    var formData=new FormData($('#formulario')[0]);
console.log($('#nombre').val(), $('#idcategoria').val(), $('#stock').val(), $('#descripcion').val(), $('#imagen').val(), $('#codigo').val());
    $.ajax({
        url:"../ajax/articulo.php?op=guardaryeditar",
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
function mostrar(idarticulo){
    $.post("../ajax/articulo.php?op=mostrar", {idarticulo:idarticulo}, function(data, status){
        data=JSON.parse(data);
        mostrarform(true);
        $("#idcategoria").val(data.idcategoria);
		$('#idcategoria').selectpicker('refresh');
        $("#codigo").val(data.codigo);
        $("#nombre").val(data.nombre);
        $("#stock").val(data.stock);
        $("#imagenmuestra").show();
        $("#imagenmuestra").attr("src", "../files/articulos/"+data.imagen);
        $("#imagenactual").val(data.imagen);
        $("#descripcion").val(data.descripcion);
        $("#idarticulo").val(data.idarticulo);
        generarbarcode();
    })
}

//funcion desactivar
function desactivar(idarticulo){
    bootbox.confirm("Estas seguro de desactivar el articulo?", function(result){
        if (result) {
            $.post("../ajax/categoria.php?op=desactivar", {idarticulo: idarticulo}, function(e){
                bootbox.alert(e);
                tabla.ajax.reload();
            });
        }
    });
}

//funcion activar
function activar(idarticulo){
    bootbox.confirm("Estas seguro de activar el articulo?", function(result){
        if (result) {
            $.post("../ajax/categoria.php?op=activar", {idarticulo: idarticulo}, function(e){
                bootbox.alert(e);
                tabla.ajax.reload();
            });
        }
    });
}


//funcion para generar codigo de barras
function generarbarcode(){
    codigo=$("#codigo").val();
    JsBarcode("#barcode", codigo);
}
function imprimir(){
    $("#print").printArea();
}
init();