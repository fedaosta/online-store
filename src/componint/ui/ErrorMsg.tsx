interface iprop  {
Msg:string
}
function ErrorMsg({Msg}:iprop) {
  return (
    Msg?
    <span className="block text-red-700 font-semibold text-sm" >
      {Msg}
    </span>
    : null
  )
}

export default ErrorMsg
