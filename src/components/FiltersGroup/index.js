import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const renderRatingLists = () => {
    const {ratingsList} = props

    return ratingsList.map(rating => {
      const {changeRating, activeRatingId} = props
      const isActive = activeRatingId === rating.ratingId

      const className = isActive ? 'active-option-category ' : 'option-category'

      const changeRatingOption = () => changeRating(rating.ratingId)

      return (
        <li
          onClick={changeRatingOption}
          key={rating.ratingId}
          className="rating-list"
        >
          <img
            src={rating.imageUrl}
            alt={`rating ${rating.ratingId}`}
            className="rating-images"
          />
          <p className={className}>& up</p>
        </li>
      )
    })
  }
  const renderCategoryLists = () => {
    const {categoryOptions} = props

    return categoryOptions.map(category => {
      const {changeCategory, activeCategoryId} = props
      const isActive = category.categoryId === activeCategoryId
      const changeCategoryOption = () => changeCategory(category.categoryId)

      const ratingClassName = isActive ? 'active-para' : 'normal-para'

      return (
        <li
          className="category-item"
          key={category.categoryId}
          onClick={changeCategoryOption}
        >
          <p className={ratingClassName}>{category.name}</p>
        </li>
      )
    })
  }

  const renderRatings = () => (
    <>
      <h1 className="category-heading">Rating</h1>
      <ul className="ratings-container ">{renderRatingLists()}</ul>
    </>
  )

  const renderCategories = () => (
    <>
      <h1 className="category-heading">Category</h1>
      <ul className="category-container">{renderCategoryLists()}</ul>
    </>
  )

  const renderSearchInput = () => {
    const {searchInput} = props

    const onChangeSearchInput = event => {
      const {changeSearchInput} = props
      changeSearchInput(event.target.value)
    }

    const onEnterSearchInput = event => {
      const {enterSearchInput} = props
      if (event.key === 'Enter') {
        enterSearchInput()
      }
    }

    return (
      <div className="input-container">
        <input
          className="search-input"
          type="search"
          value={searchInput}
          placeholder="Search"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }
  const {clearFilters} = props
  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderCategories()}
      {renderRatings()}
      <button className="clear-button" type="button" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
