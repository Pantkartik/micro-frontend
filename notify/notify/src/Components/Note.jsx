const Note=({note,setnote})=>{
return (
<div>
    <input type="text"  placeholder="Enter the notes" value={note} 
    onChange={(e)=>{
        setnote(e.target.value)
    }}/>
</div>
)
}

export default Note;