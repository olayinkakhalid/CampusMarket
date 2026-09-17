import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import arrowDown from "../assets/chevron-down.png";
import Breadcrumb from "../components/Breadcrumb.jsx";

import {
  X,
  LayoutGrid,
  List,
  SlidersHorizontal,
  ArrowUpDown,
  Search,
  ArrowUp,
  MapPin,
  Heart,
} from "lucide-react";

import MiniFridge from "../assets/MiniFridge.jpg";

const Browse = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("newest");
  const [showSort, setShowSort] = useState(false);

  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showMoreFilters, setShowMoreFilters] = useState(false);

  const [sellerType, setSellerType] = useState("all");
  const [allcategories, setAllcategories] = useState("all");
  const [showCategories, setShowCategories] = useState(false);

  const [condition, setCondition] = useState("all");
  const [showCondition, setShowCondition] = useState(false);

  const [price, setPrice] = useState("all");
  const [showPrice, setShowPrice] = useState(false);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "http://localhost:5000/api/products"
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.error || "Failed to fetch listings"
          );
        }

        setProducts(data);
      } catch (error) {
        console.error("Fetch products error:", error);

        setError(
          "Couldn't load listings. Make sure the backend is running."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const toggleFavorite = (product) => {
    const alreadyFavorite = favorites.some(
      (item) => item.id === product.id
    );

    let updatedFavorites;

    if (alreadyFavorite) {
      updatedFavorites = favorites.filter(
        (item) => item.id !== product.id
      );
    } else {
      updatedFavorites = [
        ...favorites,
        product,
      ];
    }

    setFavorites(updatedFavorites);

    localStorage.setItem(
      "favorites",
      JSON.stringify(updatedFavorites)
    );
  };

  const filteredProducts = products.filter((product) => {
    const sellerTypeMatch =
      sellerType === "all" ||
      product.sellerType === sellerType;

    const productPrice = Number(product.price) || 0;

    const categoryMatch =
      allcategories === "all" ||
      product.category === allcategories;

    const conditionMatch =
      condition === "all" ||
      product.condition === condition;

    const priceMatch =
      price === "all" ||
      (price === "Under $25" && productPrice < 25) ||
      (
        price === "$25 - $50" &&
        productPrice >= 25 &&
        productPrice <= 50
      ) ||
      (
        price === "$50 - $100" &&
        productPrice > 50 &&
        productPrice <= 100
      ) ||
      (
        price === "Over $100" &&
        productPrice > 100
      );

    const searchMatch =
      (product.title || "")
        .toLowerCase()
        .includes(search.toLowerCase());

    return (
      categoryMatch &&
      conditionMatch &&
      priceMatch &&
      searchMatch &&
      sellerTypeMatch
    );
  });

  const sortedProducts = [...filteredProducts].sort(
    (a, b) => {
      if (sortBy === "newest") {
        return (
          new Date(b.created_at || 0) -
          new Date(a.created_at || 0)
        );
      }

      if (sortBy === "oldest") {
        return (
          new Date(a.created_at || 0) -
          new Date(b.created_at || 0)
        );
      }

      const priceA = Number(a.price) || 0;
      const priceB = Number(b.price) || 0;

      if (sortBy === "price-low") {
        return priceA - priceB;
      }

      if (sortBy === "price-high") {
        return priceB - priceA;
      }

      return 0;
    }
  );

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 100);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <div className="bg-[#FAF8F4] min-h-screen">

      <div className="px-4 sm:px-6 lg:px-8 py-7">

        <Breadcrumb />

        <div className="mt-5">

          <p className="text-3xl sm:text-4xl text-[#2C2C2C] font-bold">
            Browse listings
          </p>

          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">

            <p className="text-[#6B6B6B] text-sm pt-3">
              {loading
                ? "Loading listings..."
                : `${products.length} ${products.length === 1
                  ? "listing"
                  : "listings"
                } available`}
            </p>

            <div className="relative">

              <div
                onClick={() =>
                  setShowSort(!showSort)
                }
                className="flex items-center gap-2 bg-white border border-[#E5E2DC] px-3 py-2.5 rounded-xl cursor-pointer w-fit"
              >

                <ArrowUpDown className="text-[#6B6B6B] w-4 h-4" />

                <p className="text-[#2C2C2C] text-sm">
                  {sortBy === "newest" &&
                    "Newest first"}

                  {sortBy === "oldest" &&
                    "Oldest first"}

                  {sortBy === "price-low" &&
                    "Price: Low to high"}

                  {sortBy === "price-high" &&
                    "Price: High to low"}
                </p>

                <img
                  className="w-4 h-4 object-contain"
                  src={arrowDown}
                  alt="Arrow Down"
                />

              </div>

              {showSort && (
                <div className="absolute top-full right-0 mt-2 z-20 min-w-48 rounded-xl border border-white/50 bg-white/70 backdrop-blur-xl shadow-lg p-2">

                  {[
                    ["newest", "Newest first"],
                    ["oldest", "Oldest first"],
                    ["price-low", "Price: Low to high"],
                    ["price-high", "Price: High to low"],
                  ].map(([value, label]) => (

                    <p
                      key={value}
                      className={`px-3 py-2 cursor-pointer rounded-lg text-sm ${sortBy === value
                          ? "bg-[#F5F2EC] text-[#C67A52]"
                          : "text-[#2C2C2C] hover:bg-[#F5F2EC]"
                        }`}
                      onClick={() => {
                        setSortBy(value);
                        setShowSort(false);
                      }}
                    >
                      {label}
                    </p>

                  ))}

                </div>
              )}

            </div>

          </div>

        </div>

        <div className="mt-5 bg-white px-2 py-2 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2 border border-[#E5E2DC] rounded-xl">

          <div className="w-full lg:w-[40%]">

            <div className="flex items-center bg-[#F5F2EC] text-[#9A9A9A] text-sm px-2 py-2 gap-1 rounded-lg w-full">

              <Search className="w-5 h-5 shrink-0" />

              <input
                className="bg-[#F5F2EC] outline-none flex-1 min-w-0"
                type="text"
                placeholder="Search within listings"
                value={search}
                onChange={(e) => {
                  if (e.target.value.trim()) {
                    setSearchParams({
                      search: e.target.value,
                    });
                  } else {
                    setSearchParams({});
                  }
                }}
              />

            </div>

          </div>

          <div className="flex flex-wrap gap-2">

            <div
              className="flex gap-1 items-center relative bg-[#F5F2EC] px-3 cursor-pointer py-2 rounded-lg border border-[#E5E2DC]"
              onClick={() =>
                setShowCategories(!showCategories)
              }
            >

              <p className="text-[#2C2C2C] text-sm">
                {allcategories === "all"
                  ? "All categories"
                  : allcategories}
              </p>

              <img
                className="w-3 h-4 object-cover"
                src={arrowDown}
                alt="Arrow Down"
              />

              {showCategories && (
                <div className="absolute top-full left-0 mt-2 z-20 min-w-48 rounded-xl border border-white/50 bg-white/70 backdrop-blur-xl shadow-lg p-2">

                  {[
                    ["all", "All"],
                    ["Books & Study", "Books & Study"],
                    ["Electronics", "Electronics"],
                    ["Clothing & Fashion", "Clothing & Fashion"],
                    ["Furniture & Room", "Furniture & Room"],
                    ["Appliances", "Appliances"],
                    ["Gaming & Hobbies", "Gaming & Hobbies"],
                    ["Bags & Accessories", "Bags & Accessories"],
                    ["Other", "Other"],
                  ].map(([value, label]) => (

                    <p
                      key={value}
                      className={`px-3 py-2 cursor-pointer rounded-lg text-sm ${allcategories === value
                          ? "bg-[#F5F2EC] text-[#C67A52]"
                          : "text-[#2C2C2C] hover:bg-[#E5E2DC]"
                        }`}
                      onClick={() => {
                        setAllcategories(value);
                        setShowCategories(false);
                      }}
                    >
                      {label}
                    </p>

                  ))}

                </div>
              )}

            </div>

            <div
              className="flex gap-1 relative items-center bg-[#F5F2EC] px-3 cursor-pointer py-2 rounded-lg"
              onClick={() =>
                setShowCondition(!showCondition)
              }
            >

              <p className="text-[#2C2C2C] text-sm">
                {condition === "all"
                  ? "Any condition"
                  : condition}
              </p>

              <img
                className="w-3 h-4 object-cover"
                src={arrowDown}
                alt="Arrow Down"
              />

              {showCondition && (
                <div className="absolute top-full left-0 mt-2 z-20 min-w-40 rounded-xl border border-white/50 bg-white/70 backdrop-blur-xl shadow-lg p-2">

                  {[
                    ["all", "All"],
                    ["New", "New"],
                    ["Like New", "Like New"],
                    ["Good", "Good"],
                    ["Fair", "Fair"],
                  ].map(([value, label]) => (

                    <p
                      key={value}
                      className={`px-3 py-2 cursor-pointer rounded-lg text-sm ${condition === value
                          ? "bg-[#F5F2EC] text-[#C67A52]"
                          : "text-[#2C2C2C] hover:bg-[#E5E2DC]"
                        }`}
                      onClick={() => {
                        setCondition(value);
                        setShowCondition(false);
                      }}
                    >
                      {label}
                    </p>

                  ))}

                </div>
              )}

            </div>

            <div
              onClick={() =>
                setShowPrice(!showPrice)
              }
              className="flex gap-1 relative items-center bg-[#F5F2EC] px-3 cursor-pointer py-2 rounded-lg"
            >

              <p className="text-[#2C2C2C] text-sm">
                {price === "all"
                  ? "Any price"
                  : price}
              </p>

              <img
                className="w-3 h-4 object-cover"
                src={arrowDown}
                alt="Arrow Down"
              />

              {showPrice && (
                <div className="absolute top-full left-0 mt-2 z-20 min-w-40 rounded-xl border border-white/50 bg-white/70 backdrop-blur-xl shadow-lg p-2">

                  {[
                    ["all", "Any price"],
                    ["Under $25", "Under $25"],
                    ["$25 - $50", "$25 - $50"],
                    ["$50 - $100", "$50 - $100"],
                    ["Over $100", "Over $100"],
                  ].map(([value, label]) => (

                    <p
                      key={value}
                      className={`px-3 py-2 cursor-pointer rounded-lg text-sm ${price === value
                          ? "bg-[#F5F2EC] text-[#C67A52]"
                          : "text-[#2C2C2C] hover:bg-[#E5E2DC]"
                        }`}
                      onClick={() => {
                        setPrice(value);
                        setShowPrice(false);
                      }}
                    >
                      {label}
                    </p>

                  ))}

                </div>
              )}

            </div>

            <button
              onClick={() =>
                setShowMoreFilters(
                  !showMoreFilters
                )
              }
              className="flex items-center gap-1 bg-[#F5F2EC] px-3 py-2 rounded-lg text-sm text-[#2C2C2C]"
            >
              <SlidersHorizontal className="w-4 h-4" />
              More filters
            </button>

          </div>

        </div>
        {showMoreFilters && (
          <div className="mt-3 bg-white border border-[#E5E2DC] rounded-xl p-4">

            <p className="text-sm font-medium text-[#2C2C2C] mb-3">
              Seller type
            </p>

            <div className="flex gap-2 flex-wrap">

              {[
                ["all", "All sellers"],
                ["student", "Students"],
                ["business", "Businesses"],
              ].map(([value, label]) => (

                <button
                  key={value}
                  onClick={() =>
                    setSellerType(value)
                  }
                  className={`px-3 py-2 rounded-lg text-sm border ${sellerType === value
                      ? "bg-[#E6F3EB] border-[#CFE7D7] text-[#2C2C2C]"
                      : "bg-[#F5F2EC] border-[#E5E2DC] text-[#6B6B6B]"
                    }`}
                >
                  {label}
                </button>

              ))}

            </div>

          </div>
        )}

        <div className="flex justify-between items-center mt-7">

          <p className="text-sm text-[#6B6B6B]">
            {loading
              ? "Loading..."
              : `Showing ${sortedProducts.length} ${sortedProducts.length === 1
                ? "listing"
                : "listings"
              }`}
          </p>

          <div className="flex items-center gap-1 bg-white border border-[#E5E2DC] rounded-lg p-1">

            <button
              onClick={() =>
                setViewMode("grid")
              }
              className={`p-2 rounded-md ${viewMode === "grid"
                  ? "bg-[#F5F2EC]"
                  : ""
                }`}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>

            <button
              onClick={() =>
                setViewMode("list")
              }
              className={`p-2 rounded-md ${viewMode === "list"
                  ? "bg-[#F5F2EC]"
                  : ""
                }`}
            >
              <List className="w-4 h-4" />
            </button>

          </div>

        </div>

        {loading && (
          <div className="py-20 text-center">
            <p className="text-[#6B6B6B]">
              Loading listings...
            </p>
          </div>
        )}

        {!loading && error && (
          <div className="py-20 text-center">

            <p className="text-red-500 mb-2">
              {error}
            </p>

            <button
              onClick={() =>
                window.location.reload()
              }
              className="text-sm text-[#C67A52]"
            >
              Try again
            </button>

          </div>
        )}

        {!loading &&
          !error &&
          sortedProducts.length === 0 && (

            <div className="py-20 text-center">

              <p className="text-xl font-semibold text-[#2C2C2C]">
                No listings found
              </p>

              <p className="text-sm text-[#9A9A9A] mt-2">
                Try changing your search or filters.
              </p>

            </div>
          )}

        {!loading &&
          !error &&
          sortedProducts.length > 0 && (

            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5"
                  : "flex flex-col gap-4 mt-5"
              }
            >

              {sortedProducts.map((add) => {

                const isFavorite =
                  favorites.some(
                    (item) =>
                      item.id === add.id
                  );

                return (

                  <div
                    key={add.id}
                    className={`bg-white border border-[#E5E2DC] rounded-xl overflow-hidden ${viewMode === "list"
                        ? "flex"
                        : ""
                      }`}
                  >

                    <Link
                      to={`/product/${add.id}`}
                      className={
                        viewMode === "list"
                          ? "flex w-full"
                          : "block"
                      }
                    >

                      <div
                        className={
                          viewMode === "list"
                            ? "w-48 h-40 shrink-0"
                            : "h-52"
                        }
                      >

                        <img
                          src={
                            add.image_url ||
                            MiniFridge
                          }
                          alt={add.title}
                          className="w-full h-full object-cover"
                        />

                      </div>

                      <div className="p-4 flex-1">

                        <div className="flex items-start justify-between gap-3">

                          <div>

                            <p className="text-xs text-[#9A9A9A] mb-1">
                              {add.category ||
                                "Other"}
                            </p>

                            <h3 className="font-semibold text-[#2C2C2C] line-clamp-2">
                              {add.title}
                            </h3>

                          </div>

                        </div>

                        <p className="text-lg font-bold text-[#2C2C2C] mt-3">
                          ${Number(add.price || 0).toFixed(2)}
                        </p>

                        <div className="flex items-center gap-1 mt-3 text-[#9A9A9A] text-xs">

                          <MapPin className="w-3.5 h-3.5" />

                          <span>
                            {add.pickup_location ||
                              "Campus pickup"}
                          </span>

                        </div>

                        <p className="text-xs text-[#9A9A9A] mt-2">
                          {add.created_at
                            ? new Date(
                              add.created_at
                            ).toLocaleDateString()
                            : "Recently added"}
                        </p>

                      </div>

                    </Link>

                    <button
                      onClick={() =>
                        toggleFavorite(add)
                      }
                      className={`absolute ${viewMode === "list"
                          ? "right-4 mt-4"
                          : ""
                        }`}
                    >
                      <Heart
                        className={`w-5 h-5 ${isFavorite
                            ? "fill-[#C67A52] text-[#C67A52]"
                            : "text-[#6B6B6B]"
                          }`}
                      />
                    </button>

                  </div>

                );
              })}

            </div>

          )}

      </div>

      {showScrollTop && (

        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="fixed bottom-6 right-6 bg-white/70 backdrop-blur-xl border border-[#E5E2DC] shadow-lg p-3 rounded-full"
        >
          <ArrowUp className="w-5 h-5 text-[#2C2C2C]" />
        </button>

      )}

    </div>
  );
};

export default Browse;