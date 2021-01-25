export const LiveSearch = () => {

  const searchCards = ({ target, key }) => {
    const cardList = document.querySelectorAll('.cards-list__card');
    cardList.forEach(item => item.hidden = (item.textContent.search(target.value) === -1) ? true : false);
    if(key !== "Backspace" && key !== "Delete") document.querySelector('ul').style.right = '0px';
  }

  return(
    <input placeholder="Поиск" type="search" onKeyUp={searchCards} className="live-search"/>
  )
}