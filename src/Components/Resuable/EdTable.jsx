function EdTable({table1,table2,table3,table4}){
    return(
        <>
         <tr className="border-4">
      <td class="border border-white p-4">{table1}</td>
      <td class="border border-white p-4">{table2}</td>
      <td class="border border-white p-4">{table3}</td>
      <td class="border border-white p-4">{table4}</td>
    </tr>
        </>
    )
}
 export default EdTable