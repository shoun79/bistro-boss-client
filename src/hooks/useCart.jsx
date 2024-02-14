
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
    const { user, loading } = useAuth();
    //const token = localStorage.getItem('bistro-access-token');
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: cart = [], isLoading: cartLoading } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        // queryFn: async () => {
        //     const res = await fetch(`https://bistro-boss-server-nine-sigma.vercel.app/carts?email=${user?.email}`, {
        //         headers: {
        //             authorization: `bearer ${token}`
        //         }
        //     })
        //     return res.json()
        // },

        //use useAxiosSecure
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            return res.data;
        },
    })
    return [cart, refetch, cartLoading]
}

export default useCart;