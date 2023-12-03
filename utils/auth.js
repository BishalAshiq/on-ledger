export const isAuthenticated = () => {
    if (typeof window != 'undefined') {
        const token = localStorage.getItem('refreshToken')
        return token !== null && token !== undefined && token !== '';
    }
    return false;
};