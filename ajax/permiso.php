<?php
    require_once "../modelos/Permiso.php";
    $permiso= new Permiso();
    
    switch ($_GET["op"]) {
        case 'listar':
            $rspta=$permiso->listar();
            $data= Array();
            while ($reg=$rspta->fetch_object()) {
                $data[]=array(
                    "0"=>$reg->nombre,
                     );
            }
            $results=array(
                "sEcho"=>1, //informacion para la datatable
                "iTotalRecords"=>count($data), //se envia el total de registros a la datatable
                "iTotalDisplayRecords"=>count($data), //total de registros a visualizar
                "aaData"=>$data
            );
            echo json_encode($results);
            break;
    }

?>