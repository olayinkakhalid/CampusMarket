import React, { useRef, useState } from "react"
import Breadcrumb from "../components/Breadcrumb.jsx"
import {
  ImagePlus,
  ChevronDown,
  MapPin,
  Clock,
  Sparkles,
  Check,
  Plus,
} from "lucide-react"

const Sellitems = () => {
  const [priceType, setPriceType] = useState("firm")
  const [images, setImages] = useState([])

  const [category, setCategory] = useState("")
  const [customCategory, setCustomCategory] = useState("")
  const [showCategory, setShowCategory] = useState(false)

  const [condition, setCondition] = useState("")
  const [showCondition, setShowCondition] = useState(false)

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [pickupLocation, setPickupLocation] = useState("")
  const [availability, setAvailability] = useState("")

  const [isPublishing, setIsPublishing] = useState(false)
  const [publishSuccess, setPublishSuccess] = useState(false)
  const [publishError, setPublishError] = useState("")

  const fileInputRef = useRef(null)

  const handleFiles = (files) => {
    const imageFiles = Array.from(files).filter((file) =>
      file.type.startsWith("image/")
    )

    setImages((prev) => [...prev, ...imageFiles].slice(0, 4))
  }
// HEREEEEEEEE 
const handlePublish = async () => {
  setPublishError("")
  setPublishSuccess(false)

  const finalCategory =
    category === "Other"
      ? customCategory.trim()
      : category

  if (!title.trim()) {
    setPublishError("Please enter a listing title.")
    return
  }

  if (!price || Number(price) <= 0) {
    setPublishError("Please enter a valid price.")
    return
  }

  if (!category) {
    setPublishError("Please select a category.")
    return
  }

  if (category === "Other" && !customCategory.trim()) {
    setPublishError("Please enter your category.")
    return
  }

  if (!condition) {
    setPublishError("Please select the item's condition.")
    return
  }

  if (!description.trim()) {
    setPublishError("Please add a description.")
    return
  }

  if (!pickupLocation.trim()) {
    setPublishError("Please enter a pickup location.")
    return
  }

  if (!availability.trim()) {
    setPublishError("Please enter the item's availability.")
    return
  }

  if (images.length === 0) {
    setPublishError("Please add at least one image.")
    return
  }

  setIsPublishing(true)

  try {
    const formData = new FormData()

    formData.append("title", title.trim())
    formData.append("price", Number(price))
    formData.append("category", finalCategory)
    formData.append("condition", condition)
    formData.append("price_type", priceType)
    formData.append("pickup_location", pickupLocation.trim())
    formData.append("description", description.trim())
    formData.append("availability", availability.trim())
    formData.append("seller_type", "student")

    images.forEach((image) => {
      formData.append("images", image)
    })

    const response = await fetch(
      "http://localhost:5000/api/products",
      {
        method: "POST",
        body: formData,
      }
    )

    const data = await response.json()

    if (!response.ok) {
      throw new Error(
        data.error || "Failed to publish listing."
      )
    }

    console.log("Published listing:", data)

    setPublishSuccess(true)

    setImages([])
    setTitle("")
    setDescription("")
    setPrice("")
    setCategory("")
    setCustomCategory("")
    setCondition("")
    setPickupLocation("")
    setAvailability("")
    setPriceType("firm")

  } catch (error) {
    console.error("Publish error:", error)
    setPublishError(error.message)
  } finally {
    setIsPublishing(false)
  }
}

  return (
    <div className="bg-[#FAF8F4] min-h-screen">

      {/* SUCCESS NOTIFICATION */}
      {publishSuccess && (
        <div className="fixed top-5 right-5 z-50 w-[calc(100%-2rem)] max-w-sm">
          <div className="bg-white border border-[#E5E2DC] rounded-xl shadow-lg px-4 py-4 flex items-start gap-3">

            <div className="w-9 h-9 rounded-full bg-[#E6F3EB] flex items-center justify-center shrink-0">
              <Check className="w-5 h-5 text-[#4F8A62]" />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[#2C2C2C] font-semibold text-sm">
                Listing published
              </p>

              <p className="text-[#6B6B6B] text-xs mt-1">
                Your item is now available for buyers to see.
              </p>
            </div>

            <button
              onClick={() => setPublishSuccess(false)}
              className="text-[#9A9A9A] hover:text-[#2C2C2C] cursor-pointer text-lg leading-none"
            >
              ×
            </button>

          </div>
        </div>
      )}

      {/* ERROR NOTIFICATION */}
      {publishError && (
        <div className="fixed top-5 right-5 z-50 w-[calc(100%-2rem)] max-w-sm">
          <div className="bg-white border border-red-200 rounded-xl shadow-lg px-4 py-4 flex items-start gap-3">

            <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center shrink-0">
              <span className="text-red-500 font-bold">
                !
              </span>
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[#2C2C2C] font-semibold text-sm">
                Couldn't publish listing
              </p>

              <p className="text-[#6B6B6B] text-xs mt-1">
                {publishError}
              </p>
            </div>

            <button
              onClick={() => setPublishError("")}
              className="text-[#9A9A9A] hover:text-[#2C2C2C] cursor-pointer text-lg leading-none"
            >
              ×
            </button>

          </div>
        </div>
      )}

      <div className="px-4 sm:px-6 lg:px-8 py-5 sm:py-7">

        <Breadcrumb />

        <div className="max-w-7xl mx-auto mt-5">

          {/* TITLE */}
          <div className="mb-5">
            <p className="text-[#2C2C2C] font-bold text-2xl sm:text-3xl">
              Sell an item
            </p>

            <p className="text-[#6B6B6B] text-xs sm:text-sm mt-1">
              Free for students · no seller fee · most items sell within 48 hours
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_340px] xl:grid-cols-[minmax(0,1fr)_360px] gap-5 items-start">

            {/* MAIN FORM */}
            <div className="min-w-0">

              {/* STEPS */}
              <div className="bg-white flex flex-wrap gap-x-5 gap-y-3 items-center px-4 py-4 border border-[#E5E2DC] rounded-lg">

                <div className="flex gap-2 items-center">
                  <div className="bg-[#C67A52] text-white rounded-full w-7 h-7 flex items-center justify-center">
                    1
                  </div>

                  <p className="text-[#2C2C2C] text-sm font-bold">
                    Photos
                  </p>
                </div>

                <div className="flex gap-2 items-center">
                  <div className="bg-[#F5F2EC] text-[#6B6B6B] border border-[#D0CCC4] rounded-full w-7 h-7 flex items-center justify-center">
                    2
                  </div>

                  <p className="text-[#9A9A9A] text-sm">
                    Details
                  </p>
                </div>

                <div className="flex gap-2 items-center">
                  <div className="bg-[#F5F2EC] text-[#6B6B6B] border border-[#D0CCC4] rounded-full w-7 h-7 flex items-center justify-center">
                    3
                  </div>

                  <p className="text-[#9A9A9A] text-sm">
                    Price & pickup
                  </p>
                </div>

                <div className="flex gap-2 items-center">
                  <div className="bg-[#F5F2EC] text-[#6B6B6B] border border-[#D0CCC4] rounded-full w-7 h-7 flex items-center justify-center">
                    4
                  </div>

                  <p className="text-[#9A9A9A] text-sm">
                    Publish
                  </p>
                </div>

              </div>

              {/* PHOTOS */}
              <div className="bg-white border border-[#E5E2DC] px-4 sm:px-6 lg:px-8 py-6 sm:py-7 mt-3 rounded-xl">

                <div className="flex justify-between items-center gap-3">

                  <p className="text-[#2C2C2C] text-xl sm:text-2xl font-bold">
                    Photos
                  </p>

                  <p className="text-xs text-[#9A9A9A] whitespace-nowrap">
                    {images.length} of 4 added
                  </p>

                </div>

                <div
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault()
                    handleFiles(e.dataTransfer.files)
                  }}
                >

                  <div className="border-2 border-dashed border-[#E5E2DC] bg-[#FAF8F4] rounded-xl min-h-48 sm:min-h-52 flex flex-col items-center justify-center cursor-pointer mt-4 px-4 text-center">

                    <div className="w-12 h-12 rounded-full bg-[#F5F2EC] flex items-center justify-center">
                      <ImagePlus className="w-6 h-6 text-[#C67A52]" />
                    </div>

                    <p className="text-[#2C2C2C] font-medium text-sm mt-3">
                      Drag & drop your images here
                    </p>

                    <p className="text-[#9A9A9A] text-sm mt-1">
                      or click to browse
                    </p>

                    <p className="text-[#9A9A9A] text-xs mt-2">
                      PNG, JPG or WEBP · Up to 4 images
                    </p>

                  </div>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={(e) => handleFiles(e.target.files)}
                    className="hidden"
                  />

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-4">

                    {images.map((image, index) => (
                      <div
                        key={`${image.name}-${index}`}
                        className="relative aspect-square"
                      >

                        <img
                          src={URL.createObjectURL(image)}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-full object-cover rounded-lg"
                        />

                        {index === 0 && (
                          <span className="absolute top-2 left-2 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-xs font-medium text-[#2C2C2C]">
                            Cover image
                          </span>
                        )}

                      </div>
                    ))}

                  </div>

                </div>

              </div>

              {/* ITEM DETAILS */}
              <div className="px-4 sm:px-6 lg:px-7 py-6 sm:py-8 mt-3 border border-[#E5E2DC] bg-white rounded-xl">

                <p className="font-bold text-xl sm:text-2xl text-[#2C2C2C]">
                  Item details
                </p>

                {/* TITLE */}
                <div className="flex flex-col gap-2 mt-4">

                  <p className="text-[#6B6B6B] text-sm">
                    Listing title
                  </p>

                  <input
                    className="placeholder:text-[#6B6B6B] placeholder:text-sm px-3 py-3 bg-[#F5F2EC] rounded-xl outline-none w-full"
                    type="text"
                    placeholder="e.g. TI-84 Plus Calculator, Desk Lamp, Biology Textbook"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />

                </div>

                {/* DESCRIPTION */}
                <div className="flex flex-col gap-2 mt-4">

                  <p className="text-[#6B6B6B] text-sm">
                    Description
                  </p>

                  <textarea
                    className="placeholder:text-[#6B6B6B] placeholder:text-sm bg-[#F5F2EC] rounded-xl outline-none px-3 py-3 w-full resize-none"
                    placeholder="Describe the item, its condition, and anything buyers should know..."
                    rows="8"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />

                </div>

                {/* CATEGORY + CONDITION */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">

                  {/* CATEGORY */}
                  <div className="flex flex-col gap-2">

                    <p className="text-[#6B6B6B] text-sm">
                      Category
                    </p>

                    {category === "Other" ? (

                      <input
                        type="text"
                        placeholder="Enter your category"
                        value={customCategory}
                        onChange={(e) => setCustomCategory(e.target.value)}
                        className="placeholder:text-[#6B6B6B] placeholder:text-sm px-3 py-3 bg-[#F5F2EC] rounded-xl outline-none w-full"
                      />

                    ) : (

                      <div className="relative">

                        <div
                          onClick={() => setShowCategory(!showCategory)}
                          className="flex items-center justify-between px-3 py-3 bg-[#F5F2EC] rounded-xl cursor-pointer text-sm text-[#2C2C2C]"
                        >

                          <span className="truncate">
                            {category || "Select a category"}
                          </span>

                          <ChevronDown className="w-4 h-4 text-[#9A9A9A] shrink-0" />

                        </div>

                        {showCategory && (
                          <div className="absolute z-20 top-full left-0 right-0 mt-2 p-1 bg-white/90 backdrop-blur-xl border border-white/50 rounded-xl shadow-lg shadow-black/5">

                            {[
                              "Books & Study",
                              "Electronics",
                              "Clothing & Fashion",
                              "Furniture & Room",
                              "Appliances",
                              "Gaming & Hobbies",
                              "Bags & Accessories",
                              "Other",
                            ].map((item) => (

                              <div
                                key={item}
                                onClick={() => {
                                  setCategory(item)
                                  setShowCategory(false)

                                  if (item !== "Other") {
                                    setCustomCategory("")
                                  }
                                }}
                                className={`px-3 py-2.5 rounded-lg text-sm cursor-pointer transition-colors ${
                                  category === item
                                    ? "bg-[#F5F2EC] text-[#C67A52]"
                                    : "text-[#2C2C2C] hover:bg-[#F5F2EC] hover:text-[#C67A52]"
                                }`}
                              >
                                {item}
                              </div>

                            ))}

                          </div>
                        )}

                      </div>

                    )}

                  </div>

                  {/* CONDITION */}
                  <div className="flex flex-col gap-2">

                    <p className="text-[#6B6B6B] text-sm">
                      Condition
                    </p>

                    <div className="relative">

                      <div
                        onClick={() => setShowCondition(!showCondition)}
                        className="flex items-center justify-between px-3 py-3 bg-[#F5F2EC] rounded-xl cursor-pointer text-sm text-[#2C2C2C]"
                      >

                        <span className="truncate">
                          {condition || "Select condition"}
                        </span>

                        <ChevronDown className="w-4 h-4 text-[#9A9A9A] shrink-0" />

                      </div>

                      {showCondition && (
                        <div className="absolute z-20 top-full left-0 right-0 mt-2 p-1 bg-white/90 backdrop-blur-xl border border-white/50 rounded-xl shadow-lg shadow-black/5">

                          {[
                            {
                              name: "New",
                              description: "Never used",
                            },
                            {
                              name: "Like New",
                              description: "Barely used, looks new",
                            },
                            {
                              name: "Good",
                              description: "Normal use, minor wear",
                            },
                            {
                              name: "Fair",
                              description: "Noticeable wear, still usable",
                            },
                          ].map((item) => (

                            <div
                              key={item.name}
                              onClick={() => {
                                setCondition(item.name)
                                setShowCondition(false)
                              }}
                              className={`px-3 py-2.5 rounded-lg text-sm cursor-pointer transition-colors ${
                                condition === item.name
                                  ? "bg-[#F5F2EC] text-[#C67A52]"
                                  : "text-[#2C2C2C] hover:bg-[#F5F2EC] hover:text-[#C67A52]"
                              }`}
                            >

                              <p>
                                {item.name}
                              </p>

                              <p className="text-xs text-[#9A9A9A] mt-0.5">
                                {item.description}
                              </p>

                            </div>

                          ))}

                        </div>
                      )}

                    </div>

                  </div>

                </div>

              </div>

              {/* PRICE & PICKUP */}
              <div className="px-4 sm:px-6 lg:px-7 py-6 sm:py-8 mt-3 border border-[#E5E2DC] bg-white rounded-xl">

                <p className="text-xl sm:text-2xl text-[#2C2C2C] font-bold">
                  Price and pickup
                </p>

                {/* PRICE */}
                <div className="mt-4">

                  <p className="text-[#6B6B6B] text-sm mb-2">
                    Asking price
                  </p>

                  <div className="flex items-center bg-[#F5F2EC] rounded-xl px-3">

                    <span className="text-[#9A9A9A] text-sm">
                      $
                    </span>

                    <input
                      type="number"
                      placeholder="0.00"
                      name="price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className="w-full px-2 py-3 bg-transparent outline-none placeholder:text-[#9A9A9A] text-[#2C2C2C] text-sm [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                    />

                  </div>

                  <div className="flex flex-wrap gap-3 mt-3">

                    <button
                      type="button"
                      onClick={() => setPriceType("firm")}
                      className={`px-3 py-2 rounded-lg cursor-pointer text-xs border ${
                        priceType === "firm"
                          ? "bg-[#F5F2EC] text-[#A86540] border-[#C67A52]"
                          : "bg-[#F5F2EC] text-[#6B6B6B] border-[#E5E2DC]"
                      }`}
                    >
                      Firm price
                    </button>

                    <button
                      type="button"
                      onClick={() => setPriceType("offers")}
                      className={`px-3 py-2 rounded-lg cursor-pointer text-xs border ${
                        priceType === "offers"
                          ? "bg-[#F7E7DE] text-[#A85F3B] border-[#C67A52]"
                          : "bg-[#F7E7DE] text-[#A85F3B] border-transparent"
                      }`}
                    >
                      Open to offers
                    </button>

                  </div>

                </div>

                {/* PICKUP */}
                <div className="mt-4">

                  <p className="text-sm text-[#6B6B6B]">
                    Pickup location
                  </p>

                  <div className="relative mt-2">

                    <input
                      type="text"
                      placeholder="Enter pickup location"
                      value={pickupLocation}
                      onChange={(e) => setPickupLocation(e.target.value)}
                      className="w-full px-3 py-3 pr-10 bg-[#F5F2EC] rounded-xl outline-none placeholder:text-[#9A9A9A] text-[#2C2C2C] text-sm"
                    />

                    <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9A9A9A]" />

                  </div>

                </div>

                {/* AVAILABILITY */}
                <div className="mt-4">

                  <p className="text-sm text-[#6B6B6B]">
                    Availability
                  </p>

                  <div className="relative mt-2">

                    <input
                      type="text"
                      placeholder="e.g. Weekdays after 4 PM"
                      value={availability}
                      onChange={(e) => setAvailability(e.target.value)}
                      className="w-full px-3 py-3 pr-10 bg-[#F5F2EC] rounded-xl outline-none placeholder:text-[#9A9A9A] text-[#2C2C2C] text-sm"
                    />

                    <Clock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9A9A9A]" />

                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT SIDE */}
            <div>

              {/* PREVIEW */}
              <div className="px-5 sm:px-6 py-6 bg-white border border-[#E5E2DC] rounded-xl">

                <p className="text-[#2C2C2C] text-lg sm:text-xl font-bold">
                  Listing preview
                </p>

                <p className="text-[#9A9A9A] text-xs mt-1">
                  Exactly how buyers see it in Browse
                </p>

                {images.length > 0 && (
                  <div className="mt-4">

                    <img
                      src={URL.createObjectURL(images[0])}
                      alt="Listing preview"
                      className="w-full h-40 sm:h-44 object-cover rounded-t-xl"
                    />

                  </div>
                )}

                <div
                  className={`w-full border border-[#E5E2DC] ${
                    images.length > 0
                      ? "border-t-0 rounded-b-xl"
                      : "rounded-xl mt-4"
                  } bg-white px-4 py-4`}
                >

                  <div className="text-[#2C2C2C] text-sm font-medium min-h-5 break-words">
                    {title || "Your listing title"}
                  </div>

                  <div className="flex justify-between items-start gap-3 mt-2">

                    <div className="text-[#2C2C2C] font-bold text-lg">
                      {price ? `$${price}` : "$0.00"}
                    </div>

                    <div className="text-[#9A9A9A] text-xs text-right min-w-0">

                      <div>
                        {condition || "Condition"}
                      </div>

                      <div className="mt-1 flex items-center justify-end gap-1">

                        <MapPin className="w-3 h-3 shrink-0" />

                        <span className="truncate">
                          {pickupLocation || "Pickup location"}
                        </span>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              {/* TIPS */}
              <div className="px-5 py-6 bg-[#F7E7DE] mt-5 rounded-xl flex flex-col gap-2">

                <div className="flex gap-1 items-center">

                  <Sparkles className="h-4 text-[#A85F3B]" />

                  <p className="text-[#2C2C2C] font-bold text-sm">
                    Tips for a fast sale
                  </p>

                </div>

                <div className="flex gap-1 items-center">

                  <Check className="h-4 text-[#A85F3B]" />

                  <p className="text-[#6B6B6B] text-xs">
                    Bright, clear photos sell three times faster
                  </p>

                </div>

                <div className="flex gap-1 items-center">

                  <Check className="h-4 text-[#A85F3B]" />

                  <p className="text-[#6B6B6B] text-xs">
                    Price within 10% of similar campus listings
                  </p>

                </div>

                <div className="flex gap-1 items-center">

                  <Check className="h-4 text-[#A85F3B]" />

                  <p className="text-[#6B6B6B] text-xs">
                    Reply within the hour to keep buyers interested
                  </p>

                </div>

              </div>

              {/* BUTTONS */}
              <div className="mt-5 flex flex-col gap-3">

                <button
                  type="button"
                  onClick={handlePublish}
                  disabled={isPublishing}
                  className="flex gap-[1px] w-full h-11 justify-center text-sm bg-[#C67A52] hover:bg-[#A86540] disabled:opacity-60 disabled:cursor-not-allowed rounded-lg cursor-pointer items-center text-white transition-colors duration-200"
                >

                  <Plus className="h-4" />

                  {isPublishing
                    ? "Publishing..."
                    : "Publish listing"}

                </button>

                <button
                  type="button"
                  className="flex gap-[1px] w-full h-11 justify-center text-sm bg-white hover:bg-[#F5F2EC] border border-[#D0CCC4] rounded-lg cursor-pointer items-center text-[#2C2C2C] transition-colors duration-200"
                >
                  Save as draft
                </button>

              </div>

              <p className="text-xs text-[#9A9A9A] mt-3">
                You can edit, mark as sold or remove your listing at any time.
              </p>

            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Sellitems