import BSIcons from 'bootstrap-icons/bootstrap-icons.svg';

/**
 * Bootstrap simgelerini kullanmayı sağlar
 * @component
 * 
 * @param {string} name - Simge adı https://icons.getbootstrap.com/ adresinden incelenebilir
 * @param {string} size - Simge boyutu
 * 
 * @since 1.0
 */
const Icon = ({name, size = "16"}) => {
  return <svg className='bi' width={size} height={size} fill='currentColor'>
    <use xlinkHref={`${BSIcons}#${name}`} />
  </svg>;
}

export default Icon;