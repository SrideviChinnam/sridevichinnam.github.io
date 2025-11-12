    <?php ?>
  <?php

//header('Location:http://webroas.com/webroas.com/akhila/successindex.php');
// echo "Connected successfully";
// header('Location:http://webroas.com/webroas.com/akhila/successindex.php');

// $user_fname = $_POST['fstname'];
// $user_lname = $_POST['lstname'];
// $user_email = $_POST['email'];
// $user_pwd = $_POST['fpwd'];
// $user_tmpwd = $_POST['fpwd'];
// $status = 0;
// $dateadd = date('Y-m-d 00:00:00');
// $datea = date('Y-m-d 00:00:00');

// echo $update_id;
// echo "<br/>";
// echo $update_name;
// $college = ""

include_once('default_includer.php');



$row_college = "SELECT * from userlogin where id = 10" ;
$collegequery = mysqli_query($conn, $row_college);
?>


<link rel="stylesheet" type="text/css" href="css/profile.css">

<section class="products">
    <div class="container">
      <div class="row">
      <div class="col-md-3 col-sm-6 col-xs-12">
    <h2 style="text-align:center">User Profile Card</h2>

    <div class="card">
      <img src="images/cust.jpg" alt="John" style="width:100%;">
      <h1 class="user_nme">John Doe</h1>
      <p class="title">CEO & Founder, Example</p>
      <p>Harvard University</p>
      <div style="margin: 24px 0;">
        <a href="#"><i class="fa fa-behance" aria-hidden="true"></i></a> 
        <a href="#"><i class="fa fa-twitter twt"></i></a>  
        <a href="#"><i class="fa fa-linkedin twt"></i></a>  
        <a href="#"><i class="fa fa-facebook twt"></i></a> 
      </div>
      <p><button>Contact</button></p>
    </div>
    </div>
  <!-- </br> -->
    <div class="col-md-9 col-sm-6 col-xs-12">
      <div class="profile_card">
        
        <form class="form-horizontal form1" method="post" action="">
           <div class="form-group">
            <h3 style="text-align: left; padding-left: 40px; color: blue">Personal Details <button><i class="fa fa-pencil" aria-hidden="true" id="ed1"></i></button> </h3>
             <label for="OldPassword" class="col-sm-3 col-xs-6  control-label">First Name </label>
                 <div class="col-sm-7 col-xs-6">
                  <div class="form-line">
                    <?php  
                    while($row_person = mysqli_fetch_array($collegequery)){

                    ?>
                    <!-- <?php //echo $row_person['fstname']; ?> -->
                    <input type="text" class="form-control info_profile" id="Name" name="fstname" placeholder="First Name"  value="<?php echo $row_person['fstname']; ?>" disabled> 

                    

                    <?php  

                    }
                      ?>
                      <script type="">
                        $("#ed1").click(function(){
                          $("#Name, #LName, #email, #prime, #DOB, #gender, #gender1").removeAttr("disabled");
                        });
                      </script>
                  </div>
                </div>
              </div>
            <div class="form-group">
              <label for="OldPassword" class="col-sm-3 col-xs-6 control-label">Last Name </label>
                <div class="col-sm-7 col-xs-6">
                  <div class="form-line">

                    <input type="text" class="form-control info_profile" id="LName" name="lstname" placeholder="Last Name" required="" disabled value="chinnam">
                  </div>
                </div>
            </div>
            <div class="form-group">
              <label for="NewPassword" class="col-sm-3 col-xs-6 control-label">Email</label>
                <div class="col-sm-7 col-xs-6">
                  <div class="form-line">
                    <input type="email" class="form-control info_profile" id="email" name="email" placeholder="Email"  disabled value="chinnam@gmail.com">
                  </div>
                </div>
              </div>
              
              <div class="form-group">
                <label for="NewPasswordConfirm" class="col-sm-3 col-xs-6 control-label">Date of Birth</label>
                <div class="col-sm-7 col-xs-6">
                  <div class="form-line">
                    <input type="date" class="form-control info_profile" id="DOB" name="dateofbrth" placeholder="Password (Confirm)" disabled>
                  </div>
                </div>
              </div>
              <div class="form-group">
              <label for="NewPassword" class="col-sm-3 col-xs-6 control-label">Primary College</label>
                <div class="col-sm-7 col-xs-6">
                  <div class="form-line">
                    <input type="text" class="form-control info_profile" id="prime" name="collegeName" placeholder="college Name"  disabled>
                  </div>
                </div>
            </div>
               <div class="form-group">
              <label for="NewPasswordConfirm" class="col-sm-3  col-xs-6 control-label">Gender</label>
                <div class="col-sm-4 col-xs-3">
                  <label class="radio-inline">
                    <input type="radio" name="optradio"  disabled id="gender">Male
                    </label>
                   <label class="radio-inline">
                    <input type="radio" name="optradio" checked disabled id="gender1">Female
                    </label>
                </div>
            </div>
            <h3 style="text-align: left; padding-left: 40px; color: blue">Manage Address <button><i class="fa fa-pencil" aria-hidden="true" id="ed2"></i></button> </h3>
            <div class="form-group">
              <label for="NewPasswordConfirm" class="col-sm-3 col-xs-6 control-label">Address1 :</label>
                <div class="col-sm-7 col-xs-6">
                  <div class="form-line">
                    <textarea class="form-control" rows="5" id="addr1" disabled></textarea>
                  </div>
                </div>
            </div>
            <div class="form-group">
              <label for="NewPasswordConfirm" class="col-sm-3 col-xs-6 control-label">Address2 :</label>
                <div class="col-sm-7 col-xs-6">
                  <div class="form-line">
                    <textarea class="form-control" rows="5" id="addr2" disabled></textarea>
                  </div>
                </div>
            </div>
            <div class="form-group">
              <label for="NewPasswordConfirm" class="col-sm-3 col-xs-6 control-label">Address3 :</label>
                <div class="col-sm-7 col-xs-6">
                  <div class="form-line">
                    <textarea class="form-control" rows="5" id="addr3" disabled></textarea>
                  </div>
                </div>
            </div>
            <script type="">
                        $("#ed2").click(function(){
                          $("#addr1, #addr2, #addr3").removeAttr("disabled");
                        });
                      </script>
            <!-- <div class="form-group form-inline" id="framework_form">
              <label for="NewPasswordConfirm" class="col-sm-3 col-xs-6 control-label">Intrested Colleges</label>
                <div class="col-sm-7 col-xs-5">
                                                    
                  <select class="form-control info_profile"  id="sel1">
                    <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                  </select>
                 </div>
             </div> -->
           
            <div class="form-group">
              <div class="col-sm-offset-4 col-sm-4 col-xs-6">
                <a href="userprofileindex.php"><button type="submit" class="btn btn-danger profile_info">Update</button></a>
              </div>
            </div>
        </form>
      </div>
    </div>
    </div>

</div>
</section>
<!-- <script>
$(document).ready(function(){
 $('#framework').multiselect({
  nonSelectedText: 'Select Framework',
  enableFiltering: true,
  enableCaseInsensitiveFiltering: true,
  buttonWidth:'600px'
 });
 
 $('#framework_form').on('submit', function(event){
  event.preventDefault();
  var form_data = $(this).serialize();
  $.ajax({
   url:"insert.php",
   method:"POST",
   data:form_data,
   success:function(data)
   {
    $('#framework option:selected').each(function(){
     $(this).prop('selected', false);
    });
    $('#framework').multiselect('refresh');
    alert(data);
   }
  });
 });
 
 
});
</script> -->
<?php ?>
