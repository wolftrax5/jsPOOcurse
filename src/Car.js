class Car {
    constructor (license, driver) {
        this.id;
        this.license = license || '';
        this.driver = driver || {};
        this.passenger; 
    }
    printData() {
        console.log("ID",this.id)
        console.log("ID",this.driver.name)
    }
    
}

export default Car;
