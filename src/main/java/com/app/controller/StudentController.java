package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.Student;
import com.app.repository.StudentRepository;

@CrossOrigin
@RestController
@RequestMapping("/student")
public class StudentController {

	@Autowired
	private StudentRepository studentRepository;

	@PostMapping
	public Student addStudent(@RequestBody Student student) {
		System.err.println("adding student "+student);
		return studentRepository.save(student);
	}

	@GetMapping
	public List<Student> getAllStudent() {
		return studentRepository.findAll();
	}

	@GetMapping("/{sid}")
	public Student getStudentById(@PathVariable("sid") int sid ) {
		return studentRepository.findById(sid).get();
	}
	
	@DeleteMapping("/{sid}")
	public void deleteStudent(@PathVariable("sid") int sid) {
		System.err.println("Delete Studnt ::"+ sid);
		studentRepository.deleteById(sid);
	}
	
}
