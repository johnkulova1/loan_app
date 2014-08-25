<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Student_application_form extends CI_Controller{

	public function index(){
		$this->load->helper('url');
		$this->load->helper('form');
		$this->load->view('tmpl_header');
		$this->load->view('tmpl_leftbar');
		$this->load->view('student_application_form');
		$this->load->view('tmpl_footer');
	}
	public function upload_student_details(){
		$this->load->helper('url');
		$father_pin_no=$this->input->post("father_pin_no");
		$mother_pin_no=$this->input->post("mother_pin_no");
		$this->upload_configurations();
		$profile_pic_field_name="imagefile";
		$id_card_front_field_name="id_front_imagefile";
		$id_card_back_field_name="id_back_imagefile";
		$signature_field_name="signature_imagefile";
		$profile_imagefilename=$this->upload_profile_picture($profile_pic_field_name);
		$idcard_image_front_filename=$this->upload_idcard_front_picture($id_card_front_field_name);
		$idcard_image_back_filename=$this->upload_idcard_back_picture($id_card_back_field_name);
		$signature_imagefilename=$this->upload_signature_picture($signature_field_name);
		$this->load->model("Student_application_form_model","form_model");
		$result=$this->form_model->register_student_details($profile_imagefilename, $idcard_image_front_filename, $idcard_image_back_filename, $signature_imagefilename, $father_pin_no, $mother_pin_no);
		if($result){

		}
	}
	public function upload_configurations(){
		$config['upload_path'] ='assets/images/';
		$config['allowed_types'] = 'gif|jpg|png';
		$config['max_size']	= '100';
		$config['max_width'] = '1024';
		$config['max_height'] = '768';
		$this->load->library('upload', $config);
		$this->upload->initialize($config);
	}
	public function upload_profile_picture($field_name){
		$this->upload->do_upload($field_name);
		$data=$this->upload->data();
		//Enter all the other details in the database
		return $imagefilename=$data["file_name"];
	}
	public function upload_idcard_front_picture($field_name){
		$this->upload->do_upload($field_name);
		$data=$this->upload->data();
		//Enter all the other details in the database
		return $imagefilename=$data["file_name"];
	}
	public function upload_idcard_back_picture($field_name){
		$this->upload->do_upload($field_name);
		$data=$this->upload->data();
		//Enter all the other details in the database
		return $imagefilename=$data["file_name"];
	}
	public function upload_signature_picture($field_name){
		$this->upload->do_upload($field_name);
		$data=$this->upload->data();
		//Enter all the other details in the database
		return $imagefilename=$data["file_name"];
	}

}