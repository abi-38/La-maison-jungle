function Categories({ categories, setActiveCategory, activeCategory }) {

    return (
        <div className='lmj-categories'>
            <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className='lmj-categories-select'
            >
                <option value=''>---</option> // 
                {categories.map((cat) => (
                    <option key={cat} value={cat} >{cat.toUpperCase()}</option>
                ))}
            </select>
            <button onClick={() => setActiveCategory('')}>Réinitialiser</button>
        </div>
    )
  }
  
  export default Categories
  