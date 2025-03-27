import { useEffect, useState } from "react";

export default function ProductTable() {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      
      })
     
  }, []);

 

  return (
    <div className="w-full max-w-9/10 ">
      <h2 className="text-3xl   text-center">Бүтээгдэхүүний жагсаалт</h2>
      <div >
        <table className="w-full max-w-9/10 bg-white border-solid border-gray-200">
          <thead>
            <tr className="bg-gray-100  text-gray-700">
              <th className="p-4 border-solid">#</th>
              <th className="p-3 border-solid text-left">Нэр</th>
              <th className="p-3 ">Үнэ</th>
              <th className="p-3 border-solid">Зураг</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id} >
                <td className=" border-solid text-center p-3">{index + 1}</td>
                <td className="p-3 border-solid">{product.title}</td>
                <td className="p-3 border-solid text-center ">${product.price}</td>
                <td className="p-3 border-solid text-center">
                  <img src={product.image} alt={product.title} className="w-12 h-12" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
