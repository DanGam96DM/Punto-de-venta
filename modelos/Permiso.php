<?php
    require "../config/Conexion.php";
    Class Permiso
    {
        //implementa nuestro constructor
        public function __construct()
        {
            
        }
        //listar registros
        public function listar(){
            $sql="SELECT * FROM permiso";
            return ejecutarConsulta($sql);
        }

    }
?>