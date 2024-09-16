// eslint-disable-next-line react/prop-types
const WidgetSelector = ({ selectedWidgets, onWidgetChange }) => {
  const widgets = ['name', 'description', 'subscribers', 'views','video'];

  return (
    <div className="widget-selector">
      {widgets.map((widget) => (
        <label key={widget} className="block ">
          <input
            type="checkbox"
            // eslint-disable-next-line react/prop-types
            checked={selectedWidgets.includes(widget)}
            onChange={() => onWidgetChange(widget)}
          />
          {widget.charAt(0).toUpperCase() + widget.slice(1)}
        </label>
      ))}
    </div>
  );
};

export default WidgetSelector;
