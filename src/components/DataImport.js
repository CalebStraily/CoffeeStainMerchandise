import React, { useState, useEffect } from "react";

function DataImport()
{
    const [productData, setProductData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [showFeatured, setShowFeatured] = useState(false);
    const [showPreOrder, setShowPreOrder] = useState(false);
    const [selectedGame, setSelectedGame] = useState('');

    useEffect(() => {
        fetch(`http://localhost:4001/api/products`)
            .then(res => res.json())
            .then(data => setProductData(data))
    }, []);

    const allCount = productData.length;
    const featuredCount = productData.filter((product) => product.is_featured === "yes").length;
    const preOrderCount = productData.filter((product) => product.preorder === "yes").length;
    const plushesCount = productData.filter((product) => product.type === "Plushes").length;
    const accessoriesCount = productData.filter((product) => product.type === "Accessories").length;
    const replicasCount = productData.filter((product) => product.type === "Replicas").length;
    const apparelCount = productData.filter((product) => product.type === "Apparel").length;

    let filteredData = productData;

    if (selectedCategory)
    {
        filteredData = filteredData.filter((product) => product.type === selectedCategory);
    }

    if (showFeatured) 
    {
        filteredData = filteredData.filter((product) => product.is_featured === "yes");
    }

    if (showPreOrder) 
    {
        filteredData = filteredData.filter((product) => product.preorder === "yes");
    }

    if (selectedGame)
    {
        filteredData = filteredData.filter((product) => product.game === selectedGame);
    }

    return(
        <div className="row">
            <div className="row nav-container">
                <div className="col-xl-3 col-12">
                    <img className="img-fluid" onClick={() => {
                        setShowFeatured(false);
                        setShowPreOrder(false);
                        setSelectedCategory('');
                        setSelectedGame('');
                    }} src="https://lizarddoggo.com/cdn/shop/files/combo_logo_full_color_220x@2x.png?v=1731704448" alt="" />
                </div>
                <div className="col-xl-9 col-12 text-center top-nav">
                    <ul>
                        <li>
                            <button onClick={() => {
                                setShowFeatured(false);
                                setShowPreOrder(false);
                                setSelectedCategory('');
                                setSelectedGame('');
                            }}>
                                Home
                            </button>
                        </li>
                        <li>
                            <button onClick={() => {
                                setShowFeatured(false);
                                setShowPreOrder(false);
                                setSelectedCategory('');
                                setSelectedGame('Satisfactory');
                            }}>
                                Satisfactory
                            </button>
                        </li>
                        <li>
                            <button onClick={() => {
                                setShowFeatured(false);
                                setShowPreOrder(false);
                                setSelectedCategory('');
                                setSelectedGame('Deep Rock Galactic');
                            }}>
                                Deep Rock Galactic
                            </button>
                        </li>
                        <li>
                            <button onClick={() => {
                                setShowFeatured(false);
                                setShowPreOrder(false);
                                setSelectedCategory('');
                                setSelectedGame('Valheim');
                            }}>
                                Valheim
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="col-12 hero-img">
                    <img className="img-fluid" src="https://lizarddoggo.com/cdn/shop/files/Splash_Screen_1_1200x.png?v=1732193140" alt="" />
                </div>
                <div className="col-12 text-center filter-buttons-container">
                    <ul className="filter-buttons">
                        <li >
                            <button onClick={() => {
                                setShowFeatured(false);
                                setShowPreOrder(false);
                                setSelectedCategory('');
                            }}
                            className={selectedCategory === '' && !showFeatured && !showPreOrder ? 'active' : ''}
                            >
                                All Categories <span className="badge">{allCount}</span>
                            </button>
                        </li>
                        <li >
                            <button onClick={() => {
                                setShowFeatured(true);
                                setShowPreOrder(false);
                                setSelectedCategory('');
                            }}
                            className={showFeatured ? 'active' : ''}
                            >
                                Featured <span className="badge">{featuredCount}</span>
                            </button>
                        </li>
                        <li >
                            <button onClick={() => {
                                setShowFeatured(false);
                                setShowPreOrder(true);
                                setSelectedCategory('');
                            }}
                            className={showFeatured ? 'active' : ''}
                            >
                                [PRE-ORDER] <span className="badge">{preOrderCount}</span>
                            </button>
                        </li>
                        <li >
                            <button onClick={() => {
                                setShowFeatured(false);
                                setShowPreOrder(false);
                                setSelectedCategory('Plushes');
                            }}
                            className={selectedCategory === 'Plushes' ? 'active' : ''}
                            >
                                Plushes <span className="badge">{plushesCount}</span>
                            </button>
                        </li>
                        <li >
                            <button onClick={() => {
                                setShowFeatured(false);
                                setShowPreOrder(false);
                                setSelectedCategory('Accessories');
                            }}
                            className={selectedCategory === 'Accessories' ? 'active' : ''}
                            >
                                Accessories <span className="badge">{accessoriesCount}</span>
                            </button>
                        </li>
                        <li >
                            <button onClick={() => {
                                setShowFeatured(false);
                                setShowPreOrder(false);
                                setSelectedCategory('Replicas');
                            }}
                            className={selectedCategory === 'Replicas' ? 'active' : ''}
                            >
                                Replicas <span className="badge">{replicasCount}</span>
                            </button>
                        </li>
                        <li >
                            <button onClick={() => {
                                setShowFeatured(false);
                                setShowPreOrder(false);
                                setSelectedCategory('Apparel');
                            }}
                            className={selectedCategory === 'Apparel' ? 'active' : ''}
                            >
                                Apparel <span className="badge">{apparelCount}</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            {filteredData.length > 0 ? (
                filteredData.map((product, index) => (
                    <div className="col-xl-6 col-12 product-columns" key={index}>
                        <div className="row">
                            <div className="col-8">
                                <ul>
                                    <li>
                                        <li><h2>{product.name}</h2></li>
                                        <li>{product.description}</li>
                                        <li>{`$${product.price.toFixed(2)}`}</li>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src={product.image} alt="" />
                            </div>
                        </div>

                    </div>
                ))
            ) : (
                <p>loading...</p>
            )}
        </div>
    )
}

export default DataImport;