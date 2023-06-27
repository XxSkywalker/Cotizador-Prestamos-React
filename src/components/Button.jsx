

function Button({operador, fn}) {
    
  return (
    <button
        type="button"
        className="h-10 w-10 flex items-center justify-center font-bold text-white text-2xl bg-rose-400 rounded-full hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-rose-400"
        onClick={fn}
    >{operador}</button>
  )
}

export default Button