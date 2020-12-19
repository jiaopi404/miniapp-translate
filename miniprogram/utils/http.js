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
                    if (res.statusCode === 200) {
                        resolve(res.data);
                    }
                    else {
                        reject(res.data);
                    }
                },
                fail: function (res) {
                    reject(res);
                }
            });
        });
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImh0dHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxrQkFBZTtJQUNiLE9BQU8sRUFBUCxVQUFTLE1BQXFCO1FBQzVCLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFnQixFQUFFLE1BQWU7WUFDbkQsRUFBRSxDQUFDLE9BQU8sQ0FBQztnQkFDVCxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUc7Z0JBQ2YsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLElBQUksTUFBTTtnQkFDL0IsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO2dCQUNqQixNQUFNLEVBQUU7b0JBQ04sY0FBYyxFQUFFLG1DQUFtQztpQkFDcEQ7Z0JBQ0QsT0FBTyxZQUFFLEdBQW1CO29CQUMxQixJQUFJLEdBQUcsQ0FBQyxVQUFVLEtBQUssR0FBRyxFQUFFO3dCQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO3FCQUNsQjt5QkFBTTt3QkFDTCxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO3FCQUNqQjtnQkFDSCxDQUFDO2dCQUNELElBQUksWUFBRSxHQUFVO29CQUNkLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDYixDQUFDO2FBQ0YsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZUNvbnRleHQgfSBmcm9tICcuLi90eXBlcy9odHRwJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICByZXF1ZXN0IChvcHRpb246UmVxdWVzdE9wdGlvbnMpOlByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOkZ1bmN0aW9uLCByZWplY3Q6RnVuY3Rpb24pID0+IHtcbiAgICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6IG9wdGlvbi51cmwsXG4gICAgICAgIG1ldGhvZDogb3B0aW9uLm1ldGhvZCB8fCAnUE9TVCcsXG4gICAgICAgIGRhdGE6IG9wdGlvbi5kYXRhLFxuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzcyAocmVzOlJlc3BvbnNlQ29udGV4dCkge1xuICAgICAgICAgIGlmIChyZXMuc3RhdHVzQ29kZSA9PT0gMjAwKSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlcy5kYXRhKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QocmVzLmRhdGEpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBmYWlsIChyZXM6T2JqZWN0KSB7XG4gICAgICAgICAgcmVqZWN0KHJlcylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG4iXX0=