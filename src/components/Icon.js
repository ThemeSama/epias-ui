import BSIcons from 'bootstrap-icons/bootstrap-icons.svg';

const Icon = ({name, size = "16"}) => {
  return <svg className='bi' width={size} height={size} fill='currentColor'>
    <use xlinkHref={`${BSIcons}#${name}`} />
  </svg>;
}

export default Icon;