import { useEffect, useState } from "react";
import "./App.css";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import ProductModal from "./components/ProductModal/ProductModal";
import Spinner from "./components/Spinner/Spinner";
import Sort from "./components/Sort/Sort";
const BaseUrl = "https://fakestoreapi.com/products";
function App() {
    const [data, setData] = useState([]);
    const [displayedData, setDisplayedData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState({});
    const [hasMore, setHasMore] = useState(true);
    const [index, setIndex] = useState(1);
    const [categories, setCategories] = useState([]);

    // Fetch data from the API First Time
    useEffect(() => {
        setIsLoading(true);
        fetchData();
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    const fetchData = () => {
        // Infinite Scrolling
        fetch(BaseUrl + `?limit=${20}&page=${index}`)
            .then((response) => response.json())
            .then((result) => {
                setData((prevItems) => [...result]);
                setDisplayedData((prevItems) => [...result]);
                const categoriesArr = result.map((item) => item.category);
                setCategories([...new Set(categoriesArr)]);
                setIndex((prevIndex) => prevIndex + 1);
                return result.length < 12
                    ? setHasMore(false)
                    : setHasMore(true);
            })
            .catch((err) => {
                setIsError(true);
                console.log(err);
            });
    };
    return (
        <>
            <Header data={data} setData={setDisplayedData} />
            {isLoading ? (
                <Spinner />
            ) : (
                <>
                    <section className="results-sort">
                        {" "}
                        <div className="title-results">
                            <h1>PopShop</h1>
                            <p>{displayedData?.length} Results</p>
                        </div>
                        <Sort
                            categories={categories}
                            setData={setDisplayedData}
                            data={data}
                        />
                    </section>
                    {isError ? (
                        <h3 className="Error">Error Fetching Data...</h3>
                    ) : (
                        <section className="data-container">
                            {displayedData?.map((item) => (
                                <Card
                                    key={item.id}
                                    data={item}
                                    setShowModal={setShowModal}
                                    setSelectedItem={setSelectedItem}
                                />
                            ))}
                            {showModal && (
                                <ProductModal
                                    data={selectedItem}
                                    setShowModal={setShowModal}
                                    showModal={showModal}
                                />
                            )}
                        </section>
                    )}
                </>
            )}
        </>
    );
}

export default App;
