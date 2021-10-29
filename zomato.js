console.log("")
console.log("           WELCOME TO ZOMATO APP         ")
console.log("\n")
var dic={}

readlinesync=require("readline-sync");
var user_input=readlinesync.question("For the login your details write here login = ");
if (user_input=="login"){
    Username=readlinesync.question("enter your name = ");
    your_number=readlinesync.questionInt("enter your phone number = ");
    Password=readlinesync.question("enter your Password = ")
    console.log("Your login is done")
    console.log("\n")
    console.log("-----------------------")
    console.log("Add your location that where you want to order ")

    function location(){
        var add_location=readlinesync.question("Add your location = ");
        if (add_location==="current_location"){
            console.log(" 45/1, 45/2, Avalahalli Huskur Panchayath\n Anekal Taluk Dist\n Bengaluru, Karnataka 560099\n")
        
        }
        else if (add_location==="your_location"){
            write_location=readlinesync.question("Here write your location = \n")
        }
    
    }
    location()

}
else{
    console.log("Sorry you didn't login here")
}
console.log("")
console.log("------------------Food_Catogories-----------------")
function food(){
    food_options=readlinesync.question("Choose options for the food catogories: ")
    if (food_options==="veg_food"){
        var veg_food={"dosa":300,"chawmin":400,"chhola_bhatura":500,"Fry_rice":500,"Tandoori Paneer Tikka":130,"Veg Burger":320,"masoori Dosa":122,"Sambhar Vada":145,"Shahi Paneer":450,"Onion Uttapam":123}
        options=readlinesync.question("write your dish = ")
        var i=0;
        for (i in veg_food){
            if (options==i){
                console.log(i,"Price", veg_food[i])
                dic[i]=veg_food[i]
                var Dprice=60
                dic["Delivery Charge"]=Dprice
                dic["TotalPrice"]=veg_food[i]+Dprice
                console.log("\n")
                console.log(" 1 = Sawan Restaurant\n","2 = Food/Bar Restaurant\n","3 = Disaster Resataurant\n","4 = Casaul Restaurant\n" )
                veg_rest()

            }
                 
        }
{ 
    }
    }
    else if (food_options==="non-veg"){
        var non_veg={"Non-Veg Cutlet":200,"Chicken Kebab":320,"Tandoori":130,"Chicken Patties":220,"Prawns":350,"Biryani":400,"Mutton Kebab":500}
        options1=readlinesync.question("write your dish = ")
        var x=0;
        for (x in non_veg){
            if (options1==x){
                console.log(x,"Price",non_veg[x])
                dic[x]=non_veg[x]
                var Dprice=60
                dic["Delivery Charge"]=Dprice
                dic["Total Price"]=non_veg[x]+Dprice
                console.log("\n")
                console.log(" 1 = Kitchen restaurant\n","2 = Palace restaurant\n","3 = Street restaurant\n","4 = Bites restaurant\n","5 = Station restaurant\n")
                rest()
            }
        }

    }

}
food()
function veg_rest(){
    restaurant=readlinesync.questionInt("Select your restaurant :")
    if (restaurant==1){
        console.log("Ok you have selected Sawan Restaurant")
        console.log("")
        console.log("----------------Place_Order----------------")
        place_order()
    }
    else if (restaurant==2){
        console.log("Ok you have selected Food/Bar Restaurant")
        console.log("")
        console.log("----------------Place_Order----------------")
        place_order()
    }
    else if (restaurant==3){
        console.log("Ok you have selected Disaster Resataurant")
        console.log("")
        console.log("----------------Place_Order----------------")
        place_order()
    }
    else if (restaurant==4){
        console.log("Ok you have selected Casaul Restaurant")
        console.log("")
        console.log("----------------Place_Order----------------")
        place_order()
    }
}

function rest(){
    restaurant=readlinesync.questionInt("Select your restaurant :")
    if (restaurant==1){
        console.log("Ok you have selected Kitchen restaurant")
        console.log("")
        console.log("----------------Place_Order----------------")
        place_order()
    }
    else if (restaurant==2){
        console.log("Ok you have selected Palace restaurant")
        console.log("")
        console.log("----------------Place_Order----------------")
        place_order()
    }
    else if (restaurant==3){
        console.log("Ok you have selected Bites restaurant")
        console.log("")
        console.log("----------------Place_Order----------------")
        place_order()
    }
    else if (restaurant==4){
        console.log("Ok you have selected Station restaurant")
        console.log("")
        console.log("----------------Place_Order----------------")
        place_order()
    }
    else if (restaurant==5){
        console.log("Ok you have selected Station restaurant")
        console.log("")
        console.log("----------------Place_Order----------------")
        place_order()
    }
}

function place_order(){
    options2=readlinesync.question("Write your options for the ordering = ")
    if (options2=="order"){
        order=readlinesync.question("How you want to payment by online or cash on delivery \n")
        if (order=="Online"){
            console.log("OK you payed by online")
        }
        else if (order=="cash"){
            console.log("Ok you payed by cash")
        }
    }
    dic["payment"]=order
    dic["Time"]=" 30 minutes"
    console.log(dic)
}



