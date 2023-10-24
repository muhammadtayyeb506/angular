// Student arrayid
//var Students = [];
// Course array
//var Courses = [];

// Add Student
function addStudent() {
 
    var first_NAME = $('#first_NAME').val();
    var last_NAME = $('#last_NAME').val();
    var Age = parseInt($('#Student_Age').val());
    var course_Id =parseInt($('#course_ID').val());

    var Student = {
        first_NAME: first_NAME,
        last_NAME: last_NAME,
        age: Age,
        course_Id: course_Id
        
    };

    $.ajax({
        url: 'https://localhost:44347/api/Students/AddStudent',
        type: 'POST',
        data: JSON.stringify(Student),
        contentType: 'application/json',
        success: function() {
            // Clear form
            $('#StudentForm')[0].reset();
            // Update Student List
            fetchStudents();
        }
    });
}
   
   
     
// update Student
function updateStudent() {
    var Student_ID = parseInt($('#ID').val());
    var first_NAME = $('#Newfirst_NAME').val();
    var last_NAME = $('#Newlast_NAME').val();
    var Age = parseInt($('#NewAge').val());
    var course_Id =parseInt($('#Newcourse_ID').val());

    var Student = {
		Student_ID: Student_ID,
        first_NAME: first_NAME,
        last_NAME: last_NAME,
        Age: Age,
        course_Id: course_Id
        
    };

    $.ajax({
        url: 'https://localhost:44347/api/Students/UpdateStudentRecored',
        type: 'PUT',
        data: JSON.stringify(Student),
        contentType: 'application/json',
        success: function() {
            // Clear form
            $('#updateForm')[0].reset();
            // Update Student List
            fetchStudents();
        }
    });
}  

 
 
// Fetch StudentsList
function fetchStudents() {
    $.ajax({
        url: 'https://localhost:44347/api/Students/GetAllStudents',
        type: 'GET',
        success: function(data) {
            $('#StudentList').empty();
            console.log(data);
            data.forEach(function(Student) {
                $('#StudentList').append('<li class="list-group-item">' + Student.student_Id + ', '+ Student.first_NAME + ', ' + Student.last_NAME + ', ' + Student.age + ', '+Student.course_Name+'</li>');
            });
        }
    });
}



// Initial fetch
$(document).ready(function() {
    fetchStudents();
  //  Students_Age_Above_20();
});

// Delete Student
function DeleteStudent() {
    var Student_id = parseInt($('#Student_id').val()); 

    $.ajax({
        url: 'https://localhost:44347/api/Students/DeleteStudent' ,
        type: 'POST',
        // data: JSON.stringify(Student_id),
        data: JSON.stringify(Student_id),
        contentType: 'application/json',
        success: function() {
            // Clear form
            $('#DeleteForm')[0].reset();
            // Update Student List
            fetchStudents();
        }
    });
}

 


