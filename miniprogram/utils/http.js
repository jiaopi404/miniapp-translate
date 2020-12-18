"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    request: function (option) {
        return new Promise(function (resolve, reject) {
            wx.request({
                url: option.url,
                method: option.method || 'POST',
                data: option.data,
                header: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                success: function (res) {
                    resolve(res);
                },
                fail: function (res) {
                    reject(res);
                }
            });
        });
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImh0dHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFNQSxrQkFBZTtJQUNiLE9BQU8sWUFBRSxNQUFxQjtRQUM1QixPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBZ0IsRUFBRSxNQUFlO1lBQ25ELEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQ1QsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHO2dCQUNmLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxJQUFJLE1BQU07Z0JBQy9CLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtnQkFDakIsTUFBTSxFQUFFO29CQUNOLGNBQWMsRUFBRSxtQ0FBbUM7aUJBQ3BEO2dCQUNELE9BQU8sWUFBRSxHQUFVO29CQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ2QsQ0FBQztnQkFDRCxJQUFJLFlBQUUsR0FBVTtvQkFDZCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ2IsQ0FBQzthQUNGLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgUmVxdWVzdE9wdGlvbnMge1xuICBtZXRob2Q/OiAnUE9TVCcgfCAnR0VUJ1xuICB1cmw6IHN0cmluZyxcbiAgZGF0YTogT2JqZWN0XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmVxdWVzdCAob3B0aW9uOlJlcXVlc3RPcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOkZ1bmN0aW9uLCByZWplY3Q6RnVuY3Rpb24pID0+IHtcbiAgICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6IG9wdGlvbi51cmwsXG4gICAgICAgIG1ldGhvZDogb3B0aW9uLm1ldGhvZCB8fCAnUE9TVCcsXG4gICAgICAgIGRhdGE6IG9wdGlvbi5kYXRhLFxuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzcyAocmVzOk9iamVjdCkge1xuICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICB9LFxuICAgICAgICBmYWlsIChyZXM6T2JqZWN0KSB7XG4gICAgICAgICAgcmVqZWN0KHJlcylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG4iXX0=