

//पुश, पॉप, प्रींट, टॉप, रिवर्सप्रिंट, साईज


function CustomArray() {
    //console.log(arguments);

    Object.defineProperty(this, "length", {
        value:0,
        writable:true,
        enumerable:false
    })

    this.length=arguments.length;

    for(let i=0; i<arguments.length; i++){
        this[i]=arguments[i];
    }
}

let arr1 = new CustomArray();
console.log(arr1)


/////cunstom push function=====>>>>>


CustomArray.prototype.पुश = function(value) {
    this[this.length] = value;
    this.length++;
}

arr1.पुश(15);arr1.पुश(14);arr1.पुश(17);arr1.पुश(19);
console.log(arr1);

/////custom pop function ====>>>

CustomArray.prototype.पॉप = function() {
    delete this[this.length-1];
    this.length--;
}

arr1.पॉप();
console.log(arr1);

/////custom top function =====>>>>>

CustomArray.prototype.टॉप = function() {
    console.log(this[this.length-1])
}

arr1.टॉप();

/////custom print function ====>>>

CustomArray.prototype.प्रींट = function() {
    console.log(Object.values(this));
}

arr1.प्रींट();

/////custom printreverse function======>>>>>

CustomArray.prototype.प्रिंटरिवर्स = function() {
    let bag="";

    for(let i=this.length-1; i>=0; i--){
        bag=bag+this[i]+" ";
    }
    console.log("Reverse-Print:-",bag)
}

arr1.प्रिंटरिवर्स();

//////custom arr.lengt(size) function =====>>>>

CustomArray.prototype.साईज =function() {
    console.log(this.length);
}

arr1.साईज()