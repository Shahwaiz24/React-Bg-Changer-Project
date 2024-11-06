function ColorChangingComponent({colorName}) {
    return (
        <div className="flex flex-row justify-center border border-black p-3 rounded-xl" style={{ backgroundColor: colorName }}>
            <h1 className="text-lg font-semibold text-slate-900" style={{color:"white"}}>{colorName}</h1>
        </div>
    );
}
export default ColorChangingComponent;