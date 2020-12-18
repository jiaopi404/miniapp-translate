"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatTime = function (date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    return ([year, month, day].map(formatNumber).join('/') +
        ' ' +
        [hour, minute, second].map(formatNumber).join(':'));
};
var formatNumber = function (n) {
    var s = n.toString();
    return s[1] ? s : '0' + s;
};
exports.truncate = function (query) {
    if (query.length <= 20) {
        return query;
    }
    else {
        return query.substr(0, 10) + query.length + query.substr(-10);
    }
};
exports.getUUid = function () {
    var seed = '0123456789abcdef';
    var part1 = +new Date() + '';
    var part2 = [];
    for (var i = 0; i < 16; i++) {
        part2.push(seed[Math.round(Math.random() * 16)]);
    }
    return part1 + part2.join('');
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBYSxRQUFBLFVBQVUsR0FBRyxVQUFDLElBQVU7SUFDbkMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQy9CLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDakMsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO0lBQzFCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtJQUM1QixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDaEMsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBRWhDLE9BQU8sQ0FDTCxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDOUMsR0FBRztRQUNILENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUNuRCxDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRUQsSUFBTSxZQUFZLEdBQUcsVUFBQyxDQUFTO0lBQzdCLElBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtJQUN0QixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFBO0FBQzNCLENBQUMsQ0FBQTtBQUVZLFFBQUEsUUFBUSxHQUFHLFVBQUMsS0FBWTtJQUNuQyxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksRUFBRSxFQUFFO1FBQ3RCLE9BQU8sS0FBSyxDQUFBO0tBQ2I7U0FBTTtRQUNMLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUE7S0FDOUQ7QUFDSCxDQUFDLENBQUM7QUFFVyxRQUFBLE9BQU8sR0FBRztJQUNyQixJQUFNLElBQUksR0FBRyxrQkFBa0IsQ0FBQztJQUNoQyxJQUFNLEtBQUssR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQy9CLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNqQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzNCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNsRDtJQUNELE9BQU8sS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGZvcm1hdFRpbWUgPSAoZGF0ZTogRGF0ZSkgPT4ge1xuICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpXG4gIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMVxuICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKVxuICBjb25zdCBob3VyID0gZGF0ZS5nZXRIb3VycygpXG4gIGNvbnN0IG1pbnV0ZSA9IGRhdGUuZ2V0TWludXRlcygpXG4gIGNvbnN0IHNlY29uZCA9IGRhdGUuZ2V0U2Vjb25kcygpXG5cbiAgcmV0dXJuIChcbiAgICBbeWVhciwgbW9udGgsIGRheV0ubWFwKGZvcm1hdE51bWJlcikuam9pbignLycpICtcbiAgICAnICcgK1xuICAgIFtob3VyLCBtaW51dGUsIHNlY29uZF0ubWFwKGZvcm1hdE51bWJlcikuam9pbignOicpXG4gIClcbn1cblxuY29uc3QgZm9ybWF0TnVtYmVyID0gKG46IG51bWJlcikgPT4ge1xuICBjb25zdCBzID0gbi50b1N0cmluZygpXG4gIHJldHVybiBzWzFdID8gcyA6ICcwJyArIHNcbn1cblxuZXhwb3J0IGNvbnN0IHRydW5jYXRlID0gKHF1ZXJ5OnN0cmluZyk6c3RyaW5nID0+IHtcbiAgaWYgKHF1ZXJ5Lmxlbmd0aCA8PSAyMCkge1xuICAgIHJldHVybiBxdWVyeVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBxdWVyeS5zdWJzdHIoMCwgMTApICsgcXVlcnkubGVuZ3RoICsgcXVlcnkuc3Vic3RyKC0xMClcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldFVVaWQgPSAoKTogc3RyaW5nID0+IHtcbiAgY29uc3Qgc2VlZCA9ICcwMTIzNDU2Nzg5YWJjZGVmJztcbiAgY29uc3QgcGFydDEgPSArbmV3IERhdGUoKSArICcnO1xuICBjb25zdCBwYXJ0MiA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyBpKyspIHtcbiAgICBwYXJ0Mi5wdXNoKHNlZWRbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTYpXSk7XG4gIH1cbiAgcmV0dXJuIHBhcnQxICsgcGFydDIuam9pbignJyk7XG4gfTtcbiJdfQ==