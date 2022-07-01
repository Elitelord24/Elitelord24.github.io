function validate()
{
    var username=document.getElementById("username").Value;
    var password=document.getElementById("password").Value;
if (username=="admin"&& password=="admin")
{
    alert("Login Successful");

}
else 
{
    alert("login failed");
}



}