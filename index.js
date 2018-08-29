// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver,key,value) {
    const driver_new = {...driver}
    driver_new[key] = value
    return driver_new
}

function destructivelyUpdateDriverWithKeyAndValue(driver,key,value) {
    const driver_new = driver
    driver_new[key] = value
    return driver_new
}

function deleteFromDriverByKey(driver,key) {
    const driver_new = {...driver}
    delete driver_new[key]
    return driver_new
}

function destructivelyDeleteFromDriverByKey(driver,key) {
    delete driver[key]
    return driver
}