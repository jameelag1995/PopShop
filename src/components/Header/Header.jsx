import { useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { ShoppingCart } from "@mui/icons-material";
export default function Header({ data, setData }) {
    const [searchInput, setSearchInput] = useState("");
    const handleSearch = (e) => {
        setData(
            data.filter((item) =>
                item.title.toLowerCase().includes(e.target.value.toLowerCase())
            )
        );
    };
    return (
        <header>
            <div className="search-container">
                <SearchIcon className="search-icon" />
                <input
                    className="search-input"
                    type="text"
                    placeholder="Find anything home..."
                    onChange={handleSearch}
                />
            </div>
            <ShoppingCart />
        </header>
    );
}
