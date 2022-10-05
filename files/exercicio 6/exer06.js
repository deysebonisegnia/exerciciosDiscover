// transformDegree('50f')
    function transformDegree(degree){
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')
    if (!celsiusExists && !fahrenheitExists){
       throw new Error('Grau não identificado') 
    }
    let updatedDegree = Number(degree.toUppercase().replace("F","f"));
    let formula = fahrenheit  => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'  
    return formula(updatedDegree) + degreeSign
}
    if(celsiusExists){
        updatedDegree = Number(degree.toUppercase().replace("C","c"));
         formula = celsius  => celsius * 9/5 + 32
         degreeSign = 'F'  
        return formula(updatedDegree) + degreeSign 
    }
try{
    console.log(transformDegree('50C'))
   // transformDegree('50z')
}catch (error){
    console.log(error)
}










