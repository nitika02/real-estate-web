import { useState } from "react";
import Explore from "./components/explore";
import ExploreCard from "./components/explore/exploreCard";
import Filter from "./components/filter";
import Header from "./components/header";
import Navbar from "./components/navbar";
import { estates } from "./data/data";

function App() {
  const [allData, setData] = useState(estates);
  const generateLocationDropdown = () => {
    return [...new Set(estates.map(item => item.location))];
  }

  const generateTypeDropdown = () => {
    return [...new Set(estates.map(item => item.type))];
  }

  const generatePriceDropdown = () => {
    return [...new Set(estates.map(item => item.price_range))];
  }

  const handleFilterName = (name) => {
    const filteredData = estates.filter((item) => {
      const fullName = item.title;
      if(fullName.toLowerCase().includes(name.toLowerCase())) {
        return item;
      }
    })
    setData(filteredData);
  }

  const handleFilterLocation = (location) => {
    const filteredData = estates.filter((item) => {
      if (item.location === location) {
        return item;
      }
    });

    setData(filteredData);
  };
  const handleFilterType = (type) => {
    const filteredData = estates.filter((item) => {
      if (item.type === type) {
        return item;
      }
    });

    setData(filteredData);
  };

  const handleFilterPrice = (price_range) => {
    const filteredData = estates.filter((item) => {
      if (item.price_range === price_range) {
        return item;
      }
    });

    setData(filteredData);
  };

  return (
    <div>
      <Navbar />
      <Header onNameFilter={handleFilterName}/>
      <Filter 
      location={generateLocationDropdown()} 
      type={generateTypeDropdown()}
      price={generatePriceDropdown()}
      onLocationFilter={handleFilterLocation}
      onTypeFilter={handleFilterType}
      onPriceFilter={handleFilterPrice}
      />
      <div className='explore-grid'>
        {allData.map((list) => {
            return <ExploreCard list={list} />
        })}
    </div>
    </div>
  );
}

export default App;
