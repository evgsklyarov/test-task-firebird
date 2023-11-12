import React from 'react'
import style from './SearchInput.module.scss';

interface Props {
  value: string;
  label: string;
  placeholder?: string;
  disabed?: boolean;
  onChange: (value: string) => void;
}
const SearchInput = ({
  value,
  label,
  placeholder = 'Search...',
  disabed = false,
  onChange,
}: Props) => (
  <label className={style.label}>
    {label}
    <input
      className={style.input}
      type="text"
      placeholder={placeholder}
      disabled={disabed}
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  </label>
)

export default SearchInput;
