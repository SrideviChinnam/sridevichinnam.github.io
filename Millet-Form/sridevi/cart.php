<?php
$servername = "localhost";
$username = "rayapati_raja";
$password = "campusbears123!";

// Create connection
$conn = new mysqli($servername, $username, $password,"campusbears");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
// $college = ""
$college = "SELECT * from collegecode where id = 1" ;
$coleegequery = mysqli_query ($conn, $college);
while($row_college = mysqli_fetch_array($coleegequery)){
  ?>
  <style type="text/css">
   header.header_area {
    background: <?php echo $row_college['themecolor1']; ?> !important;
}
 </style> 
  
  <?php 

}
?>
<?php ?>
<section class="wishlist">
<div class="container" >
	<div class="row">
	<div class="col-md-12 col-xs-12">
	   	<ul class="breadcrumb comb">
	   		<li><a href="index.html"><i class="fa fa-home" aria-hidden="true"></i></a></li>

	  			<li><a href="#"> SHOPPING CART</a></li>
		</ul>
	</div>
 	
<div class="col-md-12 col-xs-12">
  <table class="table table-bordered">
  <thead class="tbl">
    <tr>
      <td class="text-center">Image</td>
      <td class="text-center">Product Name</td>
      <td class="text-center">Quantity</td>
      <td class="text-center">Unit Price</td>
      <td class="text-center">Total</td>
      <td class="text-center">Action</td>
    </tr>
  </thead>

  <tbody>
  
  	<tr>
  		<td class="text-center"><a href=""><img  width="80" src="images/bits/shirt1.png"></a></td>
  		<td class="text-center"><a href=""><strong>Product Name</strong></a></td>
  		<td class="text-center">
  		<div id="field1">
    <button type="button" id="subneg" class="sub">-</button>
    <input type="number" id="1" value="1" min="1" max="6" />
    <button type="button" id="addpos" class="add">+</button>
</div>
        
          </td>
  		<td class="text-center"><i class="fa fa-inr" aria-hidden="true"><strong>2000</strong></td>
  		<td class="text-center"><i class="fa fa-inr" aria-hidden="true"><strong>2000</strong></td>
  		 <td class="text-center">  
	  <button type="button" data-toggle="tooltip"  id="<?php echo $items['rowid']; ?>" class=" remove_cart btn btn-danger  " data-original-title="Remove"><i class="fa fa-times-circle"></i></button></td> 
  	</tr>
  	
     
    
    

 </tbody>




 



</table>
</div>

 

<div class="col-md-4 col-md-offset-8">
			<table class="table table-bordered">
			<tbody>
				<tr>
					<td class="text-right">
						<strong>Sub-Total:</strong>
					</td>
					<td class="text-right">$ 2000</td>
				</tr> 
				
				<tr>
					<td class="text-right">
						<strong>Total:</strong>
					</td>
					<td class="text-right">$ 2000</td>
				</tr>
			</tbody>
          </table>
		</div>
<!-- <div class="col-md-4 col-md-offset-8">
			<table class="table table-bordered">
			<tbody>
				<tr>
					<td class="text-right">
						<strong>Sub-Total:</strong>
					</td>
					<td class="text-right">$<?php echo $a ;?></td>
				</tr> 
				
				<tr>
					<td class="text-right">
						<strong>Total:</strong>
					</td>
					<td class="text-right">$<?php echo $a ;?></td>
				</tr>
			</tbody>
          </table>
		</div> -->



	<div  style= "padding-bottom:10px;" class="col-md-12 col-xs-12 ">
			<div class="col-md-10 col-xs-6">
				<a  href="productsindex.php" class="btn btn-primary shopping">Continue Shopping</a>
			</div>
			<div class="col-md-2 col-xs-6">
				<a href="checkoutindex.php" class="check btn btn-primary checkout">Place Order</a>
			</div>
		</div>

   </div>
</div>
</section>
<?php ?>
