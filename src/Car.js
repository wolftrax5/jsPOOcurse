function Car() {
    this.id;
    this.license;
    this.driver;
    this.passenger;
}
Car.prototype.printData =  function (){
    console.log("ID",this.id)
    console.log("ID",this.driver.name)
}

export default Car;
