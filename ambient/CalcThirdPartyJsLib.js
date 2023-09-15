var DaoDao;  
(function(DaoDao) {
    var Calc = (function () { 
        function Calc() { 
        } 
    })
    Calc.prototype.doSum = function (limit) {
        var sum = 0; 
 
        for (var i = 0; i <= limit; i++) { 
            sum = sum + i; 
        }
        return sum; 
    }
    DaoDao.Calc = Calc; 
    return Calc; 
})(DaoDao || (DaoDao = {})); 
var test = new DaoDao.Calc();