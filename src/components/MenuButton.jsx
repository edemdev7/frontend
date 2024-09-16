import PropTypes from 'prop-types';

function MenuButton({ title, iconTitle, onClick }) {
  return (
    <button 
      onClick={onClick}
      className="w-full h-12 flex place-content-center place-items-center space-x-2 rounded-md bg-[#CDF463] active:bg-blue-600"
    >
      <span className="material-symbols-outlined text-black">{iconTitle}</span>
      <p>{title}</p>
    </button>
  );
}

MenuButton.propTypes = {
  title: PropTypes.string.isRequired,
  iconTitle: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default MenuButton;
