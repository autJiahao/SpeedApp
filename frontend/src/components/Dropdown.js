import React from 'react';
import SEPractices from "../dummydata/SEPractices"

  const optionItems = SEPractices.map((SEPractice) =>
                <option key={SEPractice.practice}>{SEPractice.practice}</option>
            );
  const Dropdown = () => {
    return (
        <div>
             <select>
                {optionItems}
             </select>
         </div>

    )
  }
  export default Dropdown;