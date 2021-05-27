import Store from '../src/Store.js';


describe('File: Store.js',function(){
    test('adds 2 callback functions to list only', function(){
        //arrange
        var callback1 = jest.fn();
        var callback2 = jest.fn();
        //act
        Store.addObserverToList('test1',callback1);
        Store.addObserverToList('test2',callback2);
        Store.addObserverToList('test2',callback2);
        Store.addObserverToList('test1',callback1);
        Store.addObserverToList('test2',callback2);
        var result = Store.addObserverToList('test2',callback2);
        //assert
        expect(result).toBe(2);
    });

    test('notifies 3 observers only',function(){
        //arrange
        var callback1 = jest.fn();
        var callback2 = jest.fn();
        var callback3 = jest.fn();
        Store.addObserverToList('test1',callback1);
        Store.addObserverToList('test2',callback2);
        Store.addObserverToList('test3',callback3);
        //act
        var result = Store.notifyAllObservers();
        //assert
        expect(result).toBe(3);
    })
    test('set initial State',function(){
        //arrange
        var initialStoreObj ={count:33 }
        Store.setInitialState(initialStoreObj);
        //act
        var result = Store.getInitialState();
        //assert
        expect(result.count).toBe(33);
    })
    test('reducer increments value by 2', function(){
        //arrange
        var initialStoreObj = {count:33 }
        Store.setInitialState(initialStoreObj);        
        var storeClone = Object.assign({},initialStoreObj);
        var action1 = {type:'increment',payload:1};
        var action2 = {type:'increment',payload:1};
        //act
        Store.reducer(storeClone,action1);
        var result = Store.reducer(storeClone,action2);
        //assert
        var endResult = initialStoreObj.count + 2;
        expect(result.count).toBe(endResult);
    })

    test('reducer decrements value by 2', function(){
        //arrange
        var initialStoreObj = {count:33 }
        Store.setInitialState(initialStoreObj);  
        var storeClone = Object.assign({},initialStoreObj);
        var action1 = {type:'decrement',payload:1};
        var action2 = {type:'decrement',payload:1};
        //act
        Store.reducer(storeClone,action1);
        var result = Store.reducer(storeClone,action2);
        //assert
        var endResult = initialStoreObj.count - 2;
        expect(result.count).toBe(endResult);
    })
});