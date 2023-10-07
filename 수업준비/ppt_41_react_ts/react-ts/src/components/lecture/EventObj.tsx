/** @format */

export default function EventObj() {
  function handleClick(e: React.MouseEvent<HTMLElement>) {
    console.log(e);
    console.log(e.target);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target);
    console.log(e.target.value);
  }

  function handleKeydown(e: React.KeyboardEvent<HTMLInputElement>) {
    console.log(e.key);
    console.log(e.code);
    if (e.keyCode === 13) {
      console.log('enter');
    }
  }

  return (
    <>
      <div onClick={(e) => console.log(e)}>onClick</div>
      <div onClick={(e) => handleClick(e)}>onClick</div>
      <input onChange={handleChange} />
      onChange
      <input onKeyDown={(e) => handleKeydown(e)} />
      <div onDrag={(e) => handleClick(e)}>drag</div>
    </>
  );
}
