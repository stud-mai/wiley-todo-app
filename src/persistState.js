export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        window.localStorage.setItem('todoApp', serializedState);
    } catch (error) {
        console.log(error)
    }
};

export const loadState = () => {
    try {
        const serializedState = window.localStorage.getItem('todoApp');
        if (serializedState === null){
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (error) {
        return undefined;
    }
}