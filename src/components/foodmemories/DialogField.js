export default function DialogField({
  field,
  label,
  currentItem,
  searchInput,
  specialFormat,
  setCurrentItem,
}) {
  return (
    <div className="dialog-field">
      <label htmlFor={field}>{label}</label>
      <input
        type={specialFormat ? specialFormat : "text"}
        id={field}
        value={currentItem[field]}
        onChange={searchInput}
        autocomplete="off"
      ></input>
    </div>
  );
}
