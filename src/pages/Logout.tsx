import useUserStore from "../stores/user";



const Logout = ()  => {
    const userStore = useUserStore();
    userStore.logout();
    return (
        <></>
    )
}

export default Logout;