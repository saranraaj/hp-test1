


const MongoClient = require('mongodb').MongoClient
const connectionString='mongodb+srv://Saran:Saran123@cluster0.nyh4f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')

    	global.globalUsername="";
 	    console.log("May be node with you")

        const db = client.db('myFirstDatabase')
        const usersignupCollection = db.collection('usersignup')
        const freelancersignupCollection = db.collection('freelancersignup')
        const freelancerworksCollection = db.collection('freelancerworks')
		const express = require('express');
		const bodyParser= require('body-parser')
		const app = express();
		app.use(express.static(__dirname))
		app.use(bodyParser.urlencoded({ extended: true }))
		app.set('view engine', 'ejs')

    app.get('/',(req,res)=>{
    	res.render('home')
    })
	app.get('/hospitallogin',(req,res)=>{
		res.render('hospitallogin',{msg:""});
	})
	app.get('/hospitalPortal',(req,res)=>{
		res.render('hospitalPortal',{msg:"Hospital UserName:"+adminName});
	})
	
	
		app.listen(8000,function(){
			console.log("Listening at 8000");
		})

		
		app.post('/hospitallogin', (req, res) => {
			const  adminName=req.body.adminName;
			  const AdminPassword=req.body.adminPassword;
			db.collection('adminTable').find({adminName:adminName}).toArray()
			  .then(results => {
			   if(results.length>0){
				   console.log("Account found");
				  results.forEach(function(row){
					var pwd=row.adminPassword;
						 if(pwd == AdminPassword){
							 res.render('hospitalPortal',{msg:"Welcome ,"+adminName});
							 console.log("logged in");
							 //return;
							}
						 else		 {
							 console.log("password mismatch");
							 res.render('hospitallogin',{msg:"Password Mismatch"});
						 }
				})
			}		
				else{
				   console.log("No admin account found");
				   
			   }
			  
			  })
			  
		  })
  




  })
  .catch(error => console.error(error))



