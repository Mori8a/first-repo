 function createNameDiv(firstName, lastName) {
     let main = document.createElement("main");

      let firstParagraph = document.createElement("p");
     let firstName = document.createText(firstName);
      firstParagraph.appendChild(firstName);

      let secondParagraph = document.createElement("p");
      let lastName = document.createText(lastName);
     secondParagraph.appendChild(lastName);

      main.appendChild(firstParagraph);
    main.appendChild(secondParagraph);

     document.body.appendChild(main);
  }




  
let products = [
    { name: "Product 1", description: "coffe", price: 200 },
    { name: "Product 2", description: "tea", price: 40 },
    { name: "Product 3", description: "capsules", price: 130 },
    { name: "Product 4", description: "tea leaves", price: 25 },
    ];


    class Travel {
        constructor(name, date, kilometers) {
            this.name = name;
            this.date = date;
            this.kilometers = kilometers;
        }
    }

    let Travel1 = new Travel('avis', '12.5.2014', 30000);
    let Travel2 = new Travel('eldan', '19.6.2022', 25900);
    let Travel3 = new Travel('hertz', '23.9.2024', 78500);

    
    function printKilometers(car) {
        console.log(`The number is ${car.kilometers}`);
    }
    
    class Car {
        constructor(companyName, modelName) {
            this.companyName = companyName;
            this.modelName = modelName;
            this.isAvailable = true;
            this.kilometers = 0;
            this.Travel = [];
        }
    
        sumFor() {
            let sum = 0;
            for (let i = 0; i < this.Travel.length; i++) {
                sum += this.Travel[i].kilometers;
            }
            this.kilometers = sum;
        }
    }
    

    
    let car = new Car('Toyota', 'Corolla');
    car.Travel.push(Travel1, Travel2, Travel3);
    
    car.sumFor();
    printKilometers(car);
    
    function addTravel(Travel) {
        this.kilometers += Travel.kilometers;
    }
    
    console.log(car.kilometers)
    
    class AllVehicles {
        constructor(rentalCompanyName) {
            this.rentalCompanyName = rentalCompanyName;
            this.car = [];
        }
    
        addCar(car) {
            this.car.push(car);
        }
    }
    
    let allVehicles = new AllVehicles();
    allVehicles.addCar(car);
    
    console.log(allVehicles.car);

    
     maxCar() {
        let max=this.allVehicles[0]
        this.allVehicles.array.forEach(element => {
            if(max.kilometers < val.kilometers){
                max = element
            }
        })
        return max
        }
   
    
            
        availableCar(){
            this.isAvailable.forEach(value=>{
                if(val.isAvailable == true) console.log(value)
            });
        }
    
 