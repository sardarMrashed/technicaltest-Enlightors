import SinglePage from "./components/SinglePage";

async function getProduct(productId: string) {
    const response = awa fetch(`https://fakestoreapi.com/products/${productId}`);
    const data = 
}

export default function Page({params}: {params:{id: string}}){

    return (
        <div>
            <SinglePage />
        </div>
    )

}