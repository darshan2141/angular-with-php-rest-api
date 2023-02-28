<?php 
require './dbcon.php';

function error422($msg){
    $data = [
        'status' => 422,
        'msg' => $msg,
    ];
    header("HTTP/1.0 422 Unprocessble Entiy");
    echo json_encode($data);
    exit();
}

function getStudentsList(){
    global $conn;

    $query = "select * from customers";
    $query_run = mysqli_query($conn,$query);

    if($query_run){
        if(mysqli_num_rows($query_run)){
            $res = mysqli_fetch_all($query_run,MYSQLI_ASSOC);
            $data = [
                'status' => 200,
                'msg' => 'Record Found Successfully',
                'data' => $res,
            ];
            header("HTTP/1.0 200 OK");
            return json_encode($data);
        }else{   
            $data = [
                'status' => 400,
                'msg' => 'No Record Found',
            ];
            header("HTTP/1.0 400 No Record Found");
            return json_encode($data);
        }
    }else{
        $data = [
            'status' => 500,
            'msg' => 'Internal Server Error',
        ];
        header("HTTP/1.0 500 Internal Server Error");
        return json_encode($data);
    }
}

function addStudents($studentsInput){
    global $conn;

    $name = mysqli_real_escape_string($conn,$studentsInput['name']);
    $email = mysqli_real_escape_string($conn,$studentsInput['email']);
    $phone = mysqli_real_escape_string($conn,$studentsInput['phone']);

    if(empty(trim($name))){
        return error422('Enter Your Name');
    }elseif(empty(trim($email))){
        return error422('Enter Your Email');
    }elseif(empty(trim($phone))){
        return error422('Enter Your Phone');
    }else{
        $query = "insert into customers (name,email,phone) values('$name','$email','$phone')";
        $result = mysqli_query($conn,$query);

        if($result){
            $data = [
                'status' => 201,
                'msg' => 'Add SuccessFully',
            ];
            header("HTTP/1.0 201 Created");
            return json_encode($data);
        }else{
            $data = [
                'status' => 500,
                'msg' => 'Internal Server Error',
            ];
            header("HTTP/1.0 500 Internal Server Error");
            return json_encode($data);
        }
    }
}