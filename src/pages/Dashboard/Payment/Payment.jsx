import { loadStripe } from "@stripe/stripe-js";
import PageTitle from "../../../components/PageTitle/PageTitle";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import useCart from "../../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((accum, item) => accum + item.price, 0);
    const price = parseFloat(total.toFixed(2));
    return (
        <div className="w-[95%] mx-auto">
            <PageTitle pageName='Payment'></PageTitle>
            <SectionTitle heading={'Payment'} subHeading={'Please Process'}></SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price} cart={cart}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;