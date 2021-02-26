const getState = ({getStore, getActions, setStore}) => {
    return {

        // WHAT IS STORE?
        // 1- store is an OBJECT
        // 2- store is where you define your variables and store your data in the frontend
        // 3- you can store any type of data ( string, object, array, etc...)
        // 4- these data are accessible from any component in the application because we are using the context
        // 5- store is directly linked to projectContext.js file

        store: {},
        actions: {
            search: text => {
                console.log(text);
            },
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            loadSomeData: () => {
                /**
                    fetch().then().then(data => setStore({ "foo": data.bar }))
                */
            },
        }
    };
};

export default getState;