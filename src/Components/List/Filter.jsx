export default function Filter({ labels, handleFilter, labelSelected }) {
  return <div className="filter">
    {labels.map((item, index) => (
      <button onClick={() => handleFilter(index)} className={labelSelected === index ? "checked" : " "} style={{cursor: "pointer"}} key={index}>{item}</button>)
    )}
  </div>
}